// CALLBACK
function print(callback) {  
    callback();
}


// annonymeous function
const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);


// arrow function
setTimeout(() => { 
    console.log("This message is shown after 3 seconds");
}, 3000);

// PROMISE

// in a simple terms promises are used to handle asynchroneous operations. each promise can end as a sucess or failure having 3 possible statuses/state: pending, fulfilled/resolve or rejected.


const promise = new Promise((resolve, rejected) => {
    let condition;
    if ( condition   ) {
        resolve("promise is resolved");
    }
    else {
    rejected("promise is rejected");
    }
})

const fetchData = async () => {
    try {
        const response = await fetch("https://swapi.dev/api/people/")

        // if (!response.ok === 200) throw new Error(response.status)
        const result = await response.json()
        return result;
        console.log(result);
        
    } catch (error) {
        console.error(error);
    }
}
fetchData()

// Callback hell
setTimeout(() => {
    console.log("joel");
    setTimeout(() => { 
        console.log("dominic");
        setTimeout(() => {
            console.log("mark");
            setTimeout(() => { 
                console.log("mary");
                setTimeout(() => { 
                    console.log("joe");
                },2000)
            },2000)
        }, 2000)
    }, 2000)
    
}, 2000)