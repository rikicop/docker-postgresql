## cd server

## Stop Docker Containers

```bash
docker compose down
```

## Start Docker Desktop First

## cd server

```bash
docker compose up
```

## Start postgres cli with docker

```bash
docker exec -it server-postgy-1 psql -U ricardo -W perntodo

or

docker exec -it server-postgy-1 psql -U ricardo -W musical_ethnography

or

docker exec -it server-postgy-1 psql -U ricardo -W firmas
```

password: 1234

## Connect to the DB

```bash
\c perntodo
```

## Check Table if exist

```bash
\dt
```

## Start the server

```bash
cd server
npm run start
```

## Start the client in nextjs

```bash
cd frontend
npm run dev
```
