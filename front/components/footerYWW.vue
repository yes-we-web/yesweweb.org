<template>
  <v-footer app padless absolute>
    <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet" />
    <v-card class="white--text text-center" color="transparent" style="width:100%">
      <v-card-text>
        <v-btn class="mx-4 white--text" icon>
          <a class="link mx-4" href="https://fr-fr.facebook.com/YesWeWeb/" target="_blank">
            <v-icon size="24px" class="fab fa-facebook"></v-icon>
          </a>
        </v-btn>
        <v-btn class="mx-4 white--text" icon>
          <a class="link mx-4" href="https://twitter.com/YesWeWebVT" target="_blank">
            <v-icon size="24px" class="fab fa-twitter"></v-icon>
          </a>
        </v-btn>
        <v-btn class="mx-4 white--text" icon>
          <a class="link mx-4" href="mailto:mathilde.debeaune@groupevitaminet.com">
            <v-icon size="24px" class="fab fa-google-plus"></v-icon>
          </a>
        </v-btn>
        <v-btn class="mx-4 white--text" icon>
          <a class="link mx-4" href="https://fr.linkedin.com/company/yes-we-web" target="_blank">
            <v-icon size="24px" class="fab fa-linkedin"></v-icon>
          </a>
        </v-btn>
        <v-btn class="mx-4 white--text" icon>
          <a class="link mx-4" href="https://github.com/yes-we-web" target="_blank">
            <v-icon size="24px" class="fab fa-github"></v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <p>Fait avec 💖 par Donovan, Antoine et Samy 🇫🇷</p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>© Yes We Web</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  text-shadow: 1px 2px 2px black;
}
.link {
  text-decoration: none;
  color: white;
}
</style>
