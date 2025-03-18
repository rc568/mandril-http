import { slugify } from "@/lib/utils";
import type { APIRoute } from "astro";
import { db, Category } from "astro:db";

// export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {

    const users = await db.select().from(Category)

    return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const POST: APIRoute = async ({ params, request }) => {

    try {
        const { id, ...data } = await request.json()

        const body = {
            ...data,
            slug: slugify(data.title)
        }

        const resp = await db.insert(Category).values(body)

        return new Response(JSON.stringify(resp), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {

        console.error(error)

        const body = {
            msg: 'Incomplete information for create a category.'
        }

        return new Response(JSON.stringify(body), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        })

    }

}