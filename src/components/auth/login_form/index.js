import React, { Fragment, useState } from 'react';
import { Navigate } from "react-router-dom";
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx"
import UsersService from '../../../services/users'

const LoginForm = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [redirectToNotes, setRedirectToNotes] = useState(false);
    const [error, setError] = useState(false);

    const HandleSubmit = async (event)=>{
        event.preventDefault()
        try {
            const user = await UsersService.login({email: email, password: password})
            setRedirectToNotes(true)
        } catch (error) {
            setError(true)
        }
    }

    if(redirectToRegister)
        return <Navigate to={{pathname: "/register"}}/>
    else if(redirectToNotes)
        return <Navigate to={{pathname: "/notes"}}/>

    return (
        <Fragment>
            <Column.Group centered>
                <form onSubmit={HandleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input type='email' required name='email' onChange={e => setEmail(e.target.value)} value={email}/>
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                                <Input 
                                    type='password' 
                                    required name='password' 
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group>
                                <Column>
                                        <a onClick={e => setRedirectToRegister(true)}  
                                        className="button is-white has-text-custom-purple">Register or</a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Login</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        { error && <Help color="danger">Email or Password invalid</Help> }
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default LoginForm