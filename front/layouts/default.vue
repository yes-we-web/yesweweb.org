<template>
  <v-app>
    <navBar />
    <v-content>
      <navBarCategories />
      <nuxt />
    </v-content>

    <v-footer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import navBar from "@/components/navBar.vue";
import navBarCategories from "@/components/navBarCategories.vue";

export default {
  components: {
    navBar,
    navBarCategories
  }
};
</script>
