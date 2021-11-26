import style from "./styles.module.scss"

export function NavBar () {
    return (
        <nav className={style.container}>
            <ul>
                <li>
                    <a href="#">Conteúdos</a>
                </li>
                <li>
                    <a href="#" className={style.isActive}>Comunidade</a>
                </li>
                <li>
                    <a href="#">Planos</a>
                </li>
                <li>
                    <a href="#">Trilhas</a>
                </li>
            </ul> 
        </nav>
    )
}