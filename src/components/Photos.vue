<template>
  <v-container style="margin: 20px 20px 20px 20px" class="white">
    <v-card tile height="100%">
        <v-carousel height="100%" hide-delimiters show-arrows-on-hover>
          <v-carousel-item v-for="(photo,i) in photos" 
            :src="require('../assets/' + photo + '.jpg')"
            :key="i"
            height="600px"
          >
          </v-carousel-item>
        </v-carousel>
    </v-card>
  </v-container>
</template>

<script>

export default {
    data: () => ({
      photos: [
        "yiran",
        "garage",
        "roof",
        "plant-thought"
      ]
    }),
}
</script>

<style scoped>

</style>