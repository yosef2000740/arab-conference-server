
import Image from "next/image";
import curve from "@/../public/hero/cuarve.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FloatIcons from "./float-icons";
import { MdDateRange } from "react-icons/md";
import {getLastConferences } from "@/query/queries";
import TestimonialCarousel from "./testimonial-carousel";



const testimonials = [
  {
    text: 'Physics is the fundamental science that seeks to understand the behavior of the universe through the study of matter, energy, and the interactions between them.',
    field: 'Physics',
    image:
      '/physics.gif',
  },
  {
    text: 'Technology refers to the application of scientific knowledge for practical purposes, encompassing tools, systems, and methods that improve efficiency, solve problems, or enhance capabilities in various domains.',
    field: 'Technology',

    image:
      '/tech.gif',
  },
  {
    text: 'Science is the systematic study of the natural world through observation, experimentation, and analysis, aiming to understand the underlying principles and mechanisms governing physical, biological.',
    field: 'science',
    image:
      '/sience.gif',
  },
  {
    text: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and solve problems autonomously.',
    field: 'AI',
    image:
      '/ai.gif',
  },
   {
    text: 'We also organise a lot of conferences in fields such as astronomy, engineering, networks, relationships and other important fields in our lives.',
    field: 'other talks',
    image:
      '/others.gif',
  }, 
]
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
            className="px-16 py-14"
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
                        <div className="px-12 py-6 z-10 flex justify-center items-center">
                            <TestimonialCarousel testimonials={testimonials} />   
                        </div>
                    </div>
                    <FloatIcons />
                    <Gradient />
                </div>
            </div>
        </div>
    )
}
