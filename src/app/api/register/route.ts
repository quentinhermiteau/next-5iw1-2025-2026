import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

export async function POST(request: Request) {
  const body = await request.json();

  await prisma.user.create({
    data: {
      username: body.username,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  return new Response("User created");
}
