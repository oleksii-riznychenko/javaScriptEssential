// let userRole = "admin";
// let accessLevel;

// if (userRole === "admin") {
//     accessLevel = "Full access granted";
// } else if (userRole === "manager") {
//     accessLevel = "Limited access granted";
// } else {
//     accessLevel = "No access granted";
// }

// console.log("Access Level:", accessLevel);

// let isLoggedIn = true;
// let userMessage;

// if (isLoggedIn) {
//     if (userRole === "admin") {
//         userMessage = "Welcome, Admin!";
//     } else {
//         userMessage = "Welcome, User!";
//     }
// } else {
//     userMessage = "Please log in to access the system.";
// }

// console.log("User Message:", userMessage);

// let userType = "subscriber";
// let userCategory;

// switch (userType) {
//     case "admin":
//         userCategory = "Administrator";
//         break;
//     case "manager":
//         userCategory = "Manager";
//         break;
//     case "subscriber":
//         userCategory = "Subscriber";
//         break;
//     default:
//         userCategory = "Unknown";
// }

// console.log("User Category:", userCategory);

// let isAuthenticated = true;
// let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

// console.log("Authentication Status:", authenticationStatus);

const ROLES = {
    admin: "admin",
    manager: "manager",
    subscriber: "subscriber",
    unknown: "unknown"
}
const ACCESS_LEVEL = {
    full: "Full access granted",
    limited: "Limited access granted",
    no: "No access granted",
}

const userRole = prompt("Set your role:")
const isLoggedIn = confirm('Login?')
const isAuthenticated = isLoggedIn;
let accessLevel, userMessage, userCategory = ''
const userType = userRole

if (userRole === ROLES.admin) {
    accessLevel = ACCESS_LEVEL.full
    if (isLoggedIn) {
        userMessage = `Welcome, ${ROLES.admin}!`;
    } else {
        userMessage = "Please log in to access the system.";
    }
} else if (userRole === ROLES.manager) {
    accessLevel = ACCESS_LEVEL.limited
    if (isLoggedIn) {
        userMessage = `Welcome, ${ROLES.manager}!`;
    } else {
        userMessage = "Please log in to access the system.";
    }
} else {
    accessLevel = ACCESS_LEVEL.no
}

switch (userType) {
    case ROLES.admin:
        userCategory = "Administrator";
        break;
    case ROLES.manager:
        userCategory = "Manager";
        break;
    case ROLES.subscriber:
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

const authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log({userRole, isLoggedIn, accessLevel, authenticationStatus, userMessage, userCategory, userType});