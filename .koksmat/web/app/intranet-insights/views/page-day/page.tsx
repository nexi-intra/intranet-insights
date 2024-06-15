"use client";

import { useRouter } from "next/navigation";
import { useSQLSelect2 } from "@/app/koksmat/usesqlselect2";
import { IPageViewItem, ListTopPages } from "@/components/list-top-pages";
import { GraphCompare2PagesDayByDay } from "@/components/compare-2pages-month";
import { PageListViewers } from "@/components/page-list-viewers";
export interface TopPages {
  Result: IPageViewItem[];
}

function formatDate(datestring: string): string {
  const date = new Date(datestring); // Ensure date is a Date object
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1; // getMonth() returns 0-based month
  const day: number = date.getDate();

  // Add leading zeros if necessary
  const monthString: string = month < 10 ? `0${month}` : `${month}`;
  const dayString: string = day < 10 ? `0${day}` : `${day}`;

  return `${year}-${monthString}-${dayString}`;
}
export default function Page(props: {
  searchParams: {
    url: string;
    date: string;
  };
}) {
  const url = props.searchParams.url;
  const date = formatDate(props.searchParams.date);

  const sql = useSQLSelect2<TopPages>(
    "magic-files.app",
    `
SELECT 
    eventdate AS datetime, 
    u.name AS user, 
    data ->> 'Platform' as platform,
     data ->> 'ClientIP' as location
    
FROM 
    events
LEFT JOIN 
    public.user as u ON u.id = events.user_id
WHERE 
    operation = 'PageViewed'
and events.url = '${url}'
and eventdate::date  = '${date}'
ORDER BY 
      eventdate

  `
  );
  return (
    <div className="space-x-2 h-[90vh]">
      <PageListViewers />
      <pre>{JSON.stringify(sql.dataset, null, 2)}</pre>
      {/* <ListTopPages data={top100pages?.data?.Result} /> */}
    </div>
  );
}
