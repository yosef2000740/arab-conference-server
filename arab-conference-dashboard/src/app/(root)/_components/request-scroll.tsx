"use client"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { FcCancel } from "react-icons/fc";
import { CiCircleCheck } from "react-icons/ci";

type RequestScrollProps = {
    speaker: any;
    conference?: any;
    status: string
    _id: string;
}

export default function RequestScroll({ speaker, conference, status, _id }: RequestScrollProps) {
     const handleRejectSpealer = async (id: string) => {
        const request = await fetch(`http://localhost:3000/speaker-applications/${_id}/review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "rejected" }),
        });
        if (request.ok) {
            console.log("rejected")
        }
    }
    const handleAcceptSpealer = async (id: string) => {
        const request = await fetch(`http://localhost:3000/speaker-applications/${_id}/review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "approved" }),
        });
        if (request.ok) {
            console.log("approved")
        }
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="space-y-2">
                <h4 className="text-sm font-medium leading-none">
                    {speaker.firstName} {speaker.lastName}
                </h4>
                <p className="text-sm text-muted-foreground">
                    applay for speaker in {conference.name}
                </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center justify-between">
                <div className="flex h-5 items-center space-x-4 text-sm w-full">
                    <span>{conference.location}</span>
                    <Separator orientation="vertical" />
                    <div className="space-x-1">
                        <span className=" text-red-500">status :</span>
                        <span className="">{status}</span>
                    </div>
                </div>

                <Separator orientation="vertical" />
                <div className="flex gap-2 w-[40%]">
                    <Button
                        onClick={() => handleRejectSpealer(_id)}
                        className="bg-red-300 w-full rounded-sm p-1"
                    >
                        <FcCancel
                            size={30}
                        />
                    </Button>
                    <Button
                        onClick={() => handleAcceptSpealer(_id)}
                        className="bg-green-300 text-black w-full rounded-sm p-1"
                    >
                        <CiCircleCheck
                            size={30}
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
}
