/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zESxN2LOqPA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ResponsiveLine, Serie } from "@nivo/line";

export function GraphCompare2PagesDayByDay() {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years: number[] = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - i
  );
  const daysInMonth: number = new Date(
    selectedYear,
    selectedMonth + 1,
    0
  ).getDate();
  const pageViewData = [
    {
      page: "Home",
      data: Array.from({ length: daysInMonth }, () =>
        Math.floor(Math.random() * 1000)
      ),
    },
    {
      page: "About",
      data: Array.from({ length: daysInMonth }, () =>
        Math.floor(Math.random() * 500)
      ),
    },
  ];
  const maxPageViews: number = Math.max(
    ...pageViewData.flatMap((data) => data.data)
  );
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Page Views</CardTitle>
          <div className="flex items-center gap-2">
            <Select
              value={selectedMonth.toString()}
              onValueChange={(value) => setSelectedMonth(Number(value))}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue>{months[selectedMonth]}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {months.map((month, index) => (
                  <SelectItem key={month} value={index.toString()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedYear.toString()}
              onValueChange={(value) => setSelectedYear(Number(value))}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue>{selectedYear.toString()}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-end gap-2">
            <div className="flex items-center gap-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: `var(--home)` }}
              />
              <span>Home</span>
            </div>
            <div className="flex items-center gap-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: `var(--about)` }}
              />
              <span>About</span>
            </div>
          </div>
          <LineChart className="w-full aspect-[16/9]" />
        </div>
      </CardContent>
    </Card>
  );
}

type LineChartProps = {
  className: string;
};

function LineChart({ className }: LineChartProps) {
  const data: Serie[] = [
    {
      id: "Desktop",
      data: [
        { x: "Jan", y: 43 },
        { x: "Feb", y: 137 },
        { x: "Mar", y: 61 },
        { x: "Apr", y: 145 },
        { x: "May", y: 26 },
        { x: "Jun", y: 154 },
      ],
    },
    {
      id: "Mobile",
      data: [
        { x: "Jan", y: 60 },
        { x: "Feb", y: 48 },
        { x: "Mar", y: 177 },
        { x: "Apr", y: 78 },
        { x: "May", y: 96 },
        { x: "Jun", y: 204 },
      ],
    },
  ];
  return (
    <div className={className}>
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
