import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardTitle, Col, Form, FormFeedback, FormGroup, Label, Input, Row, } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { displayMsg, hideMsg } from "../redux/actions";
import { authSignIn, authUsernameIsAvailable } from '../helpers/api'
import { emojiRe, isValidEmail } from '../helpers/validate'
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
            inpEmailIsValid: false,
            password: '',
            inpPasswordIsValid: false,
            inpPasswordFeedback: '',
            inpPasswordIsVisible: false,
            formIsValid: false
        }
    }


    handleChange = (e) => {
        const name = e.target.name
        let value = e.target.value
        if (name === 'email' || name === 'username') {
            value = value.toLowerCase().replace(/ /g, '')
            value = value.replace(emojiRe, '')
        }
        this.setState({
            [name]: value
        }, () => {
            (async () => {
                return new Promise(resolve => {
                    // validate username            
                    if (name === 'username') {
                        this.validateUsername()
                    }

                    // validate email
                    else if (name === "email") {
                        this.validateEmail()
                    }

                    // validate password
                    else if (name === 'password') {
                        this.validatePassword()
                    }
                    resolve()
                })
            })().then(() => {
                this.updateFormIsValid()
            }
            )
        })
    }

    // username stuff
    validateUsername = () => {
        let username = this.state.username
        // username
        if (username.length < 4) {
            this.setState({ inpUsernameIsValid: false, inpUsernameFeedback: 'username must be at least 4 char long' })
            return
        }
        this.checkUsernameAvailabilityDebounced()
    }

    // check if username is available
    checkUsernameAvailability = () => {
        if (this.state.username.length < 1) return
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
    checkUsernameAvailabilityDebounced = debounce(this.checkUsernameAvailability, 500)

    // email validation
    validateEmail = () => {
        if (isValidEmail(this.state.email)) {
            this.setState({ inpEmailIsValid: true })
        } else {
            this.setState({ inpEmailIsValid: false })
        }
    }

    // password validation
    validatePassword = () => {
        if (this.state.password.length < 6) {
            this.setState({ inpPasswordIsValid: false, inpPasswordFeedback: 'username must be at least 6 char long' })
        } else {
            this.setState({ inpPasswordIsValid: true, inpPasswordFeedback: '' })
        }
    }

    updateFormIsValid = () => {
        if (this.state.inpUsernameIsValid && this.state.inpEmailIsValid && this.state.inpPasswordIsValid) {
            this.setState({ formIsValid: true })
        } else {
            this.setState({ formIsValid: false })
        }
    }


    handleTogglePasswordVisibility = () => {
        this.setState(state => ({
            inpPasswordIsVisible: !state.inpPasswordIsVisible
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        authSignIn(this.state.username, this.state.email, this.state.password)
    }




    render() {
        let icon = this.state.inpPasswordIsVisible ? 'eye-slash' : 'eye'
        let inpPasswordType = this.state.inpPasswordIsVisible ? 'text' : 'password'
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
                                    <Input type="email" name="email" id="inpEmail" placeholder="your email" value={this.state.email} onChange={this.handleChange} valid={this.state.inpEmailIsValid} invalid={!this.state.inpEmailIsValid} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="inpPassword" style={{ display: 'block' }}>Password <span className="float-right" onClick={this.handleTogglePasswordVisibility}><FontAwesomeIcon icon={['fas', icon]} /></span></Label>
                                    <Input type={inpPasswordType} name="password" id="inpPassword" placeholder="pick a password" value={this.state.password} onChange={this.handleChange} valid={this.state.inpPasswordIsValid} invalid={!this.state.inpPasswordIsValid} />
                                    <FormFeedback>{this.state.inpPasswordFeedback}</FormFeedback>
                                </FormGroup>
                                <Button color="primary" disabled={!this.state.formIsValid}>Sign Up !</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </main >
        )
    }
}

export default connect(null, mapDispatchToProps)(SignIn)