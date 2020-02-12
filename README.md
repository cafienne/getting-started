# Getting started with Cafienne

This repository enables you to setup a Cafienne demo environment based on docker images of Cafienne, Cassandra, Postgres, Sqlserver and Dex.

## Prerequisites

To be able to run this environment, you need to have access to the getting-started repository in Github. Please contact info@cafienne.io to arrange the proper access.
Before contacting Cafienne you need to create a [Github](https://github.com) account for yourself.

Next clone this repository from GitHub by running the following command in a terminal:

`git clone https://github.com/cafienne/getting-started.git`

## Running the environment
Cafienne can be setup with different environments:
- See [Running a Cafienne Demo docker environment with cassandra and postgres](documentation/docker-cassandra.md)
- See [Running a Cafienne Demo docker environment with only postgres](documentation/docker-postgres.md)
- See [Running a Cafienne Demo docker environment with only sqlserver](documentation/docker-sqlserver.md)

## Exposed URLs of the Cafienne Demo environment

After starting up de Cafienne Demo environment, the following URL allow you to access the various parts of the
environment:

- Cafienne Generic UI: http://localhost:28080
- Cafienne IDE environment: http://localhost:2081
- Cafienne API (exposed through Swagger): http://localhost:2027
- MailCatcher web UI: http://localhost:1080


## Building and deploying a CMMN model

### Creating a model
The Cafienne IDE can be accessed via http://localhost:2081.
In this environment, you can create new CMMN models and deploy them to the engine.

### Deploy existing models to the demo enviroment
When you already have existing models built by the Cafienne IDE, you can simply deploy them to this
environment by copying the build CMMN model XML file to the `deployments/definitions` folder in this repository.
The Cafienne Demo environment picks up any valid model that is stored in this folder.

## Help

If you need help or encounter issues, you can search the [existing repository issues](https://github.com/cafienne/getting-started/issues) or directly [create a new issue](https://github.com/cafienne/getting-started/issues/new).
