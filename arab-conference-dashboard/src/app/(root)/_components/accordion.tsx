"use client";

import {
    AccordionItem as _AccordionItem,
    Accordion as _Accordion,
} from "@nextui-org/accordion";

import { Button } from "@nextui-org/button";
import Link from "next/link";

type AccordionProps = {
    items: {
        title: string;
        element?: React.ReactNode;
    }[];
};

type AccordionItemProps = {
    items?: {
        name: string;
        href: string;
    }[];
};

export function Accordion({ items }: AccordionProps) {
    return (
        <_Accordion
            variant="splitted"
            className="w-full p-0 bg-transparent"
            itemClasses={{
                title: "capitalize",
                base: "!p-0 !shadow-none !bg-slate-900 [&:not([data-open]):hover:!bg-slate-800",
                heading: "px-4 py-2 hover:bg-default/40 rounded-medium",
                content: "px-2 rounded-medium",
                trigger: "py-2",
            }}
        >
            {/* @ts-ignore: it's fine */}
            {items.map(
                (item, key) =>
                    item.element && (
                        <_AccordionItem
                            key={key}
                            aria-label={item.title}
                            title={item.title}
                        >
                            {item.element}
                        </_AccordionItem>
                    ),
            )}
        </_Accordion>
    );
}

export function AccordionItem({ items }: AccordionItemProps) {
    return (
        <ul className="space-y-2">
            {items?.map((item, key) => (
                <li key={key}>
                    <Link href={item.href}>
                        <Button
                            variant="light"
                            className="w-full justify-start flex py-6 px-4 capitalize"
                        >
                            {item.name}
                        </Button>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
