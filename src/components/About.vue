<template>
  <v-container>
    <v-hover v-slot:default="{ hover }">
      <v-card flat>
        <v-img src="@/assets/about.jpg" height="500">
          <v-fade-transition>
            <v-overlay absolute v-if="hover" color="#999999">
              <v-card-text>
                <v-icon dark small>mdi-map-marker</v-icon>
                Naha, Okinawa
              </v-card-text>
            </v-overlay>
          </v-fade-transition>
        </v-img>
      </v-card>
    </v-hover>
      <v-card-title>About me</v-card-title>

      <v-card-text>
        
      </v-card-text>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        
    }),
}
</script>

<style scoped>

</style>