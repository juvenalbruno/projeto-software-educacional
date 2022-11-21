import React from "react";
import { getItensSaved, saveData } from '../../utils/saveLocalStorage';
import { Container, Input } from './styles';

function Calc({ questionId, questionTitle, questionText, question, answers }){
    const arr = question.toUpperCase().split(',');
    const arrCorrect = answers.toUpperCase().split(',');
    const[arrComplete, setArrComplete] = React.useState(arr);
    const[arrTemp, setArrTemp] = React.useState(null);

    const dataStorage = getItensSaved();

    function Slit(value, index){
        let arry = arrComplete;
        arry[index] = value;
        setArrTemp(arry);
    }

    React.useEffect(() => {
        if(arrTemp !== null){
            setArrComplete(arrTemp);
            setArrTemp(null);
        }
    }, [arrTemp]);


    React.useEffect(() => {
        if(dataStorage){
            const question = dataStorage?.find(i => i.questionId === questionId);
            if(question)
            setArrComplete(question.word);
        }
    }, [questionId]);

    React.useEffect(() => {
        if(arrTemp)
            saveData({
                questionId: questionId,
                word: arrTemp
            });
    }, [arrTemp]);
    
    return(
        <Container>
            <h1>{questionTitle}</h1>
            <h2>{questionText}</h2>
            <div className="inputs-complete">
                {arrComplete.map((item, index) => 
                    <Input
                        key={index}
                        type="text" 
                        value={item !== '*' 
                            ? item === arrCorrect[index] 
                                ? arrComplete[index] 
                                : arrComplete[index] 
                            : ''
                        } 
                        onChange={e => Slit(e.target.value.toUpperCase(), index)} 
                        disabled={item === arrCorrect[index]}
                        isCorrectComplete={(arrComplete[index] === '*')
                            ? '1px solid #000' 
                            : arrCorrect[index] !== arrComplete[index]
                                ? '3px solid #ff0000'
                                : '1px solid #000'
                        }
                    />
                )}
            </div>
        </Container>
    );
}

export { Calc };