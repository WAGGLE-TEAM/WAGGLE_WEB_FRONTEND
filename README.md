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

2. start (with next.js dev mode)

    ```
    npm run dev
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

### ESlint

1. check eslint

    ```
    npm run lint
    ```

2. fix eslint

    ```
    npm run lint:fix
    ```

### Storybook

```
npm run storybook
```
