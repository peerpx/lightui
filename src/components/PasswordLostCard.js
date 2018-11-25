import React from 'react'

import { Card, CardBody, CardTitle, Button, Col, Form, FormGroup, Input, Label, Row, } from 'reactstrap'

import { isValidEmail } from '../helpers/validate'
import { ApiAuthPasswordLost } from '../helpers/api'

class PasswordLostCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            inpEmailIsValid: false,

        }

    }

    handleSubmit = (e) => {
        e.preventDefault()
        ApiAuthPasswordLost(this.state.email)

    }

    handleChange = (e) => {
        const email = e.target.value.toLowerCase().trim()
        const isValid = isValidEmail(email)
        this.setState({ email: email, inpEmailIsValid: isValid })
    }

    render() {
        return (
            <main>
                <Row className="justify-content-center">
                    <Col md="8" lg="4" >
                        <Card className="mt-5 mb-5 shadow">
                            <CardBody >
                                <CardTitle className="text-center mb-4">Password Lost</CardTitle>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup className="mt-3">
                                        <Label for="inpEmail">Your email address:</Label>
                                        <Input type="email" name="email" id="inpUsername" placeholder="you@domain.tld" value={this.state.email} onChange={this.handleChange} valid={this.state.inpEmailIsValid} invalid={!this.state.inpEmailIsValid} />
                                    </FormGroup>
                                    <Button color="primary" className="float-right mt-3" disabled={!this.state.inpEmailIsValid}>Reset my password</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </main >
        )
    }
}

export default PasswordLostCard