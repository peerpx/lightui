import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardTitle, Col, Form, FormFeedback, FormGroup, Label, Input, Row, } from 'reactstrap'

import { displayMsg, hideMsg } from "../redux/actions";
import { authSignIn, authUsernameIsAvailable } from '../helpers/api'
import { isAlphanumeric } from '../helpers/validate'
import debounce from 'lodash/debounce';


const mapDispatchToProps = {
    displayMsg,
    hideMsg
}


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            inpUsernameIsValid: false,
            inpUsernameFeedback: '',
            email: '',
            password: ''
        }

        //this.handleChange = this.handleChange.bind(this)
        //this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        // todo: load a set of photos

        //this.props.displayMsg("danger", "Hello world")
    }

    handleChange = (e) => {
        const name = e.target.name
        let value = e.target.value
        if (name === 'email' || name === 'username') {
            value = value.toLowerCase().trim()
        }
        this.setState({
            [name]: value
        }, () => {
            // validate username
            if (name === 'username') {this.checkUsernameAvailabilityDebounced()}
            // todo validate email && passwd
        }
        )
    }

    // username stuff
    validateUsername = () => {
        let username = this.state.username
        // username
        if (username.length < 4) {
            this.setState({ inpUsernameIsValid: false, inpUsernameFeedback: 'username must be at least 4 char long' })
            return false
        } else if (isAlphanumeric(username) === false) {
            this.setState({ inpUsernameIsValid: false, inpUsernameFeedback: 'username must be alphanumeric' })
            return false
        } else {

        }
        this.setState({ inpUsernameIsValid: true, inpUsernameFeedback: '' })
        return true
    }

    // check if username is available
    checkUsernameAvailability = () => {
        authUsernameIsAvailable(this.state.username)
            .then((response) => {
                if (response.data.success) {
                    this.setState({ inpUsernameIsValid: true, inpUsernameFeedback: '' })
                } else if (response.data.code === "usernameNotAvailable") {
                    this.setState({ inpUsernameIsValid: false, inpUsernameFeedback: 'Oh nooooo! that username is not available' })
                }
            }).catch(() => {
                this.setState({ inpUsernameIsValid: false, inpUsernameFeedback: '' })
            })
    }
    // debounced
    checkUsernameAvailabilityDebounced = debounce(this.checkUsernameAvailability, 250)

    handleSubmit = (e) => {
        e.preventDefault()
        authSignIn(this.state.username, this.state.email, this.state.password)
    }

    render() {
        return (
            <main>
                <Row className="justify-content-center">
                    <Col md="8" lg="4" >
                        <Card body className="card-login">
                            <CardTitle className="center">Create an account</CardTitle>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="inpUsername">Username</Label>
                                    <Input type="text" name="username" id="inpUsername" placeholder="wanted username" value={this.state.username} onChange={this.handleChange} valid={this.state.inpUsernameIsValid} invalid={!this.state.inpUsernameIsValid} />
                                    <FormFeedback valid></FormFeedback>
                                    <FormFeedback>{this.state.inpUsernameFeedback}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="inpEmail">Email</Label>
                                    <Input type="email" name="email" id="inpEmail" placeholder="your email" value={this.state.email} onChange={this.handleChange} />

                                </FormGroup>
                                <FormGroup>
                                    <Label for="inpPassword">Password</Label>
                                    <Input type="password" name="password" id="inpPassword" placeholder="pick a password" value={this.state.password} onChange={this.handleChange} />
                                </FormGroup>
                                <Button color="primary" disabled={!this.state.inpUsernameIsValid}>Sign Up !</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </main >
        )
    }
}

export default connect(null, mapDispatchToProps)(SignIn)