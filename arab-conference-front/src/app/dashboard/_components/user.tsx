"use client"
import { useLoalStorage } from "@/hooks/useLocalStorage";
import { getUserById } from "@/query/queries";
import { useEffect, useState } from "react";

export default function User(){
    const [name,setName]=useState("");
    const {getItem}=useLoalStorage("token");

    // const user=await getUserById(getItem());
    // console.log("token",getItem());
  
    // console.log(user);
    useEffect(()=>{
        getUserById(getItem()).then((res)=>{
            setName(res.firstName);
            console.log(res);
        });
    },[getItem()]);
    return (
        <header className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-4">
            <span className="text-lg font-bold">Welcome, {name}</span>
            </div>
      </header>
    )
}