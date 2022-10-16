export function GetParamsUrl(param){
    return new URLSearchParams(window.location.search).get(param);
}