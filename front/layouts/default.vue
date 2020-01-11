<template>
  <v-app>
    <navBar />
    <v-content>
      <navBarCategories />
      <nuxt />
    </v-content>

    <v-footer>
      <footerYWW />
    </v-footer>
  </v-app>
</template>

<script>
import navBar from "@/components/navBar.vue";
import navBarCategories from "@/components/navBarCategories.vue";
import footerYWW from "@/components/footerYWW.vue";
export default {
  components: {
    navBar,
    navBarCategories,
    footerYWW
  }
};
</script>
