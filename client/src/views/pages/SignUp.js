import { useRef, useState } from "react";
import axios from 'axios'
import { Button, Col, Container, FlexboxGrid, Form, Header, Schema } from "rsuite"
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem"
import TextField from "../components/TextField";

const user ={
    fullname: '',
    email: '',
    password:'',
}


const SignUp = () => {
    const formRef = useRef()
    const[newUser, setNewUser] = useState(user)
    
    const { StringType} = Schema.Types;
    const model = Schema.Model({
        fullname: StringType().isRequired('This field is required.'),
        email: StringType()
            .isEmail('Please enter a valid email address.')
            .isRequired('This field is required.'),
        password: StringType().isRequired('This field is required.'),
    })

    const handleSubmit = () => {

        if (!formRef.current.check()) {
            console.error('Form Error');
            console.log(newUser)
        } else {
            axios.post('http://localhost:3003/api/users', newUser)
                .then((response) => {
                    console.log(response)
                    console.log('Everything is awesome.');
                    setNewUser(response.data);
                })
                .catch(error => {
                console.log(error.response)
                    console.log('there is an error')
            }); 
        }
        return;
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
                            <TextField name='fullname' label='Fullname' placeholder='Enter your Fullname'/>
                            <TextField name='email' label='Email'  placeholder='Enter your Email'/>
                            <TextField 
                                name='password' 
                                label='Password' 
                                type='password' 
                                placeholder='*******' 
                                autoComplete='off'/>

                            <Button className='signup-btn' type='submit' onClick={handleSubmit}>Sign Up</Button>
                        </Form>
                    </FlexboxGridItem>
                </FlexboxGrid>
            </Container>
            
        </div>
    )
}

export default SignUp
