import Link from 'next/link'
import {useRouter} from 'next/router'
import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({email: "", password: ""})
    const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target
      setUser((prevState) => ({ 
        ...prevState,
        [name]: value
   }))
  }

  const handleSubmit =  async (e: MouseEvent<HTMLElement>)=>{
    const res = await fetch("http://localhost:3000/api/login", 
    {method: "POST", body: JSON.stringify(user), headers: {
      'Content-Type': 'application/json'
    }})

    if(res.status === 200) router.push("/home")
    else alert("Please check your info")
  }


  return (
    <div>
        <div className="form-group" style={{width: "500px", margin: "8rem auto"}}>
          <label className="form-label mt-4">Log in</label>
          <div className="form-floating mb-3">
            <input name='email' onChange={handleChange} value={user.email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label >Email address</label>
          </div>
          <div className="form-floating">
            <input name='password' onChange={handleChange} value={user.password} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label >Password</label>
          </div>
          <div className="d-grid gap-2" style={{margin: "1rem 0"}}>
           <button className="btn btn-lg btn-primary" onClick={handleSubmit}>Ingresar</button>
          </div>
       </div>
    </div>
  )
}

export default Login  