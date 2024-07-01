### Steps to make POST admin/newsletter

#### Where we stand currently

1. We have to make an admin specific route which will send newsletter to every user which is subscribed.
2. Currently we don't have any middleware to filter admin from a normal user. so we won't focus on that also. We will create a simple route accessible to everyone (for now).
3. Since we will be sending newsletter to users. we might be using nodemailer to send mails

#### Steps to follow

1. Setup this repo in your local machine.
2. create a `.env` file from `.env.example` file.
3. run `npm i`. Then `cd server`, then `npm run dev`.
   3a. Make sure your `mongodb server` is installed and running.
4. Setup `nodemailer` and play around with it to become comfortable.
5. After setting up nodemailer we require the `recipients email`, `subject` and `body` of message. We will get `subject` and `body` from the request object.
6. To get the `recipients email` we will use mongoose to findAll such users which have `newsletterIsSubscribed = true`. From the array of users. we will extract out their `emails`.
7. Putting all the data into nodemailer to send the newsletter.
8. Rechecking our route for any possible errors. Adding `trycatch` blocks, `if` blocks etc to make sure the server doesn't crash.
9. When the middleware is completed. Add it.

#### files to be created

1. `/server/router/admin-newsletter.js`
   (whole code will be written in this file for our route, we might divide into controller & service if it becomes too long)
2. `/server/config/nodemailer.js` - Used for setting up nodemailer configurations
