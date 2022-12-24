<template>
  <v-container class="white" style="padding: 1%; width: 90%;">
    <v-card tile height="100%">
      <v-carousel height="100%" hide-delimiters show-arrows-on-hover>
        <v-carousel-item v-for="(photo,i) in photos" :key="i">
          <v-img 
            :src="require('../assets/' + photo + '.jpg')"
            :lazy-src="require('../assets/' + photo + '-lazy.jpg')"
            height="100%"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
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
        "subway",
        "roof",
        "house",
        "mikaleena",
        "rock",
        "kimchi",
        "plant-thought"
      ]
    }),
}
</script>

<style scoped>

</style>