const getFlavorsFromUser = () => {
    let userInput = prompt("Enter a list of comma-separated froyo flavors:");
    return userInput.split(",");

}

const countFlavors = (flavors) => {
    const froyoFlavors = {};
    for (let flavor of flavors) {
        if (froyoFlavors[flavor] === undefined) {
            froyoFlavors[flavor] = 1;
        } else {
            froyoFlavors[flavor]++;
        }
    }

    return froyoFlavors;
}

