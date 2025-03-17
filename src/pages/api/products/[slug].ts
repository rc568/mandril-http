import type { APIRoute } from "astro";
import { products } from "@/lib/data";

export const prerender = false

const url = '/api/get-products.json'

export const GET: APIRoute = async ({ params, request }) => {

    const { slug } = params

    const product = products.find(p => p.slug === slug)

    if (product) {
        return new Response(JSON.stringify(product), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return new Response(JSON.stringify({
        msg: `Product ${slug} not found`
    }), {
        status: 404,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}