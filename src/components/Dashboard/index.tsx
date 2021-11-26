import style from "./styles.module.scss"

import { NavBar } from "../NavBar"
import { Filters } from "../Filters"
import { MessageBox } from "../MessageBox"
import { Comments } from "../Comments"

export function Dashboard() {
    return (
        <div id={style.container}>
            <NavBar />
            <Filters />
            <MessageBox />
            <Comments />
        </div>
    )
}