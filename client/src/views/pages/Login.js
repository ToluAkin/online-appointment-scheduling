import { useRef } from "react";
import { Button, Col, Container, FlexboxGrid, Form, Schema } from "rsuite"
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
        <div className='login'>
            <Container>
                <FlexboxGrid >
                    <FlexboxGridItem as={Col} colspan={10} className='login-bg-wrapper p-0' md={12} sm={24} xs={24}>
                        <div className='login-bg-img'></div>
                    </FlexboxGridItem>
                    <FlexboxGridItem as={Col} colspan={12} className='px-3 my-5 px-lg-5' md={12} sm={24} xs={24}>
                        <Form  fluid model={model} ref={formRef} className='login-form-wrapper'>
                            <TextField name='email' label='Email' />
                            <TextField name='password' label='Password' type='password' message='' autoComplete='off'/>
                            <Button className='login-btn' type='submit'>Sign Up</Button>
                        </Form>
                    </FlexboxGridItem>
                </FlexboxGrid>
            </Container>

        </div>
    )
}

export default Login