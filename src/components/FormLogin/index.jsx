import { useState } from "react"
import { TextField } from "../TextField"
import { Heading } from "../Heading"

export const FormLogin = () => {
    return (
        <>
        <Heading size={"text-6xl"} text={"Sign in to account"} color={"text-green-500"} bold/>
         <form>
            <TextField id={"email"} name={"email"} type={"email"} placeholder={"Email"}/>
            <TextField id={"password"} name={"password"} type={"password"} placeholder={"Password"}/>
        </form>
        </>
    )
}