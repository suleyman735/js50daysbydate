const strengther = document.querySelector('.strengther');
const passwordInput = document.querySelector('input[type="text"');
const passwordCheck = document.querySelector('.password-check');

passwordInput.addEventListener('input', updateStrengther);

function updateStrengther() {
    const assessments = calculatePasswordStrength(passwordInput.value);
    //    console.log('helle')

    let strength = 100
    passwordCheck.innerHTML = "";

    assessments.forEach(assessment => {
        if (assessment == null) return;

        strength -= assessment.stregnthLost;
        const pwdCheckEl = document.createElement('p');
        pwdCheckEl.innerHTML = assessment.pwdCheck;
        passwordCheck.appendChild(pwdCheckEl)
    });
    strengther.style.setProperty("--strength-amount", strength)
}

function calculatePasswordStrength(password) {
    const assessment = [];
    assessment.push(lengthAssessment(password));
    assessment.push(lowercaseAssessment(password))
    assessment.push(uppercaseAssessment(password))
    assessment.push(numberAssessment(password))
    assessment.push(specialCharacterAssessment(password))
    assessment.push(repeatCharactersAssessment(password))
    return assessment;
}


//lenght assessment function
function lengthAssessment(password) {
    const length = password.length;
    if (length <= 5) {
        return {
            pwdCheck: 'Password is too nshort',
            stregnthLost: 40,
        }
    }
    if (length <= 10) {
        return {
            pwdCheck: 'Password is too nshort',
            stregnthLost: 15,
        }

    }
    console.log(length);
}


//Lowercase Chraracter assessment function

function lowercaseAssessment(password) {
    return characterTypeassesment(password, /[a-z]/g, 'lowercase characters')
}


//UpperCase Chraracter assessment function

function uppercaseAssessment(password) {
    return characterTypeassesment(password, /[A-Z]/g, 'Uppercase characters')

}

//NUmber Assessment Function
function numberAssessment(password) {
    return characterTypeassesment(password, /[0-9]/g, "numbers")
}

//special CharacterAssessment function
function specialCharacterAssessment(password) {
    return characterTypeassesment(password, /[^0-9a-zA-Z\s]/g, "special Characters")

}


// Characater Type Assessment Function

function characterTypeassesment(password, regX, assessmentType) {
    const characterMatch = password.match(regX) || [];
    console.log(characterMatch)

    if (characterMatch.length === 0) {
        return {
            pwdCheck: ` Password has no ${assessmentType}`,
            stregnthLost: 20,
        }
    }

    if (characterMatch.length <= 2) {
        return {
            pwdCheck: `Password has more ${assessmentType}`,
            stregnthLost: 5,
        }
    }

}

function repeatCharactersAssessment(password) {
    const repeatCharMatch = password.match(/(.)\1/g) || [];

    if (repeatCharMatch.length > 0) {
        return {
            pwdCheck: `Password has repeat characters`,
            stregnthLost: repeatCharMatch.length * 10,

        }


    }
}

