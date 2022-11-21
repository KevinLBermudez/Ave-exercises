

const charactersLowerCase = (password) => { 

    let lowerCase = 'abcdefghijklmnñopqrstuvwxyz';

    for(let i = 0; i < password.length; i++) {

        if(lowerCase.includes(password[i])) {

            return true;

        }

    }

    return false;

}

const charactersCapital = (password) => {
    
        let capital = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    
        for(let i = 0; i < password.length; i++) {
    
            if(capital.includes(password[i])) {
    
                return true;
    
            }
    
        }
    
        return false;
    
}

const consecutiveLetters = (password) => { 
    
        let lowerCase = 'abcdefghijklmnñopqrstuvwxyz';
    
        let capital = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    
    
        for(let i = 1; i < password.length; i++) {
            if (lowerCase.indexOf(password[i]) != -1 && lowerCase.indexOf(password[i - 1]) != 1) {
                if (lowerCase.indexOf(password[i]) == lowerCase.indexOf(password[i - 1])) {
                    return false;
                }
            }
            if (capital.indexOf(password[i]) != -1 && capital.indexOf(password[i - 1]) != -1) {

                if (capital.indexOf(password[i]) == capital.indexOf(password[i - 1])) {
                    return false;

                }
            }

            if (lowerCase.indexOf(password[i]) != -1 && capital.indexOf(password[i - 1]) != -1) {

                if (lowerCase.indexOf(password[i]) == capital.indexOf(password[i - 1])) {

                    return false;

                }
            }
            if (capital.indexOf(password[i]) != -1 && lowerCase.indexOf(password[i - 1]) != -1) {

                if (capital.indexOf(password[i]) == lowerCase.indexOf(password[i - 1])) {

                    return false;

                }
            }

        }
        return true;
    
}


const minNumber = (password) => { 
    
        let numbers = '0123456789';
    
        let count = 0;
    
        for(let i = 0; i < password.length; i++) {
    
            if(numbers.includes(password[i])) {
    
                count++;
    
            }
    
        }
    
        if(count > 3) {
    
            return true;
    
        }
    
        return false;
    

}


const numbersConsecutive = (password) => { 
        
        let numbers = '0123456789';
        
    for (let i = 1; i < password.length; i++) {
            

        if (!isNaN(password[i]) && !isNaN(password[i - 1])) {

            if (numbers.indexOf(password[i]) == numbers.indexOf(password[i - 1])) {

                    return false;
            }
        }       
    }
    return true;

}

const noSpaces = (password) => { 
    
        if(password.includes(' ')) {
            return false;
        }
    
        return true;
    
}

const noZero = (password) => {
        
            if(password.includes('0')) {
                return false;
            }
        
            return true;
        
}

const characterSpecials = (password) => { 


    let specialCharacters = '!@#$%ˆ&*-_+=?';
    
    let count = 0;

    for(let i = 1; i < password.length; i++) {

        if(specialCharacters.includes(password[i])) {

            count++;

        }
        if(specialCharacters.includes(password[i]) && specialCharacters.includes(password[i - 1])) {

            return false;

        }
    }

    if(count < 2) {

        return false;

    }

    return true;
    
}

module.exports = {
    charactersLowerCase,
    charactersCapital,
    consecutiveLetters,
    minNumber,
    numbersConsecutive,
    noZero,
    noSpaces,
    characterSpecials
};