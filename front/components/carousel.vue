<template>
  <v-carousel cycle height="auto" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in items"
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
          src: "CarouselYesWeWeb/atelierMethodeAgile.jpg  "
        },
        {
          src: "CarouselYesWeWeb/forumEuratechnologie.jpg  "
        },
        {
          src: "CarouselYesWeWeb/hubIntervention.jpg  "
        },
        {
          src: "CarouselYesWeWeb/interventionCNV.jpg "
        },
        {
          src: "CarouselYesWeWeb/interventionIngenieurRobotique.jpg "
        },
        {
          src: "CarouselYesWeWeb/interventionRH.jpg "
        },
        {
          src: "CarouselYesWeWeb/interventionVitamineT.jpg "
        },
        {
          src: "CarouselYesWeWeb/interventionWeLoveDevs.jpg "
        },
        {
          src: "CarouselYesWeWeb/inzertyIntervention.jpg "
        },
        {
          src: "CarouselYesWeWeb/journeeTravail.jpg "
        },
        {
          src: "CarouselYesWeWeb/premierJourYesWeWeb.jpg "
        },
        {
          src: "CarouselYesWeWeb/rencontreApprenantsParrainsHolder.jpg "
        },
        {
          src: "CarouselYesWeWeb/rencontreApprenantsParrainsIBM.jpg "
        },
        {
          src: "CarouselYesWeWeb/rencontreAvecEntreprise.jpg "
        },
        {
          src: "CarouselYesWeWeb/rendezVousParrainsApprenants.jpg "
        },
        {
          src: "CarouselYesWeWeb/simulationEntretien.jpg "
        },
        {
          src: "CarouselYesWeWeb/yesWeShare.jpg "
        },
        {
          src: "CarouselYesWeWeb/yesWeWeb2.jpg "
        },
        {
          src: "CarouselYesWeWeb/ forumFondationDesPossibles.jpg "
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>