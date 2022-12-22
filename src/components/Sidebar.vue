<template>
    <v-navigation-drawer absolute permanent dark color="transparent" app width="180">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Xiao Owen Hu
          </v-list-item-title>
          <v-list-item-subtitle>
            胡逍
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      
      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="(text, i) in items" :key="i" color="white">
          <v-hover v-slot="{ hover }" open-delay="100" close-delay="100">
            <v-list-item-content>
              <router-link :to="'/' + text" exact :class="{ 'on-hover': hover }">
                <v-list-item-title >{{ text }}</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-hover>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        items: [
            'music',
            'photos',
            'about'
        ]
    }),
}
</script>

<style scoped>
.v-application a {
  color: white;
  text-decoration: none;
}
.router-link-active {
  font-weight: bold;
  color: #e38571 !important;
  margin-left: 15px;
}
.on-hover {
  margin-left: 15px;
}
</style>