<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
    </template>

    <v-toolbar-title>Yes We Web</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs align-with-title background-color="transparent">
        <v-tab>Catégories</v-tab>
        <v-tab>Articles</v-tab>
        <v-tab>Nos Partenaires</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>