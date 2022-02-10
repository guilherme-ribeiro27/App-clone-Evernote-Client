import React, { Fragment } from 'react'; 
import HeaderLogged from '../../../components/header_logged'
import EditUserForm from '../../../components/auth/edit_form/information_form'
import EditUserPasswordForm from '../../../components/auth/edit_form/password_form'
import UsersDelete from '../../../components/auth/edit_form/deleteUser_form'
import {Section, Container, Column,Card, Content,Title} from 'rbx'
import '../../../styles/user.scss'

const UsersEditScreen = () => (  
    <Fragment>   
        <HeaderLogged/>
        <Section size="medium" className="edit-user">
            <Container>
                <Column.Group centered>
                    <Column size={5}>
                        <Content>
                            <Title size={5}>Personal Information</Title>
                        <Card>
                            <Card.Content>
                                <EditUserForm/>
                            </Card.Content>
                        </Card>
                        </Content>
                    </Column>
                </Column.Group>
                <Column.Group centered>
                    <Column size={5}>
                    <Content>
                            <Title size={5}>Change Password</Title>
                        <Card>
                            <Card.Content>
                                <EditUserPasswordForm />
                            </Card.Content>
                        </Card>
                        </Content>
                    </Column>
                </Column.Group>
                <Column.Group centered>
                    <Column size={5} textAlign='right'>
                        <UsersDelete/>
                    </Column>
                </Column.Group>
            </Container>
        </Section> 
    </Fragment> 
); 

export default UsersEditScreen;