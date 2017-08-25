import React, {Component} from 'react';

class BusquedaAvanzada extends Component {

    state = { searchString: '' };
    handleChange = (e) => {
        this.setState({ searchString:e.target.value });
    };
    render() {
        var juegos = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0) {
            juegos = juegos.filter(function(i) {
                return i.name.toLowerCase().match( searchString );
            });
        }
        return (
            <div>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Escriba el nombre del juego"/>
                <ul>
                    {juegos.map(function(i) {
                        return <li>{i.name}</li>;
                    }) }
                </ul>
            </div>
        );
    }

}

export default BusquedaAvanzada;
