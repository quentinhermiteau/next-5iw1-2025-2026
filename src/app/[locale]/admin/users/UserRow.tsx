"use client";

import { User } from "@/types/users";
import { useRouter } from "next/navigation";

export default function UserRow({ user }: { user: User }) {
  const router = useRouter();

  return (
    <tr
      key={user.id}
      className="cursor-pointer"
      onClick={() => {
        router.push(`/users/${user.id}`);
      }}
    >
      <td className="border px-4 py-2">{user.username}</td>
    </tr>
  );
}
