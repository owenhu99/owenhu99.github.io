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
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "On Owen's Corner",
    // all titles will be injected into this template
    titleTemplate: "%s"
  },

  components: {
    Sidebar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=EB+Garamond");

html, body {
  height: 100%;
}

#app {
  background-image: url("./assets/bg.jpg");
  background-size: cover;
  color: white;
  padding: 6% 17% 10% 15%;
  font-family: 'EB Garamond';
  font-size: 17px;
}

.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {
    background-color: transparent;
}

.v-application a {
  color: white !important;
}

.v-application .title {
  font-family: 'EB Garamond' !important;
}
</style>