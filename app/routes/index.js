import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      cities: this.store.findAll('city')
    });
  },

  actions: {
    citySave3(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },
    saveRental(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      params.city.save();
      this.transitionTo('city', params.city);
    },
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          rental.set(key, params[key]);
        }
      });

      rental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },
    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('index');
    }
  }
});
