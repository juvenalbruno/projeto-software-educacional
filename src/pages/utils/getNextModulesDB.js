import { GetParamsUrl } from "./getParams";
import db_modules from "../../db/modules.json";

export function GetNexModuleDB(){
    return db_modules.filter(e => e.id !== Number(GetParamsUrl("id")))[0];
}