<template>
  <v-app class="background-app">
    <AppHeader />
    <v-main style="margin-bottom: 100px;">
      <router-view />
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script setup>
// eslint-disable-next-line no-undef
// document.title = __APP_TITLE__;
</script>
<style scoped>
.background-app {
  /* background: linear-gradient(168deg, #f7f7f7 50%, #ffffff 40%) !important; */
  /*background: linear-gradient(157.43deg, #FFFFFF -5.86%, #F5F5FA 32.9%, #DFE1F7 37.69%, #FFFFFF 87.06%) !important;*/
  background: linear-gradient(196.36deg, rgba(35, 22, 68, 0.11) 11.01%, rgba(114, 69, 95, 0.11) 18.94%, rgba(223, 114, 8, 0.11) 73.51%, rgba(255, 182, 18, 0.11) 78.97%, rgba(255, 204, 91, 0.11) 85.86%), #FFFFFF !important;

}
</style>
