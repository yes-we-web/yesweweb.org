


<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row :align="alignment" :justify="justify" style="height: auto;">
          <div v-for="article in articles" :key="article" class="ma-1 pa-6" outlined tile>
            <v-card class="mx-auto" :elevation="24" max-width="520">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://picsum.photos/1920/1080?random"
              >
                <v-card-title
                  class="display-1"
                  style="text-shadow: 1px 2px 2px black;"
                >{{article.title}}</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0" style="text-shadow: 1px 2px 2px black;">{{article.id}}</v-card-subtitle>

              <v-card-text class="font-weight-bold" style="text-shadow: 1px 2px 2px black;">
                <div>{{article.content}}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  <nuxt-link to="/article">lire</nuxt-link>
                </v-btn>
              </v-card-actions>
            </v-card>
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

<style lang="scss" scoped>
</style>