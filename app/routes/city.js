import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      city: this.store.findRecord('city', params.city_id),
      // rentals: this.store.query('rental', { filter: { city: params.city_id } })
    });
  },

  actions: {
    citySave3(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },
    saveRental(city, params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      city.save();
      this.transitionTo('index');
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
