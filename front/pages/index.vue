<template>
  <div>
    <parralax />
    <contentIndex />
    <renseignement />
    <carousel />
  </div>
</template>

<script>
import parralax from "@/components/parralax.vue";
import parralax2 from "@/components/parralax2.vue";
import contentIndex from "@/components/contentIndex.vue";
import renseignement from "@/components/renseignement.vue";
import carousel from "@/components/carousel.vue";

export default {
  components: {
    parralax,
    parralax2,
    contentIndex,
    renseignement,
    carousel
  }
};
</script>
