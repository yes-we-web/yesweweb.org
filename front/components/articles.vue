<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row :align="alignment" :justify="justify" style="height: auto;">
          <div v-for="article in articles" :key="article" class="ma-1 pa-6" outlined tile>
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="mx-auto"
                :elevation="hover ? 24 : 2"
                width="520"
                style="border-radius: 1rem"
              >
                <v-img class="white--text align-end" height="200px" src="boisYWW.png"></v-img>
                <v-card-title
                  class="display-1"
                  style="text-shadow: 1px 2px 2px black;"
                >{{ article.title }}</v-card-title>

                <v-card-text class="font-weight-bold" style="text-shadow: 1px 2px 2px black;">
                  <div>{{ article.User.firstname }} {{ article.User.lastname }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text>Voir +</v-btn>
                  <v-btn text icon color="#3e7cbf">
                    <div>{{article.likes}}</div>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      articles: [],
      alignmentsAvailable: ["start", "center", "end", "baseline", "stretch"],
      alignment: "center",
      dense: false,
      justifyAvailable: [
        "start",
        "center",
        "end",
        "space-around",
        "space-between"
      ],
      justify: "center"
    };
  },
  methods: {
    async getAllArticles() {
      const response = await axios.get("http://localhost:8000/api/articles/");
      this.articles = response.data;
    }
  },
  mounted() {
    this.getAllArticles();
  }
};
</script>

<style lang="scss" scoped></style>
