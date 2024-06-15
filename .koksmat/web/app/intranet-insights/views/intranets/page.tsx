"use client";

import SearchPerson from "@/app/magic/services/magic-people/person/components/search";
import { useRouter } from "next/navigation";
import { APPNAME } from "../../../global";
import { useSQLSelect } from "../../../koksmat/usesqlselect";
import { IPageViewItem, ListTopPages } from "@/components/list-top-pages";
export interface TopPages {
  Result: IPageViewItem[];
}
export default function Page() {
  const router = useRouter();
  const top100pages = useSQLSelect<TopPages>(
    "magic-files.app",
    `
select url,count(*) 
	from events
where operation = 'PageViewed'
and url ilike '%intranets%'
and url not ilike '%_layouts%'
group by url
order by count(*) desc
--limit 100
  `
  );
  return (
    <div className="space-x-2 h-[90vh]">
      <ListTopPages data={top100pages?.data?.Result} />
    </div>
  );
}
