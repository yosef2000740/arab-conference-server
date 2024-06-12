import Section from "@/components/Section";
import BackgroundGrid from "@/components/background-grid";
import Image from "next/image";
import curve from "@/../public/hero/cuarve.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FloatIcons from "./float-icons";
import { MdDateRange } from "react-icons/md";
import { getConferences, getLastConferences } from "@/query/queries";

export const Gradient = () => {
    return (
        <>
            <div className="relative z-1 h-6 mx-1.5 bg-primary shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-4" />
            <div className="relative z-1 h-6 mx-2.5 bg-secondary shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
            <div className="relative z-1 h-6 mx-6 bg-accent shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
        </>
    );
};
export default async function Hero() {
    const lastConference = await getLastConferences();
    return (
        <div
            className="p-4"
            id="hero"
        >
            {/* <BackgroundGrid /> */}
            <div className="container relative flex flex-col gap-8">
                <div className="relative z-10 flex flex-col max-w-[62rem] mx-auto text-center gap-4">
                    <h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
                        <span className=" text-primary"> Welcome to </span>
                        {lastConference?.name} {" "}
                        <span className="inline-block relative">
                            conference {" "}
                            <Image
                                src={curve}
                                className="absolute top-full left-0 w-full"
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <div className="body-1 flex flex-col lg:flex-row gap-4 p-4 max-w-7xl mx-auto text-muted">
                        <h4 className="items-center text-[18px]">
                            Start date: {""}
                            <MdDateRange
                                size={20}
                                className="inline-block" />
                            <span className="ml-2 ">
                                {lastConference?.start}
                            </span>
                        </h4>
                        <h4 className=" items-center">
                            End date: {""}
                            <MdDateRange
                                size={20}
                                className="inline-block" />
                            <span className="ml-2">
                                {lastConference?.end}
                            </span>
                        </h4>
                    </div>
                    <Link href="/sign-in">
                        <Button
                            variant="secondary"
                        >
                            Join Now
                        </Button>
                    </Link>
                </div>
                <div className="relative z-1 rounded-2xl border border-primary ">
                    <div className="relative rounded-[1rem]">
                        <div className="px-12 py-6 z-10">
                            <div
                                className="w-[90%] h-96 flex text-center justify-center items-center mx-auto bg-secondary"

                            >
                                Video
                            </div>
                        </div>
                    </div>
                    <FloatIcons />
                    <Gradient />
                </div>
            </div>
        </div>
    )
}
