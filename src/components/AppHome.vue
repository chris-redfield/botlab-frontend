<template>
  <div>
    <v-container :max-width="xlAndUp ? 1800 : null">
      <v-row
        no-gutters
        align="center"
        :class="{
          'first-row': !xs,
          'first-row-mobile': xs,
        }"
      >
        <v-col class="text-color" cols="12" xl="6" lg="6" md="6" sm="6">
          <div style="font-size: 2em">
            Você sabia que muitos problemas da
            <span class="red-text">gestão pública</span> podem ser solucionados
            com <span class="red-text">Inteligência Artificial</span> ?
          </div>
          <div :class="{ 'text-center': xs }">
            Assis é um professor virtual que apresenta vantagens e informações
            sobre o uso da
            <b>Inteligência Artificial na Administração Pública</b>.
            Desenvolvido com as tecnologias mais modernas, ele orienta de
            maneira <b>rápida</b> e completamente <b>gratuita</b>. Clique em
            “Aprenda com o Assis", para começar. Aproveite essa experiência!
          </div>
          <div :class="{ 'text-center': xs }">
            <v-row align="center" class="mt-2">
              <v-col>
                <v-btn
                  rounded
                  color="#007A4D"
                  dark
                  class="mt-2 mr-4"
                  height="40"
                  @click="openChatbot"
                >
                  Aprenda com o Assis
                </v-btn>
                <v-btn
                  rounded
                  color="#12174E"
                  dark
                  class="mt-2 pl-4"
                  height="40"
                  variant="outlined"
                  to="/about"
                >
                  Sobre
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col v-if="!xs" cols="6" style="text-align: -webkit-right">
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
        <v-col
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="4"
          v-for="(card, y) in cardsHome"
          :key="y"
        >
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
                :class="{ 'text-h7': lgAndUp }"
              >
                <span v-html="cardTexts[y].title"></span>
              </div>
              <div class="desc-text-color text-center">
                {{ cardTexts[y].description }}
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
import { useDisplay } from "vuetify";
import cardTexts from "./helper/cardTexts";
import solucionaDuvida from "@/assets/images/home/cardSolucionaDuvida.svg";
import multiCanal from "@/assets/images/home/cardMultcanal.svg";
import cardDisponibilidade from "@/assets/images/home/cardDisponibilidade.svg";
import firstCard from "@/assets/images/home/cards/first.png";
import secondCard from "@/assets/images/home/cards/second.png";
import thirdCard from "@/assets/images/home/cards/third.png";
import heroImageRight from "@/assets/images/home/avatar-principal.png";
import bodyBackground from "@/assets/images/home/body-background-top-right.svg";
//import Carousel from '../commom/Carousel.vue';

