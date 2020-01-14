<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    style="height:85vh"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-3 font-weight-thin mb-4">ARTICLES</h1>
        <v-flex>
          <popups />
        </v-flex>
      </v-col>
    </v-row>
  </v-parallax>
</template>



<script>
import popups from "@/components/popups.vue";
export default {
  components: {
    popups
  }
};
</script>

<style lang="scss" scoped>
</style>