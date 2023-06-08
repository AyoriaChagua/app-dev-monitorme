import { useState } from "react"
import { TextField } from "../TextField"
import { Heading } from "../Heading"
import { Button } from "../Button"
import { useAuth } from '../../context/authContext'
import { useNavigate } from "react-router-dom"

export const FormLogin = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState()

    const { login } = useAuth()

    const navigate = useNavigate()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
        <Heading size={"text-6xl"} text={"Sign in to account"} color={"text-green-500"} bold/>
        {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <TextField 
                    id={"email"}
                    name={"email"} 
                    type={"email"} 
                    placeholder={"Email"}
                    onChange={handleChange}/>
                <TextField 
                    id={"password"} 
                    name={"password"} 
                    type={"password"}
                    placeholder={"Password"}
                    onChange={handleChange}
                />
                <Button text={"Login"} type="green"/>
            </form>
            <div className= "grid  sm:grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <div className= "col-span-1">
                    <h4>
                        Remember me
                    </h4>
                </div>
                <div className= "col-span-1">
                    <h4>
                        Forgot Password
                    </h4>
                </div>
            </div>
        </>
    )
}