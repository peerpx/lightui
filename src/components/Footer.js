import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container, Row, Col } from 'reactstrap'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <hr />
                <Container >
                    <Row>
                        <Col xs="12" sm="12" md="7" lg="8" >
                            <h3>INSTALL YOUR OWN</h3>
                            <div>If you are interested in running your own instance — for your friends, family or organization — you can get started by reading the installation documentation. You only host your own users and the content that they subscribe to, which means it's quite scalable and resource-efficient. <br />
                                <Button outline color="primary" size="sm">Read the doc</Button>{' '}
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="5" lg="4" className="social">
                            <h3>FOLLOW</h3>
                            <ul>
                                <li>
                                    <a href="https://mastodon.social/@peerpx"><FontAwesomeIcon icon={['fab', 'mastodon']} /> Mastodon</a>
                                </li>
                                <li>
                                    <a href="https://github.com/peerpx"><FontAwesomeIcon icon={['fab', 'github']} /> Github</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/peerpx"><FontAwesomeIcon icon={['fab', 'twitter']} /> Twitter</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}
export default Footer;