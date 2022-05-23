ARG HOST
ARG PORT
ARG DB
ARG USER
ARG PW

FROM gradle:7.4.2-jdk11 as build

COPY ./ ./
RUN gradle clean build

FROM openjdk:17-alpine
EXPOSE 8080
EXPOSE 80
RUN mkdir /CyberJobs
COPY --from=build /home/gradle/build/libs/*.jar /CyberJobs/app.jar
ENTRYPOINT ["java","-jar","/CyberJobs/app.jar --CJ_HOST=${HOST} --CJ_PORT=${PORT} --CJ_DB=${DB} --CJ_USER={USER} --CJ_PW=${PW}"]
