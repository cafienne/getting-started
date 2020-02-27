# Docker configuration 

<!-- TOC -->
## Contents
 - [Introduction](#introduction)
 - [Starting the images](#starting-the-images)
  - [Persistence in the Cafienne Demo environment](#persistence-in-the-cafienne-demo-environment)
    - [Storing events in Cassandra and data in PostgreSQL](#storing-events-in-cassandra-and-data-in-postgresql)
    - [Storing both events and data in PostgreSQL](#storing-both-events-and-data-in-postgresql)
    -  [Storing both events and data in Microsoft SQL Server](#storing-both-events-and-data-in-microsoft-sql-server)
 - [Some other Docker commands](#some-other-docker-commands)
    - [Example commands](#example-commands)
<!-- /TOC -->

## Introduction
This page gives some explanation on the use of Docker with the Cafienne Demo environment

 - Download a recent version of [Docker Desktop](https://www.docker.com/products/docker-desktop)
 - Ensure your Docker is using at least 4G of memory (`Docker -> Resources ... -> Advanced`)
 - Ensure your local drive can be mounted into Docker containers (`Docker -> Resources ... -> File Sharing`)
 
 
## Starting the images 
The Cafienne Demo environment spins up a set of `Docker` images from a [YAML](https://en.wikipedia.org/wiki/YAML) file.
The YAML file tells the images to work together.
You can start the environment with the following command

```
docker-compose up
```
This will tell `Docker` to start with the default `docker-compose.yml` file. 

Alternatively you can tell `Docker` to start with a specific `YAML` file with the `docker-compose -f` option.

## Persistence in the Cafienne Demo environment

The `getting-started` repository comes with a few alternatives for persistence. Events and Data are stored in 2 different database schemas. The [architecture documentation](demo-architecture.md) of the Cafienne Demo environment explains this in more detail.

- [Apache Cassandra](https://cassandra.apache.org/) is an append-only database, and is optimized for fast storage of events.
- [PostgreSQL](https://www.postgresql.org/) is a well known open source RDBMS. It can be used both for storage of events and data.
- [Microsoft SQL Server](https://www.microsoft.com/sql-server/) is a commercial alternative to PostgreSQL.

#### Storing events in Cassandra and data in PostgreSQL
```
docker-compose -f "cafienne-cassandra.yml" up
```

#### Storing both events and data in PostgreSQL
```
docker-compose -f "cafienne-postgres.yml" up
```

#### Storing both events and data in Microsoft SQL Server
```
docker-compose -f "cafienne-sqlserver.yml" up
```

If you are comfortable with `docker-compose`, feel free to look into the yaml files and make your own composition.

## Some other Docker commands 
Sometimes `Cafienne` publishes new versions of the Docker images.
Through `docker-compose pull` you can retrieve the latest [`Cafienne images`](https://hub.docker.com/orgs/cafienne/repositories) from [Docker Hub](https://hub.docker.com).

#### Examples
```
# Spin up the environment in detached mode. Will return the console to you
docker-compose up -d

# bring down the environment
docker-compose stop

# refresh the images and download latest versions from https://hub.docker.com
docker-compose pull


# Bring up the for the Cassandra/PostgreSQL setup
docker-compose -f "cafienne-cassandra.yml" stop
docker-compose -f "cafienne-cassandra.yml" pull
docker-compose -f "cafienne-cassandra.yml" up

# refresh the images for the PostgreSQL setup
docker-compose -f "cafienne-postgres.yml" stop
docker-compose -f "cafienne-postgres.yml" pull
docker-compose -f "cafienne-postgres.yml" up

# refresh the images for the Microsoft SQL Server setup
docker-compose -f "cafienne-sqlserver.yml" stop
docker-compose -f "cafienne-sqlserver.yml" pull
docker-compose -f "cafienne-sqlserver.yml" up
```
