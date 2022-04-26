FROM openjdk:17-alpine
EXPOSE 8080
RUN mkdir /CyberJobs
COPY build/libs/*.jar /CyberJobs/app.jar
ENTRYPOINT ["java","-jar","/CyberJobs/app.jar"]
