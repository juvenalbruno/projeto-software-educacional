import { Container } from "./styles";
import { GetActiviitiesDB } from "../utils/getActivitiesDB";

function ModuleQuestions(){
    const activities = GetActiviitiesDB();

    console.log('activities => ', activities )
    
    return(
        <Container>
            <h3>{}</h3>
        </Container>
    );
}

export { ModuleQuestions };