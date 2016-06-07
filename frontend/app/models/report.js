import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
  	startDate: DS.attr('string'),
    closeQuestionDate: DS.attr('string'),
  	closeAswerDate: DS.attr('string'),
  	published: DS.attr('boolean'),
  	camera: DS.belongsTo('camera', {async: true}),
});
