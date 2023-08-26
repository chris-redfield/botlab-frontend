<template>
    <div>
        <v-container>
            <v-row
                no-gutters
                align="center"
                :class="{'first-row': !$vuetify.breakpoint.xsOnly, 'first-row-mobile': $vuetify.breakpoint.xsOnly}"
            >
                <v-col class="text-color" cols="12" xl="6" lg="6" md="6" sm="6">
                    <!--div :class="titleSize"-->
                        <div style="font-size:2em">
                        <!--Implemente <span class="red-text">IA</span> na gestão do seu
                        município com o <span class="red-text">Assis</span>! -->
                        Você sabia que muitos problemas da <span class="red-text">gestão pública</span>
                        podem ser solucionados com <span class="red-text">Inteligência Artificial</span> ? 
                    </div>
                    <div :class="{'text-center': $vuetify.breakpoint.xsOnly}">
                        <!--Aumente a <span class="font-weight-bold">produtividade</span>, obtendo orientações de maneira
                        <span class="font-weight-bold">rápida</span> sobre as melhores
                        <span class="font-weight-bold">práticas</span> de <span class="font-weight-bold">automação</span>
                        e <span class="font-weight-bold">inteligência artificial</span>
                        no <span class="font-weight-bold">setor público</span>
                        com o assistente virtual <span class="font-weight-bold">Assis</span>.-->
                        Assis é um professor virtual que apresenta vantagens e informações sobre o uso da
                        <b>Inteligência Artificial na Administração Pública</b>. Desenvolvido com as tecnologias mais 
                        modernas, ele orienta de maneira <b>rápida</b> e completamente <b>gratuita</b>. Clique em “Aprenda com o Assis", para começar. Aproveite essa experiência!


                    </div>
                    <div :class="{'text-center': $vuetify.breakpoint.xsOnly}">
                        <v-row align="center" class="mt-2">
                            <v-col>
                                <v-btn
                                    rounded
                                    color="#007A4D"
                                    dark
                                    class="mt-2 mr-4"
                                    @click="abrirChat"
                                    height="40"
                                >
                                    Aprenda com o Assis
                                </v-btn>
                                <v-btn
                                    rounded
                                    color="#12174E"
                                    dark
                                    class="mt-2 pl-4"
                                    @click="abrirChat"
                                    height="40"
                                    outlined
                                    to="/about"
                                >
                                    Sobre
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col v-if="!$vuetify.breakpoint.xsOnly" cols="6" style="text-align: -webkit-right;">
                    <v-img
                        :src="heroImageRight"
                        contain
                        :width="heroImageRightSize.width"
                        :height="heroImageRightSize.height"
                        id="heroImage"
                        alt="Imagem do Assis segurando um tablet. Cercado de círculos onde gestores públicos e cidadãos são atendidos"
                    ></v-img>

                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" xl="4" lg="4" md="4" sm="4" v-for="(card, y) in cardsHome" :key="y">
                    <v-card>
                        <v-card-text class="pa-3">
                            <div class="mb-2">
                                <v-img
                                    :src="card"
                                    contain
                                    max-height="auto"
                                    :width="'100%'"
                                    :alt="cardTexts[y].alt"
                                ></v-img>
                            </div>
                            <div
                                class="black-blue-text font-weight-bold text-center"
                                :class="{'text-h7': $vuetify.breakpoint.lgAndUp}"
                            >
                                <span v-html="cardTexts[y].title"></span>
                            </div>
                            <div
                                class="desc-text-color text-center"
                            >
                                {{cardTexts[y].description}}
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <!-- CAROUSEL -->
            <!--<Carousel :slides="carouselTexts" class="px-xl-13"/>-->
        </v-container>
    </div>
</template>

<script>
import cardTexts from './helper/cardTexts';
//import Carousel from '../commom/Carousel.vue';

