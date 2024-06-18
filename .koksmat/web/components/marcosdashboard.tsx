/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vqpKxaBa3k7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FC } from "react";

export function IntranetsPages() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base mr-4"
          prefetch={false}
        >
          <LayoutGridIcon className="w-6 h-6" />
          <span>Intranet Migration</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="#" className="font-bold" prefetch={false}>
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-gray-500 dark:text-gray-400"
            prefetch={false}
          >
            Content
          </Link>
          <Link
            href="#"
            className="text-gray-500 dark:text-gray-400"
            prefetch={false}
          >
            Users
          </Link>
          <Link
            href="#"
            className="text-gray-500 dark:text-gray-400"
            prefetch={false}
          >
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="rounded-full ml-auto">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full border"
              alt="Avatar"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Most Viewed Pages
              </CardTitle>
              <EyeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead className="text-right">Views</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        /company-info
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">12,345</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        /employee-handbook
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">9,876</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        /benefits
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">7,890</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        /org-chart
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">6,543</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        /policies
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">5,432</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Recently Updated
              </CardTitle>
              <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead className="text-right">Last Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        /company-news
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">2 days ago</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        /hr-forms
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">1 week ago</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        /it-support
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">3 weeks ago</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        /training-resources
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">1 month ago</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        /facilities
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">2 months ago</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Active Content Owners
              </CardTitle>
              <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      HR Manager
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Jane Smith</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      IT Manager
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sarah Anderson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Content Manager
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>TW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Tom Wilson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Communications Manager
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

const ClockIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

const EyeIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

const LayoutGridIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
};

const UsersIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
};
