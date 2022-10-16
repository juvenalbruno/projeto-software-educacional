import { GetParamsUrl } from "./getParams";
import db_activities from "../../db/activities.json";


export function GetActiviitiesDB(){
    return db_activities.filter(e => e.module_id === Number(GetParamsUrl("id")));
}