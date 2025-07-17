function isValid(password) {
    if (password.length < 8) return false;

    let hasUpper = false, hasLower = false, hasDigit = false, hasSpecial = false;
    let specialChars = "!@#$%^&*()_+";

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') hasUpper = true;
        else if (char >= 'a' && char <= 'z') hasLower = true;
        else if (char >= '0' && char <= '9') hasDigit = true;
        else if (specialChars.includes(char)) hasSpecial = true;
    }

    return hasUpper && hasLower && hasDigit && hasSpecial;
}

console.log(isValid("Password@123")); // ✅ True
console.log(isValid("pass12"));       // ❌ False
