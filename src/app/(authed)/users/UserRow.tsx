"use client";

import { useRouter } from "next/navigation";

export default function UserRow({ user }: { user: any }) {
  const router = useRouter();

  console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
    <tr
      key={user.id}
      className="cursor-pointer"
      onClick={() => {
        router.push(`/users/${user.id}`);
      }}
    >
      <td className="border px-4 py-2">{user.name}</td>
      <td className="border px-4 py-2">{user.email}</td>
      <td className="border px-4 py-2">{user.username}</td>
    </tr>
  );
}
