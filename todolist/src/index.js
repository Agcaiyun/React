import React, { Fragment, createRef } from 'react';
import ReactDOM from 'react-dom';
import FancyButton from './LogProps'

const ref = createRef()

ReactDOM.render(
    <FancyButton ref={ref} />,
    document.getElementById('root')
);