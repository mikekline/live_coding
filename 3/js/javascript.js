fetch("../js/data.json")
.then(response => {
    return response.json()
})
.then(data => console.log(data.messages[1].messages[1]))

