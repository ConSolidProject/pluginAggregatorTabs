import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import Icon from '@material-ui/icons/AccountTree';


const mount = (el, props) => {
    ReactDOM.render(<App {...props}/>, el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector("#_overviewmodule-dev-root");
    if (devRoot) {
        mount(devRoot, {})
    }
}

export default mount
