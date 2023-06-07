import { useState } from "react";
import { RadioButton } from "../RadioButton"
import { TextField } from "../TextField"
import { Button } from "../Button";
import {useAuth} from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

export const FormRegister = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState()

    const { signUp } = useAuth()

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
            await signUp(user.email, user.password)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }
    
    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <TextField 
                    id={"username"} 
                    name={"username"} 
                    type={"text"} 
                    placeholder={"Username"}
                    onChange={handleChange}/>
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
                <TextField 
                    id={"repeat-password"} 
                    name={"repeat-password"} 
                    type={"password"} 
                    placeholder={"Confirm password"}
                    onChange={handleChange}
                />
                <h3>Choose the type of account you want to create. keep the following in mind:</h3>
                <div className="flex">
                    <RadioButton
                        value="adviser"
                        checked={selectedOption === 'adviser'}
                        onChange={handleOptionChange}
                        label="Adviser"
                    />
                    <RadioButton
                        value="regular"
                        checked={selectedOption === 'regular'}
                        onChange={handleOptionChange}
                        label="Regular"
                    />
                </div>
                <Button text={"Sign Up"} type="green"/>
            </form>
        </div>
    )
}