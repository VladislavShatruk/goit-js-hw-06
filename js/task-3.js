function checkForSpam(message) {
    normalizedMessage = message.toLowerCase();
    if (normalizedMessage.includes("spam") || normalizedMessage.includes("sale")) {
        return true;
    }
    return false;
}