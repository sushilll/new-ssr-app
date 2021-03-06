import React from 'react';
import {render, hydrate} from 'react-dom';

import App from "./Components/App";

hydrate(
    <App />,
    document.getElementById("root")
)