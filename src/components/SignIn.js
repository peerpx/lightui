import React from 'react'
import { Button, Card, CardTitle, Col, Form, FormGroup, Label, Input, Row, } from 'reactstrap'
const MainTodo = () => {
    return (
        <main>
            <Row className="justify-content-center">
                <Col md="8" lg="4" >
                    <Card body className="card-login">
                        <CardTitle className="center">Create an account</CardTitle>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="me@domain.tld" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="my amazing password" />
                            </FormGroup>
                            <Button color="primary">Sign Up !</Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </main>
    )
}

export default MainTodo;
