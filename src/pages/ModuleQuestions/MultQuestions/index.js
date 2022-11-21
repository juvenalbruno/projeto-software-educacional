import React from "react";
import { SelectAnswers } from "../../components/SelectAnswers";
import { getItensSaved, saveData } from "../../utils/saveLocalStorage";
import { Container } from "./styles";

function MultQuestions({ questionId, questionTitle, questionImg, answers }){
    const [selectedValue, setSelectedValue] = React.useState();
    const dataStorage = getItensSaved();

    React.useEffect(() => {
        if(dataStorage){
            const question = dataStorage?.find(i => i.questionId === questionId);
            if(question)
                setSelectedValue(question.answersId);
        }
    }, [questionId]);

    React.useEffect(() => {
        if(selectedValue)
            saveData({
                questionId: questionId,
                answersId: selectedValue
            });
    }, [selectedValue]);

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
                            setDisabled={selectedValue > 0 && selectedValue != null}
                        />
                    );
                })}
            </div>

        </Container>
    );
}
export { MultQuestions };