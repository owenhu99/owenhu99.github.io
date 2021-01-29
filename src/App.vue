<template>
  <v-app>
    <Sidebar />
    <v-main>
      <router-view></router-view>
    </v-main>
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

html, body {
  height: 100%;
}

#app {
  /* height: 100%;
  align-items: center;
  justify-items: center; */
  background-color: #222222;
  color: white;
  font-family: 'Bell MT';
  padding: 8% 16% 10% 15%;
}

.v-application--wrap {
  min-height: auto;
  max-width: 840px;
  flex-direction: row;
}

.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {
    background-color: transparent;
}
</style>