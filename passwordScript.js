function generateSecurePassword() {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_+=<>?';

    const getRandomChar = (charSet) => {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        return charSet[randomIndex];
    };

    let password =
        getRandomChar(lowercaseLetters) +
        getRandomChar(uppercaseLetters) +
        getRandomChar(numbers) +
        getRandomChar(specialCharacters);

    const remainingLength = 8 - password.length;
    const allCharacters = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;
    
    for (let i = 0; i < remainingLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    const shuffledPassword = password.split('').sort(() => Math.random() - 0.5).join('');

    return shuffledPassword;
}

const securePassword = generateSecurePassword();
console.log("Bezpieczne hasło:", securePassword);
