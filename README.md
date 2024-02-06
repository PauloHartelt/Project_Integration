# Project Name

Project_Integration

## Description

To cure my curiosity, i made a project to test the connection between pg, a package from node.js, postgresql and client applications (like DBMSs and Power BI) inside a docker container. With this project, i could see the integration between backend and BI areas in technology and the possibilities to improve, connecting data from webpages to a Power Bi.

## Installation

1. Clone this repository: `git clone git@github.com:PauloHartelt/Project_Integration.git`
2. Open the project
3. Install the dependencies: `npm install`
4. Run the code: `npm run dev`
5. Pull the postgres image: `docker pull postgres`
6. !**Important**!: Check if the port 5432 is been used.
7. Create the postgres container: `docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres`
8. (Optional) Open your DBMs with this configurations: Host - localhost , Port - 5432 , User -  postgres , Password - mysecretpassword
9. (Optional) Run the codes inside _schema.sql_ on your DBMS
10. (Optional) Open your Power BI and select _Get Data_ then _Postgres Database_
11. (Optional) Input these configurations: server - localhost , database - connecting_db , Data Connectivity - import , User Name - postgres , Password - mysecretpassword

## How to Use

To use the API, simply send HTTP requests to the available endpoints.

### Endpoints

Here are the endpoints available in the API:

- `POST /cadastrar`: Creates a new client based on the data provided in the request body.

To use the API, send HTTP requests to these endpoints using an HTTP client such as [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) or [cURL](https://curl.se/).
 
## Contributors

| [<img src="https://avatars.githubusercontent.com/u/95707984?v=4" width=115><br><sub>Paulo Hartelt</sub>](https://github.com/PauloHartelt) |
| :-----------------------------------------------------------------------------------------------------------------------------: |

## Contact

If you have any questions or suggestions about this project, feel free to contact me through my GitHub profile: [@PauloHartelt](https://github.com/PauloHartelt).
