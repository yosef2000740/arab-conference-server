"use client"
import { Home, LogOut, Settings } from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Accordion, AccordionItem } from "./accordion";
import { useLoalStorage } from "@/hooks/useLocalStorage";
import { redirect } from "next/navigation";
import { useAuth } from "@/context/Auth";
import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";

type Props = {
    //   metadata: {
    //     name: string;
    //   };
    //   groupedTables: [string, { name: string; href: string }[] | undefined][];
};

export function Sidebar({ }: Props) {
    const {removeItem}=useLoalStorage("token")  
    return (
        <aside>
            <nav className="w-1/4 h-full min-w-[280px] max-w-sm">
                <Card className="h-full flex flex-col items-start justify-between">
                    <div className="h-full flex flex-col items-start w-full overflow-y-clip">
                        <CardHeader className="border-b w-full">
                            <CardTitle>
                                <Link href="/" className="group flex gap-4 w-full">
                                    <Home className="hover:text-blue-500" />
                                    <span className="truncate group-hover:text-blue-500">
                                        Dashboard
                                    </span>
                                </Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="w-full h-full p-4 overflow-y-auto">
                            <Accordion
                                items={[
                                    {
                                        title: "Favorites",
                                        element: <AccordionItem items={[
                                            {
                                                name: "Home",
                                                href: "/"
                                            },
                                            {
                                                name: "add conference",
                                                href: "/conference"
                                            },
                                            {
                                                name: "add topics",
                                                href: "/topics"
                                            },
                                        ]} />,
                                    },
                                    {
                                        title: "Attendance",
                                        element: <AccordionItem items={[
                                            {
                                                name: "students",
                                                href: "/"
                                            },
                                            {
                                                name: "docktors",
                                                href: "/"
                                            }
                                        ]} />
                                    }
                                ]}
                            />
                        </CardContent>
                    </div>
                    <CardFooter className="border-t w-full p-4 flex flex-col items-start justify-between gap-2">

                        <div className="w-full">
                            <Button
                                variant="light"
                                startContent={<LogOut />}
                                onClick={()=>{
                                    removeItem();
                                    window.location.href="/sign-in"
                                }}
                                className="w-full justify-start flex py-6 px-4"
                            >
                                Logout
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </nav>
        </aside>
    );
}
