import { connect } from "react-redux";
import { getNewQuote } from "../redux/actions";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Twi from '../assets/twIcon.svg'

class Qutoe extends React.Component {

    render() {
        const quotes = this.props.quotes;
        const id = this.props.id;
        const tweet = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='${quotes[id].quote} ${quotes[id].author}'`
        const sty = ['primary','secondary','success','danger','warning','info','dark','light'][id>8 ? 8: id];
        return (
            <Card border = {sty}>
                <div id='quote-box'>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p id='text'>{quotes[id].quote}</p>
                            <Container>
                                <Row>
                                    <Col xs lg="8">
                                    <OverlayTrigger  placement="bottom" overlay={<Tooltip id="tooltip-bottom">Get a new quote!</Tooltip>}>
                                        <Button id='new-quote' className="mr-2" variant={sty} size="sm" onClick={() => this.props.getNewQuote()} >NewQuote</Button>
                                        </OverlayTrigger>
                                        <OverlayTrigger  placement="bottom" overlay={<Tooltip id="tooltip-bottom">Tweet it</Tooltip>}>
                                        <a id='tweet-quote' href={tweet} target='_blank' rel='noreferrer' alt='tweet it'>
                                        <img src={Twi} alt='twitter logo' style= {{ maxHeight:'26px', maxWidth:'26px'}}/>
                                        </a>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col xs lg="4">
                                        <footer className="blockquote-footer">
                                            <cite id='author' className="">{quotes[id].author}</cite>
                                        </footer>
                                    </Col>
                                </Row>
                            </Container>
                        </blockquote>
                    </Card.Body>
                </div>
            </Card>
        )
    }
}


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = { getNewQuote };

export default connect(mapStateToProps, mapDispatchToProps)(Qutoe)  