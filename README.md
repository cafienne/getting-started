# Getting started with Cafienne

This repository enables you to quickly setup a Cafienne Demo environment with Docker.

## Prerequisites

The Cafienne Demo environment consists of a set of Docker images. Make sure you have a running [Docker](https://www.docker.com/) or  [Rancher(moby)](https://rancherdesktop.io/) instance available on your system.
Also make sure VSCode is installed.

## Downloading and starting the environment

Open the development container with: [![Open in Remote - Containers](https://img.shields.io/static/v1?label=Remote%20-%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/cafienne/getting-started).

In the file .devcontainer/devcontainer.json one can make the choice between running with an inmemory db (H2) or with postgresdb. 

## Exposed URLs of the Cafienne Demo environment

After starting up the Cafienne Dev container, the following URLs allow you to access the various parts of the
environment:

- Cafienne IDE environment: http://localhost:33081
- Cafienne Generic UI: http://localhost:33080 (login with: employee-eddy/Eddy)
- Cafienne API (exposed through Swagger): http://localhost:33027 (Authorize with: employee-eddy/Eddy)
- Cafienne Query database manager: http://localhost:33028/
  - In case of PGAdmin (postgres)
    - login: user@domain.com / SuperSecret
    - connect cafienne databases with password: mysecret
  - In case of H2 (inmemory)
    - Setting: Generic HSQLDB
    - Driver Class: org.hsqldb.jdbcDriver
    - JDBC URL: jdbc:hsqldb:mem:mymemdb


## Building and deploying a CMMN model

### Creating a model
The Cafienne IDE can be accessed via http://localhost:33081.
In this environment, you can create new CMMN models and deploy them to the engine.
Unit tests can be run using the Mocha extension available in this dev container.

### Deploy existing models to the demo enviroment
When you already have existing models built by the Cafienne IDE, you can simply deploy them to this
environment by copying the build CMMN model XML file to the `CaseFiles/Precompiled` folder in this repository.
The Cafienne Dev Container picks up any valid model that is stored in this folder.

## Help

If you need help or encounter issues, you can search the [existing repository issues](https://github.com/cafienne/getting-started/issues) or directly [create a new issue](https://github.com/cafienne/getting-started/issues/new).
