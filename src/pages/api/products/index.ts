import type { APIRoute } from "astro";
import { products } from "@/lib/data";
import { slugify } from "@/lib/utils";

export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {

    const url = new URL(request.url)
    const minPrice = url.searchParams.get('minprice') ?? '0'
    const maxPrice = url.searchParams.get('maxprice')

    const allProducts = products.map(product => {
        const { descripcion, ...allProps } = product

        return {
            ...allProps,
        }
    })

    if (minPrice && maxPrice) {
        const filterProducts = allProducts.filter(product => {
            return product.precio_venta >= +minPrice && product.precio_venta <= +maxPrice
        })

        return new Response(JSON.stringify(filterProducts), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }


    return new Response(JSON.stringify(allProducts), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}