import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'userTag',
    email: 'user_tag@mail.com'
  })
  const { username, email } = formState;

  // cambiar el input
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value //propiedades computadas

    })
  }

  useEffect(() => {
    // console.log('useEffect called')
  }, []); //un array vacio dice que se ejecuta una sola vez

  useEffect(() => {
    // console.log('formState Changed')
  }, [formState]);

  useEffect(() => {
    // console.log('email Changed')
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
      <input type="email" className="form-control mt-2" placeholder="email@mail.com" name="email" value={email} onChange={onInputChange} />

      {
        (username === 'userTag2')&& <Message />

      }
    </>
  )
}
