# nodejs-case-study-getir
[![Coverage Status](https://coveralls.io/repos/github/burakozturk16/nodejs-case-study-getir/badge.svg?branch=master)](https://coveralls.io/github/burakozturk16/nodejs-case-study-getir?branch=master)

This app provides RESTful API with a single endpoint for getir case study.

I avoid over engineering but created well-structured project.

## Manual Installation

If you would still prefer to do the installation manually, follow these steps:

Clone the repo:

```bash
git clone https://github.com/burakozturk16/nodejs-case-study-getir.git
cd nodejs-case-study-getir
```

Install the dependencies:

```bash
yarn install
yarn dev # to development
# or
yarn start  # to production
```

```bash
yarn test # to run test cases
yarn coverage # to run test coverage
```

## Dependencies
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Code coverage**: using [coveralls](https://coveralls.io)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)


## API Documentation

You can view the api documentation at [browser](http://localhost:3000/v1/docs)

### API Endpoints

http://ec2-18-219-34-197.us-east-2.compute.amazonaws.com:3000/v1/records

**Records routes**:\
`POST /v1/records` - filter the records with given request body

**Response**:\
The app has centralized error/response handler :

```json
{
  "code": 404,
  "msg": "Not found",
  "records": []
}
```

**Example Request**

```jsx
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```
**Example Response Payload**
```jsx
{
  "code": 0,
  "msg": "Success",
  "records": [
    {
    "key":"TAKwGc6Jr4i8Z487",
    "createdAt":"2017-01-28T01:22:14.398Z",
    "totalCount":2700
    },
    {
    "key":"NAeQ8eX7e5TEg7oH",
    "createdAt":"2017-01-27T08:19:14.135Z",
    "totalCount":2900
    }
  ]
}
```
