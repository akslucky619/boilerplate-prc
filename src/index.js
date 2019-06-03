import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss'

function Print() {
    return(
        <div>
            <h1>Hello world</h1>
            <p>My name is Slim shady</p>
        </div>
    )
}

ReactDOM.render(<Print/>, document.getElementById('root'))