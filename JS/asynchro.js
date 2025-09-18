// Asynchronous JS Program using async/await

function login(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Logging in...");
        setTimeout(() => {
            if (username === "admin" && password === "1234") {
                console.log("Login is successful");
                resolve(true);
            } else {
                console.log("Login has failed");
                reject("Invalid credentials entered");
            }
        }, 1000);
    });
}

function getData() {
    return new Promise((resolve) => {
        console.log("Fetching data...");
        setTimeout(() => {
            let data = [10, 20, 30, 40, 50];
            console.log("Data fetched:", data);
            resolve(data);
        }, 1000);
    });
}

function calculateData(data) {
    return new Promise((resolve) => {
        console.log("Calculating data...");
        setTimeout(() => {
            let sum = data.reduce((a, b) => a + b, 0);
            let avg = sum / data.length;
            console.log(`Calculation done → Sum: ${sum}, Avg: ${avg}`);
            resolve({ sum, avg });
        }, 1000);
    });
}

function sendSms(result) {
    return new Promise((resolve) => {
        console.log("Sending SMS");
        setTimeout(() => {
            console.log(`SMS Sent: "Sum = ${result.sum}, Average = ${result.avg}"`);
            resolve();
        }, 1000);
    });
}

function logout() {
    return new Promise((resolve) => {
        console.log("Logging out...");
        setTimeout(() => {
            console.log("Logged out successfully");
            resolve();
        }, 1000);
    });
}

// Main Program Flow
async function main() {
    try {
        await login("admin", "1234");
        const data = await getData();
        const result = await calculateData(data);
        await sendSms(result);
        await logout();
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
