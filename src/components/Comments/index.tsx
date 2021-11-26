import style from "./styles.module.scss"

import { Comment } from "../Comment"

import api from "../../services/api"
import { useEffect, useState } from "react"



type Posts = {
    user: {
        name: string
        level: string
    },
    post: string
    created_at: string
    post_coments: [{
        user: {
            name: string
            level: string
        },
        comment: string
        created_at: string
    }]
}

export function Comments() {

    const [posts, setPosts] = useState<Posts[]>([])

    useEffect(() => {
        api.get('posts/getall').then((response) => {
            setPosts(response.data);
        });
    }, []);

    return (
        <div className={style.container}>
            <ul>
                <div className={style.container}>
                    <ul>
                        {posts.map(post =>
                            <Comment
                                key={post.id}
                                post={post.post}
                                created_at={post.created_at}
                                user={post.user}
                                post_coments={post.post_coments}
                            />
                        )}
                    </ul>
                </div>
            </ul>
        </div>
    )
}