import style from "./styles.module.scss"

import  user from "../../assets/user-image.png"

interface Respond {
    post_coments: [{
        user: {
            name: string
            level: string
        },
        comment: string
        created_at: string
    }]
}

export function Respond (props: Respond) {
    return (
        <div className={style.replyMessage}>
            <div>
                <img src={user} alt="" className="img-fluid"/>
            </div>
            <p>Comentário muito legal de resposta ali</p>
        </div>
    );
}