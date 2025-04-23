import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request) {
  const data = await request.json();

  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });

  return new Response(JSON.stringify(newUser), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}