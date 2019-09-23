FROM mysql:5.6

ENV MYSQL_USER root
ENV MYSQL_ROOT_PASSWORD=tis4
ENV MYSQL_DATABASE=tis4

# ADD ./scripts/*.sql /docker-entrypoint-initdb.d/

RUN echo "America/Sao_Paulo" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata