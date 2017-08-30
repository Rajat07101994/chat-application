/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  autosubscribe: ['destroy', 'update'],
  attributes: {

    username: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
   password: {
      type: 'string',
      required: true
    },

    online: {
      type: 'boolean',
      defaultsTo: true
    },

  },
  afterPublishUpdate: function(id, changes, req, options) {
    
        // Get the full user model, including what rooms they're subscribed to
        User.findOne(id).populate('rooms').exec(function(err, user) {
          // Publish a message to each room they're in.  Any socket that is 
          // subscribed to the room will get the message. Saying it's "from" id:0
          // will indicate to the front-end code that this is a systen message
          // (as opposed to a message from a user)
          sails.util.each(user.rooms, function(room) {
            var previousName = options.previous.name == 'unknown' ? 'User #' + id : options.previous.name;
            Room.message(room.id, {
              room: {
                id: room.id
              },
              from: {
                id: 0
              },
              msg: previousName + " changed their name to " + changes.name
            }, req);
          });
    
        });
      },
    

};

