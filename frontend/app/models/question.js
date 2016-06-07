import DS from 'ember-data';

export default DS.Model.extend({
	report: DS.belongsTo('report', {async: false}),
	brick: DS.belongsTo('brick', {async: false}),
	statuses: DS.hasMany('status', {async: false}),
	answers: DS.hasMany('answer', {async: false}),
	published: DS.attr('boolean'),
	author: DS.belongsTo('user', {async: false}),
  	title: DS.attr('string'),
  	text: DS.attr('string')
});
