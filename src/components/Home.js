import React, { Component } from 'react'
import { Container, Button } from '@material-ui/core'
import { firebaseAuth } from '../config/firebase'

export default class Home extends Component {

    componentDidMount() {
        firebaseAuth.onAuthStateChanged((user) => {
            if(!user) {
                this.props.history.push('/login')
            }
        })
    }

    handleLogOut = () => {
        firebaseAuth.signOut()
    }

    render() {
        // console.log(firebaseAuth.currentUser.email)
        return (
            <Container>
                <h1>Welcome {firebaseAuth.currentUser.email}</h1>
                <Button onClick={this.handleLogOut}>Log Out</Button>
            </Container>

        )
    }
}