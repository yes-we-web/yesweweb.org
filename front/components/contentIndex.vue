<template>
  <div>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-container>
          <v-row justify="space-around">
            <v-sheet
              class="fiche"
              :width="1300"
              :height="250"
              :elevation="24"
              :color="color"
              :tile="tile"
            >
              <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                  <v-container>
                    <h1 style="color:#55b794">Description de la formation</h1>
                    <p>L’Institut Vitamine T propose une formation d’une durée de 8 mois, dont 1 mois d’immersion professionnelle, au métier de développeur web dont le contenu pédagogique est conçu par SIMPLON. Ce parcours vise l’obtention du Titre RNCP de niveau III de Développeur web et web mobile. En s’appuyant sur les principes de la méthode agile, cette formation permet d’acquérir des compétences en développement front-end et back-end, des notions liées à la sécurité informatique et au RGPD et de maîtriser des technologies recherchées par les recruteurs (Html, Css, Javascript, Vue.js, Node.js, …).</p>
                    <span class="display-3" style="color:#55b794">-</span>
                    <br />
                  </v-container>
                </v-col>
              </v-row>
            </v-sheet>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fiche {
  border-radius: 1.5rem;
}

h1 {
  text-shadow: 1px 2px 2px black;
}
p {
  text-shadow: 1px 2px 2px black;
}
span {
  text-shadow: 1px 2px 2px black;
}
</style>