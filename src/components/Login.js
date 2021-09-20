import React, { Component } from 'react'
import { Container, Grid, Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { firebaseAuth } from '../config/firebase'
import firebase from 'firebase'

export default class Login extends Component {

    state = {
        email: '', password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state

        firebaseAuth.signInWithEmailAndPassword(email, password)
            .then((res) => {
                // console.log(res)
                if (res.user.emailVerified) {
                    this.props.history.push('/home')
                }
                else {
                    alert('Please Verify Your Email')
                    firebaseAuth.signOut()
                }
            })
            .catch(err => alert(err.message))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLoginWithGoogle = () => {
        const googleAuth = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuth)
            .then((res) => {
                this.props.history.push('/home')
            })
            .catch((err) => {
                console.log(err)
                alert(err.message)
            })
    }

    render() {
        const { email, password } = this.state

        return (
            <Container>
                <h1>Login</h1>
                <Grid container style={{ justifyContent: 'center' }}>
                    <Grid xs='4'>
                        <form onSubmit={this.handleSubmit}>
                            <TextField type='email' fullWidth margin='dense' variant='filled' name='email' label='Email' onChange={this.handleChange} required value={email} />
                            <TextField type='password' fullWidth margin='dense' variant='filled' name='password' label='Password' onChange={this.handleChange} required value={password} />
                            <Button type='submit' fullWidth margin='dense' variant='contained' color='primary'>Login</Button>
                        </form>
                        <br/>
                        <Button fullWidth margin='dense' variant='contained' onClick={this.handleLoginWithGoogle}>Sign In With Google</Button>
                        <p>Create an Account? <Link to='/signup'>Sign Up</Link></p>
                    </Grid>
                </Grid>
            </Container>

        )
    }
}