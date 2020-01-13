<template>
  <v-carousel
    class="mb-12"
    cycle
    height="800"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "CarouselYesWeWeb/yesWeWeb2.jpg "
        },
        {
          src: "CarouselYesWeWeb/journeeTravail.jpg "
        },
        {
          src: "CarouselYesWeWeb/simulationEntretien.jpg "
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>
