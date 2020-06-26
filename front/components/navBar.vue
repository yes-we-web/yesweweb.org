<template>
  <v-app-bar
    fixed
    app
    shrink-on-scroll
    prominent
    src="blueBannerYWW.png"
    fade-img-on-scroll
    height="2rem"
  >
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mediaMenu" text v-model="menu" color="white" dark v-bind="attrs" v-on="on">
            <i class="fas fa-bars"></i>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" :to="item.to">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <template v-slot:img="{ props }">
      <v-img v-bind="props"></v-img>
    </template>

    <v-spacer></v-spacer>

    <template v-slot:extension>
      <v-tabs class="navBar" align-with-title background-color="transparent" color="white">
        <v-tab>
          <li>
            <nuxt-link tag="li" to="/">Accueil</nuxt-link>
          </li>
        </v-tab>

        <v-tab>
          <li>
            <nuxt-link tag="li" to="/articles">Articles</nuxt-link>
          </li>
        </v-tab>

        <v-tab>
          <li>
            <nuxt-link tag="li" to="/partenaires">Partenaires</nuxt-link>
          </li>
        </v-tab>
      </v-tabs>

      <v-tabs class="navBar" right background-color="transparent" color="white">
        <v-tab>
          <popupRegister />
        </v-tab>
        <v-tab>
          <popupLogin />
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import popupRegister from "@/components/popupRegister.vue";
import popupLogin from "@/components/popupLogin.vue";
export default {
  components: {
    popupRegister,
    popupLogin
  },
  data: () => ({
    items: [
      { title: "Accueil", to: "/" },
      { title: "Articles", to: "/articles" },
      { title: "Partenaires", to: "/partenaires" }
    ]
  })
};
</script>

<style lang="scss" scoped>
li {
  text-decoration: none;
  list-style-type: none;
}
span {
  text-shadow: 1px 2px 2px black;
}
v-tab {
  text-shadow: 1px 2px 2px black;
}
@media screen and (max-width: 800px) {
  .navBar {
    display: none;
  }
}
@media screen and (min-width: 801px) {
  .mediaMenu {
    display: none;
  }
}
</style>
