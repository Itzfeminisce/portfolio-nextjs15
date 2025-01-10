import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Fetch user data
        const userRes = await fetch(
            `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
            {
                headers: {
                    Authorization: `token ${process.env.GITHUB_API_KEY}`,
                },
                next: {
                    revalidate:  30 * 24 * 60 * 60, // Revalidate every 30 days
                }
            },
        );

        if (!userRes.ok) {
            return NextResponse.error();
        }

        const user = await userRes.json();

        // Fetch repos data
        const repoRes = await fetch(
            `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
            {
                headers: {
                    Authorization: `token ${process.env.GITHUB_API_KEY}`,
                },
                next: {
                    revalidate: 5 * 24 * 60 * 60 // Revalidate every 15 days
                }
            }
        );

        if (!repoRes.ok) {
            throw new Error(`Failed to fetch repos: ${repoRes.status}`);
        }

        let repos = await repoRes.json();
        repos = repos
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 8);

        repos = await Promise.all(
            repos.map(async (repo) => {
                const languagesResponse = await fetch(repo.languages_url, {
                    headers: {
                        Authorization: `token ${process.env.GITHUB_API_KEY}`,
                    },
                });

                const languages = await languagesResponse.json();

                return {
                    ...repo,
                    languages,
                };
            })
        );

        return NextResponse.json({ repos, user }, { status: 200 })
    } catch (error) {
        console.error(error.message);

        return NextResponse.error()
    }
}
