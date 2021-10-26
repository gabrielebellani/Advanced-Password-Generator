function generateBasicPassword(passwordLength){
    //The Basic Password Generator will generate a password of length defined by the user ("passwordLength" parameter) using only letters and numbers
    let pswLength = passwordLength, generatedPassword, characterAtThisPoint, temp;
    let array = [pswLength];
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    console.log(alphabet.length);
    for(let i=0; i<pswLength; i++){
        let varType = randomNumber(100,-100);

        if(varType<=0){
            temp = alphabet[randomNumber(25, 0)];
            if(randomNumber(1,0)===1){
                characterAtThisPoint = temp;
            }else{
                characterAtThisPoint = temp.toUpperCase();
            }
        }else{
            characterAtThisPoint = randomNumber(9,0);
        }

        array[i] = characterAtThisPoint;

    }

    generatedPassword = array.toString().replaceAll(",","");
    console.log(generatedPassword);
    document.getElementById("passwordOutput").value = generatedPassword;
}

function randomNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

