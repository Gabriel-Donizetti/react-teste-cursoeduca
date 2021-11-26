import { FormEvent, useState } from "react"
import api from "../../services/api"
import style from "./styles.module.scss"

export function MessageBox() {

  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')

  const [isSendingPost, setIsSendingPost] = useState(false)

  async function sendPost(event: FormEvent) {
    event.preventDefault()

    if (!title.trim() || !post.trim()) {
      return
    }

    setIsSendingPost(true)

    const id = '11f1ba28-d886-4892-821f-e649eb607cf3'

    try {
      await api.post('posts/createpost', {
        title, post, id
      }).then(status => {
        if (status.status == 200) {
          setTitle('')
          setPost('')

          return console.log(status.status)
        }
      })
    } catch (err) {
      console.log(err)
    } finally {
      setIsSendingPost(false)
    }
  }

  return (
    <form onSubmit={sendPost} className={style.container}>
      <div className={style.flex}>
        <div className={style.userIcon}>
          <i className="fas fa-user"></i>
        </div>
        <div className="form-group">
          <label htmlFor="">Conteúdo</label>
          <input
            onChange={e => setTitle(e.target.value)}
            value={title}
            type="text"
            className="form-control" />
          <div className={style.effectLine}>
            <textarea
              onChange={e => setPost(e.target.value)}
              value={post}
            ></textarea>
            <div></div>
          </div>
        </div>
      </div>
      <button disabled={isSendingPost} type="submit" className="btn btn-default btn-success">
        Publicar
      </button>
    </form>
  )
}