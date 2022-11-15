import React from 'react';
import { Container } from './styles';

function Complete({ questionTitle, questionImg, question, answers }){
    const arr = question.toUpperCase().split('');
    const arrCorrect = answers.toUpperCase().split('');
    const[arrComplete, setArrComplete] = React.useState(arr);
    const[arrTemp, setArrTemp] = React.useState(null);

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

    return (
        <Container>
        <h1>{questionTitle}</h1>
        <img src={questionImg} alt={questionTitle} />

        <div className="inputs-complete">
            {arrComplete.map((item, index) => 
                <input
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
                />
            )}
        </div>

    </Container>
    );
}

export { Complete };