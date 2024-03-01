// rent form validation 
function rent_validation(){ 
    var letters = /^[A-Za-z]+$/;

    if(document.rent.f_name.value==''){
        alert("Enter your name."); 
        document.rent.f_name.focus(); 
        return false; 
    }

    else if(!(document.rent.f_name.value.match(letters))){
        alert("Please enter your names only in English alphabets"); 
        document.rent.f_name.focus(); 
        return false; 
    }
    return true; 
}

// modal validation 
