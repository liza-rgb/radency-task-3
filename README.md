# radency-task-3
1) Your task is to create a NodeJS application with TypeScript that will have few REST endpoints. No need to wire it with Frontend part that you did in task #2.
2) Endpoints functionality should reflect your work on the frontend side - users can add, edit and remove notes, archive and unarchive them.
3) As an option you can use NestJS instead of NodeJS/Express with TypeScript.
4) Store data in memory as a mocked object. Prepopulate it with 7 notes and use it by default as an initial state so that they are returned when you call an endpoint. You can use the same object structure as in the frontend using following columns: [“Name”, “Date”, “Category”, “Content”] and also additional columns if needed.
5) Use the Postman application to check that your endpoints work correctly.
6) Add validation to each endpoint so that no one can add more properties or miss one. E.g. if you expect { name: <string>, age: <integer> }, there should be no way to send another shape of the object or its data type. You can use Yup for that purpose.
# Hosted on Heroku
https://radiant-plains-98310.herokuapp.com
