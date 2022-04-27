function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
    // 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'
    // Sa
    const arr = [];
    for(let i = 0; i < drivers.length; i++) {
        //Bobby
        // if Bobby[0] === string[0]
        // if yes, then add it to add, if no, then continue
        if(drivers[i][0] === string[0]) {
            arr.push(drivers[i]);
        } else {
            continue;
        }
    }
    return arr;
}     

function matchName(names, string) {
    return names.filter(name => name.name === string)
}
