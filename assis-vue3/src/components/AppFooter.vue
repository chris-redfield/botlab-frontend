<template>
  <v-footer
    color="#000106"
    class="footer-app"
    :height="footerSize"
    app
    absolute
  >
    <v-row align="center" justify="center">
      <div style="display: flex; align-items: center;">
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img
            alt="Licença Creative Commons"
            style="border-width:0;"
            :style="{
              marginRight: xs ? '40px' : '70px'
            }"
            src="https://i.creativecommons.org/l/by/4.0/88x31.png"/>
        </a>
        <v-img
          :src="logoOficinaMunicipal"
          :width="logoOficinaMunicipalSize.width"
          :height="logoOficinaMunicipalSize.height"
          contain
          :style="{
            marginRight: xs ? '40px' : '70px'
          }"
        ></v-img>
        <v-img
          :src="logoKonrad"
          :width="logoKonradSize.width"
          :height="logoKonradSize.height"
          contain
        ></v-img>
      </div>
    </v-row>
  </v-footer>
</template>

<script>
import { useDisplay } from 'vuetify'
import logoKonrad from '@/assets/images/footer/logo-akonrad.svg'
import logoOficinaMunicipal from '@/assets/images/footer/logo-oficina-municipal.svg'

export default {
  name: 'AppFooter',
  data() {
    return {
      logoKonrad,
      logoOficinaMunicipal,
    };
  },
  setup() {
    const { smAndDown, xs } = useDisplay();

    return {
      smAndDown,
      xs,
    };
  },
  computed: {
    footerSize() {
      if (this.smAndDown) {
        return 74.2;
      }
      return 139;
    },
    logoKonradSize() {
      let size = {
        height: 49,
        width: 158,
      }
      if (this.smAndDown) {
        size.height = 26.16;
        size.width = 84.34;
        return size;
      }
      return size;
    },
    logoOficinaMunicipalSize() {
      let size = {
        height: 98,
        width: 230,
      }
      if (this.smAndDown) {
        size.height = 54.99;
        size.width = 129.06;
        return size;
      }
      return size;
    },
  },
}
</script>

<style>
.footer-app {
  margin-top: 100px;
}


.image-center {
  text-align: -webkit-center;
}
</style>
