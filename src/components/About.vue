<template>
  <v-container>
    <v-hover v-slot:default="{ hover }">
      <v-card flat>
        <v-img src="@/assets/about.jpg" height="380">
          <v-fade-transition>
            <v-overlay absolute v-if="hover" color="#e09180">
              <v-card-text>
                <v-icon dark small>mdi-map-marker</v-icon>
                Naha, Okinawa
              </v-card-text>
            </v-overlay>
          </v-fade-transition>
        </v-img>
      </v-card>
    </v-hover>
      <!-- <v-card-title>About me</v-card-title> -->

      <v-card-text>
        <p></p>
        <p>
          > Hi, I'm Owen. 
        </p>

        <p>
          > I'm a passionate computer programmer interested in the fields of
          software development, product management and system programming. I am currently
          studying a computer science undergrad degree at the University of Toronto.
        </p>
        
        <p>
          > I am also a music enthusiast with an obsession with modern music history and
          experimental/avant-garde music. I'm an avid vinyl collector with experience 
          buying/valuing collections and managing the online Discogs store of a local 
          record shop. You can see some of my favorite records at 
          <router-link to="/vinyl"><i>vinyl</i></router-link>, 
          and my entire collection as well as my items for sale on 
          <a href="https://www.discogs.com/user/owenhu"><i>Discogs</i></a>.
        </p>

        <p>
          <a href="https://www.instagram.com/owenhu99/" class="no_decor">
            <v-icon dark>mdi-instagram</v-icon>
          </a> &emsp;
          <a href="https://www.linkedin.com/in/xiao-owen-hu-611214173/" class="no_decor">
            <v-icon dark>mdi-linkedin</v-icon>
          </a> &emsp;
          <a href="https://github.com/owenhu99" class="no_decor">
            <v-icon dark>mdi-github</v-icon>
          </a> &emsp;
          <a href="https://twitter.com/owenhu99" class="no_decor">
            <v-icon dark>mdi-twitter</v-icon>
          </a>
        </p>

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
  .v-card__text {
    font-size: 1.1em;
    line-height: 2;
  }

  .no_decor {
    text-decoration: none;
  }
</style>