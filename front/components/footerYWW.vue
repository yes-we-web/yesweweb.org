<template>
  <v-footer app padless absolute>
    <v-card
      class=" lighten-1 white--text text-center"
      color="transparent"
      style="width:100%"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          quaerat deserunt assumenda consequatur eveniet consectetur accusantium
          odio libero, molestias fugiat saepe, quos dolores quia maiores
          accusamus et reprehenderit distinctio perspiciatis.
        </p></v-card-text
      >

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>&copy;Yes We Web</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style lang="scss" scoped>
p {
  text-shadow: 1px 2px 2px black;
}
</style>
