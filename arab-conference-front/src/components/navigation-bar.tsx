import { NavigationType } from "@/content/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
    links: NavigationType;
};

export default function NavigationBar({ links }: Props) {
    return (
        <nav className="hidden lg:flex  justify-between">
            <div className="flex w-fit gap-4">
                {links.map((link, key) => (
                    <Link key={key} href={link.href}>
                        <Button
                            className="text-accent text-lg font-bold"
                            variant="link"
                        >
                            {link.title}
                        </Button>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
