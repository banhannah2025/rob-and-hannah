import { currentUser } from '@clerk/nextjs/server';
import Chat from '../components/Chat';

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>You must be signed in to use the chatbot.</p>
      </main>
    );
  }
  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome {user.firstName}</h1>
      <Chat />
    </main>
  );
}
