import { trpc } from '../utils/trpc';

export default function Home() {
  const { data: users, isLoading } = trpc.user.getUsers.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
} 