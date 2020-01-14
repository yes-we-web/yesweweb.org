<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    style="height:85vh"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-3 font-weight-thin mb-4">ARTICLES</h1>
        <v-btn class="ma-2" tile x-large outlined color="white">
          <v-icon left>mdi-pencil</v-icon>Créer un article
        </v-btn>
      </v-col>
    </v-row>
  </v-parallax>
</template>



<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
</style>