import React from 'react';
import { Link } from 'react-router-dom';
import { FiLayers, FiRotateCw } from "react-icons/fi";
import { deleteAnswers } from '../../utils/saveLocalStorage'
import { Container } from './styles';

export function Header(){

    function Clear() {
        deleteAnswers();
        window.location.reload();
    }

    return(
        <Container>
            <div>
                <Link to='/' >
                    <FiLayers />
                    <h1>Módulos</h1>
                </Link>
            </div>
            <button onClick={() => Clear()}>
                <FiRotateCw />
                <h1>Limpar</h1>
            </button>
        </Container>
    );
}