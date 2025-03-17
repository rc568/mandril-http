export interface Product {
    codigo: string
    producto: string
    stock: number
    precio_venta: number
    descripcion: string
    categoria: string
    subcategoria?: string
    src_image: string
    slug: string
}

export interface Category {
    title: string;
    srcImage: string;
    totalProducts?: number;
}