import Ember from 'ember';

export default Ember.Component.extend({
	optionValuePath: 'content',
	optionLabelPath: 'content.name',
	countryFilter: null,

	data: Ember.computed('modelName', 'legislatorFilter', function () {
		if (this.get('legislatorFilter')) {
			return this.get('store').find(this.get('modelName'), {camera: this.get('legislatorFilter')});
		} else {
			return this.get('store').find(this.get('modelName'));
		}
	}),
});
