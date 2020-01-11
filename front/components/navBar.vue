<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="blueBannerXlYWW.png"
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props"></v-img>
    </template>

    <v-toolbar-title>Bienvenue user. firstname</v-toolbar-title>

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
      <v-img src="avatarYWW.png" style="max-width:3vw"></v-img>
    </v-btn>

    <template v-slot:extension>
      <v-tabs align-with-title background-color="transparent" color="white">
        <v-tab>Catégories</v-tab>
        <v-tab>Articles</v-tab>
        <v-tab>Nos Partenaires</v-tab>
      </v-tabs>
      <v-tabs right background-color="transparent" color="white">
        <v-tab>s'enregistrer</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>