import React from "react";
import { GetNexModuleDB } from "../../utils/getNextModulesDB";
import { Container } from './styles';
import { FiArrowRight } from 'react-icons/fi';

function NextModule(){
    const module = GetNexModuleDB();
    return(
        <Container>
            <h1>Próximo módulo:</h1>
            <h2>{module.name}</h2>
            <a href={`module?id=${module.id}`}>Iniciar módulo <FiArrowRight /></a>
        </Container>
    );
}

export { NextModule };