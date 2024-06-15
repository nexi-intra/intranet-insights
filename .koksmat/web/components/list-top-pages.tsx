/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZWyAlzoGpDq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
export interface IPageViewItem {
  url: string;
  count: number;
}
import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ListTopPages(props: { data?: IPageViewItem[] }) {
  const { data } = props;

  const [sortBy, setSortBy] = useState("count");
  const [sortDirection, setSortDirection] = useState("desc");
  const sortedData = useMemo(() => {
    if (!data) return [];

    const sorted = [...data].sort((a: IPageViewItem, b: IPageViewItem) => {
      const key = sortBy as keyof IPageViewItem;
      if (a[key] < b[key]) return sortDirection === "asc" ? -1 : 1;
      if (a[key] > b[key]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortBy, sortDirection]);
  const handleSort = (by: any) => {
    if (sortBy === by) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(by);
      setSortDirection("desc");
    }
  };
  const handlePageView = (url: string) => {
    // setData((prev) =>
    //   prev.map((item) =>
    //     item.url === url ? { ...item, count: item.count + 1 } : item
    //   )
    // );
  };
  const handleDetailsView = (name: string) => {};
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Page Name
              {sortBy === "name" && (
                <ArrowUpDownIcon className="ml-2 w-4 h-4 inline" />
              )}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("count")}
            >
              Views
              {sortBy === "count" && (
                <ArrowUpDownIcon className="ml-2 w-4 h-4 inline" />
              )}
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((item) => (
            <TableRow key={item.url}>
              <TableCell>
                <Link
                  href={"/intranet-insights/views/page-month?url=" + item.url}
                  onClick={() => handlePageView(item.url)}
                  className="font-medium"
                  prefetch={false}
                >
                  {item.url}
                </Link>
              </TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDetailsView(item.url)}
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function ArrowUpDownIcon(props: any) {
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
}

function ArrowUpIcon(props: any) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}
