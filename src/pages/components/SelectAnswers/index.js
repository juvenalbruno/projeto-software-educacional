import { Container } from "./styles";
import { BsCheckLg } from "react-icons/bs";

function SelectAnswers({ id, label, answerIsCorrect, selected, setSelected }){
    const answerCorrect = selected !== null ? ((selected === id) && answerIsCorrect) : null;
    console.log(selected === id)
    return(
        <Container 
            isCorrect={answerCorrect} 
            onClick={setSelected}
            selected={selected === id}
        >
            <input type="radio" id={id} name="resposta" value={selected} />
            <div className="circle">{selected === id ? <BsCheckLg /> : null}</div>
            <label htmlFor={id}>{label}</label>
        </Container>
    );
}
export { SelectAnswers };