import Logo from "./Logo";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import UserMenu from "./UserMenu";
import Link from "./Link";

export default function Nav() {
  const [user] = useAuthState(auth);

  return (
    <div className="h-12 bg-gray-200 w-screen flex items-center justify-between">
      <div className="flex items-center">
        <Logo />
        {user && <Link href="/">Home</Link>}
        {user && <Link href="/goals">Goals</Link>}
      </div>
      {user ? (
        <UserMenu user={user} />
      ) : (
        // Open the login modal when the user clicks the login button, which has
        // social login buttons.
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
        >
          Login
        </button>
      )}
    </div>
  );
}
