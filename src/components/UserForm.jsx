import { useState, useActionState  } from 'react'
import { Form, Button } from 'react-bootstrap'

// Added bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'


const UserForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (state, formData) => {
        setEmail(`${formData.get("email")}`)
        setPassword(`${formData.get("password")}`)

        // Vailidate Email
        let emailValid = false;
        if(formData.get("email").length === 0) state.emailError = "Email is required"
        else if(formData.get("email").length < 6) {
            state.emailError = "Email should be minimum 6 Characters"
        } 
        else if(formData.get("email").indexOf('') > 0) {
            state.emailError = "Email Cannot contain spaces"
        } else {
            state.emailError = ""
            emailValid = true
        }

        if(emailValid) {
            alert(`Email: ${email} \n Password: ${password}`)
        }
        console.log(state);
        return state;
    }

    const [state, formAction] = useActionState(handleSubmit, {
        emailError: ""
    })
    console.log(state);


    return (
        <div>
            <Form action={formAction} >
                <Form.Group className='mb-3' controlId="formBasicEmail" >
                    <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder='Enter email' 
                            name="email" 
                            onChange={event => setEmail(event.target.value)}
                             />

                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className='mb-3' controlId='formBasicPassword' >
                    <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type='password' 
                            placeholder='Password' 
                            name="password"
                            onChange={event => setPassword(event.target.value)} 
                            />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>

            Email entered: {email}
            <br />
            Password entered: {password} 
        </div>
    )
}

export default UserForm

/** Showing Specific Validation Errors */