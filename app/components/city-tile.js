import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },

    citySave1() {
      var params = {
        name: this.get('name'),
        attractions: this.get('attractions')
      };
      this.set('addNewCity', false),
      this.sendAction('citySave2', params);
    },
  delete(city) {
    if (confirm('Are you sure you want to delete this city?')) {
      this.sendAction('destroyCity', city);
    }
  }
  }
});
