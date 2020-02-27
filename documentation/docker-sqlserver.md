# Running Cafienne with Docker

This is a short "manual" to run a cafienne docker/development environment in docker.

### Required versions

To run the cafienne demo, you need at least these versions:

* Docker 17.03-ce / Docker for Mac/Win 17.03-ce +

### Running for the first time:

Ensure your Docker is using at least 4G of memory (Docker -> Preferences... -> Advanced)

To run the environment (with docker-compose) use the following steps:

1. Open a terminal/command prompt
2. Run `$ docker-compose cafienne-sqlserver.yml pull` to pull the latest Cafienne docker images
3. Run the environment by running: `$ docker-compose cafienne-sqlserver.yml up`

This will pull the required images from docker hub, create the required containers and start them.
It therefore may take a while ...

### Stopping and/or removing the environment

There are 2 methods to stop and/or remove the environment.

The first one stops a running environment and removes all created containers.
So everything is completely removed. Only use this method if you want to rebuild all
containers and start with a clean environment.

In order to do this, Open a terminal window/command prompt and run: `$ docker-compose cafienne-sqlserver.yml down`

The second method only stops the running containers and all data is preserved. Use this method if you want
to preserve all your running cases.

In order to do this, Open a terminal window/command prompt and run: `$ docker-compose cafienne-sqlserver.yml stop`

### Running the environment normally (after the first time)

After creating/running the environment the first time, you can use the following
 command to start all the containers again.

In order to do this, Open a terminal window/command prompt and run: `$ docker-compose cafienne-sqlserver.yml start`

## Exposed URLs

This composition exposes a set of URLs

- Cafienne Generic UI: [http://localhost:28080](http://localhost:28080)
- Cafienne API: [http://localhost:2027](http://localhost:2027)
- Cafienne IDE [http://localhost:2081](http://localhost:2081)