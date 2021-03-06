# Unternehmensregister

[Author](https://github.com/DubskySteam) <> [Website](https://unternehmensregister.cyber-city.systems/) <> [API Documentation](http://185.194.217.213:8085/swagger-ui/index.html) <> [Docker HUB](https://hub.docker.com/r/dubskysteam/cyberjobs)

### Frontend
![](https://img.shields.io/badge/Website-3.1-green?style=for-the-badge&logo=next.js)
![](https://img.shields.io/badge/Desktop-Unclear-red?style=for-the-badge&logo=compose)

### Backend
![](https://img.shields.io/badge/Database-2.1-green?style=for-the-badge&logo=postgresql)
![](https://img.shields.io/badge/Rest%20API-3.0-green?style=for-the-badge&logo=Spring)

### Technologies
![](https://img.shields.io/badge/Database-PostgreSQL-blue?style=for-the-badge&logo=mysql)
![](https://img.shields.io/badge/Build-Gradle-blue?style=for-the-badge&logo=Gradle)
![](https://img.shields.io/badge/Deployment-Docker-blue?style=for-the-badge&logo=Docker)

![](https://img.shields.io/badge/Development%20Server-Ubuntu%2020.04%20LTS-orange?style=for-the-badge&logo=Ubuntu)
___
### Tracker
![Main](https://img.shields.io/github/last-commit/Software-Projekt-2022/Unternehmensregister/main?style=for-the-badge)
![Dev](https://img.shields.io/github/last-commit/Software-Projekt-2022/Unternehmensregister/dev?style=for-the-badge)

![](https://img.shields.io/github/issues-raw/Software-Projekt-2022/Unternehmensregister?style=for-the-badge)
![](https://img.shields.io/github/issues-pr-raw/Software-Projekt-2022/Unternehmensregister?style=for-the-badge)
---
### Building the API
```gradle
gradle clean build
```
### Running the API
```bash
java -jar .\build\libs\RestApi-X.X.jar --CJ_HOST=URL --CJ_PORT=PORT --CJ_DB=DBNAME --CJ_USER=DBUSER --CJ_PW=DBPASSWORD
```
### Building the docker image
```docker
docker build . --build-arg HOST=X --build-arg PORT=X --build-arg DB=X --build-arg USER=X --build-arg PW=X --no-cache -t cybercity/cyberjobs:latest
```
