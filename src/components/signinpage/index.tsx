import { FormEvent, useState } from "react"
import  api  from "../../services/api"
import style from "./styles.module.scss"

import { useNavigate } from "react-router"

export function SignIn() {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isSendingUser, setIsSendingUser] = useState(false)

  async function signinUser(event: FormEvent) {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !password.trim()) {
      return
    }

    setIsSendingUser(true)

    try{
      await api.post('user/signin', {
        name,email,password
      }).then(data=>{
        return console.log(data)
      })

      setName('')
      setEmail('')
      setPassword('')
    }catch(err){
      console.log(err)
    } finally{
      setIsSendingUser(false)
      navigate('/')
    }
  }

  return (
    <div className={style.loginBoxWrapper}>

      <form onSubmit={signinUser} >

        <h2>CursEduca</h2>
        <div className="form-group">
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setName(e.target.value)}
            value={name} />
          <i className="fa-solid fa-address-card"></i>
          <div></div>
        </div>
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

        <div className={style.signinBtns}>
          <button disabled={isSendingUser} type="submit">SignIn</button>
        </div>

      </form>
    </div>
  )
}