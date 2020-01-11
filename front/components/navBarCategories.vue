<template>
  <v-bottom-navigation grow height="2rem">
    <v-btn :value="activeBtn" style="color:#e24d2c">
      <strong style="color:#e24d2c">#HTML</strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#264de4">
      <strong style="color:#264de4">#CSS</strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#cd6799">
      <strong style="color:#cd6799">#SASS</strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#fddb22">
      <strong style="color:#fddb22">#Javascript</strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#47b784">
      <strong style="color:#47b784">#VueJS</strong>
    </v-btn>
    <v-btn :value="activeBtn" style="color:#026e00">
      <strong style="color:#026e00">#NodeJS</strong>
    </v-btn>
    <v-btn :value="activeBtn" style="color:#fffAc3">
      <strong style="color:#fffAc3">#Algorithmes</strong>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1
    };
  }
};
</script>

<style lang="scss" scoped>
strong {
  text-shadow: 1px 2px 2px black;
}
</style>