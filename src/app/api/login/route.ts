import { NextResponse } from "next/server";

type LoginPayload = {
  user?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginPayload;
  const normalize = (value?: string) =>
    value
      ?.trim()
      .replace(/^"(.*)"$/, "$1")
      .replace(/^'(.*)'$/, "$1");

  const user = normalize(body.user);
  const password = normalize(body.password);

  const expectedUser = normalize(process.env.USER_CREDENTIAL);
  const expectedPassword = normalize(process.env.PASSWORD_CREDENTIAL);

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
  const normalize = (value?: string) =>
    value
      ?.trim()
      .replace(/^"(.*)"$/, "$1")
      .replace(/^'(.*)'$/, "$1");

  const expectedUser = normalize(process.env.USER_CREDENTIAL);
  const expectedPassword = normalize(process.env.PASSWORD_CREDENTIAL);

  if (!expectedUser || !expectedPassword) {
    return NextResponse.json(
      { error: "Missing credentials config." },
      { status: 500 }
    );
  }

  const response = NextResponse.json({
    user: expectedUser,
    password: expectedPassword,
  });
  response.headers.set("Cache-Control", "no-store, max-age=0");
  return response;
}
export const dynamic = "force-dynamic";
