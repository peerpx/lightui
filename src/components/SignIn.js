import React from 'react'
import { connect } from 'react-redux'

import { Button, Card, CardTitle, Col, Form, FormGroup, Label, Input, Row, } from 'reactstrap'
import { displayMsg, hideMsg } from "../redux/actions";


const mapDispatchToProps = {
    displayMsg,
    hideMsg
}


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

    componentDidMount() {
        //this.props.displayMsg("danger", "Hello world")
    }


    handleChange(e) {
        const name = e.target.name
        let value = e.target.value
        if (name === 'email') {
            value = value.toLowerCase()
        }
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
                                    <Label for="inpEmail">Email</Label>
                                    <Input type="email" name="email" id="inpEmail" placeholder="your email" value={this.state.email} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="inpPassword">Password</Label>
                                    <Input type="password" name="password" id="inpPassword" placeholder="choose a password" value={this.state.password} onChange={this.handleChange} />
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

export default connect(null, mapDispatchToProps)(SignIn)