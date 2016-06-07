import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  color: DS.attr('string'),
  icon: DS.attr('string'),
  order: DS.attr('string')
});
