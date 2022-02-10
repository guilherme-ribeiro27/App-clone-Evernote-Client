import React, { Fragment } from 'react'; 
import Header from '../../../components/header' 
import {Column,Section,Title,Container, Card} from 'rbx'
import LogoImage from '../../../assets/images/logo.png'
import '../../../styles/auth.scss'
import LoginForm from '../../../components/auth/login_form'

const LoginScreen = () => (  
    <Fragment>   
        <Fragment>   
        <Header/>     
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={5}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <img alt='logo' src={LogoImage}/>
                                        </Column>
                                    </Column.Group>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <Title size={6} className="has-text-grey has-text-centered">
                                                Your notes on the cloud
                                            </Title>
                                        </Column>
                                    </Column.Group>
                                </Section>
                                <LoginForm/>
                            </Card.Content>
                        </Card>
                    </Column>    
                </Column.Group>     
            </Container>
        </Section>
    </Fragment>  
    </Fragment> 
); 

export default LoginScreen;