import SocialIcon from "@/components/SocialIcon";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center space-y-5  p-7 border">
      <SocialIcon />
      <span className="text-text text-lg">
        © 2022，arab physical society by Amaru
      </span>
    </footer>
  );
}
