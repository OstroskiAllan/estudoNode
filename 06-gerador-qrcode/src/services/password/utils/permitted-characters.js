
async function permittedCharacters() {
    let permitted = [];

    if(process.env.UPPERCASE_LETTERS === "TRUE")
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVXWYZ");
    if(process.env.LOWERCASE_LETTERS === "TRUE")
        permitted.push(..."abcdefghijklmnopqrstuvxwyz");
    if(process.env.NUMBERS === "TRUE")
        permitted.push(..."0123456789");
    if(process.env.SPECIAL_CHARACTERS === "TRUE")
        permitted.push(..."!@#$%^&*()-_");
    
    return permitted;
}

export default permittedCharacters;