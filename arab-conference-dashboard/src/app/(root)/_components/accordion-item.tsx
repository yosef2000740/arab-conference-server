import { Button } from "@nextui-org/button";
import Link from "next/link";

type Props = {
  items: {
    name: string;
    href: string;
  }[];
};

export function AccordionItem({ items }: Props) {
  return (
    <ul className="space-y-2">
      {items?.map((item, key) => (
        <li key={key}>
          <Link href="#">
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