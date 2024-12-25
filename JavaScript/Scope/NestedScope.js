function one() {
    const username = "Alia"

    function two() {
        const website = "OpenAI"
        console.log(username)
    }
    console.log(website) // this part will not work as the scope of nested function i.e two is not defined outside 
    two()
}
one()