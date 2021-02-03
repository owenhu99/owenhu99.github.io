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
html, body {
  height: 100%;
}

#app {
  background-color: #222222;
  color: white;
  padding: 6% 17% 10% 15%;
  font-family: Georgia, serif;
}

.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {
    background-color: transparent;
}

.v-application a {
  color: white !important;
}

.v-application .title {
  font-family: Georgia, serif !important;
}
</style>