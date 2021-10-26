import { useRef, useState } from "react";
import { useHistory } from "react-router";
import axios from 'axios'
import { Button, Col, Container, FlexboxGrid, Form, Header, Message, Notification, Schema, toaster } from "rsuite"
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem"
import TextField from "../components/TextField";
import { routes } from "../../routes";


const user ={
    fullName: '',
    email: '',
    password:'',
}

const baseURL = 'http://localhost:3003'

const SignUp = () => {
    
    const [placement, setPlacement] = useState('topEnd');
    const[newUser, setNewUser] = useState(user)
    const formRef = useRef()
    const history = useHistory()
    
    const { StringType} = Schema.Types;

    const model = Schema.Model({
        fullName: StringType()
            .isRequired('This field is required.')
            .minLength(3, 'Minimum 3 characters required')
            .containsLetterOnly('Fullname should be Letters only'),
        email: StringType()
            .isEmail('Please enter a valid email address.')
            .isRequired('This field is required.'),
        password: StringType()
            .isRequired('This field is required.')
            .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must contain Number, uppercase and lowercase Letter. Minimum password length is 8 characters'),
    })

    const handleSubmit = () => {
        axios.post(`${baseURL}/api/users`, newUser)
                .then((response) => {
                    setNewUser(response.data)
                    toaster.push(
                        <Notification 
                            type='success' 
                            header='Success' 
                            closable>
                        </Notification>, {placement}
                    )
                    history.push(routes.Home)
                })
                .catch(error => {
                    toaster.push(
                        <Message showIcon type="error" header='Error'></Message>
                    );
                }); 
    }

    return (
        <div className='signup'>
            <Container>
                <FlexboxGrid align='middle'>
                    <FlexboxGridItem as={Col} colspan={10} className='signup-bg-wrapper p-0' md={12} sm={24} xs={24}>
                        <div className='signup-bg-img'></div>
                    </FlexboxGridItem>
                    <FlexboxGridItem as={Col} colspan={12} className='px-3 my-5 px-lg-5' md={12} sm={24} xs={24}>
                        <Header className='mb-5'><h3 className='pb-5 signup-header text-center'>Create Account</h3></Header>
                        <Form  
                            fluid 
                            model={model} 
                            ref={formRef} 
                            className='signup-form-wrapper'
                            onChange={setNewUser}
                        >
                            <TextField 
                                name='fullName' 
                                label='FullName' 
                                placeholder='Enter your Fullname' 
                            />
                            <TextField 
                                name='email' 
                                label='Email'  
                                placeholder='Enter your Email' 
                            />
                            <TextField 
                                name='password' 
                                label='Password' 
                                type='password' 
                                placeholder='*******' 
                                autoComplete='off'
                            />

                            <Button className='signup-btn' type='submit' onClick={handleSubmit}>Sign Up</Button>

                        </Form>
                    </FlexboxGridItem>
                </FlexboxGrid>
            </Container>
            
        </div>
    )
}

export default SignUp
