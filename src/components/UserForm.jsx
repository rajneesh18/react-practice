import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

// Added bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'


const UserForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <Form>
                <Form.Group className='mb-3' controlId="formBasicEmail" >
                    <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder='Enter email' 
                            name="email" 
                            onChange={event => setEmail(event.target.value)} />

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
                            onChange={event => setPassword(event.target.value)} />
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