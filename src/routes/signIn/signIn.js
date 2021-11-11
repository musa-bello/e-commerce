import React, { Component } from 'react'
import { Button } from '../components/Button/button'
import { FormInput } from '../components/formInput/formInput'
import './style.scss'

class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value }, ()=>console.log(this.state))
        ;
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ password:'', email:'' })
    }
    
    render() {
        const { email, password } = this.state
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <FormInput 
                    type='email' 
                    name='email' 
                    value={email} 
                    onChange={this.handleChange}
                    label='Email'
                    required
                />

                <FormInput 
                    type='password' 
                    name='password' 
                    value={password} 
                    handleChange={this.handleChange}
                    label='Password'
                    required
                />
                <Button onClick={this.handleSubmit}>Sign in</Button>
            </div>
        )
    }
}
export default SignIn