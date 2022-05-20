FROM gradle:7.4.2-jdk11 as build

COPY ./ ./
RUN gradle jar


FROM openjdk:17-alpine
EXPOSE 8080
RUN mkdir /CyberJobs
COPY --from=build /home/gradle/build/libs/*.jar /CyberJobs/app.jar
ENTRYPOINT ["java","-jar","/CyberJobs/app.jar"]
