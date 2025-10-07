import { routing } from "@/i18n/routing";
import { User } from "@/types/users";
import UserAdd from "./UserAdd";
import UserRow from "./UserRow";

export const revalidate = 3600;

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function UsersPage() {
  const users = await fetch("http://localhost:3000/api/users")
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return [];
    });

  return (
    <div className="space-y-4">
      <h1>Utilisateurs</h1>
      <UserAdd />

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
