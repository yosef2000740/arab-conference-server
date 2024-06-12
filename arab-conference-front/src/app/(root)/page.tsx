import Section from "@/components/Section";
import Hero from "./_components/hero";
import Overview from "./_components/overview";
import Topics from "./_components/topics";
import PricingCard from "./_components/pricing-card";
import CompanySupport from "./_components/company-support";
import HowToUse from "./_components/how-use-product";

export default function Home() {
    return (
        <main className="">
            <Hero />
            <div
                className="flex flex-col gap-8 p-10"
            >
                <Overview />
                <Topics />
                <HowToUse />
                <PricingCard />
                <CompanySupport />
            </div>
        </main>
    );
}
