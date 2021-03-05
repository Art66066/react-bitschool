import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";
import {Container,Row,Col} from 'react-bootstrap'

class AddTask extends Component {
    state = {
        inputValue: ""
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleCl = () => {
        if(!this.state.inputValue) {
           return
        }
        else {
            this.props.handleClick(this.state.inputValue);
            this.setState({
                inputValue: ""
            })
        }
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="add task here" onChange={this.handleChange} value={this.state.inputValue} />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit" onClick={this.handleCl}>Add</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddTask
