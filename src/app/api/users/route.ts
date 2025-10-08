import prisma from "@/lib/prisma";

export async function GET() {
  console.log("fetch users");

  const users = await prisma.user.findMany();

  return new Response(JSON.stringify(users));
}

export async function POST(request: Request) {
  const body = await request.json();

  await prisma.user.create({
    data: {
      username: body.username,
    },
  });

  return new Response("User created");
}
