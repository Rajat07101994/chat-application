/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */
module.exports.routes = {


  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/



     'GET /': { view: 'login' },
    //'GET /': 'HomepageController.homepage',
    'POST /register': { controller: 'HomepageController', action: 'create' },
    'POST /login': { controller: 'HomepageController', action: 'login' },
    'POST /room1': { controller: 'RoomController', action: 'create' },
    
    


  //'PUT /user/login': 'user/login',
  //'PUT /user/logout': 'user/logout'
  


  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
