const express = require('express');
// const app = express();

const contactRoute = require('../contact/contact.route');
const homeRoute = require('../home/home.route');
const userRoute = require('../user/user.route');
const golferRoute = require('../golfer/golfer.route');
const matchRoute = require('../match/match.route');
const tournamentRoute = require('../tournament/tournament.route');
const teamRoute = require('../team/team.route');

const publicGetRoute = require('./public.get.route');
const publicPostRoute = require('./public.post.route');

module.exports = (app) => {
  if(publicGetRoute && publicGetRoute.length){
    app.use(publicGetRoute, (req, res, next) => {
      //allow ajax cross domain
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
      res.header("Access-Control-Max-Age", "3600");
      res.header("Access-Control-Allow-Headers", "Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
      next();
    });
  }
  
  if(publicPostRoute && publicPostRoute.length){
    app.use(publicPostRoute, (req, res, next) => {
      //allow ajax cross domain
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.header("Access-Control-Max-Age", "3600");
      res.header("Access-Control-Allow-Headers", "Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
      next();
    });
  }


  app.use('/', homeRoute);
  app.use('/user', userRoute);
  app.use('/contact', contactRoute);
  app.use('/golfer', golferRoute);
  app.use('/match', matchRoute);
  app.use('/tournament', tournamentRoute);
  app.use('/team', teamRoute);
  
}
