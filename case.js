function updateCaseNumber(isIncrease){
    const caseField=document.getElementById('case-field');
    const caseFieldStr=caseField.value ;
    const precaseField=parseFloat(caseFieldStr);
    let newCaseField;

    if(isIncrease==true){
        newCaseField=precaseField+1;
    }
    else{
        newCaseField=precaseField-1;
    }

    caseField.value=newCaseField;
    return newCaseField;

}

function updateCaseTotalPrice(newCaseField){
    const caseTotalPrice=newCaseField*59;
    const totalCaseElement=document.getElementById('case-total');
    totalCaseElement.innerText=caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseField= updateCaseNumber(true);
    updateCaseTotalPrice(newCaseField);
    calculateSubtotal();

 
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseField= updateCaseNumber(false);
    updateCaseTotalPrice(newCaseField);
    calculateSubtotal();

})