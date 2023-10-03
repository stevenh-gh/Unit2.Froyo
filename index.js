const getFlavorsFromUser = () => {
    let userInput = prompt("Enter a list of comma-separated froyo flavors:");
    return userInput.split(",");

}

