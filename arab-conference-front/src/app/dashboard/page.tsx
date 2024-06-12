import { getLastConferences, getUserById } from "@/query/queries";
import ConferenceTable from "./_components/conferenceTaple";
import User from "./_components/user";


export default async function page() {
  const lastConference=await getLastConferences();



  return (
    <div className="flex min-h-screen w-full">
      <div className="flex-1 bg-gray-50 dark:bg-gray-900">
          <User />
       <ConferenceTable name={lastConference.name} start={lastConference.start} price={lastConference.price} _id={lastConference._id} />
        
      </div>
    </div>
  )
}

