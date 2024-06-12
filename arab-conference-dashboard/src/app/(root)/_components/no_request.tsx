import { PiEmpty } from "react-icons/pi";

export default function NoRequest() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <PiEmpty size={50} />
            <p className="text-lg text-gray-500">There are no requests to show</p>
        </div>
    )
}
