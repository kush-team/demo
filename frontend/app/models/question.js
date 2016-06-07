import DS from 'ember-data';

export default DS.Model.extend({
	report: DS.belongsTo('report', {async: true}),
	ministry: DS.belongsTo('ministry', {async: true}),
	brick: DS.belongsTo('brick', {async: true}),
	statuses: DS.hasMany('status', {async: true}),
	answers: DS.hasMany('answer', {async: true}),
	published: DS.attr('boolean'),
	author: DS.belongsTo('user', {async: true}),
  	title: DS.attr('string'),
  	text: DS.attr('string')
});
