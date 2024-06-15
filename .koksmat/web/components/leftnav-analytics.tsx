/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FrBSeFRA4mH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import React from "react";

export function LeftNavAnalytics() {
  return (
    <>
      <nav className="min-h-screen w-64 bg-gray-800 p-4 lg:block hidden">
        <div className="sticky top-0 flex flex-col gap-4">
          <div className="rounded-md bg-gray-700 p-4">
            <div className="flex items-center gap-2">
              <ActivityIcon className="h-6 w-6 text-gray-400" />
              <span className="font-semibold text-gray-200">
                Site Analytics
              </span>
            </div>
            <ul className="mt-2 grid gap-1">
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                  prefetch={false}
                >
                  <PieChartIcon className="h-4 w-4" />
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                  prefetch={false}
                >
                  <UsersIcon className="h-4 w-4" />
                  Users
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                  prefetch={false}
                >
                  <TrendingUpIcon className="h-4 w-4" />
                  Traffic
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                  prefetch={false}
                >
                  <SmartphoneIcon className="h-4 w-4" />
                  Devices
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-400">
              <FolderIcon className="h-4 w-4" />
              <span className="font-semibold">Content</span>
            </div>
            <ul className="mt-2 grid gap-1">
              <li>
                <Link
                  href="/intranet-insights/views"
                  className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                  prefetch={false}
                >
                  <FileIcon className="h-4 w-4" />
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                  prefetch={false}
                >
                  <ImageIcon className="h-4 w-4" />
                  Media
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-400">
              <SettingsIcon className="h-4 w-4" />
              <span className="font-semibold">Settings</span>
            </div>
            <ul className="mt-2 grid gap-1">
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                  prefetch={false}
                >
                  <PowerIcon className="h-4 w-4" />
                  General
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                  prefetch={false}
                >
                  <LockIcon className="h-4 w-4" />
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="lg:hidden block">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="sticky top-0 flex flex-col gap-4 p-4">
              <div className="rounded-md bg-gray-700 p-4">
                <div className="flex items-center gap-2">
                  <ActivityIcon className="h-6 w-6 text-gray-400" />
                  <span className="font-semibold text-gray-200">
                    Site Analytics
                  </span>
                </div>
                <ul className="mt-2 grid gap-1">
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                      prefetch={false}
                    >
                      <PieChartIcon className="h-4 w-4" />
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                      prefetch={false}
                    >
                      <UsersIcon className="h-4 w-4" />
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                      prefetch={false}
                    >
                      <TrendingUpIcon className="h-4 w-4" />
                      Traffic
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                      prefetch={false}
                    >
                      <SmartphoneIcon className="h-4 w-4" />
                      Devices
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-400">
                  <FolderIcon className="h-4 w-4" />
                  <span className="font-semibold">Content</span>
                </div>
                <ul className="mt-2 grid gap-1">
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                      prefetch={false}
                    >
                      <FileIcon className="h-4 w-4" />
                      Pages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                      prefetch={false}
                    >
                      <ImageIcon className="h-4 w-4" />
                      Media
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-400">
                  <SettingsIcon className="h-4 w-4" />
                  <span className="font-semibold">Settings</span>
                </div>
                <ul className="mt-2 grid gap-1">
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                      prefetch={false}
                    >
                      <PowerIcon className="h-4 w-4" />
                      General
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 rounded-md p-2 text-sm text-gray-300 hover:bg-gray-600"
                      prefetch={false}
                    >
                      <LockIcon className="h-4 w-4" />
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function FolderIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PieChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function PowerIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SmartphoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
