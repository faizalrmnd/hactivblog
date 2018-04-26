# hactivblog
A simple website where you can share article.

## Demo app

### API

#### List of login routes:

| Route                    | HTTP | Description          |
| ------------------------ | ---- | -------------------- |
| `/register`              | POST | register             |
| `/login`                 | POST | login                |

#### List of article routes:

| Route                  | HTTP   | Description                           |
| ---------------------- | ------ | ------------------------------------- |
| `/article`             | GET    | Get all the articles                  |
| `/article/:id`         | GET    | Get one article by id                 |
| `/article/:category`   | GET    | Get articles by category              |
| `/article/author`      | GET    | Get articles by author                |
| `/article/post`        | POST   | Post an article                       |
| `/article/edit/:id`    | PUT    | Edit an article                       |
| `/article/delete/:id`  | DELETE | Delete an article                     |


### Usage
#### With only npm:

```
npm install
npm start

```