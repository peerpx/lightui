import React from 'react'
import { Button, Card, CardTitle, Col, Form, FormGroup, Label, Input, Row, } from 'reactstrap'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        console.log('et alors !')
        const name = e.target.name
        let value = e.target.value
        if (name === 'email') {
            value = value.toLowerCase()
        }

        console.log(name)
        console.log(value)
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()    
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
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="your email" value={this.state.email} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="password" placeholder="choose a password" value={this.state.password} onChange={this.handleChange} />
                                </FormGroup>
                                <Button color="primary">Sign Up !</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </main >
        )
    }
}

export default SignIn;