import { Container } from "./styles";
import { GetActiviitiesDB } from "../utils/getActivitiesDB";
import { MultQuestions } from "./MultQuestions";
import { Complete } from "./Complete";

function ModuleQuestions(){
    const activities = GetActiviitiesDB();

    function SelectTypeQuestion(item, index){
        if(item.type.toUpperCase() === 'MULT'){
            return (
                <MultQuestions
                    key={index}
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
                    questionTitle={item?.title} 
                    questionImg={item?.img}
                    answers={item?.answers}
                    question={item?.question}
                />
            )
        }
    };
    
    return(
        <Container>
            {activities.map((item, index) => {
                return (
                    SelectTypeQuestion(item, index)
                );
            })}
        </Container>
    );
}

export { ModuleQuestions };