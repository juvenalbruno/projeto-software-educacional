import { Container } from "./styles";
import { BsCheckLg } from "react-icons/bs";

function SelectAnswers({ id, label, answerIsCorrect, selected, setSelected, setDisabled }){
    const answerCorrect = selected !== null ? ((selected === id) && answerIsCorrect) : null;

    return(
        <Container 
            isCorrect={answerCorrect}
            style={!setDisabled ? {cursor : 'pointer'} : {cursor: 'not-allowed'}}
            onClick={!setDisabled ? setSelected : () => ''}
            selected={selected === id}
        >
            <input type="radio" id={id} name="resposta" value={selected} />
            <div className="circle">{selected === id ? <BsCheckLg /> : null}</div>
            <label htmlFor={id} style={!setDisabled ? {cursor : 'pointer'} : {cursor: 'not-allowed'}} >{label}</label>
        </Container>
    );
}
export { SelectAnswers };