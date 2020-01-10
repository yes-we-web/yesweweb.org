<template>
  <v-app dark>
    <navBar />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import navBar from "@/components/navBar.vue";

export default {
  components: {
    navBar
  }
};
</script>
