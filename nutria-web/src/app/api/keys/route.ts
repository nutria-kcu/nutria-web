import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

// POST /api/keys
export async function POST() {
  const key = Math.random().toString(36).substring(2, 12); // 10자리 랜덤 문자열

  const created = await prisma.apiKey.create({
    data: { value: key },
  });

  return NextResponse.json(created, { status: 201 });
}

// GET /api/keys?value=xxxx
export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const value = searchParams.get("value");

  if (!value) {
    return NextResponse.json({ error: "Missing key value" }, { status: 400 });
  }

  const existingKey = await prisma.apiKey.findUnique({
    where: { value },
  });

  if (!existingKey) {
    return NextResponse.json({ error: "Key not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Key is valid" }, { status: 200 });
}
