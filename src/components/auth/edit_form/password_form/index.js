import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx"
import UsersService from '../../../../services/users'

const EditUserPasswordForm = (props)=>{
    const [password, setPassword] = useState("")
    const [secondPassword, setSecondPassword] = useState("")
    const [status, setStatus] = useState(null)

    const HandleSubmit = async(event)=>{
        event.preventDefault()

        if(password == secondPassword ){
            try {
                await UsersService.updatePassword({password:password})
                setStatus('succes')
            } catch (error) {
                setStatus('error')
            }
        }else{
            setStatus('error_password_confirmation')
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
                                        <Label>New Password</Label>
                                        <Control>
                                            <Input type="password"
                                                name="password"
                                                onChange={e=>setPassword(e.target.value)}
                                                required
                                                value={password}
                                            />
                                        </Control>
                                    </Field>
                                    <Field>
                                        <Label>Confirmation</Label>
                                        <Control>
                                            <Input type="password"
                                                name="password-confirmation"
                                                onChange={e=>setSecondPassword(e.target.value)}
                                                required
                                                value={secondPassword}
                                            />
                                        </Control>
                                    </Field>
                                    <Field textAlign='right'>
                                        <Control>
                                            <Column.Group>
                                                <Column className='result' size={4}>
                                                {status=='succes' &&
                                                    <Help textAlign="center" color='primary'>Password update</Help>
                                                }
                                                {status=='error' &&
                                                    <Help textAlign="center" color='danger'>Error on updating password</Help>
                                                }
                                                {status=='error_password_confirmation' &&
                                                    <Help textAlign="center" color='danger'>Passwords dosen't match!</Help>
                                                }
                                                </Column>
                                                <Column>
                                                    <Button color="custom-purple" outlined>Change</Button>
                                                </Column>
                                            </Column.Group>
                                        </Control>
                                    </Field>
                                    
                                </form>
                            </Column>
                    </Column.Group>
                </Column>
            </Column.Group>
        </Fragment>
    )
}

export default EditUserPasswordForm