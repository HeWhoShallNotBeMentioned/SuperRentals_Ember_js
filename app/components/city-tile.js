import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },

    save1() {
      var params = {
        description: this.get('description'),
        attraction: this.get('attraction')
      };
      this.set('addNewCity', false),
      this.sendAction('save2', params);
    },
  delete(city) {
    if (confirm('Are you sure you want to delete this city?')) {
      this.sendAction('destroyCity', city);
    }
  }
  }
});
