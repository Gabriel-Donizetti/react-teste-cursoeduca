import style from "./styles.module.scss"
import user from "../../assets/user-image.png"

import { Respond } from "../Respond"

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

export function Comment(props: Posts) {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <img src={user} alt="User" />
                <div className={style.userInfo}>
                    <p>{props.user.name}</p>
                    <span>{props.user.level}</span>
                </div>
            </div>
            <div className={style.message}>
                <p>{props.post}</p>
                <div>
                    <button className="like btn btn-secondary /*btn-success"><i className="fas fa-thumbs-up"></i></button>
                    <button className="dislike btn btn-secondary /*btn-danger"><i className="fas fa-thumbs-down"></i></button>
                </div>
            </div>
            <Respond post_coments={props.post_coments}/>
            <div className={style.respond}>
                <div className="row">
                    <div className="col-10">
                        <input type="text" className="form-control" placeholder="Escreva um comentário" />
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-success">
                            Responder
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}