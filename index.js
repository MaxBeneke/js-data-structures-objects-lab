// Write your solution in this file!
let driver = {something: "otherThing"}

function updateDriverWithKeyAndValue(driver, a, value) {
    let newishObj = driver;
    newishObj[a] = value;
    return newishObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let newObj = Object.assign({}, driver);

    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}