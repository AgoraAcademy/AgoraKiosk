FROM ubuntu
RUN apt-get clean
RUN apt-get update
RUN apt-get install -y software-properties-common
RUN apt-get update
RUN apt-get -f install -y nodejs nginx npm curl unzip
EXPOSE 80