import ActionButtons from "@/components/action-buttons";
import NavigationBar from "@/components/navigation-bar";
import { navigationLinks } from "@/content/navigation";

export default function Header() {
    return (
        <header className="flex items-center w-full justify-between py-4 container">
            <div className="flex flex-row justify-between items-center gap-x-4 w-full">
                <NavigationBar links={navigationLinks} />
                <div>
                    Logo
                </div>
            </div>
            <ActionButtons links={navigationLinks} />
        </header>
    );
}
