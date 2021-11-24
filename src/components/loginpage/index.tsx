import style from "./styles.module.scss"

export function Login() {

  return (
      <div className={style.loginBoxWrapper}>
            
            <form action="">
            
              <h2>CursEduca</h2>
              <div className="form-group">
                <label htmlFor="">Email:</label>
                <input type="text" className="form-control" />
                <i className="fa fa-envelope"></i>
                <div></div>
              </div>
              <div className="form-group">
                <label htmlFor="">Senha:</label>
                <input type="password" className="form-control" />
                <i className="fas fa-key"></i>
                <div></div>
              </div>

              <div className={style.loginBtns}>
                <button type="submit">Login</button>
                <button>SignIn</button>
              </div>

           </form>
      </div>
  )
}