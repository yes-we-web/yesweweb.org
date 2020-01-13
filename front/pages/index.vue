<template>
  <div>
    <parallax />
    <contentIndex />
    <renseignement />
    <carousel />
  </div>
</template>

<script>
import parallax from "@/components/parallax.vue";
import contentIndex from "@/components/contentIndex.vue";
import renseignement from "@/components/renseignement.vue";
import carousel from "@/components/carousel.vue";

export default {
  components: {
    parallax,
    contentIndex,
    renseignement,
    carousel
  }
};
</script>
