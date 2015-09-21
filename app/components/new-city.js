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
        attraction: this.get('attraction')
      };
      this.set('addNewCity', false),
      this.sendAction('citySave2', params);
    }
  }
});
