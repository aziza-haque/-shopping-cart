function updatePhoneNumber(isIncrease){
    const phoneField=document.getElementById('phone-field');
    const phoneFieldStr=phoneField.value ;
    const prephoneField=parseFloat(phoneFieldStr);
    let newphoneField;

    if(isIncrease==true){
        newphoneField=prephoneField+1;
    }
    else{
        newphoneField=prephoneField-1;
    }

    phoneField.value=newphoneField;
    return newphoneField;

}



document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newphoneField= updatePhoneNumber(true);
    updatePhoneTotalPrice(newphoneField);
    calculateSubtotal();

 
})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newphoneField= updatePhoneNumber(false);
    updatePhoneTotalPrice(newphoneField);
    calculateSubtotal();


})