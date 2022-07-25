// https://flaviocopes.com/how-to-unlimited-function-parameters-js/

// Using the spread operator (...), you can pass unlimited parameters into a function. 

const join = (...strings) => {
    let combinedString = ``
     for (const string of strings) {
        combinedString = `${combinedString}${string}`
    }
    return combinedString
}

join(`this`, `is`, `strange`)