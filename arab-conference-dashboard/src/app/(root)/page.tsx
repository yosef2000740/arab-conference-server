import RequestSpeaker from './_components/request-speaker';
import { AllConferences } from './_components/all-conferences';
import RequestAttendee from './_components/request-attendee';


export default function Home() {

    return (
        <main className="p-4 flex flex-row gap-4">
            <div className="w-full flex flex-col gap-3">
                <RequestSpeaker />
                <RequestAttendee />
            </div>
            <AllConferences />
        </main>
    );
}
