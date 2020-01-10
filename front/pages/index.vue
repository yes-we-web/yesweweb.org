<template>
  <div>
    <parralax />
    <contentIndex />
    <map />
  </div>
</template>

<script>
import parralax from "@/components/parralax.vue";
import parralax2 from "@/components/parralax2.vue";
import contentIndex from "@/components/contentIndex.vue";
import map from "@/components/map.vue";

export default {
  components: {
    parralax,
    parralax2,
    contentIndex,
    map
  }
};
</script>
