import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),

  	startDate: DS.attr('date', {
   		defaultValue() { return new Date(); }
  	}),
    closeQuestionDate: DS.attr('date', {
    	defaultValue() { return new Date(); }
  	}),
  	closeAswerDate: DS.attr('date', {
   		defaultValue() { return new Date(); }
  	}),

  	published: DS.attr('boolean'),
  	camera: DS.belongsTo('camera', {async: true}),
});
