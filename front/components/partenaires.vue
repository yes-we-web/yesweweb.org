<template>
  <v-row align="center" justify="center">
    <v-col class="text-center" cols="12">
      <v-container>
        <v-row justify="space-around">
          <v-sheet class="fiche" :width="1300" :height="1000" :elevation="0">
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-row :align="alignment" :justify="justify" style="height: auto;">
                        <div class="ma-1 pa-6" outlined tile>
                          <v-hover v-slot:default="{ hover }">
                            <v-card
                              class="mx-auto"
                              :elevation="hover ? 24 : 2"
                              width="520"
                              style="border-radius: 1rem"
                            >
                              <v-img class="white--text align-end" height="200px" src="boisYWW.png"></v-img>
                            </v-card>
                          </v-hover>
                        </div>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
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
</style>