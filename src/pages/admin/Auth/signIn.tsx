import React from 'react'
import {useForm} from 'react-hook-form'
import { login } from '../../../api/auth'
type Props = {}

const Signin = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onHandleSubmit = async (data: any) => {
        const { data: user } = await login(data)
        console.log(user);
        
        localStorage.setItem('token', JSON.stringify(user.accessToken))
    }
  return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" placeholder='Email' {...register("email")} />
                <input type="password" placeholder='Password' {...register("password")} />
                <button>Login</button>
            </form> 
        </div>
  )
}

export default Signin