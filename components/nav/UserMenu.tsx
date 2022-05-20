import { User } from "firebase/auth";
import Image from "next/image";
import { auth } from "../../lib/app";

export default function UserMenu({ user }: { user: User }) {
  return (
    <div
      className="flex cursor-pointer items-center"
      onClick={() => auth.signOut()}
      title="Logout"
    >
      <Image
        className="mr-2 h-8 w-8 rounded-full"
        src={user.photoURL || "/images/user.png"}
        alt="User"
        width={32}
        height={32}
      />
      <span className="text-md mx-2 text-gray-700 md:text-3xl">
        {user.displayName}
      </span>
    </div>
  );
}
