import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Sidebar(){
  
    return(
    <div className="hidden lg:block bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 w-64 p-6">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-lg font-bold">Logo</span>
        </div>
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-secondary dark:hover:bg-gray-700 transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>  
        </nav>
      </div>
    )
}

  
  
  function HomeIcon(props) {
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
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
