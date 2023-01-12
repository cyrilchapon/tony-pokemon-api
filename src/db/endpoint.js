const endpoint = [
    {
        id: 1,
        type: "GET",
        name:"Find All",
        adress: 'api/pokemons',
        description:"Permet de trouver tout un tas de pokemon de recensé dans la base de donnée (mais limité à 5 au niveau de l'affichage)",
        condition:"login non obligatoire"
    },
    {
        id: 2,
        type: "GET",
        name:"Find By Id",
        adress: 'api/pokemons/:id',
        description:"Permet de trouver un pokemon particulier via son ID exacte dans la base de donnée",
        condition:"login non obligatoire"
    },
    {
        id: 3,
        type: "GET",
        name: "Find By Query Name",
        adress: 'api/pokemons?name=value',
        description:"Permet de trouver un pokemon particulier via son Nom exacte dans la base de donnée",
        condition:"login non obligatoire"
    },
    {
        id:4,
        type: "POST",
        name: "Add Pokemon",
        adress: 'api/pokemons',
        description:"Permet d'ajouter un pokemon dans la base de donnée en respectant les le pattern de ce dernier",
        condition:"login obligatoire"
    },
    {
        id:5,
        type: "PUT",
        name: "Modify entity Pokemon By Id",
        adress: 'api/pokemons/:id',
        description:"Permet de modifier les valeurs d'un pokémon via son ID",
        condition:"login obligatoire"
    },
    {
        id:6,
        type: "DELETE",
        name: "remove Pokemon",
        adress: 'api/pokemons/:id',
        description:"Permet de supprimer un pokemon via son ID",
        condition:"login  obligatoire"
    },
    {
        id:7,
        type:"POST",
        name:"Login user",
        adress:"api/login",
        description:"Vous permet de vous connecter (object => usernanme='value', password='value' ) ",
        condition:"login non obligatoire"
    }

]

module.exports = endpoint;