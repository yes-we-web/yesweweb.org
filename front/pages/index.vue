<template>
  <div>
    <parralax />
    <contentIndex />
    <googleMap />
  </div>
</template>

<script>
import parralax from "@/components/parralax.vue";
import parralax2 from "@/components/parralax2.vue";
import contentIndex from "@/components/contentIndex.vue";
import googleMap from "@/components/googleMap.vue";

export default {
  components: {
    parralax,
    parralax2,
    contentIndex,
    googleMap
  }
};
</script>
