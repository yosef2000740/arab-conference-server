import { NavigationType } from "@/content/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
type Props = {
  links: NavigationType;
};

export default function ActionButtons({ links }: Props) {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          aria-label="Navigation"
          className="flex items-centert justify-center"
        >
          <AlignJustify size={36} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <ul className="flex flex-col text-right gap-y-4 py-8 px-2">
              {links.map((link, key) => (
                <li key={key}>
                  <Button variant="link" className="text-right font-bold">
                    <Link href={link.href}>{link.title}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}