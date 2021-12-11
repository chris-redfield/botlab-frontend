<template>
    <div>
        <v-container style="text-align: -webkit-center;">
            <Card :title="'Quem somos'">
                <template v-slot:cardText>
                    <div class="black--text">
                        <p>
                            Desenvolvido por uma parceria entre <b>Oficina Municipal</b> e <b>Fundação Konrad Adenauer</b>, 
                            o Assis é um professor virtual que ensina aos gestores públicos o que é Inteligência Artificial, 
                            orientando e apresentando as principais vantagens do uso da tecnologia na gestão pública, 
                            sem esquecer dos princípios éticos e diretrizes legais.
                        </p>
                        <p>
                            Somos um time de pesquisadores especialistas em dados, Direito da Internet, Inteligência Artificial e
                            Administração pública, acostumados com ambientes como Laboratórios de Inovação e departamentos de
                            Growth Hacking. Usamos nossa experiência com tecnologias exponenciais e em ambientes de transformação
                            digital para facilitar a gestão pública com o uso de IA. 
                            
                        </p>
                        <p>
                            Nossa , nos capacita a resolver um importante problema na área de 
                            investigação policial. Os conhecimentos técnicos em machine learning e engenharia de dados são complementares 
                            para garantir segurança, confiabilidade e inovação de nossas soluções.
                        </p>
                        

                    <v-container class="text-center">
                    <v-avatar
                        style="margin-right:20px"
                        class="elevation-12 mb-12"
                        size="96"
                    >
                        <v-img src="@/assets/images/home/ferri.jpeg"></v-img>
                    </v-avatar>
                    
                    <v-avatar
                        style="margin-right:20px"
                        class="elevation-12 mb-12"
                        size="96"
                    >
                        <v-img src="@/assets/images/home/magrani.jpg"></v-img>
                    </v-avatar>

                    <v-avatar
                        style="margin-right:20px"
                        class="elevation-12 mb-12"
                        size="96"
                    >
                        <v-img src="@/assets/images/home/chris.jpeg"></v-img>
                    </v-avatar>

                    <v-avatar
                        style="margin-right:20px"
                        class="elevation-12 mb-12"
                        size="96"
                    >
                        <v-img src="@/assets/images/home/andressa.jpeg"></v-img>
                    </v-avatar>

                    <v-avatar
                        style="margin-right:20px"
                        class="elevation-12 mb-12"
                        size="96"
                    >
                        <v-img src="@/assets/images/home/isabele.jpeg"></v-img>
                    </v-avatar>

                    <v-avatar
                        style="margin-right:20px"
                        class="elevation-12 mb-12"
                        size="96"
                    >
                        <v-img src="@/assets/images/home/mario.jpeg"></v-img>
                    </v-avatar>
                    </v-container>
                    </div>

                </template>
            </Card>
        </v-container>
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