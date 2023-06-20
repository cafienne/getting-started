# Getting started with Cafienne

This repository enables you to quickly setup a Cafienne demo environment with Docker.

## Prerequisites

The Cafienne demo environment consists of a set of Docker images. Make sure you have a running [Docker](https://www.docker.com/) instance available on your system.

Furthermore you need to have access to the [`Cafienne getting-started`](https://github.com/cafienne/getting-started) repository in Github.

Please contact [info@cafienne.io](mailto:info@cafienne.io) to arrange the proper access.
Before contacting Cafienne make sure to have a [Github](https://github.com) account.

## Downloading and starting the environment

Next clone this repository from GitHub by running the following command in a terminal:

``` bash
# this step puts the code onto your system
git clone https://github.com/cafienne/getting-started.git

# go into the directory that holds the code
cd ./getting-started

# tell Docker to spin up the environment - this may take a while the first time you do it
docker-compose up
```

Earlier versions of this setup used an in-memory database. We have modified this to work with a setup using [PostgreSQL](https://www.postgresql.org/).
This way, when Docker environment is stopped, and then started again, the case instances created earlier are still available.
To start with a fresh environment, you'd have to stop the containers and remove the appropriate volumes.

## Exposed URLs of the Cafienne Demo environment

After starting up the Cafienne Demo environment, the following URL allow you to access the various parts of the
environment:

- Cafienne Generic UI: [http://localhost:3317](http://localhost:3317)
- Cafienne IDE environment: [http://localhost:2081](http://localhost:2081)
- Cafienne API (exposed through Swagger): [http://localhost:2027](http://localhost:2027)
- MailCatcher web UI: [http://localhost:1080](http://localhost:1080)

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

## Some other Docker commands 

Sometimes `Cafienne` publishes new versions of the Docker images.
Through `docker-compose pull` you can retrieve the latest [`Cafienne images`](https://hub.docker.com/orgs/cafienne/repositories) from [Docker Hub](https://hub.docker.com).

### Examples

``` bash
# Spin up the environment in detached mode. Will return the console to you
docker-compose up -d

# bring down the environment
docker-compose stop

# refresh the images and download latest versions from https://hub.docker.com
docker-compose pull
```
