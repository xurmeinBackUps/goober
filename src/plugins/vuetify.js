import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#42a04e', // green f/m xsell logo
        accent: '#1f4572', // closest to 'darkslategray', f/m xsell logo gradient
        error: '#FF5252',
        info: '#1f548a', // closest to 'darkslateblue', f/m xsell logo gradient
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#1f5084', // closest to 'darkslateblue', f/m xsell logo gradient
        error: '#FF5252',
        info: '#1e3458', // closest to 'darkslategray', f/m xsell logo gradient
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
});
