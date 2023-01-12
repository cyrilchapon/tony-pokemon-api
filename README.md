# pokemon-api

## Hello ! Voiçi ma toute première API REST en Node.js

### Démarrage

initialisé les packages :

```js
npm install
```

```js
npm run dev
```

[http://localhost:3000](http://localhost:3000) => permet d'avoir l'API en local sur ça machine Hôte


### Endpoint

Pour retrouver la liste des Endpoints c'est ici => [http://localhost:3000/api](http://localhost:3000)

### Login

Les identifiants pour ce log si vous ne les avez pas trouvé c'est :

Avec insomnia en `POST` sur l'adresse [http://localhost:3000/api/login](http://localhost:3000)

```js
{
    username:"pikachu",
    password:"pikachu"
}
```

Récupéré le token et placer le dans le Header authorization : Bearer \<Token\>
