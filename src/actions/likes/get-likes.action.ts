import { defineAction } from "astro:actions";
import { db, Posts, eq } from "astro:db";
import { z } from "astro:schema";

export const getLikes = defineAction({
    input: z.string(),
    handler: async (postId) => {

        try {
            const [post] = await db.select().from(Posts).where(eq(Posts.id, postId))

            if (!post) {
                return {
                    likes: 0,
                    exists: false
                }
            }

            return {
                likes: post.likes,
                exists: true,
            }

        } catch (error) {
            console.error("Error fetching likes:", error)
            throw new Error("Failed to fetch likes")
        }


    }
})