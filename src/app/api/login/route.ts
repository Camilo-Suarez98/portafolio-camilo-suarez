import { NextResponse } from "next/server";

type LoginPayload = {
  user?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginPayload;
  const user = body.user?.trim();
  const password = body.password?.trim();

  const expectedUser = process.env.USER_CREDENTIAL;
  const expectedPassword = process.env.PASSWORD_CREDENTIAL;

  if (!expectedUser || !expectedPassword) {
    return NextResponse.json(
      { error: "Missing credentials config." },
      { status: 500 }
    );
  }

  if (user !== expectedUser || password !== expectedPassword) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  const expectedUser = process.env.USER_CREDENTIAL;
  const expectedPassword = process.env.PASSWORD_CREDENTIAL;

  if (!expectedUser || !expectedPassword) {
    return NextResponse.json(
      { error: "Missing credentials config." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    user: expectedUser,
    password: expectedPassword,
  });
}
