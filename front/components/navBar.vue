<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
    color="#55b794"
    dark
    shrink-on-scroll
    prominent
    src="YWW.png"
    fade-img-on-scroll
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props"></v-img>
    </template>

    <v-toolbar-title>
      <span>Yes</span>
      <span class="font-weight-light">we</span>
      <span>web</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-text-field sm flat hide-details label="Search" style="max-width: 12vw " color="white">
      <input
        id="search"
        type="text"
        class="ds-input"
        autocomplete="off"
        spellcheck="false"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded="false"
        aria-owns="algolia-autocomplete-listbox-0"
        style
        dir="auto"
      />
    </v-text-field>
    <v-btn icon>
      <v-icon large>mdi-magnify</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs align-with-title background-color="transparent" color="white">
        <v-tab>
          <li>
            <nuxt-link tag="li" to="/">Accueil</nuxt-link>
          </li>
        </v-tab>

        <v-tab>
          <li>
            <nuxt-link tag="li" to="/articles">Articles</nuxt-link>
          </li>
        </v-tab>

        <v-tab>Partenaires</v-tab>
      </v-tabs>

      <v-btn icon>
        <v-icon large>mdi-account</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
li {
  text-decoration: none;
  list-style-type: none;
}
</style>