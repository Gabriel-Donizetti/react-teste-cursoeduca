import style from "./styles.module.scss"

export function Filters () {
    return (
        <div className={style.container}>
            <form action="">
                <h4>Filtros</h4>
                <div className="form-group">
                    <label htmlFor="">Conteúdo</label>
                    <input type="text" className="form-control" placeholder="Título do conteúdo" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Tipo do curso</label>
                    <select name="" id="" className="form-select">
                        <option value="Todos">Todos</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Instrutor</label>
                    <input type="text" className="form-control" placeholder="Nome, email ou CPF do instrutor" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Membro</label>
                    <input type="text" className="form-control" placeholder="Nome, email ou CPF do membro" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Data do comentário</label>
                    <div className="row">
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder="Data do comentário" />
                        </div>
                        <div className="col-4">
                            <button type="submit" className="btn btn-success">
                                Filtrar
                            </button>
                        </div>
                    </div>
                </div>
                <input type="reset" value="Limpar" className="btn btn-secondary"/>
            </form>
        </div>
    )
}