<template>
  <v-app>
    <Sidebar />
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar';

export default {
  name: 'App',

  components: {
    Sidebar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
  font-family: 'Bell MT';
  font-style: normal;
  font-weight: 400;
  src: local('Bell MT W01'), local('BellMT'), url(http://themes.googleusercontent.com/licensed/font?kit=kmIaTfxu8bXVwPRMqRVUug) format('truetype');
}
#app {
  background-color: #222222;
  color: white;
  font-family: 'Bell MT';
  padding: 8% 15% 10% 15%;
}
.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {
    background-color: transparent;
}
</style>