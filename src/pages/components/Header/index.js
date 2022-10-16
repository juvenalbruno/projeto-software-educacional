import React from 'react';
import { Link } from 'react-router-dom';
import { FiLayers } from "react-icons/fi";


import { Container } from './styles';

export function Header(){
    return(
        <Container>
            <Link to='/' >
                <FiLayers />
                <h1>Módulos</h1>
            </Link>
        </Container>
    );
}