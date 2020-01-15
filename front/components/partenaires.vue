<template>
  <v-container class="scroll-y">
    <v-layout align-center justify-center>
      <v-flex xs12>
        <v-btn
          v-scroll="onScroll"
          v-show="fab"
          fab
          dark
          fixed
          bottom
          right
          @click="toTop"
          color="primary"
        >
          <v-icon class="fas fa-arrow-up"></v-icon>
        </v-btn>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <v-container>
              <v-row justify="space-around">
                <v-sheet class="fiche" :width="1200" :height="650" :elevation="0">
                  <v-row align="center" justify="center">
                    <v-col class="text-center" cols="12">
                      <v-container class="fill-height" fluid style="min-height: 434px">
                        <v-fade-transition mode="out-in">
                          <v-row>
                            <v-col v-for="(image, img) in images" :key="img" cols="6">
                              <a :href="image.href" target="_blank">
                                <v-card shaped>
                                  <v-img
                                    :src="image.src"
                                    height="180"
                                    contain
                                    class="grey lighten-5"
                                  ></v-img>
                                </v-card>
                              </a>
                            </v-col>
                          </v-row>
                        </v-fade-transition>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "LogosPartenaires/logoCampusVT.png",
          href: "http://www.groupevitaminet.com/"
        },
        {
          src: "LogosPartenaires/logoEtat.png",
          href:
            "https://travail-emploi.gouv.fr/grands-dossiers/plan-d-investissement-dans-les-competences/"
        },
        {
          src: "LogosPartenaires/logoFondationdesPossibles.jpg",
          href: "https://lafondationdespossibles.com/"
        },
        {
          src: "LogosPartenaires/logoGen.png",
          href: "https://www.grandeecolenumerique.fr/"
        },
        {
          src: "LogosPartenaires/logoMinistreTravail.jpg",
          href: "https://travail-emploi.gouv.fr/"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>