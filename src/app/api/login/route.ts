import * as bcrypt from "bcrypt";

import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      username: body.username,
    },
  });

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  const isPasswordValid = await bcrypt.compare(body.password, user.password);

  if (!isPasswordValid) {
    return new Response("Invalid password", { status: 401 });
  }

  return new Response("Login successful", {
    headers: {
      "Set-Cookie": `isAuthed=true; Path=/; HttpOnly; Secure; SameSite=Strict`,
    },
  });
}
