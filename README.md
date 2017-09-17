## Installation and Bootsrap

```
git clone 
npm install

npm run start
```

## Interacting with the Endpoints

```
curl http://localhost:3000/companies

curl -X POST -d `` http://localhost:3000/companies

curl -X POST -H "Content-Type: application/json" -d '{
  "companyName": "Brand House Licensing Ltd",
  "tradingName": "Brand House",
  "website": "https://www.brandhouselicensing.com.br/",
  "zipAddress": "90410560",
  "streetAddress": "Protasio Alves Avenue",
  "streetNumber": "102",
  "city": "Porto Alegre"
}' http://localhost:3000/companies
```
