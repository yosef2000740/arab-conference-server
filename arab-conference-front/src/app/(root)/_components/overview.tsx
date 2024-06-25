import { getLastConferences } from "@/query/queries";

export default async function Overview() {
    const lastConference=await getLastConferences();
    return (
            <div 
            className="flex flex-col lg:max-w-7xl mx-auto items-center gap-8 justify-center md:py-8 md:px-16"
            >
                <span className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex justify-center items-center text-muted">
                    Overview
                </span>
                    <p className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-line:uppercase first-line:tracking-widest text-sm">
                   {lastConference?.description}
                </p>
            </div>
    );
}
