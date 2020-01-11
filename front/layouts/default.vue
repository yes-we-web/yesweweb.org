<template>
  <v-app>
    <navBar />
    <v-content>
      <navBarCategories />
      <nuxt />
    </v-content>

    <v-footer>
      <footer />
    </v-footer>
  </v-app>
</template>

<script>
import navBar from "@/components/navBar.vue";
import navBarCategories from "@/components/navBarCategories.vue";
import footer from "@/components/footer.vue";
export default {
  components: {
    navBar,
    navBarCategories,
    footer
  }
};
</script>
