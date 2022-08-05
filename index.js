// Write your solution in this file!

const employee = {
    name: {
        line1: `Michael`,
        line2: `Ross`
    },
    streetAdress: {
        city: `Houston`,
        state: `TX`,
        zipcode: `77546`,
        street: `89 Broadway`,

    },
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newobj = {...employee }
    newobj[key] = value
    return newobj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newobj = {...employee }
    delete newobj[key]
    return newobj

}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value
    return employee
}