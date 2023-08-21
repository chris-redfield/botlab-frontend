<template>
    <div>
        <v-container style="text-align: -webkit-center;">
            <Card :title="'Beta'">
                <template v-slot:cardText>
                    <div class="black--text">
                        <p>
                            Assis GPT beta test 2
                        </p>                        
                        
                    </div>
                    <div>
                        
                    </div>

                </template>
            </Card>
        </v-container>
        <!-- <flowise-fullchatbot></flowise-fullchatbot> -->
    </div>
    
</template>

<script>

    import Card from '../commom/Card.vue';
    export default {
        name: 'About',
        components: {
            Card,
        },
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>