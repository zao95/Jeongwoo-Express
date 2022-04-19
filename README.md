# Jeongwoo Express

This is the Express part of the service composed of MERN stack.

## 🚀Quick Overview

📌 This service was developed using [dockers](https://www.docker.com/).
🔑 Make .env file in project root as follows.

    ```
    PORT=5000
    MONGO_URI=mongodb://your_id:your_password@your_ip:27017/your_collection
    ```

    ```
    docker build -t express -f ./DockerFile .
    docker run --name express -d -p 5000:5000 express
    ```

## Environment

✅ Operates based on the official [Node docker](https://hub.docker.com/_/node).

## 📩 Contact

awmaker@kakao.com
