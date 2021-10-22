import { useRef } from "react";
import { Button, Col, Container, FlexboxGrid, Form, Header, Schema } from "rsuite"
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem"
import TextField from "../components/TextField";

const Login = () => {
    const { StringType} = Schema.Types;
    const formRef = useRef()

    const model = Schema.Model({
        email: StringType()
            .isEmail('Please enter a valid email address.')
            .isRequired('This field is required.'),
        password: StringType().isRequired('This field is required.'),
    })

    return (
        <div className='signup'>
        <Container>
            <FlexboxGrid align='center'>
                <FlexboxGridItem as={Col} colspan={12} className='px-1 my-2 px-lg-2' md={12} sm={24} xs={24}>
                    <Header className='mb-5'><h3 className='pb-5 signup-header text-center'>Sign In</h3></Header>
                    <Form  fluid model={model} ref={formRef} className='signup-form-wrapper mx-2'>
                        <TextField name='email' label='Email' />
                        <TextField name='password' label='Password' type='password' message='' autoComplete='off'/>
                        <Button className='signup-btn' type='submit'>Log In</Button>
                    </Form>
                </FlexboxGridItem>
            </FlexboxGrid>
        </Container>
        
    </div>
      
    )
}

export default Login