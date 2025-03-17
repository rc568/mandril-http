import type { APIRoute } from "astro";
import { products } from "@/lib/data";

export const GET: APIRoute = async ({ params, request }) => {
    const allProducts = products.map( product => {
        const { descripcion, ...allProps } = product
        
        return {
            ...allProps,
        }
    })

    return new Response(JSON.stringify(allProducts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}