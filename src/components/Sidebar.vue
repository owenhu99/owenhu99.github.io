<template>
    <v-navigation-drawer absolute permanent dark color="transparent" app>
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
        <v-list-item v-for="(text, i) in items" :key="i" link color="white">
          <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        items: [
            'projects',
            'music',
            'vinyl',
            'photos',
            'about',
            'contact'
        ]
    }),
}
</script>

<style scoped>

</style>