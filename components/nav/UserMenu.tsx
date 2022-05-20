import { User } from "firebase/auth";
import Image from "next/image";
import { auth } from "../../lib/app";

export default function UserMenu({ user }: { user: User }) {
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => auth.signOut()}
      title="Logout"
    >
      <Image
        className="rounded-full h-8 w-8 mr-2"
        src={user.photoURL || "/images/user.png"}
        alt="User"
        width={32}
        height={32}
      />
      <span className="mx-2">{user.displayName}</span>
    </div>
  );
}
