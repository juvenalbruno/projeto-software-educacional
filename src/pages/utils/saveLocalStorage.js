const key = 'OBJ_SAVED';

export function saveData({ questionId, answersId, isCorrect = false, word = null }){
    let savedObject = JSON.parse(localStorage.getItem(key)) || [];

    let obj = { 
        questionId: questionId,
        answersId: answersId,
        isCorrect: isCorrect,
        word: word };

    savedObject = savedObject.filter(x => x.questionId !== questionId);
    savedObject.push(obj);    
    localStorage.setItem(key, JSON.stringify(savedObject));
};

export function getItensSaved(){
    return JSON.parse(localStorage.getItem(key));    
}