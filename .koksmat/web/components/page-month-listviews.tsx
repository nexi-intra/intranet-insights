/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wRB22yNvEmT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";

interface ArrowUpDownIconProps extends React.SVGProps<SVGSVGElement> {}

const ArrowUpDownIcon: React.FC<ArrowUpDownIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
};
export interface ListMonthView {
  date: Date;
  day: number;
  label: string;
  count: number;
}
export function PageListMonthViews(props: {
  url: string;
  data: ListMonthView[];
}) {
  const { data, url } = props;
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex items-center gap-2">
                <span>Day</span>
                <ArrowUpDownIcon className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead className="text-right">
              <div className="flex items-center justify-end gap-2">
                <span>Count</span>
                <ArrowUpDownIcon className="w-4 h-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Link
                    href={
                      "/intranet-insights/views/page-day?url=" +
                      url +
                      "&date=" +
                      item.date.toISOString()
                    }
                    className="font-medium"
                    prefetch={false}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-muted-foreground">{item.day}</span>
                    </div>
                  </Link>
                </TableCell>
                <TableCell className="text-right">{item.count}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
