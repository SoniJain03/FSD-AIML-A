// Synchronous JS Program
function login(username, password) {
    console.log("Logging in...");
    if (username === "admin" && password === "1234") {
        console.log("Login successful");
        return true;
    } else {
        console.log("Login failed");
        return false;
    }
}

function getData() {
    console.log("Fetching data...");
    let data = [10, 20, 30, 40, 50];
    console.log("Data fetched:", data);
    return data;
}

function calculateData(data) {
    console.log("Calculating data...");
    let sum = data.reduce((a, b) => a + b, 0);
    let avg = sum / data.length;
    console.log(`Calculation done → Sum: ${sum}, Avg: ${avg}`);
    return { sum, avg };
}

function sendSms(result) {
    console.log(`Sending SMS`);
    console.log(`SMS Sent: "Sum = ${result.sum}, Average = ${result.avg}"`);
}

function logout() {
    console.log("Logging out...");
    console.log("Logged out successfully");
}

// Main Program Flow
function main() {
    if (login("admin", "1234")) {
        let data = getData();
        let result = calculateData(data);
        sendSms(result);
        logout();
    }
}

main();
