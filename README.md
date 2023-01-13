# pokemon-api

## Hello ! Voiçi ma toute première API REST en Node.js

### Installation

- Installer les dépendances :

```bash
npm install
```

- Démarrer un serveur MySql

```bash
docker-compose up
```

- Configurer l'application
```bash
cp .env.example .env
```

- Préparer la base de donnée
```bash
npm run db:create
npm run db:migrate
npm run db:seed
```

### Démarrage

- Lancer le serveur

```bash
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
