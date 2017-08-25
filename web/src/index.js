import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import ObtenerMsj from './component/ObtenerMensajes';
import FormMensaje from './component/CrearMensaje';
import BusquedaAvanzada from './component/BusquedaAvanzada';
import './css/index.css';

var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];

ReactDOM.render(
    <App />,
    document.getElementById('cabezera')
);

ReactDOM.render(
    <ObtenerMsj />,
    document.getElementById('msgs')
);

ReactDOM.render(
    <FormMensaje />,
    document.getElementById('new-msg')
);

ReactDOM.render(
    <BusquedaAvanzada items={libraries} />,
    document.getElementById('content')
);



function cambioHora() {
    const element = (
        <div>
            <h1></h1>
            <h3> Hora actual: {new Date().toLocaleTimeString()}.</h3>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('hora-actual')
    );

}


setInterval(cambioHora, 1000);
