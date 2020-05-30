import React from 'react';
import { Props } from './header';
import styled from 'styled-components';

import './style.scss'

const Button = styled.button`
    border: none;
    padding: .7em; 
`

const Header: React.FC<Props> = (props) => {
    const { title } = props;

    return <header className="header">
        <h1> {title} </h1>
    </header>
};

export default Header;