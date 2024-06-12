import { User } from "@nextui-org/user";
import { Bell, Plus, Settings } from "lucide-react";
import { Button } from "@nextui-org/button";

type Props = {
  user: {
    fullName: string;
    profilePicture: string | null;
  };
};
export function Actions({ user }: Props) {
  return (
    <div className="flex items-center justify-center gap-x-4 w-fit">
      <Button isIconOnly variant="light">
        <Plus />
      </Button>
      <Button isIconOnly variant="light">
        <Bell />
      </Button>
      <Button variant="light" isIconOnly>
        <Settings />
      </Button>
      <User
        className="w-max"
        classNames={{ name: "w-max" }}
        name={user.fullName}
        description="Site Owner"
        avatarProps={{
          src: user.profilePicture ?? undefined,
        }}
      />
    </div>
  );
}