import { Form } from "rsuite"

const TextField = (props) => {
    const {name, label, accepter, message,  placeholder, error, ...rest} = props;

    return (
        <Form.Group controlId={name}>
            <Form.ControlLabel className='mb-2'>{label}</Form.ControlLabel>
            <Form.Control 
                name={name}
                accepter={accepter}
                errorMessage={error}
                placeholder={placeholder}
                {...rest}
            />
            <Form.HelpText>{message}</Form.HelpText>
        </Form.Group>
    )
}

export default TextField
