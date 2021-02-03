<template>
  <v-container>
    <v-card
    class="mx-auto"
    dark flat
    >
      <v-img
        src="@/assets/project_palyglot.png"
        height="200px"
      ></v-img>

      <v-card-title>
        Palyglot (ongoing development)
      </v-card-title>

      <v-card-subtitle>
        Language Learning Social Media
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="#e09180"
          text
        >
          More
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            As part of a software engineering course, we (a team of four) developed and
            deployed an early version of a social media platform that allows people to 
            find internet penpals to learn new languages with. We used a MERN (MongoDB 
            + Express + React + NodeJS) stack and used Firebase for authentication. We
            practiced and experimented with Agile methodologies (Scrum).
            <a href="https://github.com/owenhu99/palyglot/tree/master/palyglot">
              GitHub
            </a>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        show: false,
    }),
}
</script>

<style scoped>
  .v-card__title {
    font-size: 1.5em;
    line-height: 2;
  }

  .v-card__text {
    font-size: 1em;
    line-height: 2;
  }
</style>