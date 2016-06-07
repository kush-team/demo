import DS from 'ember-data';

export default DS.Model.extend({
  	text: DS.attr('string'),
	question: DS.belongsTo('question', {async: true}),
	published: DS.attr('boolean'),
	author: DS.belongsTo('user', {async: true}),
	create_at: DS.attr('date'),
});
