import { Container } from "./styles";
import { GetActiviitiesDB } from "../utils/getActivitiesDB";
import { MultQuestions } from "./MultQuestions";

function ModuleQuestions(){
    const activities = GetActiviitiesDB();

    function SelectTypeQuestion(item, index){
        console.log(item?.title)
        return (
            <MultQuestions
                key={index}
                questionTitle={item?.title} 
                questionImg={item?.img}
                answers={item?.answers}
            />
        )
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