import React from "react";
import { SelectAnswers } from "../../components/SelectAnswers";
import { Container } from "./styles";

function MultQuestions({ questionTitle, questionImg, answers }){
    const [selectedValue, setSelectedValue] = React.useState();

    return (
        <Container>
            <h1>{questionTitle}</h1>
            <img src={questionImg} alt={questionTitle} />

            <div className="select">
                {answers?.map((item, index) => {
                    return (
                        <SelectAnswers 
                            key={item.id}
                            id={item.id}
                            label={item.label} 
                            answerIsCorrect={item.answerIsCorrect} 
                            selected={selectedValue}
                            setSelected={() => setSelectedValue(item.id)}
                        />
                    );
                })}
            </div>

        </Container>
    );
}
export { MultQuestions };