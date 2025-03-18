export const slugify = (str: string): string => {
    let slugifyString = str.trim().toLowerCase()
    slugifyString = slugifyString
        .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    return slugifyString
}

