import Logo from "./Logo";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import UserMenu from "./UserMenu";
import Link from "./Link";

export default function Nav() {
  const [user] = useAuthState(auth);

  return (
    <div className="max-w-screen mb-4 flex h-12 items-center justify-between overflow-hidden bg-gray-200 pr-4 md:h-16">
      <div className="flex items-center">
        <Logo />
        <div className="hidden md:block">
          {user && <Link href="/goals">Goals</Link>}
        </div>
      </div>
      {user ? (
        <UserMenu user={user} />
      ) : (
        // Open the login modal when the user clicks the login button, which has
        // social login buttons.
        <button
          className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
        >
          Login
        </button>
      )}
    </div>
  );
}
