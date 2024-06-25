import {getSpeakerReq} from "@/queries";
import TableA from "./_components/tableA";
export default async function Page() {
    const speakersRequest = await getSpeakerReq();

    return (
        <div className="grid w-full lg:flex-cols-[280px_1fr]">
            <div className="flex flex-col">
                 <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center">
                        <h1 className="font-semibold text-lg md:text-2xl">Docktors</h1>
                    </div>
                    <div className="border shadow-sm rounded-lg">
                        {speakersRequest .map((speaker:any,k:any)=>(
                            <TableA key={k} num={k+1} status={speaker.status} speaker={speaker.speaker} conference={speaker.conference} /> 
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

function Package2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    );
}

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}


