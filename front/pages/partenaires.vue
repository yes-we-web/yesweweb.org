<template>
  <div>
    <parallaxPartenaires />
    <partenaires />
  </div>
</template>

<script>
import partenaires from "@/components/partenaires.vue";
import parallaxPartenaires from "@/components/parallaxPartenaires.vue";

export default {
  components: {
    partenaires,
    parallaxPartenaires
  }
};
</script>

<style lang="scss" scoped>
</style>