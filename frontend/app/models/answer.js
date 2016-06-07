import DS from 'ember-data';

export default DS.Model.extend({
  	text: DS.attr('string'),
	question: DS.belongsTo('question', {async: false}),
	published: DS.attr('boolean'),
	author: DS.belongsTo('user', {async: false}),
	create_at: DS.attr('date'),
});
