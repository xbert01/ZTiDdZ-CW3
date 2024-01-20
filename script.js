function base64Encode(text) {
    return btoa(text);
}

const originalText = "WSB jest najlepsze";
const encryptedText = base64Encode(originalText);

console.log("Zaszyfrowany tekst:", encryptedText);