export default {
  name: "AppHome",
  components: {
    //Carousel,
  },
  data() {
    return {
      solucionaDuvida,
      multiCanal,
      cardDisponibilidade,
      firstCard,
      secondCard,
      thirdCard,
      heroImageRight,
      bodyBackground,
      cards: [],
      cardsHome: [],
      cardTexts,
      carouselTexts: [
        {
          title: `Você sabia que muitos problemas da <span class="red-text">gestão pública</span> podem ser solucionados com <span class="red-text">Inteligência Artificial</span>?`,
          description: `E que isso não é tão caro e complicado quanto parece.`,
        },
        {
          title: `Você sabia que muitos problemas da <span class="red-text">gestão pública</span> podem ser solucionados com <span class="red-text">Inteligência Artificial</span>?`,
          description: `E que isso não é tão caro e complicado quanto parece.`,
        },
        {
          title: `Você sabia que muitos problemas da <span class="red-text">gestão pública</span> podem ser solucionados com <span class="red-text">Inteligência Artificial</span>?`,
          description: `E que isso não é tão caro e complicado quanto parece.`,
        },
      ],
    };
  },
  setup() {
    const { xs, sm, md, lgAndUp, xlAndUp } = useDisplay();

    return {
      xs,
      sm,
      md,
      lgAndUp,
      xlAndUp,
    };
  },
  computed: {
    titleSize() {
      if (this.sm || this.md) {
        return "text-h4 font-weight-bold mb-5";
      }
      if (this.xs) {
        return "text-h5 text-center font-weight-bold mb-5";
      }
      return "text-h3 font-weight-bold mb-5";
    },
    heroImageRightSize() {
      let size = {
        height: 442,
        width: 592,
      };
      if (this.sm) {
        size.height = 206.64;
        size.width = 305.86;
        return size;
      }
      return size;
    },
  },
  mounted() {
    if (!window.chatbot) {
      // reloading in case the package wasnt loaded
      window.location.reload();
    }
    this.initChatbot();

    this.cards = [
      this.cardDisponibilidade,
      this.multiCanal,
      this.solucionaDuvida,
    ];
    this.cardsHome = [this.firstCard, this.secondCard, this.thirdCard];
  },
  methods: {
    openChatbot() {
      window.chatbot.destroy();
      this.initChatbot(true)
    },
    initChatbot(autoOpen = false) {
      window.chatbot.init({
        chatflowid: "e057b68a-e2cc-4452-83cc-9bed0a435556",
        apiHost: "http://35.232.116.109:3000",
        chatflowConfig: {
          // topK: 2
        },
        theme: {
          button: {
            backgroundColor: "#3B81F6",
            right: 20,
            bottom: 20,
            size: "medium ",
            iconColor: "white",
            customIconSrc:
              "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
            autoWindowOpen: {
              autoOpen, //parameter to control automatic window opening
              openDelay: 0, // Optional parameter for delay time in seconds
              autoOpenOnMobile: false, //parameter to control automatic window opening in mobile
            },
          },
          chatWindow: {
            welcomeMessage: "Oi! Aqui é o assis GPT beta",
            backgroundColor: "#ffffff",
            height: 700,
            width: 400,
            fontSize: 16,
            poweredByTextColor: "#303235",
            botMessage: {
              backgroundColor: "#f7f8ff",
              textColor: "#303235",
              showAvatar: true,
              avatarSrc: `
                                data:image/png;base64,
                                iVBORw0KGgoAAAANSUhEUgAAARYAAAENCAYAAADKXEoXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs
                                4c6QAAAARnQU1BAACxjwv8YQUAAG6MSURBVHgB7b0HnBzHeSf6Vc/MZiwWORBhAWaRFABSgYoERVsWJVuk7N
                                /JvrNNgpRt2e+dRdI+vXfPlkVCuvP9nhwk0u/uWbqzCdBBspUI2TJNJQKkEiXSXDATAIlFIDKwuwA2zkzXVVVX
                                +Kq6enpmd2Z3Z9F/ctDd1dVV1b1d//5/XyUCGeYk9u+nPQBjPTkobAwAeijQXhIE8wkBFk7YMdtS2osu6ZG/qWBQ
                                /hjIIJBonwDtpxQGaRgOESD9rCz9LGywCIX+devIIGSYcyCQoWnByaMAxV6AYCMEZAMnDUrJRgBBGFMliekCIxbSz8reH
                                5bLuymQPk46Jcj3ZaTTvMiIpUnASSQH5c1BEPYSkr+BUsoIBHphToORjCQcdrAzI5vmQUYssxT794/2FoLcrYTkNjAzY
                                jPMeRKpFhHZlCHcEZTDvlXrWvogw6xDRiyzBA6R3ArNY8rMKNgL3A+E9HGiKZeLO9eta++HDDOOjFhmEIf2Fzczh+otbJ
                                cTSS9kqAMIUzB0J3MU71i9rrATMswIMmKZRnA/SR5KG4NccHumSqYFg8xserhcpjvWrMs/DBmmDRmxTAO4MsnIZMYhSCY
                                sh9szJdN4ZMTSICAzZwtkZDKrEPllYCctl+/PnL+NQUYsdYToVxIUtwDJ3wKUboYMTQDSF5Lw/nI593DWlF0/ZMRSBxze
                                P7ERgtztkKmTZoYwlSbKE1uzlqWpIyOWKUCYO7ncvZk6mWMghJtJWzNfzOSREcskcHh/aQswZ2xGKHMb3BdTJnTrmjX5bZChJmT
                                EUiW0/wRyd0HW5+SCQkYwtSMjlipw5BC9KwzD+yDzn1zQyAimemTEUgHC5AnIvZAplAwIGcGkIyMWDzKnbIZqkBFMMjJiQWB+
                                lN5Cjj6YEUqGWsCaqbdlzdQ2MmIB6ZjNAVMo4d2QIcNkQYLPFctj92cEkxGL8qN8FjLHbIY6IDOPIlywxJKZPRkaCkJ2Fsv
                                jd1yo6iWACxCvH6L3FoLwmYxUMjQM7N0qBC37+bsGFyAuKMUSjenJP8j+6hshQ4ZpAjePJsKJGy8k9XLBKBbeyQ2C3DMZ
                                qWSYblCA3gtNvcx5xZL5UjLMJlwo6mVOKxauUjJfSobZBKlenjl4kLVGzmHMScWS9UvJ0BQQ/V5g61ycYGrOEYswfYL
                                wMcjG92RoAsxV02hOmUKHD9PbhemTkUqGJsFcNY3mDLEcPkg/C+VwG2Q9aDM0H3oCSh6cS61GTW8KRf4U+vXMQZthTmCO9Nhta
                                mLJ/CkZ5iLmgt+laU0h3os286dkmIvgfpeWoOUx0VO8SdGUxMKdtFEv2syfkmFugpMLf8cP7y83ZZeJpiMW4eCKnLQZMsx9BPD
                                ZZnTqNpWPhT9gGk1qnSHDBQUSBPddtJpshSZB0xCLaE7OetJmuJBBgs+tWkPugSZAUxDL6wfLD1Iqli/NkOHCBoFtq9bk7oBZjll
                                PLBmpZMjgoAnIZVYTS0YqGTIkYJaTy6wlloxUMmRIwSwml1lJLBmpZMhQJWYpucy6fiy89ScjlQwZqgSrK6LFdJZhVhGL6AiUNSlny
                                FAbWJ2ZbZ3oZo0plHV+y5BhaphNnehmBbHwuWnDMPwcZMiQYWrIBVtWrSLbYYYx48QSrfUjBhRmyJChHgjLm1ata+mDGcSM+lj
                                4fCqMVL4OGTJkqB+C3GP794/2wgxixhRLNklThgyNQzRZVLBpplYAmDHFIhYRy0glQ4aGQEzSzadsnSHMCLFEzcrZHLUZMjQU
                                rI7NVB+XaTeFDu8vbYGAPAgZMmSYHsxAS9G0Eov0q2RTSmbIML0YLIYTm6Zzcu5pIxaxTEc2+XWGDDOC6Xbm5mGaEK2lnJFKhrmJ4
                                sggDB7YDUMHd8PgwT4YOXkARk/2w8TIEJRGB3Q8wv4rdPSw33xoYb9C5wJoX9wLnUvWQsfi6Ne9ZqOIU09Ezlzg3f6nZQa6aVEsmV
                                8lw1zEyKl+eP3pb8CRpx5mhPIsFIeZGCBUnyeietFoS+RWAO3L+CZuhELHApi/9o2CZBZdcQPMX7NBENCUEcI9q9blGt7LveHEkvl
                                VMswlcGWy//GH4MjTO+DkS7tEGK9EhBMEJZIoOE1QUNVL/KvDOeS+vIboWqhIiO+yfUJk3OhKrmYWMpJZdMVm9nv3ZIlmWvwtDSe
                                WwwfK+yHzq2Rocgwz02bvv94vSCUybUzVMSRCJUkoYlH7eteqcGo/uoaiMCL/pxXT4kpm1Ttvh4WX10gyhOxctSa4ERqIhhJLNmI
                                5Q7ODE8rzX9sKB554SIY4BACYIKhDA9jMAWQOIfVCqDetKD20L9Oj1nVG0XAVc9E7b4Olm26pzj/TYJOoYcQiTaD9kCFDE4KbPK8
                                88gC88ugDUBqOGlJs5YF9KQaEKIJwTSH7GqxECCH+tPQ/VJpbAIi1LM2k8uPKhZtJF9/yyXQV08DBig0jlswEytCsOP7iLvjJ5z
                                8Cw8w5y6H8IkZ5gGOeGMIIAnZEaZxsRL036kT7ZPgJYkwcK11tIiETCJXDVTSRKWYCuYK5+IOVCIb0rVobbIIGoCHEkplAGZ
                                oRXKU899VPCaVCDIdYsNWHa75ghyuxTSHiEgRKA6kPnJY41j4bnL5zPTgmFrHLxglmfQLBsHq6dfW6wn1QZ9SdWDITKEMzY
                                vhkP3z3v9wkthw+88SQCkecKDCxWKpCqhUAcHwsSq24JIV9ME4Y8efta2ECFIuHr/mZj8Gan/2YSzANaSWqO7EcPhg+lg0wzNBM2P/4
                                dnjqb35f+lKSK7A2U4iHIFQcXbOR2SM2rqqQu5bKAHyFJhaTt+uzAXRNvNwqrrDEaEQ+nFS4ebTiHbeji+vfSlRXYsk6wmVoNnDTh//i
                                Jo9jpnBioEmtOz5iUWrF9s2gjTGVkFc45hS2FE2SaeW0LMVI0VVAlBHLFrjsV/5MtyCFhN6xZk1+G9QJdSOWbOKmDM2GZ7+6FZ7/6qfl
                                ETZfqKyLpoWHE4b46su4tsPVINGhqnnK6ZNihbnpEa+vxyggFA+rFBInPJyfuqc2pl6u+/h3lWnETKJgXb3GEtVtPpZCDu6CjFQyNAme
                                FUrl0ygEuU0pAeoaGhRVUoIrrdlGFVqpCrNvLsXKxoTJxmQrv/g3n8bSoDquSsMmLXNexnaSHDt1AJ7c+iY4+cwOftgjxxLVBXVRLJnD
                                NkMzgSuV577yKbBMHQmjMsyR7d9wW3Jsnwnx+ET0McEGC1IqJG7SEKdmItqDeLO3T7HY5Y/Kp0wo5XtRhElYq9Efwfpb7gXmyF1XD0du
                                XRRLSxDWjekyZGgkXn7kfnj2K1ypyMqJhYj+qhOhWkwE9f3HZGFXXiNLong0Fs+KHTlUlTJBTlylPKIKb19rN2dDzPeiY9EoXYLiiDBi
                                lcBSUq9949Pw2o6tzPJofRDqgClPm8Adtqx8WyBDhlkO3pT81EO/7/RgNWQhtICs5EaxWB3pnWsw0bhbpWwUcRiTRfp0ta8EKIlfp+JY
                                yoWYMIpLZesjpVjwnUUEpi62NZpqNeLkwrD50P7i5tXrCjthCpj6fCwBydRKhlkPPubnW5++CSI1AKi/iQvqVGaKKieH67+wTR5jKWFF
                                pOK4LTxEkgq+OFYcmTy6jmJmRPkrQqHxZmdVdk/CjnL5FH82vE7vhClgSqaQaF7OHLYZmgC7mbM26vymzI+o5YdSD7VQguo4ViLKTHEr
                                q/KVUFO5cRgQZHmh9PSuY1ZhWOfsVh5Mb9HNQBVIi0TgwLcf2Pz4A3+0BaYAAlNANh4oQzPg1V0PwQ//8k6xb5ydAO7kS0hneJqNwXQ0
                                A/A7V0VfFwBwBiLiaRGwatEGmOX7wH1S3CECAP7ma6W+DFkhTwpYTl3pa8HN3uCqqMjR3L/l23QdTBKTViyZWsnQDDjPVMqzX9kKUcVz
                                zRblwMQtK/KYUmTGqGBJAoS67lKzsUws5Iilrtlj8tVZga1ccMc5X3YYBJUbN3Xja40DF4fb44/0OQq9D/4M3A2TxORNocy3kqEJwNXK
                                eWkCUet1p04lo5aZov2tKi5IuqA+UyL+1beMFl5xpZlkkZuXOIj2qfjMtPi1Mi4Ks/vhUlQOf1qYXEGTkkjl3gc3T27mx0kRS6ZWMjQD
                                OKHsFmqFOOqDIoXgUx/SrJC1lSYqBhXXdYTavpCo5diQlr5aKQiXYCxh5RKZUkeq7EQqDqJblyJeilqzcLO3acLGP7dcfBvILelhzTtb
                                YBKYnGLJ1EqGJsBu0QlOgtiVHRMH8VQwbEggKoCYurCIB/kzwKEEq4laXa1MLhxTEQexwojHtFEkYhOGPEYd4XRs4obgPKmzL68n5C6Y
                                BGomlkytZGgGTIwMigmb4l/kCLYOwD4NasUwmobGM3Hi2i5Tp5laKhk7VUVbuJcMsdOkKhViCZp4vspEctQSikOtZmriScP1t9DI1/Ke
                                2lVL7YolUysZmgCHfvoN6VvBcL7MxCYTih0VMc1BPGH4HMhKjU0M6RQmyj9DnLSivHUfOqucHl8KdemQxO+Luuk7hEMJxFUL8g1RnYiZ
                                ZjMgt0ONqIlYeI88yNRKhibAvl3brLlRDJDpQ4l3gKCpjPIrDiYOtQiGJDhEbWdw1ESdpBQAjZrGabhEgchGBlFQFxLnh9OXpENd8gMn
                                vl0mQzIifDNrIdoMNaAmYiG5XKZWMsx6cKVy/MXHzYhkSxK4I4FFBCcFqrvNGx+K8lkY/4VwjuovPKq8njR9fXzteA4RxHw9BOLKBOxR
                                1zHTTKVPPMc0IT6ArcwkgUJtI5+rJhY+gjmbGS5DM+CY8K0YaH5B/xqfgogBduULZIUNZEzs1SCo9cVj2liiwq2wRsu4ldvX1C2WE8E9
                                eV15RH2kQaGiEqHglBnHT0pLHG/+5sf/3UaoElUTSzaCOUOz4NBTO+J6hOBKYjss8Ujm6EwoT4coHnbwgnbG6vS1asEk5MCa9xanS+Pp
                                UekyjgkSV21hn5Ebbvt78PhDqv+tpJiIde342cNboEpURSxMrfSwrG6FDBmaAGf6d4PdEQ199Z3KRK05SvBss0qZUOu6yDqynSLUIioT
                                arZSj3iakDWVaF8J8uNQsKZJ8FAV+P0x6B6AaFLFUzEQSAKx0xQkG13bsXDV7ZwLoApURSwFKHNSydZezjDrwZuZuY+FYlOD+nwoMR+C
                                jG0qHz5nO2qJIyUIqq64UjrmDdhKwVo30TJRrKJC3FTB+47pI0wop3gelWObY+CkR51ro+3Q/p/2FKC4BapAdaZQMLlOMhkyTDe4WnH9
                                A9Qil6gSUooqK9WaAux5V9TVymTyKQMUlbiV0o2H/SkUpY2jUc82rlSoJ32q7kW7Y7SH18SjBF3l5mHn4/brKY4MAeTyt0AVSCWWw/sn
                                uMOmaqdNhgwzieKwmgva93XHUB5dX0VWfg/bwekO1nPnxfV/6aMKSmLEoWLFfRu+qg+xnGms7G7pbJXlz9V+TnaY26+nxNTg2Mn9m2W3
                                k4pIJRYS5DK1kqFpwE2hpOpoI24eRf/GzRe7osWvifawSYFIRpolRjQ4fhxLKRGUkiQL6XGN8QMh4Jp4VvGor8wE4v1Y8Nbe95GSUC1V
                                +FtTiYUVYTNkyNAkOH/yAKquyHHqlf0UzGxscZMFGxkUkhynYK739WPBc9dSXBLb/KCWj8VUfNVPhrpqiIKdt5UmaDPOMrcsFea5xtU8
                                NlOJf8dO9zOxEdwOKahILFlP2wzNBkUlWG3YNCEVAMG+DlzJUFxdOWV7kZ0EusZrbzjzqRhic9f7MSnhksp/0QxytvhQcY2/htgFk9fj
                                yauIJ1dz7wSRkU3EJl5JKELoSTOHKhJLUAUzZcgwGxFZHabSKejqYtVt94tNtQljhWlfqNrHicT38fWmUttEZ1OMbUKJCaUovoraZSE0
                                MS21rAcqtghTNGirJueaBDMRI8hV5oaKxEKzvisZmgxdS9bKPVWjlPrAVUqpEGyiUOucJg6qqqCpjj59oidzsmI4ZpcO86elqr2eUAqZ
                                LdSp8BSX0ZNSVLXVjCyYMIxZhUdXx9PAKisOVrxbK/VpSSSWg/tLWd+VDE0Hor/7TvWXE2TjEcG6idkyWaJzmgCInbrec5OnMg91uRM/
                                bnw4fg5imzU0ppTsSk6ITRZRioZkiOw1TMAZ64ScvrbOkU+N4LDAKqdzzz15KCW2FicSSy4gVbVXZ8gwm1DomA+Wo5Oof6hjOiCKsZ0X
                                YFV6XQmxOUXQiGT8ZVekAFZcs+Igjqf2ZELULZsiAutGQBGenluF2nnZZSCx0tijuV1FQrT55vO3UKdZrJI5lEgsmRmUoRnR0slFNvq0
                                0vgs+C6IZ3Y3XaEINhtkfBnimidJeej6SAhKCykFSiDN9DCpKz0mzR1MnCimUSOGbGyzEBwJYpMerehD0veVyBFeYpEe38wMytB0iHws
                                bsXGvhQX2FRQygbAViw0/tNJhfEUkTkRXxzeVwZTlnjZsV/Frdwh4guSeJ1JG2yStcrjbrGpBXo/32HRQmLrUJJiydRKhiZG/AtuBg5i
                                c4GiqIhcpNmilvqIzsYrYNxXgvMnsf04pRiVEG+aJolxLcOMUEddEGsDCXkST5hNnsRzDlxi4fByhZdYSBDcABkyNCG6lvSCXTHcrdqX
                                P2cwIf5SG4cs9lVIE8jyVagt1TFMjo4/hYLtZNU+ExMXr3BEHL+QVVaCCYvYZaHOfTomjhlb7T4rl1Ds55dvt4klCAKvLzZGLGJCp2xs
                                UIYmRkvHAieEoo2p6NgsoPpf6cNA52Rs5zoK9vIaJh5BXhicrulkZ2b2j+q/rSIoKpVZh9m+Hzybglt2rdAkcVirITpl9UubRLkDbYvX
                                OiWB3iNH6Fo3XoxYClDeDBkyNDFaOueD3R6CfScK1KgVayExpSDMOfvrjR3D7uz6kg40gRE7f5MzgryOANiz6ENcPKDA+LgllBexb9UQ
                                j+1wJii8EtScMNwMKsRNIQjHix9yw4J4IpA1M2doarSwl59aygNQ3TFVDjtt7X0VD5sUBngWAjtx2w+C83Mn9sY6KarbFLVOOeLKnY7B
                                4iuPL4QarYIhuvdjXrQSo+AnGTNdRPuiteADyeU2uGExYqGEZGZQhqYGVywRUP8R4vOnyK32e7jf+bipYPjBNZMcU0SngaNRsAciEisJ
                                3yqKrsqgOm/q+HlwXNsgI8hnRCWJ2bljXwyGTZCuGaRjeZqdLWKRc6/0QoYMTQzjwOVAlZzYpgaeC4V6yMBM7o+MCasy+/7FQOqIUnvs
                                kKUOqF2HXXKhPvetn9gIzs9SYChdokgIh7vPi4DxN0Vh81bHhIlCj+tncRRLkKmVDE0P6sp7Ao7KV/4GtU8cU0mescJc4wacJmJnqdY4
                                ywA+EV+WlYA9pYExTbAzOCYqrDRs2iSWz8ZVUn7/kDlviEapvnmrk+nB9bNYxJL5VzLMBWBTSJGG3QnOI/2tCoscnJbIsSsp9dZzl7RM
                                fL+pBY4PxVEOlmoi9jpG1qBHCg57xu+JyGtlGjSWJ74Q3b/cb1vcC0lw/SwWsTD/Si9kyNDkaOlQxCK/+ESqiYSVEQ3ijkvrQ2/5MWJG
                                kjivZ3yLEZVrvCCio3YltpSEJhISSy++FjMmSjRHr4pjKTCnNF4lZFQbbxGatybRFOJpb8aHmljkEOjMFMowB2AbLfb0KW4lpSgmHmOD
                                0/GogZhWkV4TNc2Cbjoy1+l/qZ2rrv5aSdhlQ7IFhTuml6tUqPMMvPdk9s0gSerMzyvNoDWVqYHF6sXTKGhiqTQEOkOG5oM9KbWvkxk+
                                4XhcwNAABdP71qgR4ynxqwmfYtGpE7ekFImIuAmizB7bJ+Lmi865HOI1+zDpqfuS9+kh4AWX3wBpyEF5s9rHptBmyJBhzoDGg4i1kg8g
                                6YB23VHLcTMGT5lgj1S2MgOIKQpbwehwxVS4ORw3k+u8zHlCEvw1sTK4hyZ/RST6zo2sc9IlVRFLAGGv2Vc7hGyADBnmAPiCZaAJBFca
                                twqSmE6xzaG4USJiOCsh+oBNIWP2GGeyHRefp2DITZ0knvQhKeeEfV36hDQw2VCLuPLMZ1UNsVAINqt9TSyZ4zbDXMHEsFoCBFfKAEzn
                                NFPpCVrv2JzF5oGrMCKnaXxyKIDKPhiTc2QNmfLZfVowwbg+Hqx4aMypHMuXOhRKTfkBpWzMIEOImBgXXL4ZqkEQGHEiiCVz3GaYS4iI
                                xa7Y7pKqGlotUMfBiSq7ZUIY/WGuB3RdLBCwvUWkzwanQhPkDya4+DIlyBdCAeIkBBZp4jIqkiEoZ6onxApi8Zdu+iBUA+zAFalkjtsM
                                cwkDB56Ve0qVKIsCVUxlaaB/7e+4cmQSwBfoRdqJSg/HN1HNZE/EMb2IVCwumRCnPO55m1QshRJjOeJsXaOOgJqmE+s177wuDD1VmEEK
                                BSj28m0QJUWy2eIyzAnwBcsmRgasMGuuVqrMAtf0sJWDVe30vLfIBDI2DegBj4DPUW+6trmFVZFrRrlkhciEAFgKhWJ1g+6A+ogPqy63
                                ed0+H5lBN0B7hY5xHgiREkQZ0I3FkUEYOdUPxZFByJChWXGmv8/unYoqlFAfBLf6mHN43R/fF1+mEIViNwg45oas9JQ65pQHVusTVSGG
                                8AgiH8unQ12fDDgE4ZKMvU9jdKLUWDzuynfcBrWApS2IJc//+dGf3bzh5HPf0be1+IobYM27boO177odMmRoJhz86Q6wv84A2glr107A
                                Tc94XDBYWwOtNihJrLamtlJPoCQbSXDESTwqj9s3Ju5kjpldgKlEmWpmjJENqpcAsZf6AMfsi1JcUIMZxBHkAtHtWSiWk89/txfbbSdf
                                2gVPf+Ej8BT7jYimuwwZmgPHXtxlLUuqvRaxNYvN1IxE93hDCsYyU0xozLGr4Zg24CogZA4pVeNcbq9ESG3zh9pp6BwoJkV0RqdnSm6e
                                BYA9B7AlwXQaSzbdUnF8kA/sORtTiKE37mgCOPDENtj1xzfB4IHdkCHDbMeZ/t2iD0tsLA+pZJJIlUDiFUs5OWMMAG7/F0VAbuUn3nxV
                                BzsSM6OI7Z+h1AomdipIHBGIm0TEvidiyqSC1ZKrgK7BGHhlJxz89v1QG8TUthDw5qEV193Sox4CtWQXYX6XA7Drv76HkcxDkCHDbMa+
                                XdujHYq9B8T+2vv4xeqXokwIpBSIT4mAVVlV2pWnNpDagXiKQcAwjq6LqtzEpUqwlBNxFygjzmOw78+dDsImSHOvpZEh2POl34fXdmyF
                                GtDDOSXgzUNX/4c/k3NZEiez6FccHYKffP5O6M/IJcMsxgHhX+FQ77ExBdx/vRqAGh1BE30s6Egu22r7aVzWUOUIwJBV3IzSpprjB4rO
                                4QpP7LSJIk5zT5rCSKU7wM+HoG28/u//p08z5fIAVIvWVpgf8KbmDmZHXf6hT8qksfRTNxtl9Mzf3JOZRRlmJbgZNMzUtV0xQH/JbVDw
                                VSAMtzdsbIyRiQg+krJHCBM7DsGKBJDJ4pQBt1RZSsbEtWe0I6bshCj7Azz6CJJUimsORsvDArz2ja1VtxiXxsubAnZpLz+4+Oc+JlqC
                                zB8i3sZdYgn/4LO/CMOZQzfDLAN32lrNsFS9wx4/hvO1purLj2APRIzTjjJB4nVWqoyYwsBlc5SU5bRVuSv1IskEzb2i5rD1j6CWZafq
                                GWA95T4HtyUMp0VQ2aK6f+qZHVANAgh7mGKJnC0c1/zqn0On8AI7bI9syeGTBxi5/FLW3yXDrMJe4V8xpGHaQUyl0eICPHqGuvOQGBi+
                                Mt3+9chggn0yxPow09iE20TzGgHTPQ1/xPWYHavsLhGacpki+1VPdOiWAzRpUWmiTYQETo1RODEKUAxd1RLtDbyyC6oBK3cvT1X3uuV+
                                lnf+wfeg0Nmjo5hCGAwc6IMn//JOyJBhNoC3BHFTSC/8RdyBfXIbM08UCUUnK44YVlYMruRiBinbYariJ+kdqq6hTjiYJGN5a2B9gaiR
                                ULB77pp9PC8vsZ5HdB8h+52dADg9SmG4SGBwHODVIUYuZZSHLFS1xMLQE7jd+TsWr4Xr7/oaQKwQ+smKfw4/vQOe/PxHIEOGmcbRF6IX
                                PupZC6gZFX/xRQynAqqzFHUWc89TiK/bDJ7RzY7KAc+CaWpfuy4dNSUsMocgCAHsXwHwUY1NOTGzSEc251Ua4yUKpVBlE8Xmy9yfHk+o
                                /1WAd5IL2D9r3ROLr7wB3vhrn5Xpoj8KUC0JeUb7H98Oz331U5Ahw0zi4FPfAF2FlDix6gGq1NT1TyizBVAFdswK9E1V6iQ2w1uMXGwF
                                Y9EOjRNYVK0i8wmvDaSKQRxysa6kVioWsLqJxyPAnKx8LiZlqIljDq5icAq+tJMQlumCIOnkJcyZu4QRjGnDJw7DRuHPf3VrRi4ZZhTH
                                XtwJMVXgqYAUzfZE3Sn2Cf5oIh9KzKCxnZouqeiWHGqTG6n4xTcExhULXhvaqBQK9qRP9pa6+ch6G4UHKB8K2KeTDyKSFOQi8+bniiHE
                                rmlLWAnRBUtjfsAKmziy+W13fw06hDPX/1CUc+p5RiyvPFJ9O3eGDPUC962oiZ00lRDwOE7dQxJzyFp+F/R1x/4QYsUFadlgHwpY+1jZ
                                RFxlGCdWqxRxUExs6hxxfER4T9GEGaZgRmTb8Y3uivIKiDGDAsmPnIba85hYo1TaF6+DasDKzpy3FBKJhTtz3/Rbf20VSdmo2PLkhXzq
                                b34PXtuVdaDLML04zYjFHpnMgdpTkMljqpoZRaxMgEpKP2qZVaoEqyHlvAWwO9TJPIhLNNSysHwZ6SixjnIAEBskaCwHovcxIQVWGpbF
                                IQvH7z1PTGuUIppCEC9oLQMSg7QI3By69H0fA9vHYnOtupWnH7oHBvqzDnQZpg9nDvRBfP0c83XHasO4JtU+RRQDYKsXdB2SQoaOTDxT
                                lQ2xAXHzRpWe4NTRddZtuKYdONUOE509I51hL9xr13dptNOSI1qxKCKeV8AXRGn0XP5uqBYBSzF1kqc3/OInoVOsh0vswhP8BwOYGBmC
                                XX+edaDLMH0QzcxGd2jogX4xpyeiAKdTnGt+WI3GlhmifI7RMXVVjNgQWT8CO1/ly4ktf4oIIEYgEE/fjUjda1wHs1E3empMeU2OFzUg
                                +m450fS02gpswRWbq57wifLmZoB0YuEm0Zu1SRRnQFwETirf+vRNGblkmBacFsSCP3DSNCBSf1D3baXmX/kPkVNWxvy5lsljQo2pYxOR
                                ez4ij9DOXVXq2LSWbjpumW2VhM/Y+ybdyMeDVY0iN1RUuWkNJI1yz2sLoAhReivffjvUgJ5UU0jBmEQ406iUtveaiOkBf/D/Zx3oMjQW
                                3Gk7oXuA24oEzzKPNUhkozjz0Fr11a3wFPy+GzesEjHY6Zv4LqEYYrTzJcjPY+kysyWuORZtD55LWlEAELtS5lOJ7olvF7Sa+szD2hav
                                hRU1ziRXNbFwXMVMoo4l65zC+R/o8Rcfh91fyZqhMzQO59gHLBITromOYzkVV0Y1X3cKcfPHvc6QFtW+C+N7UX4M00ysLqdg9wMDS9Dgl
                                M2RSzgmv7hiIZapR90UmVr5h7159svZuXimtiwEvIWIwsJWsPLnUS/+4CehVgTf/f2L4Qf/7Sb4yf2/CK8++oCY9zYJ3CR6y0f/CmzWjd2
                                OfiScWM5XYRKNsy/P01/+FHz149fBzv9+J5w7kX5Nhgxi0myCfAcCxHzZvZVXgQKNKQY3dtxMMb4Zm5SEE1i2shCdDNEEo2JFUy0o/yQK
                                B+mPIVixyPQJslksVFJb0f5ICeA7h3Pwn39YgNNj5rpog6fBpDCf+VVa8zgd3sTM1crtUCtyP7ds6D4+sPD8sVfg+LOPwj5OLowMetZsQGO
                                GDLgTtzQ6BKf3Pem07wNYVAyRjOLOtUtuSC4Yt5G/ed9N0P/Tb8Do4HE4tX83jDMn8Lq33AIZMlQCN7lftbo4mB61BPUXiSqwMWtUt3krDM
                                D0nsfpqT3DFjpUqwXiNmWrYOJJC/1L8MLu5rxRIXh8j6QsQlFcasWxm9ajcv3tK4IpGMEQeOZkAIvbAVZ0UJ2PuRfimC9R+FvvfVrO1VQbAr
                                1QkeYDCgefeAi++0dvEiTjQ2QSrQW7WzSAmSA4eiiceHivyCSTaO/OhxipvMdWNYSTTR9kuDBBS2UojxfZbyI17pF9u9FnTZoDMZVij/WJ+A
                                GbGUZ9UMussj+SYOUjr1bpUFe3K9WESYF60jGKRy8MD9Sa4Z9aJp6vPIpA3UXQKBw6Z1PF6TEC/9+zedixP6d9NtqAQvVfkc7Ft3yy1qU/NPI
                                4Ofygi8w82f23vy8cZLy5GYMz2LW//ufwBGtaRrcHprMQfqAAfV/ZCsvecAMsZz8FTiq7/sed+sEQNXCM/bOoN1tGei6Dkwcth+wdG4NwYoIp
                                4BKU+ZYdc1Lh6L54JbQvbamYzpMHzgEwqd+WN9VTTXKkKrZ/Llu8lfsxHrG7gMa0DMEjlG0SURtFPHrOWrNyGpiuGmBUi3XOKZ8DK4Z230Qh3
                                PzhpLL7VPw6jm8wYmGPHP79pWUnLXMvbYt6Yd0kfCsK/E/C3eo9auEBAvYEuy99favYc8nloutugaWsbfv4SztjvG6xuizo9xmJfPAzT0MLIy
                                UuYR9nx5qXqbmGP/t1b87MoGZHyAgiLJcFWYh9oUIiJaLIgyN5qoJ0LFmxFr58JAfvW1NWqQH2rQB6m5EuMGYNIbHKGUXA1R1VequeGgKxx/C
                                oJOJkZMWj9kRN2sCRSgInby43RGlN38C2p8cJ9DFTp+9UAIfPE2H6VMLB8yqPuHrjKuXaj38XpoBBRiyUEQueOoE46gXgxa9tFdP+vfm3/sq6
                                +q2//dfwyB9cy1TNEOACEvSvSpNf/8T/+Ajc9J++Cv/CzB+cH74pzvLzlvZChtkNRRzlkTGmPth2eFwokeLoWKRISqqHq0TMRKkPfnQ0B1f0h
                                LCu25M66sNhn5OUgYJITHmYM9EVxKoZOh1rgiVUmaVMIT4yctWNeveBxAjJkJudFlclh89HRLKb/biZUws6kJOWOOrosl/580mbQFEKjFiMRj
                                EVHFf1UMq5/se3i8A3f9SQSyfzs1zxvrvg2djoZtumpZIwDv70YXjkUzcJxWJg582RmUIzC04UnBjKoxFphGNScUwUhekSKsVB49XV3qkCpMb
                                4Hnz9tTzc+YYi9LQQp+7iSq+OAewBfQB+U0mGS1UTtdDyVptQuULAfc/tfOLvtTLNlA/FLhV25OJymTxG2GP/8TFGJKerUyWVsLiNatVEkQK6
                                +JZ7xXpCU0XeCEXEjYRqx454EBCd7n9iuwh7y0fNwMTLbv4YvPyvD+gRpkbDUfTwzcM5JiflMXENW3O0dGbLSDcSlJGDIItxsw1lmFAf0v8h4
                                uqL0PXg3+eoyBF1IBAX3d3RuzLIzICvvcrI5coislhIhQJgw8g9T5wwcBybeJ94jhB5eZ6QtWR0jHyI+l+DNxE/eTwPewYD2Ds4eSJxsbgtyh
                                8vwraekcpU/CoKLM3B/DW3/0X/vm/+ae+IVhHUslFtuUeYcnlIzNR/4ye+K5y43Gdy+ft+l6mWT4NFEh7PO2dF55XV+agrWzvnQ4baIIiAqwx
                                OFKNRZwVBHIIwwkhhcOKYQC0tNP5XSPR3EH98f2G8uw1Bd7d5V/rPBvDIwTy8f01JqgL7a6+2uGoOjAewoDUEAIK+2k7J8fQD+mIZpsiBJs+2
                                QqkzZoeo+uQSGNXm054hAs8y8+bZ07WbONViUVt036p+rnjHFlhfB1IRoOFgfv2Nvz247j2/Ay9//VPstzUpJmB+H2DE8ugfXAc3/uF3Rb+Wy
                                2++C15+5AHH16Jg/qjGPezKPTduBk4KaksZIQjzhJGECOdbTiITRUkooZ8o9D9VIklV0OqiUyfQOp9UjjqyD/e3tOUA3nNRCfwKBFhrCIEfMn
                                PiB+w3xvZ59/XfvKoEC3U39kD+6/hSCKlQdgLUeatVuDGRHCUjgqLz3F/y+nAgyOTJ44EoY6PB+7OoIq18x+1w1Z1/BfVEvkxhiA+XvuJDnxT
                                Lf3z/j28SM/G79p1xX0Xh3E/yvf9yE7znE4pcPgbPfeXTMraMxR5caGk/3wOzTaGGf+amGaLSh2VBAIIQZP8MWmSEEUqlUVKEURZxBYGISCid
                                2I7zqJJIwR+7LkgzhRr9p1y9ak0s7LHDOVGOGy8qx86NsQr8v17Mw9ER8x4OMDPqf76Qh4+9sQjt0qFpv5HGVAB1jLlBBIWA32/LV4I22FwaK
                                RN4njUH/5gRyevDZFrIBGN1VyjU1LJrb607qZCA9DPnrWgVEgF8tjg+S/8Tf/weMTpZKLMwOYHhU/3wT3dfAr1iPaK4raj9N7qW2I+XgglXZ8
                                ZHZ9GyIkXULKr2lTkhSCCMyCKUL7FUE8osUb4Kcb3+Bx2jg7RKmFppU2txKvPU4Qr7gkldXwd873A0NuY9nFy0LwPgb/e0WKSiwMmFd3v/hd6
                                y1ekTf1qpMncIlftYhYD1zaRIqUSmUPSpPcPMmueYefPc6RzsG5peIsHgpKIKvOLttQ0urAZhORzKw759gxAw4VcoiLw62Ymb/s9/glf++U9g
                                8PCzrI4UtZuF74tjiJ5luTwBpVIRTv7bI8I+n9e1FJSgHB8fBsz7plcj6uFI0LB2FcYqMEEV2gUpmRYJDFqK99RU6SjRpK4Vh5IAoieB9rnzM
                                vSwKfUcJhDFVPpmJIFO8XxVVZwmHNbCEChubYqqvojIhcJ7VpVF5l99NQf7zyZX5h8wM+qqhSGs76aA1y6PsUYszCUX+xwnkOfPMDJhZs6Z8Z
                                kjEwxuBin/ULuYZ6nuYM3NpTKTJuzhs0qnbrvA9q7+uf8LTr28C06+tCt2lXnsjIn5H8EQILh/kligE+R74fKvvgC5QitU6zdw84ld43uhK6i
                                HClHtYySJMRLrEKmU2NSQVm8bUafTVJT3HagjVq1aW/H89w7n4ZmTORgtg/CnpOHL+/LwW1cVYWFbpaeJlTeA7ciNfDicSF4d4spk+k2canBF
                                TzT4kPdVmbe6/l07WNr9+bP7fzrYvvxS0cLjNu8vvuIGVsHb4Nizj4onR/kKaRY50BihE7zjIRSAeEVWXZ0VaZQnRiNi8Ra68svsYjLqwc0jr
                                dJW/TGmU7l4BkGrCxa3MsvuZaAGlcDjfuGFAnz06iJz6irnCEHvMfKSoPlpOYm8djZSJ3x/NoP3X7luaaTIu1Y3pr8Yo63+/PFnH+0r735ErC
                                XEfy4WXvxWOHfkFRg+fcB6xjIFL2kgszZ+Ao0LMvarbZjzeTYW1ak/y2TqbZriSU2zHmRBK6ddK8G6gzXqAe9tTjNR8ibns2eHoF7g5PL55wv
                                ws6vLrAKW5b0oaUpgjAUdYc5W7nB94UzkeB2bharEhzXzKPwuc1Ivaov+QAsu3wyNAPfb5mFsbJC0tcJpZvKcPbgbLrr+w9A2f7kVcf7aDcJR
                                a33FifKdO4nKPgSEgB6Mqf824sBcQT3XcfCpE6rtfTsd77EeOybRCJUUzzQhI2ptphVpZDYTZeKd5OpJLBycXP6RmUXfPpSDlZ1UtBbxQXucU
                                AZmiZ+kVrxjeRl+5bIydBXMJ33emsYoliIU+oMbtz08yGqCaIrhvWf3f+8LcPTpHWbRd8JHM883kxOrF5tS79cqmuwGLN8DSfhbmAY6sBaQ4t
                                MolIvjUA3qasPX0d9Rb8yG13kmiCMNuJNcvcFJhKuSp04EYtuspPLBdWW44w0lMT6IUjMLXoNMocF168igGorUzyr/RvXYeM/aQaZe+GRPHcx
                                rfGbfk2IWb+1joRA3izhCQyLqHMUH4LGesLSXJ/l28PWXYdHa+I0nOghrlS6kUmJOnrWaQrWgyoRch7GLhiq3STqdqZNGI/wvV73hjfDii89C
                                hjg68hR+55oSXLnA9C4WYJs8czVMZgKndJB+/m8gM9odbdS5aMMJ5shTO2Bs6JggFTXDFkkj7goR3FP22AlTiJHB4/4Ean05k4pSKwlVuHRK9
                                aXW8tHKlzUECU5n92+Z+lpA/fG266tf6+ZCAvejfOJNJbi8J4TQ+rBHdsK81RuhEaBheIBvI2IJqO6VFlkkyiOuS2OUiDRxvCaIjkMTuYWiim
                                FMJRL7mnHF4gOp9e2cRK0nNaYxpQpTZflIbGcKyVZyDFcL6yWoIrkGyamfe+8vNNQcaka8jflT/vC6khgPFD12IshFWQ9cucxb3agZBKiY/lE
                                QCylDNBekNnGiUrgOS4oIJvaiU1XohFYhiAjE9+5Sh1V4HD7Bts/PUrNamESt9/mOaopfC0h14S6R166aaGLaNSSSnkatyU1RxnBSuT5TLQLc
                                9Pl3l5TgtiuYP6UQWkQi/tX7fEmPXmgEmKQwxFIuSGIhihjsTj8gTSC7D4sDguIlZUoVf+KZvHyFi/4ZGTgKvmwqHTcCiXnMhFlSJUgVIZOJg
                                pFGHFUlVwcl8xt3/ke40LGQmT53bSjCjavKkkaipx+tHhCfIKK7QS1C0RAhSSyFkWI/PolbaHQTPk14UaqRw9S9hMp8KqTJTgx7/Cw1v4d1eH
                                ETUaXaqIhJli8ti0klW+NFpJbLScL5OrDy265/l/hdqNh8URn+n2uLsKpLTsQtW34iUjHxIosjOpdvb8y8RyXIG8Uimpy5N1d9gT1eOexjAeq
                                z+Yk+j18gasUx+8TJx4oSRG/hOc+aRIkvcwMJJK01g6YGVECtFavK+BWj1epjqaQsqwqskEyd/m733P0JuNDQzkyf32TNyL90cQna8mZRs2gj
                                +4UR9BFHE4s3pg8L6eNNzXzP9D8mzOmim4qVyQLGpsetNx6iUA4WXXZFIMS2j9SEwZHPhpo4CCr83IkDqV/F2WCGNKQMNCGPBB9LTQnWyQFek
                                1laK5nViAtNtVwyP4R731yCqxeFyr0pKp8weyi2Csw8SIH0Z8xb09gWIQ5NLGGZ7IrOgv3yYr8KUio0oQlS+04oikix4qGeliFfZzsC5YkxGB
                                t2plGotUbV48UlCYcJZanLRzjJeev1fldjlkzd25qWB/VFmkZcCKqFq5QPrS/Bf3wjUyk53j+Foo9/ZACZpUXM5A4BWpOofVEvNAZULwimiYV
                                AqV9s8YtBzVauiRTvd+J5k6gvCeeDiduHNNEQGU5VpiBWR8QgJDkvL+pRy2s0hWqqW7WWL4HQqwhKx0y0ftURc121cHXyCdaM/O6VklCI0QH2
                                WtJmP8cIJaethig2Xza1QdipdjSx5CbKOwEVSFOd2oL9pda+Xer/NlJfoNga4vC9qNT5/B7se5S1Dh1D5/3JNvTFrZXMppB2UiaTctbSWiLXj
                                ppMoSTU9WHOTdXCp838P64uwh1XFqFNNCObeYwi00e1AAFy3hJJKtEZ7M1sb1BTs3Lccmhi4Q5c5uvol3ICdEmx0xakqkAmD03xBSCiNAkRsK
                                SHOwzApEVEf5aXdz5kyGUmTKEak6ypiFVGTotGUgNpSuSpg076ZP3AFctH5kjzMzd7+CjrezaUYP188wB1dRKV0Jg9KoiHteQoM3+IdY365Df
                                accthTR5BQ7oLlQKdsDb6pmKLvXl8M3jfTpMaksImF+C50qPHVS6Owd4f/KMgGVLlFz41vI6Y0pebNDi8FkzxWemPyAzj9+7+w6bvjcvnTLl7
                                Q5ERSwla81SrlIhViNX6Gp0z6wy05EwtMp4LbTI0pNctdtxy2MQie80pfwoqS3xciIdQarb1aVzxaJlHwRroyEnltSd3JL+3CaoHUuJPBpOqO
                                y4JVxO/hvD0AX71lykNc95OkZw4qdzDyKUZsb47hN+8qggfvoQvwKY+rapO2Guj4zAObvZwpYIpRROMZKV8R2MGH9IcPIyPLWLJB+RhAv6XVL
                                MlsZlQgEBMaWNrKrEygP89VL4m1+HLJ4A6d6IfKqHq97qBX1Zv0gQammd6q1DjpUTdqKsOCfHeuHzkc7NgHSOU33hDUZDK+nmhtAYiOS/8JkR
                                1epMgkR9Fdc1oCfiPmrWO7Bqoj7sbNEYoKId91jE+uPEvv9TPyjHoM2+U2YJ9J9bfXwZoz7T8hwD41YTHx2Jl6TwXde3rz++Kx62EepgOSX4kMv
                                Wkk1DryOG0MtDEgwoX1ROkAuG6qBMH3vvJP4HZjl5GKB9hTllOKuvnh2JJY9VMHErZLgglxCoFdGc4/p60MamSi0b9gVkoMDrv1tR8R/1NRJZ6/
                                6p1LcnEIopCYAcodSKvwkloGQaA+qPISGg+FkUo1C6AUTzULBiS6ABWaShyoVy1HITxkcF43BpNh5peXh/xTQY1VFyadDzJym8N/6wTgaSrJPsk
                                SQhPTXiSmM2OXE4ovJXnI1eWxL5p3VHGTvQQQsQNyBUp6k+BEUp7Lur45l98Hr830V4jOseFId3thsWJJSR6QKJ1J/aOfQ2WMb5YOEAPRAQAkrw
                                0paWMFFmRKK+Bw6/E4zfwa5uWNK31gqnAftRucE1pVB1eZfSKt10P5TgJcEdu2mz+04U25v8Q43qumxCkws0f86FGTcjKr6LOaF+KakYm0FEgwv
                                whuss+iciDWAYT2JKfNMQUcv0rHDFiKTE/iy4Ict6qIAu6wsffDoovwCSFfDQ03eNofDuoSCODyf1aIKGMU0Fak3r1CdUvbk2VGqYSuXrU+jgmf
                                1H14I7c//WFf5jRVqJe5jO57Yoi/N/XTsANK8vQmqOgWnYAOV8p3vO0/IglO9i1HQXVk1bVCLkfWxMazHlZ7/Kd9XfclsvFnW5YjFhuZn4WArI/
                                i++PTuPh1HKsIKuOINLRPhOKOIYkO4GlB5egZxXICaGiNaI95WoUUr62ZDrLYmddA6h3d4qJVrx8xv06EtyJ++i//Biun8ZeuWsYmbx3TQk+vmk
                                Cfv2KEqydhxUIUQIiplTcKQ6Uz6Q1B9CV5w0sURqoloHtkMSL2xNwyaf+Tc28/0p7vxua90WlJNzBLrgLl0sLmACc3rm2R9dVKliV6Bn8VRS8j6
                                5TfwBAvhURT/Z98fbZrUSEUwWteNgYJN2PDK+q0iYlSKAuN5GWjHW+kX+fKsDNoS9/6VE4e3YQXnjxOfbbLebKPXT4ANs+J8KngvmsafjyBRSWt
                                odiOsg2tA60VcGjF1n3lo3Oqj8qRT5Fdm0AQt20BkQqFOWfBMengiocqKmcqE5Znc93LKh7UzMNy7t84X5igdzDhIZ3gSoroEeDXwQC4L4ZOl7g
                                kAg4JIMjuwkAWK1LuBMdxZHsQs8e1KniNiw/WmP4FJOdTeDLhfjGFL3ASIYvI8IJ50c/fgIOC8JJnqSbE9XPvffnYWkHhbHvfy4yb8AS5ohH5Af
                                RGWiHVnjWH0/+EAus7rTkQPwComLI6dGIe7WVKyqhSlvGow2bjvJhXyBJiv2dj354gJ3tkaUzXlSq9YQnNXQeP1ioAEQaClr1SIWj/mRqZPS8Zb
                                1w5ebb7Phox/2au/lTJ1JqfM8N1JxGjfHdfKnnQpoQNzlPWrmMvr9DLA1ITKPW+JXy7L54JbQvbcxkRLWAEw4nmYh4BsXk3ZyUOEFxvPTYdvjuX
                                9wp9o3VH731xiUQnQjQhzhw4vLjVkkoBWXuEABX10Sg2sVgFIk6pnreFTWXtDKuLnrXFrjmzr+COmJw1drcAt+JfNIVyzd+YMex3d+8HZtC2nQx
                                92FDVnzrnDOgSJ2OeIPEHbiIifByBZpe2Pnx89XLVgrTj3rkmebX9gk9WtMVtYOmHCcHQiJ5znZw/wz/8Um7fTh74gB6p4k2Z/TKk5JMVL0xC/0
                                x8waiQYJt+aiFJ9D1RpkxNmFAou8Ew8Sk1L6mfdFaqCfYrTycdC5xodn5vdduW37Ney1mrPjy0ujnLhHimyhbbfXiZm46OoJzEQC4vJX2shKoA5
                                xEpiXPOucxpUpNaggmyWlMx3OBacZZ2ROcUvSRVPOigGr50dUDcuzfNqZKugsUelpYPWulwowi2scg+7AQ2w8T+/tRXJPsmmnXWBNS76bmcpnuS
                                DqXqFhKbaW+BZdeP1gcHeo5vffJuGMWECuj2q7ikJS3SF/C/wmhInOpfJTTio8bKhXHIV9oNZck1ZyKbDi5+DpKrWnXA8rP5wSnHU9p7eYqL0v9
                                8MxBCMUiO7YRpO55SGTesErGiCTPXlzeopMLwPhTAOJfStAiB0VAFKF8NbLyYE0TBSF/DNjmU76+jtvBNevytSuWdTduGoRyuGPxFTdAa88yfQP
                                E8hPR2IPRZJEC8xISv+8JBWEzSH0UyhOj9iVJedb6QtO6RGkcZOZpj5jUEFrt6TSkEvxcxNgAdBaY36+FQHcrYa1DBBa3A2sdIrCojYeD6B0bTW
                                MQV+nex6VZBLsQiOOP9HQuJW5TM/oAAqnrdAmVzCCOoNLJEMi2XKEN1rztlyGXb0OpglEwFcwEYt+jnv/W6lDnmyjK8+mzFBAxM8ulvq91eKETk
                                5hFX+H021RiPCVKDYirIqhI8HNRtJDBg9DFiKUzzzuvMYWSj0YZu25Gva/3or+HfWylDKbDmyQJHMX7PIkexWydlYqqnk3NYTncXul8RWJZffM1
                                O1lZB3mBlm94r3XOlmsm0GLjUAarGa5kTyDqOHNj8MhDM9FUxGhqLtzUl7UOb7O3AtULk/zCV3VbNCHBWvOcq2pjiiiODIof9ouolxd7PCjqtxL
                                3OJprFPCkanHfifHFxD8Wyvxx/2D1ndyJpd6/el1hZ6U4FYmFIwypYKaetRth4SVv1eFeHwOS6VjN+Gx7iuJWM48tcdIaH66yZagBlaKuX956mX
                                C1pF3rM6HVJTOpIjcxaQ3087F3yAcS61IfJw0VWS/FoWUeNSflfvQdxuRjJQA2iVA9Xkh+vy0UOrytwpMDMXPbJiGVWFghtS215MoboCDHGmgrJ
                                yCTejd4r0L9yHxvJI2VwwpXxEKc+HWt9GloZKVorDtkUkgjEpJysff8tP7B6oviKH8HFZlQ50NrE4Vp9ZFjgCjy9Coi8eZC7TwAuwqoSzdRMaxK
                                EcVYtDSA1pEfiF++eAimAlou358Wp6r388i3nn+MbTbz/ZGT/dD/xEMA2plkO3Btfk5uiUh7n0Jqx+VNdG2yJ6LVcYztBy1tEDBfUMD8QIS1FKl
                                97gXnW27KBTKc7xO2BZpQFuovW2InPvDE96RBnYhpeaZ1Vqu9jHTay+gLqzaN2dJBrhJe+dcHoO9vfg+UrhAgALqLPuC+KFSuXU5RHZH/EoqPdF
                                xtARCUht6C8V2iMmkhROxaeO3b22ET+2HQoBsm2q+BcmE1FNuuhmI7+7VeDWGu0oBN0rdqbbAJUpCHahDCDqZtNvPdziW9sPDit8LpV5/0Kj2Cg
                                hKbN2UEHZfYplEIjjlFuXMMLD8L9tOExTGxBpFKGr/E6lgLHk5EjFhaOhcAybdA6/zlgmjaupcL8mmTx25xK4FUEScRk7wwlmeK6quqjLTG8LQy
                                zXEo/4r6gBKvz4RYx27PLUE8asoDDFwhILbrpO2EuqsGMixcGq/qJDwLrcM/iIVzkim1rIGJjrfHyCYkYapa4aiKWMZbi9tai4V72a74hCx9ww0
                                weHB3VJl9mkc+q0Tgh+UqEDDkIo7luSILKOQAyUibePSxUpgUJ2hnwolobPCoODVy8gDgqByceFrnLYO2BSugtXsZdK28XCgfcOJVvD/fV7uKuK
                                nhCWnSWtJuJC4kZtEvoNomkESCD0WrEkLlpZGiIfp9xYMI8eBCqwB2PiIdo4AUx7S0VqqQNgpjz4tf+9l/0WGcbCY6rh08ueyzD1eTRqqPhYP3a
                                QkhcuJy8CboRdyRq8wfVXkVqrgH17/iurxch+5IScbyvLj4Txb7G+oC+q/xOQ44YY6cPgCn9/4Yjjy9A175p8+I7YhnLWkvnOyq/5MmpzF1kPS0
                                SW3h3k6Qk7rZJoVyamCVQswE2Abqc2nv28NfiCYNrcalI9Zkhn4iCxyG8kL2pxpr1zW/qqqeCE40nQMPPYyX+KiE6nMrlrbhQ04sOemriFjRflt
                                9kz9V825b0VD8ErtgjP9D4nkQax9FCMH/ouNyKLXj+IrcPIYO9gnf0t5HHoChA7uhyJ3HjaxEpLbTNRUlKXItphCFVPKj1eTZxDD9QgjqOIoVjA
                                gA2xwigKd2Mh9L92sIsm65pITluRXRBLrvMPtvXvfUiEVgLNxabdSqc1v1gU19BC2hyEllBe/bksQflDocS2I2P4b3HaW26BhmqqUcmspOLbmjz
                                CN0ESHJlQKg4gmLcEwmUBobhNeZetnLHHevP7UDhpmKqbu4qAJVmUK1opbKXwU5VZVcExPOgrUb2O3GqxBBKka9laC3mCiI6Z6vZzRTo5MRQcWI
                                R6ZL0OrMlkAy1/N/O7vr8ZDpTvKhwf5qY9dEY6UytRiL921ZsDZ5cl77cdpvXMW6HVvBzeyfLcrZy3E4TTDHKK384uIi6cWp1bEnPjGEw/cHmXI
                                RKoaRDN+fUJN81/J3rJURqkybTvrk5POsGHcm2LfB4MTS0jkf9IDBpI+sGpkrXiCsXuRyHWgSbUU21PpQIjIi0Ttt+nW5dUumizwy8+bnYMpw6n
                                4aaiIW0RMX7M4xXLW0zV+mjylYgs16nwh+GgBmSREXuIcPTiCMFMvQhJMuvk5tkswgB7hI1oeCgldWUevrEYETilAxjxgVUzVITcGJFbSm5UJq/
                                YD5FXZ9uKJJCScoD8GC0X+ApctyRlFolYsiKkesIg/HB+M2XIBLEtQ+C3JtZleVmERiqUBra61/cBe0n/zC4M5arqjd8CrDdnzITaK1b/9lxtym
                                zwGun1G55AbfNEVKw1ci7iEnxJqhXyXczRxRq9a3QD7vf2CYINSHwpoYhxDzAaEg+xeAHuKuzpl3hdrl0NJFLXtpbmSAKZfXdm0XfRz4Pm+Bmgz
                                oFCvcpC6v8aKaXtepvtuzBJxQ5p38E1i+51qYf+wTcN2mcXQWv0AyxO3ZiUjFus5pRiXyHVPvW3zRVGrLZ8C7WBnxpuYpKhZam1rRxagVRx99fj
                                +7slc5pzn4V/u1XQ9pcwD7Rny5GDEIdmswMhlVneU7+QKBVatysGZVXhAKD54Yp3B4fxGGTpfRnwqtGEdjHxPQdi2ALYrQ34k6ZceVPKSo0EBj1
                                4QhtcrRwhx8HYt7YRlroseDwKjzMDyvmhUY+3C58T2kQJ0LU/OknusrxK+p3DXmOds6yHFC6TzzBZh36i9F/w+M//7nAzA+pgwPkB+u6OVR00mK
                                jVv/sTmk9k2tAHsqSnUdOi9OUB1qrgfpf4nwgV/uhhWrq+uyFgdTK+8fWAc1YlKuYvYyxDrJ8Aq0/obboLXDzGYpHjNmbxSf2OnZJ5DJuaAngGs
                                3tcK739kG63vzlkqZGA1hdDi0ykHdmkfBK58s8qDyOhKvwNbsd1T52SK2sUebmvli9Chu9h8n2oEDfULBHGbmUrHaMU41It1MqeIbMkVVQVOOmx
                                FYoXSf+EyMVDje9k7Vo5UgIkDKxNupC1cM4oYAib24ro2uaxgQtG+/3ayZmbUGTZ5UYFJqJSrTJLD/sWd62ouF/ex59LgJ8N6I/T/6RxgbPOb9w
                                inioNQvCjl6GJksXpyD5ctzmkjcL+H5oRD2vBDJUEs1OCrDq0J8x9SYtL5r9XlqXxtNlEyQMuJ7AeAJkkNHtkUK5t2iFzPo6yD2qGpRLNWlQSvH
                                T1APU8sTas+T/dN9ycwqlkoKxYe//auzcPJ4WR+b+W/l355QL00YZaIUCzpPsDlkYkenqCAke1wQMpckwb375k647KpWmBwmp1aick4SR/71+bt
                                JDj5LPAmWS2Nw/MVdcIrPPAfOy+T0guV7BUYenV0BLFnCySSAfI6kvpB7GalwcsFEAGqfAKroEKsY1ElPDQhzCYraRdDkEkrHMCYgPAJEHFE8Sg
                                STlMqLCmJZzkykTkY0tVZyZzf5Gitf++RUiSXN/KKxE9UT0UyaQm3nHoGeo38IuRoG63FS+fLfnWMmUWiZNmpPwRCODjHmEgrXWzSzWtwLQx2FZ
                                IiMX8bVyq/81hQWaqPhHeQDg9tgEpiS+D36ref3E+5rcROUqXJyOcZ+PnAi6WF6Z/HiPHR1EaFMTGEoeox2pVd47eVxGDrjIRZ8rEjGURneuKBe
                                cjW3hjF3TDi6OR2fQIhqTah2qD0A0yxEJe9HRQNuRs6HZVfeAAt6NzppO2VDO7E6TauptLTG+PXIMyV+ApnNBLEURp+D+cf/yDt+pho889Nx2Pn
                                tERAkYKkM9C9RyoIaRSIVjQrHXfrxNS65ELRjkxcRLUG/eFv3FHrcTl6tcEzB+BLYyn4PJp3kDsv2nmVw/IVvQwsMCTKZ3xMRSqFQ6YZJwr7BRe
                                ta4PzZcSiV4m+m/lYQj5ox0Uzq7A8hnK6YFSkmJCs2csarOX+p3He/G+43yy6MOsengDj41DcECfNntrA3feFuAp6KXhG1xZ50ZhVIZbZC+VG6T
                                n8epoJNb24ViuXH3x+F+Jgh6nw4+Wn5lsjnayagj7aqMy1F5xQIfsnBJiE+LugDvzxvat34J+lb0eWDKeLYt82UCjpBmWqudALazz7C/nAngVgd
                                S8zaJ+Yqe6i4/0tnqiv/M02wP+LeF4piCyS+BpG4wknPJhdlkdL4Oa1U8LXmD4i7JlB9MZ70m/lZaAh6gW/5EuChZHZ6VJebN90vf8Nm0QELPQJ
                                rx1dPK5lC+D7Bua/k+Cl5OmnQ2E7S3zE9z+lSLFydLHj9d2sye9LAieXHT4zqY6NIsKljCIHIQYg+5RERjv3U1Mcr3irE7qeNwM8zUlk0pSbmqa
                                kVjqkqFv6ybmW3tdl7jrRCwMgFkJQz3luA2ES2NDkXfZ2OGzHzVde2wukTJThzsgznhuL0rlSl96OLT5C4PyQOQ0QUl5dGL0GIviDumi4iekjFx
                                FiqSZoAJkNZ8QlIBbMDjjIFs5yZSF1L1uoJtnBJ3Eo7ZdSShockaldRUJ9yTwL1Uik+XM9aiVpbA0EuE+P8g4oflmIPzKauulHh+MMbXeMY4oAd
                                uCvX5OGG93XCvCkOOJyqWuGYsmLhwKoFKxZCx5lX/QGZEa5odjwThr7g+ETil85WPNwsGh0GGBlh+8UQhslVUBZztYxb12EfTL5jvg7nnf0CORc
                                Lj8NbuIZPHYCJ8wNSEYFVNuO8pbHzBIzqsb7qFBDpUFQec6zlLychGvWF4ebRQt6FHDXng5MueJ8RPrYOUtNI+xvUpHpqzLORiqURKsWHs6xxYd
                                d3RuC1vUWtaKP33umvgojG149FfbhMzUD+FsJVSgDXvb0NrrmuDaYMAtvIzWfugCmiLsRy9JFnekm+sF8niFKdd+ovWHPdmL/LuQ5DD10eW26q2
                                AupKiDxhBofyWj3zWKSmqm+/IMH+uDkS7tgYnhIiSUTXZICN3ssckGkY5ZuoNZ16lXSDmOJEBOPVHb82tauBawFaa1QMS2Ogkmv5BTvgnXKuhfn
                                +grp14VYEuI3glgaqVIq4cXnxoVj99TxkjSLwFEeccLR5pN8v3CzstpdvCwHl1/VBpdd01KHbvsS4+G6WgYbJqFOpWGq5TvPfY5V9LtixML+iLw
                                fAIllTAEcPwuOQ9G/4oW0POXIFJFJDHWsgM6xU5ALzUCiUmENjPT8Sl1eft6xjZMLH2xIcTwqqywhxk8iwk2YRTZ4gCUFyxSKklNEEy8rBaLVEV
                                cvvKm6VRFM1ZWW1hgfEuO7YdRzYeqznSbFwlt8Fh26veEqpRIOHyzBS4xkTp0os+bpUtzfQhwfC4DsI2UI56LVBWHyrFzDtqun7MmwQeF+8oEzd
                                0MdUDdi4Z3mOkpCtfTgVDsHvsScuIfB6ZniKBjE2igEH1DMIkBQJWBmT9ACx+dfAS2lYVh87jVcdwSxlAqrwc1tsl9VTixCvfChCzIu4jt9bHe2
                                c4YRyLhamSBCshzQHhJwzTFuIq2QBONr9bLv07642kqeFL8e5DQdioUrFD6uZzZhfJwyBVNm5hL3DYbieHzMbqbmKoQ7Y7u7A6ZO8qKVp27KJAb
                                aD+P0xnqoFY66lvLot57fwtwCD+JUeatQYfx5j2KBmBOLOAIRA/slLFXA9gc6V8FIS7S8wfyRo0K5qDQ4qXBysdJyMkj9MoNd6TipHHv2W3DuyM
                                vGZ4IUC86DAlIKlGgeoVZeat0ZalSJeCBynxrqtaaM4OfDiC4WSYLBJpJ9n/UfK1SdX2dyedaDWMQIZOZL4R3eMqRgCp3hfKjDtFIGK9579TbqT
                                KsQ5rrlHnW2CgT9vN8z59Op225ExSoFBRgrdOsrzrUvhXKuoOPniwenvNyBCz6YcPX1HxbLoeiSUQrEMnOoViCqbZqimmWpM6s2Khs6YiB7vjHz
                                fGx1A3Cqvw9e2bUdjrzAfUEp45EoTB20zl+lOoObPktfvTEjlapAd9aTVDjqSiwctFS8g71w+s2meikB4mzFWedq4oQTtCFOGlHRJwpdEBLTZs/
                                3BzpXgyEhAi2+npRTqBXq0iVX3AC977otmvEf9cGJ4hDtyTfduHH/GkWaNiG5JBoRFsQelTv1pxjwyAiFE4siGHtRN+LdrQoeMgSSwE+1klYD2K
                                lj8EuwpP/WGfWnNBXG6R1QZ9SdWFbcvKm/TKke/UyDNr9xDsZssGBspBREX/+zbUtjZybynTDWYsZIcMXCZbF7ebVINBFItBxK77tvE93yXc9b1
                                FIkD9SVBKWBKqeewU6OjDbxid5EW5QAOsY+KN569frzO2HPTh/BTB60mvMkIT6dZKI1gvtSuPlTzcDBDMCf/9Z6+VUwGqZmj3/n+WfYZmNOjhL1
                                +lh0jYlCiCP19Z4eZ2PMIG4kjLT0wEDHam/+AS3DksGX2TbqoDTR/iYY63qPSbsGP4AITiIXucP9Lgd+9A8wJharV4MQsT/I8cWgVq7Q268FJ49
                                8LXpSKjuu5QdGxzwS97twH8yi3jdOohUJ4hZplc8kdk0DfSz8w7GQtfpMdpzPhYmp97BNQt0ViwIJi0Je8YWOeA9c+5UyPpLqEnOukxhpWZh4CT
                                eJhjpX6wT48gW8w15dgW6J+10uuemj0KPH+VBpDgGoHr7GNLJbgojP1tEld4+p1R9Gh5sWS3OdjDYuTKSd8Nw3/wL2/+QbyQrGX4SqPz84T1/ad
                                RYnGrmJg8KfkpFKjWCtQNAgNIxYlr53U1+Zwj2RPObE4tgJunIZ12ScfMC+jhhHb5k5bceZyVMJYy3dwiwSl9IxKIw8DZNBJVPIxarrPigmGVed
                                EnSvWopGSnszUC5bRD5gRkRHFpXbu5fEBq7pJAnE3FmckE7t74Pd//wAvPaTHelOXnStD6TqwNRTkwZ30mb+lEmgQSaQQsOIhWPlz179OfYy7Sw
                                XlvkjoLkmZAB4CcXtzspwri0hTQeDXauYeglEei0jTxnVUsNbTmqsEavedAsjl2gAobVECRoPYlQKJlazRzGDKHICu5+DGvCoy0iI47PBNwHWPZ
                                /avxv6GMFYCiblPt3TfpKE2jAFtsmctJMFM4E+cOY+aCAaSiwc5WLxDkraK3wafeTiRrHDuFoZlv1WUvMPWuB8e0RCkWp5ys4OI6FSuMEkJT4Pj
                                8hlIzKHcAsRtfWZ00ytR4VYrIFyV+NGqPP0nLEGFrk4rVbqwpNMwXCCee3JHTAycAwwcsXj7m1Z8BJNrUQxSfto3onPZE7ayWGwkSaQQh0WHKmM
                                P/u7zw/+5w+/czxfHnifEvAAbuOPMQNMHLWvuM94I88ytTKR74BqUWRxW4vDort/rnwSJjre6q8AVVYKmhZfhncuWQvnju+D0viwvkov46a9rWA
                                5sK1kogl0QRGR9LBIs0Zep1uNiJWC9t3EBVH8mO2PDB2HE/uehrMnDzAH73xobyPM6f7XTOU9DfmJ/ZArHWfEXGatfF0s4bw3yYqPr0bCaV04Dw
                                qd/kF1vOVHDW7NUCNo+Dvkg7Ut5TEZTEGI1oaRv9/yuYDQu6IjNchKnVUeA5Dc4QxCBPtjfLT7cqFEagEnlcWDe0XlGO1+vxiciHPHB2ktF9Y1t
                                HIa3I+x/4mHYFyMkA7kvSHrTkVG88k4wsP2reChAVY6oLnX9uWg8UoEYvdHfcfst2RZB2y8ys5LReAO+XJuKZRa1rD9JWJrPQ5cfmcn7dmq631z
                                3vKWn25GKp3MBMowCdRxLFAa6jyKKRnj43Bfexvcwu6uFyxS4bAcB1CJ77gJVCupcAiTqGMZzBs+whx+z1vEkgbtZ8ZFtHbcC8w53tS79voPw57
                                vfCHq1wLEGQIgk0LtxZZ5I4nWlIXY/hecpWoZkl39o+Sk1glkmFU8Ar6b4KHtLdwX1eJ9GIRV8Dz/TezTxQgZ0ZTznGxWC7Ip56vzgXnh+fPzlh
                                8+iJC37mWYDGg/TND7YJowbYqFY/SLW3oJpc8An91fOQlQNdIqpoJqmIxawVh49jVoYWbRcM8vQ7mwRuaMM0qwGnxfVrSTlsaxF3fCiRcfBzOZt
                                jGOlElkrBZ3vSKXhEyZKFSI58ZBaRJiJpzyKZYNb2yFpYsDXR79d6JJc/+qVKLwkLRBmF8ilQ0jm6CbHS+rTrGA3Y+Fk0rmpJ0SmF8l3NTIViAX
                                00osHIxcthBCH0x0cWhisb+mvMKM57vgZNd6mAoik2gf+6Ku1IMTXVJww9LkvS8NHznt+fbnYYz5MkwHObCIRseV50Nkp8RMGx0XhSuqovY56pR
                                RtfK74focy/sd17cwP0tgn9dKC+x7szr8ueUyeVBBNlLZFCKycZWNSyyzYbqDpkedBxhWg4Y7b13816/29f3BL25awJT59fYZtIqbC2kmDLWvhF
                                JusmukyKRIjvlZQmgbPyK+pGYsEy5JZZDYTnVo614Mgwd3g3baynv2rswIiGhRN36XwHAPf7H1ECM415jEXUSBbcxxe/G6AriK0m5ZQud0OHJCk
                                3jaBEoQsFacXPEo5Mdfgpax3dAy+jQUhHP4BEujJOJwBzF33i4Y2y5IJchafiYP3l/lAwOfg2nGtCsWhYkv3f4YFdNZ2ha/gi3o2etGCswMuqJi
                                moXyGDNzzsNw22JIw6Ih5sglS+ITQdE6mEIAiU7JV3dth+HTB6S/A7XyiFhoGAB11Acqm+EGNIeLquc0QaEkpOU75ovFbbymxS672tHCxBALtf5
                                RrVio5Qs85pP1UPE0GJGyWbzqDCxofQwyTAV0J3n/wI0wA5g2562Lwij50EQ787cIZy6HfAn9/kTRxJwGPg9LW3FIDEDkfV0q4WzXKljITKIgHG
                                JxbdXiFiGhSBo0NcBg/srL4fypfm1SEGzC+C7EmUsJQ5RJElJAQ6dN1khMgEMqvnSx45eje14A8ZvArGU1aoPtX0EM58z6p0E91I1MOt7faGzwK
                                Ax3d8Hx08vg/GgXDI92iu2yhcehs/08LF94DDo7hiFDEsTETXfADGHGFAsHd+ayJmg+WLEnKozzFZSoRq3kwiIsG3pJ7HNfzOl56b6YzpHjrN1j
                                tR6cmKg+PIFuWCXFgr/4fHLvF77xGemApU6etoKJqRCPysDN1En5xnwqzn3i8vH96za1ijWz4+VXKss+QykmlCicOoRDMTtSz4J0FrkALFv2LMy
                                bZ/tVhkc64dXXL4ZXD1/MCGcp7Du8XpeGk82yRcejHyOfLkY6yxeeYMcn4MJDfWeDmwxmlFg4zv/jlo2FMHzGCHsOeyJL3sR8pn1VxXQWDB+G9o
                                kBiGoHEXPgpplEvE/LwqGDMNpzJ7Prpe+G1p9Y3PgvP3I/TIwMRcuF6I8+qrQUaxe7H4o7VkjFCy3TKd46FO8bg8hKc0J03eZ3tUE+D2CTvCkAB
                                ZtI7HtFRIEKTFGrknUepW4Ty25GLIehGkSEs14Qze49V8Ox00sY+azTN8eVTUQ2XOmchGWLOfmcgOWLTrKwERHWNZfUD2UtQB8Y7IMZxIwTCwdv
                                KQqcliL8Mh+dd7mY17YSlg+9zMyaoryYsubOPJyYfzlreajsn+Y+mY7SChjvfIfOuFZiceOnpfGSJJbovbcrmtthjoeFsnu+moYSp235TxA5GLG
                                Q4K8BD9lAtPTt9W9pTSFNHGJPyamusBULOArFJSOsWCKy8SmWWsHJ5RhTNrv3XMVIp5cdr4XzjIT06pVAAT/RZYxoljOFE6mdiGwuuegAdHWOSA
                                I6JbazHPeQ95+Zdmeti1lBLBzjX9xyH2uGvjc6Ml/F4ZaFqWqlY3wAFowcBvfDOVrohoF5ayENXSNnIOz4pUi11EAsfOZ+vsPnYrG/v37FosIO/
                                PAfoFwaN2GIXEzll05Pq4Ibs4f4mp0tNwhaNYDaqkBvpXMFm19LluRgw9UFgNRVKXGQSkzFJigMHcfSwOftm6gHsfjA1Qw3o/r2vIGRzVpxvO/Q
                                GnUXEBUuNPt6L1qVOyKdU9F20SnxmydI53REPotPw4pFp2FGIFqAGju4sFrMGmLhGP/ibYxcyL18X72GJzrXp06PwNUK97EY+R2F8+OBrl4xfUI
                                lcJOoa2IplNrfHKtMnDz4omVjQ8dE93zeD6U8PsaIYUycD5UDFSl/W82Yyq0qE435HtB5fSqQ/UNAKxVx2kM0dlpO/jROdhbB4GvZ/5ddWoDVal
                                kJ5x5AX4eOdXo4zLkXUERpMqaOo9fEbyyx+MBVDCeZfYfXwLFTS8R276HVLLwDFLlolSM7dlLluFLn1L3JcysWc9I5zcywEVi56Ax0tY+wsNMs7
                                AwjolG9rRtmEalwzCpi4Zj40m1MxpG7xNrMuVY43nVpxfitpfPRkh9gVxTlC+ATPp2swiQqlEuQL/y8SGSYtdqcP/KK6HNSnhiTykLqBMLJBCy/
                                iMo7trYzqHWcHfWApjeIqwpV9ug+3CVAqEdFaL+KIhYnDtXlta/B1UEdcMdtz4IAZYAdreAhFrTGE1jRLLLB9+EOZ3DLwDGdxJKEiGgWw1627Xv
                                lCjh6ehE7XqTVi6tmXKVjG642GanrLl39uiCYiHjOsN+gUD/zOscYIQ2w44H0gk7jGKBqMeuIhYMpl23s5budm0Bp0yNwUuHk4vonAFWc4dbFcL
                                ZzBaRidDmc/LfdMHzyADIVbNWBicRSH9oHouJGsaiuSICuA8shGx2rQiQs8SHjxonFNnVsRQPWc3AVC54mU5Xnxne3QS4HECMORSY0xiH6Xm0VY
                                xcYl1fdv5UG2E3Ts4FYfOAqZu/h1cx8Wi1UzTFGNv/2Cv/4UflBQESi9yPiicaK4XPqD1KZkLraRwXpcALiRLNCEM4gI55BWLP81Pal/+HgFphl
                                mJXEwnH2y7+97UTXJbdXisO753MzyPoqeoiF43T3ej2bXBLCYhmOPvY8lEbHoy+6RSRGsiuFoIkDPIQBqLIQiCkRkR91lvdwVY0qA/KFxMwZRX4
                                uSalz4jiprHZaXfOY4/bNLRB3rKpYxCqnAsWJ6jAfsZgC2kRDZ6ViqQV7D61iJLMY9hy8CJ7Zc6kgnCOn+EfRkITffArR81B/a3U+RNcAIpzox8
                                5uf+bYXVtgFmLWEgvHnkf+dBsT5bcnnecOW+64jYAqrVWBon/LzDF7qvuSVJNo7NRZOPb9l6Mr3UqscpIV38SxlQmuJBEZOJUQEKkgElHqQI9IF
                                uOFZN64ghLHt0KNuaKWC1HmGlYmFYmFYcXyHFx1ZQFs0yZNsVQwhZznYOC2JFFLsUWKpfrm5tmKcyPtTNmsYgpnJSOZRbCXkc7eQyvh3Gi7VC/q
                                4VCLNHw+m4h0sDkVbn96lpIKx6wmFo4kchFq5ewrADHzhKKXGfsGWAtT25KqTKITT+6FkSMD1p9XJyudqVZLBkEz8YNRHYokCLGdtwqhQw7YnDN
                                5x00Hi7ykOgtRxbXKK7fUU/Fdnwt33K5hjttYpbeIJX4f+jm4ppB6YEBjfwu7OL5WoeYnliTsPXQRHD21EPYcWiGIhu+/cnAFqEXgI5+NepspKA
                                mKVA4jld/dArMYs55YOHzk0jHBmpiHuVSOqwH7K2nL7zPdF8NEId0kOvwt7rgtWekaHlAKQJGIk5+1NKqJYykeUFXVkFKoKqM1nwpYZYj27b4pB
                                I2EtuNBjGB896OOr9vYAgsW5AxpobuSN14lsbjqER9TiI+Qbn5TqB7gJMPNJ0E4B/n+fHiF7YNlQs1+UuFoCmLh2Pcvf/o5Vtq71DFXK7nyhDxC
                                CiJJsUBkkvAxRKfnX5pqEo0cHYDjP94DMR+LU7FswjClsSs58s0o4qCmzLYvh3pVBq7c/qbrKgkE7ZvjSCn9zI1tEFcPNlmZ9KlVHnCfNWZFwD1
                                twaNYIKaoLkRiScIepmaOnO6B7d985/3bfvj/zqrWnyQ0fDLteuGS9/+nu9nruJXvdzK1wk0hmxZphat5bYiIgV/XNZo+fqRjxQJoWzzfVEAFOe
                                N/LEdUa4mbtw4hXio3c/2ajViDSK2KiKdNoDFN4iYGsewBkRpgSlDHFBb2IKJFPqRYHrHy04RjlQYyo9TT1OFuok3znZtWXLbmKGze+NLWZiEVj
                                qYhFo5Lb/74fZxcusZPgf1C4xeVJFQKU8E7xk6JWeTSsOS6dZAr5GQyoayclmFgcic4BJ93KxYxy6miMhJnlLI+R2MJ4svsE9T58hvLygsct2Mp
                                I9FAdoxz5+J0imTylL/YUiYyPJaEe98J5JXBxizr/FYNmvITMfb3W+6mJPyskvERkIMQO0Ld8/JcKdcGp3ouTc3r7KvH4NTug05aRHj1g5Z2sQJ
                                i2/xlYptnv1yhFVraeyAotEGh00wGrQTN2OAxGBk6Bsde2CWGAtjcYZcZ+1Fcs0anCZ6u/WBZIQJh6F5n4rR2tcKmD14NbSOnIcdnuMMFBtwdX/
                                lYXBMT7MwA+13i92VOYTPOJrO57LytCTMw+1s90LTa8/zfbdmYC+jX2RvZq8KoMnl0XwAOY2ZQPOkICz/XsRSG29PneSmeWsqk3SKxHzDiyOXbG
                                Km0CfJwRYUuixPo1COxe/zFnXDsxccB+xxcvwfFlZlSDwmpvDwtSo7po1whxtfDSKWzFa5535WCXCAsQ8tR5lcqcjMTO16JVXCv8RMjCjByiVZq
                                FbJ9SwqZjwUGGancONOjlCeLpjZq+Xwu7G18LCIX9LJS9bKafwFwS4T5Ep9hjtxivr1iPgSYMoG3s62ZPMpHFPggufLZ8UeZgjnS9yicP3nAIhd
                                rRDLBDlJqNTc7lg+0dCyA9p5lTDm1iRUCQCsYCqiRRqx+WJoYg97rWqBzoVmjKXf+DOROH0YJJz1Xtedz3rrPw9dkjU1EV+Fc6Ipl5udTmSqaml
                                g4BLlQ+iDb3WwqgCIOGz5imSh0wUB3+qRQeVgLObhSX23vQIW80PkKRHTuZD8MHNgNg6+/rMcnKYTIvLH6xLB/ckw5zV95BSzq3cAIZbkglOQ87
                                QIEhZeZ+joALgrHXwMyeg6sSq/2KHjUBgAg4rOevW5ad4kFwFKT6ljGv3AVC93JSOVDjFSqXFh7dqLpiUVh+O/MyGgBmvRlBdBffnnqXOdKGGlP
                                nye3Bd7CrlyYqk68isVHNAnxzzOSOXfigFAz3A+j1IUoQ0fkv+EkMm9JL8y/6HJNJulkZg6C/KuMVPaBD8HYecgfe825CjmIdeoO8eC8Yh3mcMG
                                waUQ9ZSVSsVxgxDILBxNOFnOGWDiY32ULo4/Psl+PrViUWeGX66wRGk4zR245V3meXGUSATKJtKnhJBwjFifSpOP78gPwNuIkEUuQO8HI6BmohM
                                KxV4GMDcurkvwjKl3jFE9WLNYFNlmBq3rgQiMW7k+5pxmdtEloqubmNHT96rZtQUA2MXuh3z7jNmviLasWtATd59NfYgqjrNH5gKkONCFiPei6x
                                rRJtXmSUaZWnkuNVu5ZVqEwqKlZnMbP01cQ4lwHTtrqB5B843MV3J8ippLcBnMIc4pYONr//bb+8XGyKQzp/fGzbkcQU0HEFJWjp9KShxLsY+Ry
                                Lp4cOEk3Cglp02ryZKSSb/kpI6FSatSwrQvCLjVlBW5NU4VIIpskgiAVrpPBxE1jjoOZPsyfsqmZnbRJmFOmkAthGtHws+yF7dGSPtZV3TgU+aR
                                QZ4RJVHl+XQLd0iSCqk2Tmk0h3/U15OfLM9f6A/YozkG1IKUJyB9hfpiwJAupfFO4RceM7PYOA5CFiJk+zg3ZfWHm9iBE4KYPwNbZMDdtozDnFA
                                uGMI1ywSb2qvaLAMsPAGBIJTriKyTOO5/+MlM4C2XYVylC3UFqPHaLEORfqolURBr5Fgi7F5kciNyCs42JDMV+1Cmha/IgZ3qst/Rc/ebxVh9m+
                                sxhUuGY08TCwU2jjl/dvi4Mg63eSkHtl71ak6gMB4TPxYukOjGFumJ90KsAjhaw1p/A06xcDcrdi7m311cSiJOAsyUes8ZnDTWCiWcn7uErE85F
                                08fFnCcWhXm/vu2+Yo6sY+98P3j9AKZSdI6cgCAsp6RYZOSS4ARNqie11J8U/w2tMj5hLUBBvoK6SgMjlbJQLfG2oLj6892go0TEwEr3uROPupl
                                DoLRPrPUzx1UKxgVDLBwLmHrpYuqFUq5eZMUQ77X9peWtRPPOpbcShXBGKpdpBLE2Gj4fCxEtQM/CVBF2LwHm9UUFqEQgAH5Vow6x0xxfTlLSb0
                                rwdWH4ouwzvoDYdOOCIhYFoV6KwTq2u1MEaC+nkfatE2ehdXwoNa0y4Wqgjss4KKSonoS2FRTASKXwk6pagFLBVUvPcrsAMfPH7seSGI+48cFJ1w
                                1vVkhfSpONSq4XLkhi4Vhwx7b+eb+2/UYaBndQQvt9L/O8c69XZRKVSHq/kJpBKh7G4BIN7wDHFUtqNqzlRww8TAFveqZtnag0rjnpkgouMYpP3f
                                jyp1qWmp9UBsWI5AvEl5KEC5ZYFLpv27atXAxuZG826vdCxUvOTaKOkfRJoag0iWYSWheE4xAETHWTs+nXcFI58RqQiVHIna3CYd2zDM6PdKEck/
                                qquB3nACwbLsmfYinHJjSHRL+UcN1c6+w2GcwxL9nUMPDglt4gH97HKOV23T+DYbDnYiimzJPLu/kXKO/b0l5l93r75FT6sXAyyY89B/nxvUDbJ2
                                CiO30qCI7WY3uBjI9EaQV5mLjoCqApU3Z+7+vr2TXDsGrpIViz7DB0dpwDGnO+Arjd/M3ZKNw7Vgil01yDEMXAwTsuZIXiIiMWD84+9OtbKAT3sh
                                emlx+Xc62MXNKXDuEDFPP0LX6icHamSiyEMmVSPAEtIz9g2+PiuNTWDeOLe6EaFAaOQO7cKSuvElMk5fmVSWnwRAGe+OfVMMyUC79s4fwBWLrgKK
                                xafhiWLzyhCxnvjGjfuCYSqXAoLgg0C7EwQinTreQXBndCBgsZsVTAwENbtgRABcGMti+B813pS4fk6bUs+tJYeM2KxROfk0eOkUmkTvYxpTImKy
                                wrZa4Ao8suTVUcooxDx8VPp63yYddWo1pyJw/BiQMt8Orh9bDvsJlyoqt9GJYtPM5I5hCsXiZXUKg4hQVNvN/ZTSzMJ0cZoWQmTyIyYqkCgmAovX
                                dwwbreYqErJTYzicJ3szpij5SeLLEoZVKQZAKUT5/AK2y0IpnwRjBSGVtyMYT5ykMROHKjZ6Fwsl8eKbPE5FpiTcvlBSsrpsF9M7nX94qu/tzn8l
                                L/lXDw2EVCxah0OHGsXsEIZilTMotOQEf7MGAnLXX8LO6Sq7OUWOZ8V/x6ISOWGnDii7+75WxPrzaRkkCYYslx5YJQC7EInwnzl+SKByHHlQkjl9
                                j0A0gJjC69FMKWyrPgiXQZIXC/CuCWLg+pCdWSQlLBwHEIBo+DNnIoEQqG/46dWqqSlhmDUDKrl0Uks6B7IHFunNk5Voi3GjLn/jhsa/YJmKYLGb
                                FMAnse+QwzkXIVCSYXRpNCKSQSi9phZFIYj1QJVyiEjnnjuU7Q8Z6VUOxKn6RKkApvAWJb/8TWBiFrVi4uu7hygoyc8odeFltq3SCB86OdsHvPNU
                                zFrIJiqQXw4m6cCjs7hgXJrFr2uiAam1gizA7FwnwolG7PTJ7akRHLFLD3kT/ZzKoKIxjY7J7jk0LlQjMplI9Y8sVDkJtgqmTikFAnItzntEWffu
                                wE5a0/1bYAtfEWoIlRsJLz5hHtlhixhG2VW8KUatFrWVtpUJgotsAhRi67914jm6mjZmQx4RaJzKXOtvOwfPFJ6fw9Di35orh+Zoklc8pOFRmx1A
                                EvPfLfenM0f18QBLew2qLX/AjoWvYz8+SSMvOXlE8IM6cw9rwweRwDJ9Z0Gz+OwFuAxhb1QjXgLUD586c8qkceW7JI+m1amWpZnq5acq/LWf2dXr
                                TU6cty7PQy5uhdB68eWmeWhBWnZfuQ9LssYwrm4lX7YcOV34YVy16BaQTvfr+d3dS2C637fSOQEUsd8czX7+vpbOu4NUeDu9hHeSMPy5XfCC2jR5
                                iZsxeC0knjfOWg6UuNxk0h9l+uBUaWXlZVC1DhLGoBirXQUOEbscnNnC8tWy8mfKqE4PwZICcPxwpqLCPbQcyVy/EzS6Fvz9Vsv1OXi6KrOcG8eq
                                xV+FjeseFJeOfGnzCy6YfGgKkToDsy/0l9kRFLg7DnW5/ZCCVydyEs3jDv1N5eIlpxaAUnLu44pnwg8fghI5XRJevFNg151gLUcqo/wU9DId5ZDZ
                                3n4flWKK66IjWf4OirQEbPg90vhTomnEwZtQpxM+nV19fDgaMrUd5UeGL2Hm2BE0NqZUYQZtKGy16A916/Ezay7RQRqZMwfDgzdxqDjFimAUe/+N
                                ubC6MjW1h9uoXVq8hUis3GFiFt5rlh3gJUqK4FqO0486t4nKu2YUXieaKObeWFK6M5WSrlxUiFk0uMWJAZJw0ekGuYWOsknR/tghdfuwwOHb8Izg
                                13iOB9R1sNsViaikIXc/5uuPQFeOeGnwqSWbboJFSBQZbuw1AKt2dk0nhkxDLNOPXglltDGt7KjBhBMuZLrnqoKjgkwHbG5lffAtR2MmoBstL0+V
                                ioo2Dc+Mzc4qolzeyKVMswmNSwbwgvsUrBEjPqvIy77/XID/P951bBibMFUA7fKE0aLzhLkisZTjIbLnsRLrFNJk0mUIK+zNSZPmTEMoM4+T9/bT
                                PNBbcy6X8DqyUbTYUzKkZV0PF51bUAkTBkSmWPJBVnnI5ULZXXuDamkFYtvKt/T+W8yfgoBK/vQWkkdOmXGcTWf45SMWXMHYOvP/521qL0Bub4Vf
                                1iQlNuPceuTJdESuuiJcf6f+PWL+7YvPFHmZkzg8iIZZbg6INbenNheTOBgCkZyh2/vTxcNP2yFqDRhb1VpdOiWoAQkv064KgHpJLwAMIgH/la0l
                                TLyUNAzp0BV2lZZKYVizsI0W79ws3Nj/74Rnj0h5uhb+9VoBWMualBdu3DbH83844/vLP/5n7IMOPIiGWW4sQXtmws58obg6DllvNLL+tlpsjGtG
                                t4C1DL2eMJfhrsEMZ+HYLG7aDzjhkTdi2C8uJVlQvAm58PvuR0mlNlQE5p6imDJgvV8zbej+XY6SVw/9//Vv+PX9iwk7Xj72aUmxHJLEVGLE0C3p
                                Td1da5kVkDm0mObCAh9KombY78uVPQOvQ6RJXU0/eFuj4UVcldf4fbEmVadEorLwfa0gaVQHinuYFjsgx2bio9XRycq9XFnyuWPt7c3M/O9LHfLu
                                Yj6Ycy7Mz8JM2BjFiaGIpsCCU9rUdf3lgoj28ICekFbkZR0B31DLFwkAqmEI5vjpT/g88gV6qm0xxTLTRE/hAAW6FgXxKFQeYu6aeE9oWUDEGJE0
                                m5bxha+jfdsy0jkSZFRixzFPsf3NJTGJlgJlTQQyDPtmEv+2v3BEDn0zDoFZHYcURAont9jziGCnOpsOPS8vWMYBI6zREyKIiCKRauXAil/ewSTg
                                6D5ZAMUe4PYWEBoYO5fKlvcKxtMCOPuYn/DV3cUX56Iv7iAAAAAElFTkSuQmCC`,
            },
            userMessage: {
              backgroundColor: "#3B81F6",
              textColor: "#ffffff",
              showAvatar: true,
              avatarSrc:
                "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
            },
            textInput: {
              placeholder: "Escreva sua pergunta",
              backgroundColor: "#ffffff",
              textColor: "#303235",
              sendButtonColor: "#3B81F6",
            },
          },
        },
      });
    },
  },
};
</script>

<style>
.text-color {
  color: #12174e;
}

.first-row {
  margin-bottom: 105px !important;
}

.first-row-mobile {
  margin-bottom: 30px !important;
}

.red-text {
  color: #de3831;
}

.black-blue-text {
  color: #1a2586;
  text-align: center;
  font-weight: bold;
}

.desc-text-color {
  color: rgba(0, 0, 0, 0.6);
}
</style>
