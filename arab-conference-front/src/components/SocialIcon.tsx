import { FaFacebookF, FaLinkedinIn, FaYoutubeSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

export default function SocialIcon() {
  return (
    <div className="flex flex-row space-x-2   ">
      <FaFacebookF
        className="h-8 w-8 border-2 border-primary p-2 hover:bg-primary hover:text-white"
        size={30}
      />
      <TfiYoutube
        className="h-8 w-8 border-2 border-primary p-2 hover:bg-primary hover:text-white"
        size={30}
      />
      <FaLinkedinIn
        className="h-8 w-8 border-2 border-primary p-2 hover:bg-primary hover:text-white"
        size={30}
      />
    </div>
  );
}
