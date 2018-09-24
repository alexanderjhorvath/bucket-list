import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';
import store from '../store/index';


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCqC3YhZScKNM541GdXrJ4FXFU0tluWtgQ',
    libraries: 'places,drawing',
  },
});

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'AIzaSyC1I4rc72v5cAK3VPLXYKLnUmISNzM5AYs', // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
