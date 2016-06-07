/**
 * Question.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	report: {
  		model: 'report'
  	},

  	statuses: {
  		collection: 'status'
  	},

  	answers: {
  		collection: 'answer',
  		via: 'question'
  	},

  	date: 'string',

  	autor: {
  		model: 'user'
  	},

  	published: 'boolean',

  	title: 'string',
  	
  	text: 'string'
  }
};

