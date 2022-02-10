import React, { Fragment, useState, useEffect } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx"
import UsersService from '../../../../services/users'

const EditUserForm = ()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState(null);

    const initializeUser = async()=>{
        const user = await JSON.parse(localStorage.getItem('user'))
        setName(user['name'])
        setEmail(user['email'])
    }

    useEffect(()=>{
        initializeUser()
    },[])

    const HandleSubmit = async (event)=>{
        event.preventDefault()
        try {
            await UsersService.update({  email:email ,name: name })
            setStatus('success')
        } catch (error) {
            setStatus('error')
        }
        
    }
    return(
        <Fragment>
            <Column.Group className="user" centered>
                <Column>
                    <Column.Group breakpoint="mobile">
                            <Column size={12}>
                                <form onSubmit={HandleSubmit}>
                                    <Field>
                                        <Label>Full Name</Label>
                                        <Control>
                                            <Input type="text" 
                                                onChange={(e)=>setName(e.target.value)}
                                                value={name || ""}
                                                name="name"
                                            />
                                        </Control>
                                    </Field>
                                    <Field>
                                        <Label>Email</Label>
                                        <Control>
                                            <Input type="email" 
                                                onChange={(e)=>setEmail(e.target.value)}
                                                value={email || ""}
                                                name="email"
                                            />
                                        </Control>
                                    </Field>
                                    <Field textAlign='right'>
                                        <Control>
                                            <Column.Group>
                                                <Column>
                                                    <Button color="custom-purple" outlined>Update</Button>
                                                </Column>
                                            </Column.Group>
                                        </Control>
                                    </Field>
                                    {status == 'error' &&
                                        <Help color="danger">Problem in updating</Help>
                                    }
                                    {status == 'success' &&
                                        <Help color="success">Updated with success</Help>
                                    }
                                </form>
                            </Column>
                    </Column.Group>
                </Column>
            </Column.Group>
        </Fragment>
    )
}

export default EditUserForm