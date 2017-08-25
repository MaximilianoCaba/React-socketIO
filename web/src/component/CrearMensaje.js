import React, {Component} from 'react';
import '../css/App.css';

var socket = require('socket.io-client')('http://localhost:3001');

class MensajeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {author: '', texto: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        socket.emit('new-message', this.state);
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name="author" type="text" value={this.state.author} onChange={this.handleChange} />
                    Mensaje:
                    <input name="texto" type="text" value={this.state.texto} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default MensajeForm;



