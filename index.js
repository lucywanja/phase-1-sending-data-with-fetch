// Add your code here

// SEND DATA TO SERVER
function submitData(name, email){
    return fetch("http://localhost:3000/users",{
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            "Accept": "application/json"

        },
        body:JSON.stringify({
            name,
            email

        })

    } )
    // Handle the response from the server
    .then(function ( response){
        return response.json()
    })
    .then(function ( object){
        document.body.innerHTML = object[ "id" ]
    })
    // Handle errors
    .catch(function (error){
        document.body.innerHTML = error.message
    })
}
