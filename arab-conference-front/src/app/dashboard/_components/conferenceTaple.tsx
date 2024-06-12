"use client"
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/Auth";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import ApplyConference from "./apply";
import { useState } from 'react';
export default function ConferenceTable(
    {name,start,price,_id}:{name:unknown,start:unknown,price:unknown,_id:unknown}
) {
    const { isAuth } = useAuth();
    const [hasPaid, setHasPaid] = useState(false);

    if(!isAuth){
      toast({title:"You are not login !"})
      redirect("/sign-in");
    }
    return (
        <main className="p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Conference</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className=" bg-green-700">
                  <TableHead>conference</TableHead>
                  <TableHead>start date</TableHead>
                  <TableHead>price</TableHead>
                  <TableHead>apply</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{name}</TableCell>
                  <TableCell>{start}</TableCell>
                  <TableCell>{price} E</TableCell>
                  <ApplyConference _id={_id} setHasPaid={setHasPaid} />
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conference</CardTitle>
          </CardHeader>
          <CardContent>
            {hasPaid ? (
                <p className='text-green-500'>you are accepted to the conference</p>  
              ) : (
                <p className='text-red-500'>
                  you are not accepted, please pay the price to be accepted
                </p>
              )
            }
          </CardContent>
        </Card>
      </main>
    )
}