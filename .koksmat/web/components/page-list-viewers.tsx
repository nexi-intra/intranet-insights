/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dgEIMqlsNNd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface PageView {
  time: string;
  visitor: string;
  location: string;
  device: string;
}

interface Sort {
  key: keyof PageView;
  order: "asc" | "desc";
}

export function PageListViewers() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<Sort>({ key: "time", order: "asc" });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);
  const handleSort = (key: keyof PageView) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" });
    } else {
      setSort({ key, order: "asc" });
    }
  };

  const pageViews: PageView[] = useMemo(
    () =>
      [
        {
          time: "08:15",
          visitor: "John Doe",
          location: "New York, USA",
          device: "Desktop",
        },
        {
          time: "09:30",
          visitor: "Jane Smith",
          location: "London, UK",
          device: "Mobile",
        },
        {
          time: "11:45",
          visitor: "Bob Johnson",
          location: "Tokyo, Japan",
          device: "Tablet",
        },
        {
          time: "13:00",
          visitor: "Alice Williams",
          location: "Sydney, Australia",
          device: "Desktop",
        },
        {
          time: "15:20",
          visitor: "Tom Wilson",
          location: "Paris, France",
          device: "Mobile",
        },
      ]
        .filter((view) => {
          const searchValue = search.toLowerCase();
          return (
            view.time.toLowerCase().includes(searchValue) ||
            view.visitor.toLowerCase().includes(searchValue) ||
            view.location.toLowerCase().includes(searchValue) ||
            view.device.toLowerCase().includes(searchValue)
          );
        })
        .sort((a, b) => {
          if (sort.order === "asc") {
            return a[sort.key] > b[sort.key] ? 1 : -1;
          } else {
            return a[sort.key] < b[sort.key] ? 1 : -1;
          }
        }),
    [search, sort]
  );

  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            prefetch={false}
          >
            <InfoIcon className="w-6 h-6" />
            <span className="sr-only">Page Views Dashboard</span>
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="flex-col items-start w-full h-auto"
              >
                <span className="font-semibold uppercase text-[0.65rem]">
                  Date
                </span>
                <span className="font-normal">
                  {date?.toLocaleDateString()}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 max-w-[276px]">
              <Calendar
                mode="single"
                selected={date!}
                onSelect={(newDate) => setDate(newDate!)}
              />
            </PopoverContent>
          </Popover>
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search page views..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                value={search}
                onChange={handleSearch}
              />
            </div>
          </form>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="w-[100px] cursor-pointer"
                  onClick={() => handleSort("time")}
                >
                  Time
                  {sort.key === "time" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("visitor")}
                >
                  Visitor
                  {sort.key === "visitor" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("location")}
                >
                  Location
                  {sort.key === "location" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("device")}
                >
                  Device
                  {sort.key === "device" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pageViews.map((view, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{view.time}</TableCell>
                  <TableCell>{view.visitor}</TableCell>
                  <TableCell>{view.location}</TableCell>
                  <TableCell>{view.device}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
