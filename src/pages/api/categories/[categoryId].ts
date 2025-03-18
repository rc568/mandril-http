import type { APIRoute } from "astro";
import { Category, db, eq } from "astro:db";

export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {

    const categoryId = params.categoryId ?? ''
    const category = await db.select().from(Category).where(eq(Category.id, categoryId))

    if (category.length > 0) {
        return new Response(JSON.stringify(category), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const body = {
        msg: 'Category not found'
    }

    return new Response(JSON.stringify(body), {
        status: 404,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}
export const PATCH: APIRoute = async ({ params, request }) => {

    const categoryId = params.categoryId ?? ''

    try {
        const { id, ...data } = await request.json()

        const body = {
            ...data,
        }

        const results = await db.update(Category).set(body).where(eq(Category.id, categoryId))

        const updatedClient = await db.select().from(Category).where(eq(Category.id, categoryId))

        return new Response(JSON.stringify(updatedClient), {
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

export const DELETE: APIRoute = async ({ params, request }) => {

    const categoryId = params.categoryId ?? ''

    const { rowsAffected } = await db.delete(Category).where(eq(Category.id, categoryId))

    if (rowsAffected > 0) {
        const body = {
            msg: 'Deleted',
            rowsAffected,
        }

        return new Response(JSON.stringify(body), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        })

    }

    const body = {
        msg: `Category with id ${categoryId} not found.`,
        rowsAffected,
    }

    return new Response(JSON.stringify(body), {
        status: 404,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}