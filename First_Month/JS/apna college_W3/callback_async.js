// async programming
console.log("1");
console.log("2");
setTimeout(() => {
    console.log("hi");
}, 4000);
console.log("3");
console.log("4");

// callback function
function sum(a, b) {
    console.log(a + b);
}
function calculate(a, b, sumCallback) {
    sumCallback(a, b);
}
calculate(1, 2, sum);

// callback hell
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
getData(1, () => {
    console.log("coming data2");
    getData(2, () => {
        console.log("coming data3");
        getData(3, () => {
            console.log("coming data4");
            getData(4);
        });
    });
});

// promises
// let promise = new Promise((resolve, reject) => {
//     console.log("promise");
//     // resolve("success");
//     reject("error");
// });

// promises creation
// function fetchData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// then and catch
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("promise");
        // resolve("success");
        reject("err");
    });
};
let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled");
});
promise.catch((err) => {
    console.log("promise rejected");
});

// promise chain
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("d1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("d2");
            resolve("success");
        }, 4000);
    });
}
console.log("fetch d1");
asyncFunc1().then((res) => {
    console.log("fetch d2");
    asyncFunc2().then((res) => {});
});

// async await
async function sayHello() {
    console.log("hello");
}

function fetchWeatherData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}
async function getWeatherData() {
    await fetchWeatherData();
    await fetchWeatherData();
}

// IIFE
(async function () {
    await fetchWeatherData();
    await fetchWeatherData();
})();
