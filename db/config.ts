import { column, defineDb, defineTable } from 'astro:db';

const Product = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    codigo: column.text(),
    producto: column.text(),
    stock: column.number(),
    precio_venta: column.number(),
    categoria: column.text(),
    subcategoria: column.text({optional: true}),
    src_image: column.text(),
    slug: column.text(),
  }
})

const Category = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    slug: column.text(),
    srcImage: column.text(),
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: {
    Product,
    Category,
  }
});
