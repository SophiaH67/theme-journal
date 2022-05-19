import { User } from "firebase/auth";

export default function UserMenu({ user }: { user: User }) {
  return <>{user.displayName}</>;
}
