import { db } from '@/db';
import { Post } from '@prisma/client'

export type PostWithData = Post & {
        topic: { slug: string },
        user: { name: string | null },
        _count: { comments: number }
    }

// export type PostWithData = Awaited<ReturnType<typeof fetchPostsByTopicSlug>>[number];    also works


export const fetchPostsByTopicSlug = (slug: string): Promise<PostWithData[]> => {
    return db.post.findMany({
        where: { topic: { slug } },
        include: {
            topic: { select: { slug: true }},
            user: { select: { name: true } },
            _count: { select: { comments: true }}
        }
    })
}