"use client"
import { Button } from "@/components/ui/button";
import { CiCircleCheck } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";

type Props = {
    attendee: any;
    conference: any;
    status: string;
    _id:string
}

export default function AttendeeDetails({ attendee, conference, status,_id }: Props) {
    const handleRejectAttendee = async () => {
        const request = await fetch(`http://localhost:3000/attendance-applications/${_id}/review`, {
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
    const handleAcceptAttendee = async () => {
        const request = await fetch(`http://localhost:3000/attendance-applications/${_id}/review`, {
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
            <h2 className="font-bold">
                <span className="text-green-300">student : </span> {attendee.firstName} {attendee.lastName}
            </h2>
            <p className="text-dark-tremor-content">
                this student need to apply for : {conference.name} conference
            </p>
            <div className="flex gap-2 justify-between items-center">
                <div className="flex w-full gap-4">
                    <span className="font-black">status : </span>
                    <span className="text-red-300">{status}</span>
                </div>
                <div className="flex gap-4 w-full">
                    <Button
                        onClick={() => handleRejectAttendee()}
                        className="bg-red-300 w-full rounded-sm p-1"
                    >
                        <FcCancel
                            size={30}
                        />
                    </Button>
                    <Button
                        onClick={() => handleAcceptAttendee()}
                        className="bg-green-300 text-black w-full rounded-sm p-1"
                    >
                        <CiCircleCheck
                            size={30}
                        />
                    </Button>

                </div>
            </div>

        </div>
    )
}
