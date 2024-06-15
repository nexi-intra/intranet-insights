"use client";

import { useRouter } from "next/navigation";
import { useSQLSelect } from "@/app/koksmat/usesqlselect";
import { IPageViewItem, ListTopPages } from "@/components/list-top-pages";
import { GraphCompare2PagesDayByDay } from "@/components/compare-2pages-month";
import {
  ListMonthView,
  PageListMonthViews,
} from "@/components/page-month-listviews";
import { useSQLSelect2 } from "@/app/koksmat/usesqlselect2";
import { useMemo } from "react";
import { sq } from "date-fns/locale";
export interface TopPages {
  Result: IPageViewItem[];
}
export default function Page(props: {
  searchParams: {
    url: string;
  };
}) {
  const url = props.searchParams.url;

  const sql = useSQLSelect2<{ date: string; count: number }>(
    "magic-files.app",
    `
SELECT 
    DATE(eventdate) AS date,
    COUNT(*) AS count
FROM 
    events
WHERE 
    operation = 'PageViewed'
    AND url = '${url}'
GROUP BY 
    DATE(eventdate)
    
ORDER BY 
    DATE(eventdate) DESC


  `
  );
  const data = useMemo<ListMonthView[]>(() => {
    if (sql.dataset.length < 1) return [];
    return sql.dataset.map((dataItem) => {
      const dateObject: Date = new Date(dataItem.date);

      const item: ListMonthView = {
        date: dateObject,
        day: dateObject.getDate(),
        label: dateObject.toDateString(),
        count: dataItem.count,
      };
      return item;
    });
  }, [sql.dataset]);
  return (
    <div className="space-x-2 h-[90vh]">
      {/* <GraphCompare2PagesDayByDay /> */}

      <PageListMonthViews data={data} url={url} />
      {/* <ListTopPages data={top100pages?.data?.Result} /> */}
    </div>
  );
}
