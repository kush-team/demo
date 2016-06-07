import DS from 'ember-data';

export default DS.Model.extend({
  	name: DS.attr('string'),
  	lastName: DS.attr('string'),
    password: DS.attr('string'),
  	createdAt: DS.attr('string'),
  	updatedAt: DS.attr('string'),
  	email: DS.attr('string'),
    brick: DS.belongsTo('brick', {async: true}),
    camera: DS.belongsTo('camera', {async: true}),
    roles: DS.hasMany('role', {async: true}),
  	ministries: DS.hasMany('ministry', {async: true}),

  	fullName: function () {
  		return this.get('name') + " " + this.get('lastName');
  	}.property('name', 'lastName'),

    isAdmin: function () {
      return this.get('roles').findBy('name', 'Admin') !== undefined;
    }.property('roles.@each.name'),  	

    isLegislador: function () {
      return this.get('roles').findBy('name', 'Legislador') !== undefined;
    }.property('roles.@each.name'),

    isMinisterio: function () {
      return this.get('roles').findBy('name', 'Ministerio') !== undefined;
    }.property('roles.@each.name'),
});
