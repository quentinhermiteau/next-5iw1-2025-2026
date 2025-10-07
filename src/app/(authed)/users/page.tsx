import UserRow from "./UserRow";

export default async function UsersPage() {
  console.log(process.env.NEXT_PUBLIC_API_URL);

  const users = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users");

  const usersData = await users.json();

  return (
    <div className="space-y-4">
      <h1>Utilisateurs</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nom</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Username</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user: any) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
