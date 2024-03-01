import { db } from "@/db"
import { Comment } from "@prisma/client";


export type CommentWithAuthor = Comment & {
    User: { name: string | null; Image: string | null };
}

export const fetchCommentsByPostId = (postId: string): Promise<CommentWithAuthor[]> => {
    return db.comment.findMany({
        where: { postId },
        include: {
            user: {
                select: {
                    name: true,
                    image: true
                }
            }
        }
    })
}