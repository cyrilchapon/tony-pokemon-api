const endpoint = [
    {
        id: 1,
        type: "GET",
        name:"Find All",
        adress: 'api/pokemons',
    },
    {
        id: 2,
        type: "GET",
        name:"Find By Id",
        adress: 'api/pokemons/:id',
    },
    {
        id: 3,
        type: "GET",
        name: "Find By Query Name",
        adress: 'api/pokemons?name=value',
    },
    {
        id:4,
        type: "POST",
        name: "Add Pokemon",
        adress: 'api/pokemons',
    },
    {
        id:5,
        type: "PUT",
        name: "Modify entity Pokemon By Id",
        adress: 'api/pokemons/:id',
    },
    {
        id:6,
        type: "DELETE",
        name: "remove Pokemon",
        adress: 'api/pokemons/:id',
    }

]

module.exports = endpoint;