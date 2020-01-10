<template>
  <v-row align="center" justify="center">
    <v-col class="text-center" cols="12">
      <v-container>
        <v-row justify="space-around">
          <v-sheet
            class="fiche"
            :width="500"
            :height="600"
            :elevation="24"
            :color="color"
            :tile="tile"
          >
            <div class="ma-5">
              <h2>Durée de la formation</h2>
              <span class="display-2">-</span>
              <p class="font-weight-bold">8 mois</p>
              <h2>Lieu de formation</h2>
              <span class="display-2">-</span>
              <p class="font-weight-bold">
                2 Boulevard Thomson
                <br />59810
                <br />Lesquin
                <br />Hauts-de-France
              </p>
              <h2>Contact</h2>
              <span class="display-2">-</span>
              <p class="font-weight-bold">
                Tel :
                <br />03 20 61 70 70
                <br />Email :
                <br />mathilde.debeaune@groupevitaminet.com
                <br />Site web :
                <br />https://simplon.co/groupe-vitamine-t/
              </p>
            </div>
          </v-sheet>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>



<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  color: #55b794;
  text-shadow: 1px 2px 2px black;
}
span {
  color: #55b794;
  text-shadow: 1px 2px 2px black;
}

p {
  text-shadow: 1px 2px 2px black;
}

.fiche {
  border-radius: 1.875rem;
}
</style>