export default {
    name: 'Home',
    components: {
        //Carousel,
    },
    props: {
        isBeta: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    data() {
        return {
            solucionaDuvida: require('@/assets/images/home/cardSolucionaDuvida.svg'),
            multiCanal: require('@/assets/images/home/cardMultcanal.svg'),
            cardDisponibilidade: require('@/assets/images/home/cardDisponibilidade.svg'),
            firstCard: require('@/assets/images/home/cards/first.png'),
            secondCard: require('@/assets/images/home/cards/second.png'),
            thirdCard: require('@/assets/images/home/cards/third.png'),
            heroImageRight: require('@/assets/images/home/avatar-principal.png'),
            bodyBackground: require('@/assets/images/home/body-background-top-right.svg'),
            cards: [],
            cardsHome: [],
            cardTexts,
            carouselTexts: [
                {
                    title: `Você sabia que muitos problemas da <span class="red-text">gestão pública</span> podem ser solucionados com <span class="red-text">Inteligência Artificial</span>?`,
                    description: `E que isso não é tão caro e complicado quanto parece.`
                },
                {
                    title: `Você sabia que muitos problemas da <span class="red-text">gestão pública</span> podem ser solucionados com <span class="red-text">Inteligência Artificial</span>?`,
                    description: `E que isso não é tão caro e complicado quanto parece.`
                },
                {
                    title: `Você sabia que muitos problemas da <span class="red-text">gestão pública</span> podem ser solucionados com <span class="red-text">Inteligência Artificial</span>?`,
                    description: `E que isso não é tão caro e complicado quanto parece.`
                },
            ]
        };
    },
    computed: {
        titleSize() {
            if(this.$vuetify.breakpoint.smOnly || this.$vuetify.breakpoint.mdOnly) {
                return 'text-h4 font-weight-bold mb-5';
            }
            if (this.$vuetify.breakpoint.xsOnly) {
                return 'text-h5 text-center font-weight-bold mb-5';
            }
            return 'text-h3 font-weight-bold mb-5';
        },
        heroImageRightSize() {
            let size = {
                height: 442,
                width: 592,
            }
            if(this.$vuetify.breakpoint.smOnly) {
                size.height = 206.64;
                size.width = 305.86;
                return size;
            }
            return size; 
        }
    },
    mounted() {
        if (!this.isBeta) {
            this.initKommunicate();
        }

        this.cards = [this.cardDisponibilidade, this.multiCanal, this.solucionaDuvida];
        this.cardsHome = [this.firstCard, this.secondCard, this.thirdCard];
    },
    methods: {
        abrirChat() {
            if (this.isBeta) return;

            // eslint-disable-next-line no-undef
            openChat();
        },
        initKommunicate() {
            (function(d, m){
                var kommunicateSettings = {
                    "appId": process.env.VUE_APP_KOMMUNICATE_ID,
                    "popupWidget":true,
                    "automaticChatOpenOnNavigation":true,
                    "labels": {
                    'input.message': 'Digite sua mensagem...',
                    'start.new': 'Começar uma conversa nova',
                    'conversations.title': 'Conversas'
                    },
                    "language": "pt-BR"
                };
                console.log("########################")
                console.log(process.env.VUE_APP_KOMMUNICATE_ID)
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
        }
    },

}
function openChat() {
  // eslint-disable-next-line no-undef
  Kommunicate.displayKommunicateWidget(true); //This will show the widget
  
  // para ser examinado durante o uso
  // eslint-disable-next-line no-undef
  // Kommunicate.launchConversation();


  // eslint-disable-next-line no-undef
  Kommunicate.startConversation();
}
</script>

<style>

.text-color {
    color: #12174E;
}

.first-row {
    margin-bottom: 105px !important;
}

.first-row-mobile {
    margin-bottom: 30px !important;
}

.red-text {
    color: #DE3831;
}

.black-blue-text {
    color: #1A2586;
    text-align: center;
    font-weight: bold;
}

.desc-text-color {
    color: rgba(0, 0, 0, 0.6);
}
</style>