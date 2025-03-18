import type { APIRoute } from "astro";
import { db, eq, Posts } from "astro:db";

export const prerender = false

interface Post {
    id: string;
    title: string;
    likes: number;
}

export const GET: APIRoute = async ({ params, request }) => {

    const id = params.id ?? ''

    const post = await db.select().from(Posts).where(eq(Posts.id, id))

    if (post.length === 0) {

        const post = {
            id,
            title: 'Post not found',
            likes: 0
        }

        return new Response(JSON.stringify(post),
            {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }

    return new Response(JSON.stringify(post.at(0)),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
}

export const PUT: APIRoute = async ({ params, request }) => {
    const postId = params.id ?? '';

    const posts = await db.select().from(Posts).where(eq(Posts.id, postId));
    const { likes = 0 } = await request.json() as Post;

    if (posts.length === 0) {
        const newPost = {
            id: postId,
            title: 'Post not found',
            likes: 0,
        };

        await db.insert(Posts).values(newPost);
        posts.push(newPost);
    }

    const post = posts.at(0)!;
    post.likes = post.likes + likes;

    await db.update(Posts).set(post).where(eq(Posts.id, postId));

    return new Response(JSON.stringify(post), { status: 200 });
};