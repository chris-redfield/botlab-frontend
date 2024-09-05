<template>
  <div
    :class="{
      'component-margin': !xs,
      'component-margin-mobile': xs,
    }"
  >
    <div class="image-adjust">
      <v-img
        :src="topLeftImage"
        :width="tamanhoImagem"
        :height="tamanhoImagem"
      ></v-img>
    </div>
    <v-row v-if="!xs" class="justify-large-screen">
      <v-col cols="8" xl="4" lg="5" sm="12" class="px-3 pt-2">
        <v-container>
          <v-row class="text-center justify-large-screen">
            <v-col cols="2">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn
                    tile
                    variant="text"
                    color="#9c9ca6"
                    :class="{ 'underline-button': verifyRoute(isHovering, '/') }"
                    @click="changeRoute('/')"
                    v-bind="props"
                  >
                    Início
                  </v-btn>
                </template>
              </v-hover>
            </v-col>
            <v-col cols="2">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn
                    tile
                    variant="text"
                    color="#9c9ca6"
                    :class="{ 'underline-button': verifyRoute(isHovering, '/about') }"
                    @click="changeRoute('/about')"
                    v-bind="props"
                  >
                    Sobre
                  </v-btn>
                </template>
              </v-hover>
            </v-col>
            <v-col cols="2" xl="3" lg="3" md="3" sm="3">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn
                    tile
                    variant="text"
                    color="#9c9ca6"
                    :class="{ 'underline-button': verifyRoute(isHovering, '/faq') }"
                    @click="changeRoute('/faq')"
                    v-bind="props"
                  >
                    Saiba Mais
                  </v-btn>
                </template>
              </v-hover>
            </v-col>
            <v-col cols="2" xl="3" lg="3" md="3" sm="3">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn
                    tile
                    variant="text"
                    color="#9c9ca6"
                    :class="{
                      'underline-button': verifyRoute(isHovering, '/quem-somos'),
                    }"
                    class="px-2"
                    @click="changeRoute('/quem-somos')"
                    v-bind="props"
                  >
                    Quem Somos
                  </v-btn>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <template v-if="xs">
      <div class="title-mobile">Início</div>
      <div style="text-align: end">
        <v-app-bar-nav-icon
          color="#12174E"
          class="space-navbar-icon"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </div>
    </template>
    <v-navigation-drawer v-model="drawer" temporary right app>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title
              style="color: #12174e"
              @click="changeRoute(item.route)"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import topLeftImage from '@/assets/images/topLeft.png'

export default {
  name: "AppHeader",
  data() {
    return {
      topLeftImage,
      drawer: null,
      items: [
        { title: "Início", icon: "mdi-view-dashboard", route: "/" },
        { title: "Sobre", icon: "mdi-forum", route: "/about" },
        { title: "Saiba Mais", icon: "mdi-forum", route: "/faq" },
        { title: "Quem Somos", icon: "mdi-forum", route: "/quem-somos" },
      ],
    };
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { xs, sm } = useDisplay();

    return {
      route,
      router,
      xs,
      sm,
    }
  },
  computed: {
    tamanhoImagem() {
      if (this.sm) {
        return 170;
      }
      if (this.xs) {
        return 53;
      }
      return 250;
    },
  },
  methods: {
    verifyRoute(hover, route) {
      if (hover) {
        return true;
      }
      if (this.route.path === route) {
        return true;
      }
      return false;
    },
    changeRoute(rota) {
      if (this.route.path == rota) return;
      this.router.push({ path: rota });
    },
  },
};
</script>

<style scoped>
.underline-button {
  border-bottom: 2px solid #9c9ca6;
}

.justify-large-screen {
  justify-content: center;
}

.image-adjust {
  top: 0;
  left: 0;
  position: absolute;
}

.space-navbar-icon {
  margin-top: 16px;
  margin-right: 21px;
}

.title-mobile {
  margin-left: 26px;
  margin-top: 20px;
  position: absolute;
  font-size: 20px;
  color: #12174e;
}

.component-margin {
  margin-bottom: 100px;
}

.component-margin-mobile {
  margin-bottom: 14px;
}
</style>
