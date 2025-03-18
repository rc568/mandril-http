import { actions, defineAction } from "astro:actions";
import { db, Posts, eq } from "astro:db";
import { z } from "astro:schema";

export const updateLikes = defineAction({
    accept: 'json',
    input: z.object({
        postId: z.string(),
        increment: z.number()
    }),
    handler: async ({ postId, increment }) => {
        
        // await actions.getLikes('1')

        const [posts] = await db.select().from(Posts).where(eq(Posts.id, postId))
        
        // if (error) {
        //     console.error(error)
        //     throw new Error('Something goes bad.')
        // }

        // const { exists, likes } = data
        
        if (!posts) {
            const newPost = {
                id: postId,
                title: 'Post not found',
                likes: 0,
            };

            await db.insert(Posts).values(newPost);
        }
        
        await db.update(Posts).set({
            likes: posts.likes + increment
        }).where(eq(Posts.id, postId));
        
        return true

    }
})


