import React from 'react';
import ReactDOM from 'react-dom'
import Nav from './content/nav'
import Main from './content/main'
import Filtrage from "./content/flitrage";

function Index() {
    return (
        <div>
            <Nav />
            <Main />
        </div>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'))


