<template>
  <v-container>
    <v-row class="ml-12">
      <v-col cols="12">
        <v-row style="height: auto;">
          <div class="map mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.975134435083!2d3.116467015571833!3d50.59041547949489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d6f35265a399%3A0x90bd89b34429efcd!2s2%20Boulevard%20Thomson%2C%2059810%20Lesquin!5e0!3m2!1sfr!2sfr!4v1578741845000!5m2!1sfr!2sfr"
              width="500"
              height="600"
              frameborder="0"
              style="border:0;"
              allowfullscreen
            ></iframe>
          </div>

          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <v-container>
                <v-row justify="space-around">
                  <v-sheet class="fiche" :width="500" :height="600" :elevation="0">
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
                        <br />
                        <a class="link" href="tel:+33320617070">03 20 61 70 70</a>

                        <br />Email :
                        <br />
                        <a
                          class="link"
                          href="mailto:mathilde.debeaune@groupevitaminet.com"
                        >mathilde.debeaune@groupevitaminet.com</a>

                        <br />Site web :
                        <br />
                        <a
                          class="link"
                          href="https://simplon.co/groupe-vitamine-t/"
                          target="_blank"
                        >https://simplon.co/groupe-vitamine-t/</a>
                      </p>
                    </div>
                  </v-sheet>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
iframe {
  border-radius: 1rem;
}

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
  border-top: 3px #55b794 solid;
  border-radius: 1rem;
}
.link {
  text-decoration: none;
  color: white;
}
@media (min-width: 1904px) {
  iframe {
    margin-left: 60%;
  }
}
</style>
