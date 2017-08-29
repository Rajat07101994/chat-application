/**
 * Createroom.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
        room_name :{
           type : 'string', 
           required : true
        },
        room_type :{
          type : 'string',
          required : true
        },
        created_by :{
          type : 'number',
          required : true
        }
  }
};

