# Frontend Mentor Product Feedback App
- [Challenge URL](https://www.frontendmentor.io/challenges/product-feedback-app-wbvUYqjR6)

## Local Development:
1) This serves an API that connects to a Postgres database. Create a `.env` file with the following values:
```
DB_HOST=""
DB_USERNAME=""
DB_PASSWORD=""
DB_NAME=""
```
The database can be completely fresh and TypeOrm will handle creating the necessary tables.

2) `npm install` from inside the `/api` directory.
3) Open Postman and [add this collection](https://www.getpostman.com/collections/f5d9d864b86f6ad77a29) to your local instance. This will provide all the necessary api requests.
4) To deploy, run `npm run deploy` from the root directory. This will create a subtree branch based off of the `/api` directory. You can configure Heroku or another hosting system to easily build and startup the API from here.

## Learning Curves
I normally break my app into sections based on their function. ie: `/controllers`, `/services`, etc. This time I went with a Repository Pattern (I think). I grouped items by the data entity they represent and manipulate. Ergo:
```
/comments
|_comments.controller.ts // Handles http communication
|_comments.entity.ts     // Defines the data relationship and interfaces
|_comments.service.ts    // Executes actions on the database
|_comments.module.ts     // Packages everything up nicely
```

I've also never given TypeOrm a serious look until now. I have yet to decide if I like the Code-First approach to database creation and updating. It surly makes things easier at a small scale, but I have a suspicion that its not the most optimal at scale. However, while it was difficult figuring out how to initially define one-to-many and many-to-one relationships, TypeOrm did a fantastic job of setting up all the necessary constraints and columns.
