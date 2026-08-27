//Classroom activity : union type alias

type paymentMethod = 'UPI' | 'credit card' | 'paypal'
function makePayment(payment: paymentMethod) {
    console.log(payment)
}
makePayment("UPI")
makePayment("credit card")

// //intersection type
type admin = {
    adminName: string,
    privilege: string
}
type employee = {
    name: string,
    empID: number,
    date: string
}
type QA = admin & employee
const QAprofile: QA = {
    adminName: 'Testleaf',
    privilege: 'Server',
    name: 'Sree',
    empID: 123,
    date: '25Aug'
}
console.log(QAprofile.adminName)
console.log(QAprofile.name)


//Homework Enum
enum Environment {
    LOCAL = 'local',
    DEVELOPMENT = 'development',
    STAGING = 'staging',
    PRODUCTION = 'production'
}

function runTests(env: Environment): void {
    console.log('Running tests in : ' + env)
}
runTests(Environment.LOCAL)
runTests(Environment.DEVELOPMENT)
runTests(Environment.STAGING)
runTests(Environment.PRODUCTION)


//Homewwork Factorial Calculation
function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not computed for negative numbers")
    }
    else {
        let result = 1
        for (let i = 2; i <= n; i++) {
            result = result * i
        }
        return result;
    }
}
console.log("Factorial is : ", factorial(5))
console.log("Factorial is : ", factorial(3))


//Homework Object Literal
let testExecutionSummary = {
    suiteName: 'Login',
    totalTests: 10,
    passedTests: 8,
    failedTests: 2,
    executionTime: '1 minute',
}
console.log("Suitename is : ", testExecutionSummary.suiteName)
console.log("Total Tests : ", testExecutionSummary.totalTests)
console.log("Passed Tests : ", testExecutionSummary.passedTests)
console.log("Failed Tests : ", testExecutionSummary.failedTests)
console.log("Execution Time :", testExecutionSummary.executionTime);

let passPercentage = (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100
console.log("Pass Percentage is : ", passPercentage + '%')
if (testExecutionSummary.failedTests === 0) {
    console.log("Execution Successfull");
}
else {
    console.log("Exection completed with Failures")
}


//Homework Fibonacci series
function fibonacci(n: number): number {
    let first = 0;
    let second = 1;

    for (let i = 0; i < n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return first;
}
console.log("Fibonacci series is : ", 5)