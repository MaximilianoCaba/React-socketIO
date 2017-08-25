import React, {Component} from 'react';
import '../css/App.css';

var socket = require('socket.io-client')('http://localhost:3001');

class obtenerMensajes extends Component {
    constructor(props) {
        super(props);
        this.state = {mensajes: []};
    }

    componentDidMount() {

        socket.on('messages', function (mensajes) {
            console.log(mensajes);
            this.setState({mensajes});
        }.bind(this));
    }

    render() {
        return (
            <div className="App">
                Chat! Online!
                <ul>
                    {this.state.mensajes.map(mensajes =>
                        <p>{mensajes.author} - {mensajes.texto} </p>
                    )}
                </ul>
            </div>
        );
    }
}


export default obtenerMensajes;

