export async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function generateRandomText(length: number): Promise<string> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    // Use a delay or async operation if needed, otherwise we can just simulate an async function
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);

        // Simulating an asynchronous operation (like a small delay) to show the async function behavior
        await new Promise(resolve => setTimeout(resolve, 10));  // Wait for 10ms between iterations (optional)
    }

    return result;
}

export async function generateRandomNumber(length: number): Promise<string> {
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomDigit = Math.floor(Math.random() * 10);  // Generates a random digit (0-9)
        result += randomDigit.toString();

        // Simulating an asynchronous operation (like a small delay)
        await new Promise(resolve => setTimeout(resolve, 10));  // Optional delay (10ms)
    }

    return result;
}