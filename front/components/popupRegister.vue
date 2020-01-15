<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-tab v-on="on">s'enregistrer</v-tab>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline" style="color:#55b794">Créer un compte</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Nom*" required></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Prénom*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Mot de passe*" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Champ obligatoire</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#55b794" text @click="dialog = false">fermer</v-btn>
          <v-btn color="#55b794" text @click="dialog = false">enregistrer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>