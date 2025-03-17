export const slugify = (str: string): string => {
    let slugifyString = str.trim().toLowerCase()
    slugifyString = slugifyString
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    return slugifyString
}

