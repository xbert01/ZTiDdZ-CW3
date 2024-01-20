function generateSecurePassword() {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_+=<>?';

    const allCharacters = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;

    let password = '';
    while (password.length < 8) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}

const securePassword = generateSecurePassword();
console.log("Bezpieczne hasło:", securePassword);
