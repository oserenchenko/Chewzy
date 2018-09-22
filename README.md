# CHEWZY

Chewzy is a website that simplifies a complicated question of "where should we eat tonight?"
We are hoping to help our users narrow down an answer in less than 5 minutes by taking a simple quiz.
Users can use the app without signing up/logging in, or sign in and get access to favorites feature.

Visit the deployed version of [Chewzy](https://sleepy-sierra-59381.herokuapp.com/)

Checkout the full version of the app with these credentials:
```
email: test@test.com
```
```
password: ChewzyTest1!
```

![homepage](app_walkthrough.mp4)

## Getting Started
to install locally run this command in your terminal
```
git clone https://github.com/oserenchenko/Chewzy.git
```
once inside the Chewzy folder run 
```
npm install
```

Now we need to make a .env file inside of the main folder and fill in these keys.
These keys can be obtained at [auth0](https://auth0.com) when you register an application.

``` javascript
NODE_ENV="development"
```
``` javascript
AUTH0_CLIENT_SECRET=YOUR_KEY
```
``` javascript
AUTH0_ID=YOUR_ID
```
``` javascript
AUTH0_DOMAIN=YOUR_DOMAIN
```


You will also need to set up a MySql database called chewzy

The last step is to make sure your express sever is running and and type this command in your termial
```
node server.js
```

### Prerequisites

* [Nodejs](https://nodejs.org/)
* [MySql](https://www.mysql.com)


## Built With

* [Expressjs](https://expressjs.com/) - nodejs server side framework
* [MySql](https://www.mysql.com) -open-source relational database management system.
* [Auth0](https://auth0.com) - universal authentication & authorization platform for web, mobile, and legacy applications.
* [Sequelize](http://docs.sequelizejs.com) - romise-based ORM for Node.js v4 and up.


## Authors

* [Olga Serenchenko](https://github.com/oserenchenko)
* [Inna Leikina](https://github.com/innaleikina)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

