import {prismaClient} from "@repo/db/client";

export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div>
      <p>Username:</p>
      {user?.username}
      <p>Passwrod:</p>
      {user?.password}
    </div>
  );
}
