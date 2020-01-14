<template>
  <v-container fluid class="scroll-y">
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
          color="primary"
          @click="toTop"
        >
          <v-icon class="fas fa-arrow-up"></v-icon>
        </v-btn>
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

                    <v-chip
                      small
                      class="ma-2"
                      color="#55b794"
                      label
                      text-color="white"
                      v-for="categories in article.categories"
                      :key="categories"
                    >
                      <v-icon left>mdi-label</v-icon>
                      <div>{{categories.content}}</div>
                    </v-chip>

                    <v-card-text class="font-weight-bold" style="text-shadow: 1px 2px 2px black;">
                      <div>{{ article.User.firstname }} {{ article.User.lastname }}</div>

                      <div>{{ article.createdAt[8] + article.createdAt[9] + article.createdAt[7] + article.createdAt[5] +article.createdAt[6] + article.createdAt[4] + article.createdAt[0] + article.createdAt[1] + article.createdAt[2] + article.createdAt[3]}}</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="#55b794" text>Lire</v-btn>

                      <v-spacer></v-spacer>

                      <v-btn text icon color="red">
                        <div>{{ article.likes }}</div>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
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
      justify: "center",
      fab: false
    };
  },
  methods: {
    async getAllArticles() {
      const response = await axios.get("http://localhost:8000/api/articles/");
      this.articles = response.data;
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  },
  mounted() {
    this.getAllArticles();
  }
};
</script>

<style lang="scss" scoped></style>
