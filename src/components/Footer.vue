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
                <v-img
                    :src="logoOficinaMunicipal"
                    :width="logoOficinaMunicipalSize.width"
                    :height="logoOficinaMunicipalSize.height"
                    contain
                    style="margin-right: 70px;"
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
export default {
    name: 'Footer',
    data() {
        return {
            logoKonrad: require('@/assets/images/footer/logo-akonrad.svg'),
            logoOficinaMunicipal: require('@/assets/images/footer/logo-oficina-municipal.svg'),
        };
    },
    computed: {
        footerSize() {
            if(this.$vuetify.breakpoint.smAndDown) {
                return 74.2;
            }
            return 139;
        },
        logoKonradSize() {
            let size = {
                height: 49,
                width: 158,
            }
            if(this.$vuetify.breakpoint.smAndDown) {
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
            if(this.$vuetify.breakpoint.smAndDown) {
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