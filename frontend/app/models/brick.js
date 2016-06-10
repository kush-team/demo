import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  photo: DS.belongsTo('asset', {async: true})
});
