"use client"
import { Button } from "@/components/ui/button";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
type RequestScrollProps = {
    speaker: any;
    conference?: any;
    status: string
    num:any;
}
export default function TableA({ speaker, conference, status, num }: RequestScrollProps) {
    return(
        <>
                       <Table className="">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Conference</TableHead>
                                    <TableHead className="w-[100px]">status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                   <TableRow>
                                        <TableCell>
                                            {num}
                                        </TableCell>
                                        <TableCell>{speaker.firstName}</TableCell>
                                        <TableCell className="font-medium">{conference.name}</TableCell>
                                        <TableCell>{status}</TableCell>
                                   </TableRow>
                            </TableBody>
                        </Table>

        </>
    )
}

function TrashIcon(props) {
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    );
}
