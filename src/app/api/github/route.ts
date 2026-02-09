import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user")?.trim();

  if (!user) {
    return NextResponse.json(
      { error: "Missing 'user' query param." },
      { status: 400 }
    );
  }

  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(
      user
    )}/repos?per_page=6&sort=updated`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "GitHub API error." },
      { status: response.status }
    );
  }

  const data = (await response.json()) as Array<{
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    pushed_at: string;
  }>;

  return NextResponse.json(
    data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      pushed_at: repo.pushed_at,
    }))
  );
}
