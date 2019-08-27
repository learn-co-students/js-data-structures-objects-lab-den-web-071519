// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    let driverCopy = Object.assign({}, driver)
    driverCopy[key] = value
    return driverCopy;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key) {
    let driverCopy = Object.assign({}, driver)
    delete driverCopy[key]
    return driverCopy
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}