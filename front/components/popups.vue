<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" v-on="on" tile x-large outlined color="white">
          <v-icon left>mdi-pencil</v-icon>Créer un article
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Créer article</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Nom" required></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Prénom"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Titre" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea outlined name="input-7-4" label="Contenu" value></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
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