FROM mysql:latest

ENV MYSQL_DATABASE tis4-db
ENV MYSQL_USER root
ENV MYSQL_ROOT_PASSWORD tis4

RUN echo "America/Sao_Paulo" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

EXPOSE 3336
