<template>
  <v-card :max-width="sizeDefaultImg.width">
    <v-img
      :src="cardImg"
      :height="sizeDefaultImg.height"
      :width="sizeDefaultImg.width"
      v-if="!hideImg"
      cover
    ></v-img>
    <v-card-title style="text-align: justify" class="py-4"  :class="titleSize">
      {{ title }}
    </v-card-title>

    <v-card-subtitle style="text-align: justify" v-if="subTitle">
      {{ subTitle }}
    </v-card-subtitle>

    <v-card-text style="text-align: justify">
      <slot name="cardText"></slot>
    </v-card-text>
  </v-card>
</template>

<script>
import { useDisplay } from "vuetify";
import cardImg from '@/assets/images/commom/v-img.png'

export default {
  name: "AppCard",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    subTitle: {
      type: String,
      required: false,
      default: "",
    },
    hideImg: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      cardImg,
    };
  },
  setup() {
    const { xs, sm, md } = useDisplay();

    return {
      xs,
      sm,
      md,
    };
  },
  computed: {
    titleSize() {
      if (this.sm || this.md) {
        return "text-h5 font-weight-bold";
      }
      if (this.xs) {
        return "text-body-1 font-weight-bold";
      }
      return "text-h4 font-weight-bold";
    },
    sizeDefaultImg() {
      let size = {
        height: 152.76,
        width: 886,
      };

      if (this.sm) {
        size.height = 100;
        size.width = 580;
        return size;
      }
      if (this.xs) {
        size.height = 51;
        size.width = 322;
        return size;
      }
      return size;
    },
  },
};
</script>

<style>
</style>
