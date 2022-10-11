## Dockerfile 실행 방법

1. Image build
    
    ```
    docker build -t frontend-image .
    ```

2. Create container run
    
    ```
    docker run -it -p 3000:3000 --rm --name frontend frontend-image
    ```


## Local 실행 방법

1. node module install

```
npm install (or npm i)
```

2. start

```
npm start
```
