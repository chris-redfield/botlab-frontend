<template>
  <v-app class="background-app">
    <Header />
    <v-main style="margin-bottom: 100px;">
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
  mounted (){
    // moved to the home component but needs to be tested
    // (function(d, m){
    //   var kommunicateSettings = {
    //     "appId": process.env.VUE_APP_KOMMUNICATE_ID,
    //     "popupWidget":true,
    //     "automaticChatOpenOnNavigation":true,
    //     "labels": {
    //       'input.message': 'Digite sua mensagem...',
    //       'start.new': 'Começar uma conversa nova',
    //       'conversations.title': 'Conversas'
    //     },
    //     "language": "pt-BR"
    //   };
    //   var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    //   s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    //   var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    //   window.kommunicate = m; m._globals = kommunicateSettings;
    // })(document, window.kommunicate || {});
  },
};
</script>
<style scoped>
.background-app {
  /* background: linear-gradient(168deg, #f7f7f7 50%, #ffffff 40%) !important; */
  /*background: linear-gradient(157.43deg, #FFFFFF -5.86%, #F5F5FA 32.9%, #DFE1F7 37.69%, #FFFFFF 87.06%) !important;*/
  background: linear-gradient(196.36deg, rgba(35, 22, 68, 0.11) 11.01%, rgba(114, 69, 95, 0.11) 18.94%, rgba(223, 114, 8, 0.11) 73.51%, rgba(255, 182, 18, 0.11) 78.97%, rgba(255, 204, 91, 0.11) 85.86%), #FFFFFF !important; 

}
</style>
