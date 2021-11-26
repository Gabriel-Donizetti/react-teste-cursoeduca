import { FormEvent, useState } from "react"
import api from "../../services/api"
import style from "./styles.module.scss"
import { useNavigate } from "react-router"

type User = {
  token: string
  user: {
    email: string
    id: string
    level: string
    name: string
  }
}

export function Login() {

  const navigate = useNavigate()

  const [user, setUser] = useState<User>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isSendingUser, setIsSendingUser] = useState(false)

  async function loginUser(event: FormEvent) {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      return
    }

    setIsSendingUser(true)


    try {
      const response = await api.post<User>('user/login', {
        email, password
      }).then(data=>{
        if(data.status == 200){
          setEmail('')
          setPassword('')

          navigate('/dashboardPage')

          return console.log(data)
        }
      })
    } catch (err) {
      console.log(err)
    } finally {
      setIsSendingUser(false)
    }
  }

  return (
    <div className={style.loginBoxWrapper}>

      <form onSubmit={loginUser}>

        <h2>CursEduca</h2>
        <div className="form-group">
          <label htmlFor="">Email:</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setEmail(e.target.value)}
            value={email} />
          <i className="fa fa-envelope"></i>
          <div></div>
        </div>
        <div className="form-group">
          <label htmlFor="">Senha:</label>
          <input
            type="password"
            className="form-control"
            onChange={e => setPassword(e.target.value)}
            value={password} />
          <i className="fas fa-key"></i>
          <div></div>
        </div>

        <div className={style.loginBtns}>
          <button disabled={isSendingUser} type="submit">Login</button>
          <button onClick={() => navigate('/signinPage')} >SignIn</button>
        </div>

      </form>
    </div>
  )
}