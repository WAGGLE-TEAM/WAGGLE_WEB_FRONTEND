## How to run Dockerfile

1. Image build
    
    ```
    docker build -t frontend-image .
    ```

2. Create container run
    
    ```
    docker run -it -p 3000:3000 --rm --name frontend frontend-image
    ```


## How to run in local environment

1. node module install

    ```
    npm install (or npm i)
    ```

2. start

    ```
    npm start
    ```

## Run Prettier, Eslint

### Prettier

1. check prettier format
    ```
    npm run format
    ```

2. fix prettier format

    ```
    npm run format:fix
    ```