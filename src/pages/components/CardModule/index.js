import { Link } from "react-router-dom";
import { CardLink } from "./styles";

function CardModule({ moduleId, moduleImg, moduleName }){
    return(
        <CardLink>
          <Link to={`/module?id=${moduleId}`}>
            <img src={moduleImg} alt={moduleName} />
            <span>{moduleName}</span>
          </Link>
        </CardLink>
    );
}

export { CardModule };