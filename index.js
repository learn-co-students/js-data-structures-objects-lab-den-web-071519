// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
    return {...object,
        ... {
            [key]: value
        }
    }
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromDriverByKey(object, key) {
    const newOb = {...object }
    delete newOb[key];
    return newOb;
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
    return object;
}