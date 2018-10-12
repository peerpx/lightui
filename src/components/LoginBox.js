import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Label, NavLink, Input, Row, } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { displayMsg, hideMsg } from '../redux/actions'

import { ApiAuthLogin } from '../helpers/api'

const mapDispatchToProps = {
    displayMsg,
    hideMsg
}


class LoginBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            inpUsernameIsValid: false,
            inpUsernameFeedback: '',
            password: '',
            inpPasswordIsVisible: false,
            inpPasswordIsValid: false,
            inpPasswordFeedback: '',
            formIsValid: false,
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        let value = e.target.value

        if (name === 'username') {
            value = value.toLowerCase().trim()
            if (value.length > 0) {
                this.setState({ inpUsernameIsValid: true })
            } else {
                this.setState({ inpUsernameIsValid: false })
            }
        }
        else if (name === 'password') {
            if (value.length > 0) {
                this.setState({ inpPasswordIsValid: true })
            } else {
                this.setState({ inpPasswordIsValid: false })
            }
        }

        this.setState({ [name]: value })
    }

    handleTogglePasswordVisibility = () => {
        this.setState(state => ({
            inpPasswordIsVisible: !state.inpPasswordIsVisible
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        ApiAuthLogin(this.state.username, this.state.password)
            .then(response => {
                console.log('RESP: ', response)
            })
            .catch(err => {
                console.log('ERR', err)
            })
    }

    render() {
        const icon = this.state.inpPasswordIsVisible ? 'eye-slash' : 'eye'
        const inpPasswordType = this.state.inpPasswordIsVisible ? 'text' : 'password'
        const formIsValid = this.state.inpUsernameIsValid && this.state.inpPasswordIsValid

        return (
            <main>
                <Row className="justify-content-center">
                    <Col md="8" lg="4" >
                        <Card body className="card-login">
                            <CardTitle className="center">Login</CardTitle>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="inpUsername">Username</Label>
                                    <Input type="text" name="username" id="inpUsername" placeholder="Your username" value={this.state.username} onChange={this.handleChange} valid={this.state.inpUsernameIsValid} invalid={!this.state.inpUsernameIsValid} />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="displayBlock" for="inpPassword">Password <span className="float-right faPasswordIsVisible" onClick={this.handleTogglePasswordVisibility}><FontAwesomeIcon icon={['fas', icon]} /></span></Label>
                                    <Input type={inpPasswordType} name="password" id="inpPassword" placeholder="Your password" value={this.state.password} onChange={this.handleChange} valid={this.state.inpPasswordIsValid} invalid={!this.state.inpPasswordIsValid} />
                                </FormGroup>
                                <Button color="primary" className="float-right" disabled={!formIsValid}>Log in</Button>
                            </Form>
                            <CardText className="text-center">
                                <NavLink tag={Link} to="/" className="text-muted">Password lost ?</NavLink>
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </main >
        )
    }
}
export default connect(null, mapDispatchToProps)(LoginBox)