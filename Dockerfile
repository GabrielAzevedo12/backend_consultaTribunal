ARG PORT=443
FROM cypress/browsers:latest

RUN apt-get install python3 -y
RUN echo $(python3 -m site --user-base)

COPY requirements.txt  .

ENV PATH /home/root/.local/bin:${PATH}

RUN apt-get update
RUN apt-get install -y python3-pip
RUN pip install -r requirements.txt  
RUN python3 -m pip install webdriver-manager --upgrade 
RUN python3 -m pip install packaging
RUN python3 -m pip install docker-compose
COPY . .
CMD uvicorn main:app --host 0.0.0.0 --port $PORT
