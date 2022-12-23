<template>
  <v-container max-height="500px">

    <v-img src="@/assets/bio.jpg" width="200px" style="float: left; margin-bottom: 2%;" />

    <v-container style="clear: left; padding: 0%;" max-height="850px">
      <p>
        Hi, my name is Owen. I'm a software engineer and artist based in Toronto, currently
        completing an Honours degree with a specialist in Computer Science and a minor in 
        Music History at the University of Toronto.
      </p>

      <p>
        My engineering experience includes a 12-month internship as a DevOps engineer at
        Advanced Micro Devices and a summer internship as a Software Development engineer
        at Amazon, where I will begin working full time as an SDE 2 in 2023.
      </p>

      <p>
        I am also a practicing musician and photographer - you can see my ongoing projects
        on this site.
      </p>
      
      <p>
        I have various interests and hobbies such as fashion, film-making, 
        film photography, record collecting, specialty coffee, esports, etc.
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
    </v-container>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        
    }),
}
</script>

<style scoped>
  .no_decor {
    text-decoration: none;
  }
</style>