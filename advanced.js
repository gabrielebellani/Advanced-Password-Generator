function generateAdvancedPassword(passwordLength) {
//The Advanced Password Generator will generate a password of length defined by the user ("passwordLength" parameter) using the user choices about character that must be used (letters, capital letters, numbers and symbols)
    const numbers = () => {
        return document.getElementById("inlineCheckbox2").checked;
    }

    const capitalLetters = () => {
        return document.getElementById("inlineCheckbox3").checked;
    }

    const symbols = () => {
        return document.getElementById("inlineCheckbox4").checked;
    }

    const lettersUsage = true;
    const numberUsage = numbers();
    const capitalLettersUsage = capitalLetters();
    const symbolsUsage = symbols();
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const symbolsList = ["!","#","$","%","&","'","(",")","*","+",",","\"","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
    let array = [passwordLength];
    let generatedPassword,characterAtThisPoint, temp;

    if(lettersUsage && !numberUsage && !capitalLettersUsage && !symbolsUsage){
        for(let i=0; i<passwordLength; i++){
            array[i] = alphabet[randomNumber(25,0)];
        }
    }else if(lettersUsage && !numberUsage && !capitalLettersUsage && symbolsUsage){
        for(let i=0; i<passwordLength; i++){
            if(randomNumber(1,0)===1){
                array[i] = alphabet[randomNumber(25,0)];
            }else {
                array[i] = symbolsList[randomNumber(symbolsList.length, 0)];
            }
        }
    }else if(lettersUsage && !numberUsage && capitalLettersUsage && !symbolsUsage){
        for(let i=0; i<passwordLength; i++){
            if(randomNumber(1,0)===1){
                array[i] = alphabet[randomNumber(25,0)];
            }else {
                array[i] = alphabet[randomNumber(25, 0)].toUpperCase();
            }
        }
    }else if(lettersUsage && numberUsage && !capitalLettersUsage && !symbolsUsage){
        for(let i=0; i<passwordLength; i++){
            if(randomNumber(1,0)===1){
                array[i] = alphabet[randomNumber(25,0)];
            }else {
                array[i] = randomNumber(9, 0);
            }
        }
    }else if(lettersUsage && !numberUsage && capitalLettersUsage && symbolsUsage){
        for(let i=0; i<passwordLength; i++){
            let varType = randomNumber(900,0);
            if(varType>=0 && varType<=300){
                array[i] = alphabet[randomNumber(25,0)];//letters
            }else if(varType>=301 && varType<=600){
                array[i] = alphabet[randomNumber(25,0)].toUpperCase();//capital letters
            }else{
                array[i] = symbolsList[randomNumber(symbolsList.length, 0)];//symbols
            }
        }
    }else if(lettersUsage && numberUsage && !capitalLettersUsage && symbolsUsage){
        for(let i=0; i<passwordLength; i++){
            let varType = randomNumber(900,0);
            if(varType>=0 && varType<=300){
                array[i] = alphabet[randomNumber(25,0)];//letters
            }else if(varType>=301 && varType<=600){
                array[i] = randomNumber(9, 0);//numbers
            }else{
                array[i] = symbolsList[randomNumber(symbolsList.length, 0)];//symbols
            }
        }
    }else if(lettersUsage && numberUsage && capitalLettersUsage && !symbolsUsage){
        for(let i=0; i<passwordLength; i++){
            let varType = randomNumber(900,0);
            if(varType>=0 && varType<=300){
                array[i] = alphabet[randomNumber(25,0)];//letters
            }else if(varType>=301 && varType<=600){
                array[i] = randomNumber(9, 0);//numbers
            }else{
                array[i] = alphabet[randomNumber(25,0)].toUpperCase();//capital letters
            }
        }
    }else if(lettersUsage && numberUsage && capitalLettersUsage && symbolsUsage){
        for(let i=0; i<passwordLength; i++){
            let varType = randomNumber(1200,0);
            if(varType>=0 && varType<=300){
                array[i] = alphabet[randomNumber(25,0)];//letters
            }else if(varType>=301 && varType<=600){
                array[i] = randomNumber(9, 0);//numbers
            }else if(varType>=601 && varType<=900){
                array[i] = alphabet[randomNumber(25,0)].toUpperCase();//capital letters
            }else{
                array[i] = symbolsList[randomNumber(symbolsList.length, 0)];//symbols
            }
        }
    }

    generatedPassword = array.toString().replaceAll(",","");
    console.log(generatedPassword);
    document.getElementById("passwordOutput").value = generatedPassword;
}

function randomNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}