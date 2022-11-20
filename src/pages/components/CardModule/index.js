import { Link } from "react-router-dom";
import { CardLink } from "./styles";

function CardModule({ moduleId, moduleImg, moduleName, blocked }){
    return(
        <CardLink blocked={!blocked}>
          <Link to={!blocked ? `/module?id=${moduleId}` : ''}>
            <img src={moduleImg} alt={moduleName} />
            <span>{moduleName}</span>
          </Link>
          {blocked && <h1>Em Breve</h1>}
        </CardLink>
    );
}

export { CardModule };