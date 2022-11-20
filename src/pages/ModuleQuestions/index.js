import React from 'react';
import { Container } from "./styles";
import { GetActiviitiesDB } from "../utils/getActivitiesDB";
import { MultQuestions } from "./MultQuestions";
import { Complete } from "./Complete";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

function ModuleQuestions(){
    const activities = GetActiviitiesDB();
    const [pagination, setPagination] = React.useState(0);

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
    };

    function Pagination(value){
        if(value < activities.length && value >= 0)
            setPagination(value);
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
                    className={pagination === activities.length - 1 ? 'blocked' : ''}
                    disabled={pagination === activities.length - 1} 
                    onClick={() => Pagination(pagination + 1)}>
                        Próximo <FiArrowRight /></button>
            </div>

            { SelectTypeQuestion(activities[pagination], pagination) }
        </Container>
    );
}

export { ModuleQuestions };