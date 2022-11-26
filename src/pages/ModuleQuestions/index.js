import React from 'react';
import { Container } from "./styles";
import { GetActiviitiesDB } from "../utils/getActivitiesDB";
import { MultQuestions } from "./MultQuestions";
import { Complete } from "./Complete";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Calc } from './Calculo';
import { NextModule } from './NextModule';

function ModuleQuestions(){
    const activities = GetActiviitiesDB();
    const [pagination, setPagination] = React.useState(0);
    const [moduleDafault, setModuleDafault] = React.useState(false);

    function SelectTypeQuestion(item, index){
        if(item.type.toUpperCase() === 'MULT'){
            return (
                <MultQuestions
                    key={index}
                    questionId={item.id}
                    questionTitle={item?.title} 
                    questionImg={item?.img}
                    answers={item?.answers}
                />
            )
        }

        else if(item.type.toUpperCase() === 'COMPLETE'){
            return (
                <Complete 
                    key={index}
                    questionId={item.id}
                    questionTitle={item?.title} 
                    questionImg={item?.img}
                    answers={item?.answers}
                    question={item?.question}
                />
            )
        }
        
        else if(item.type.toUpperCase() === 'CALC'){
            return (
                <Calc 
                    key={index}
                    questionId={item.id}
                    questionTitle={item?.title} 
                    questionText={item?.text}
                    answers={item?.answers}
                    question={item?.question}
                />
            )
        }
    };

    function Pagination(value){
        if(value < activities.length && value >= 0){
            setPagination(value);
            setModuleDafault(false);
        }

        else if(value === activities.length)
            setModuleDafault(true);
    }
    
    return(
        <Container>
            <div className="pagination">
                <button 
                    className={pagination === 0 ? 'blocked' : ''}
                    disabled={pagination === 0} 
                    onClick={() => Pagination(pagination - 1)}>
                        <FiArrowLeft /> Anterior</button>

                <button 
                    className={moduleDafault  ? 'blocked' : ''}
                    disabled={moduleDafault} 
                    onClick={() => Pagination(pagination + 1)}>
                        Próximo <FiArrowRight /></button>
            </div>

            { moduleDafault 
                ? <NextModule />
                : SelectTypeQuestion(activities[pagination], pagination) 
            }


        </Container>
    );
}

export { ModuleQuestions };