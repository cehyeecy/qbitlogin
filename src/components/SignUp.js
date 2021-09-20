import React, { Component } from 'react'
import { Container, Grid, Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { firebaseAuth } from '../config/firebase'

export default class SignUp extends Component {

    state = {
        email: '', password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebaseAuth.currentUser.sendEmailVerification()
            .then(() => {
                alert('Please Verify Your Email')
                this.props.history.push('/login')
            })
            .catch(err => {
                alert(err.message)
            })
        })
        .catch(err => {
            alert(err.message)
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { email, password } = this.state

        return (
            <Container>
                <h1>Sign Up</h1>
                <Grid container style={{ justifyContent: 'center' }}>
                    <Grid xs='4'>
                        <form onSubmit={this.handleSubmit}>
                            <TextField type='email' fullWidth margin='dense' variant='filled' name='email' label='Email' onChange={this.handleChange} required value={email} />
                            <TextField type='password' fullWidth margin='dense' variant='filled' name='password' label='Password' onChange={this.handleChange} required value={password} />
                            <Button type='submit' fullWidth margin='dense' variant='contained' color='primary'>Sign Up</Button>
                        </form>
                        <p>Have an Account? <Link to='/login'>Sign In</Link></p>
                    </Grid>
                </Grid>
            </Container>

        )
    }
}