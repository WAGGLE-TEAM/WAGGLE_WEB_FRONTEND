## How to run Dockerfile

1. Image build
    
    ```
    docker build -t frontend-image .
    ```

2. Create container run
    
    ```
    docker run -it -p 3000:3000 --rm --name frontend frontend-image
    ```


## How to run in Local environment

1. node module install

```
npm install (or npm i)
```

2. start

```
npm start
```
