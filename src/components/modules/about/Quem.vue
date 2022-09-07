<template>
    <div>
        <v-container style="text-align: -webkit-center;">
            <Card title="Quem somos">
                <template v-slot:cardText>
                    <div class="black--text">
                        <p>
                            Desenvolvido por uma parceria entre <b>Oficina Municipal</b> e <b>Fundação Konrad
                            Adenauer</b>,
                            o Assis é um professor virtual que ensina aos gestores públicos o que é Inteligência
                            Artificial,
                            orientando e apresentando as principais vantagens do uso da tecnologia na gestão pública,
                            sem esquecer dos princípios éticos e diretrizes legais.
                        </p>
                        <p>
                            Somos um time de pesquisadores especialistas em dados, Direito da Internet, Inteligência
                            Artificial e
                            Administração pública, acostumados com ambientes como Laboratórios de Inovação e
                            departamentos de
                            Growth Hacking. Usamos nossa experiência com tecnologias exponenciais e em ambientes de
                            transformação
                            digital para facilitar a gestão pública com o uso de IA.

                        </p>
                        <p>
                            Nossa , nos capacita a resolver um importante problema na área de
                            investigação policial. Os conhecimentos técnicos em machine learning e engenharia de dados
                            são complementares
                            para garantir segurança, confiabilidade e inovação de nossas soluções.
                        </p>


                        <v-container fluid>
                            <v-row dense>
                                <v-col
                                    v-for="card in cards"
                                    :key="card.title"
                                    :cols="card.flex"
                                >
                                    <v-hover v-slot="{ hover }">
                                        <v-card
                                            :elevation="hover ? 7 : 2"
                                            :class="{ 'on-hover': hover }"
                                        >
                                            <v-toolbar
                                                color="#007A4D"
                                                dark
                                                dense
                                            >
                                                <v-toolbar-title class="text-body-2">
                                                    {{ card.title }}
                                                </v-toolbar-title>
                                                <v-spacer></v-spacer>

                                                <v-btn :href="card.linkedin" icon>
                                                    <v-icon color="white">mdi-linkedin</v-icon>
                                                </v-btn>
                                            </v-toolbar>
                                            <v-img
                                                :src="card.src"
                                                :aspect-ratio="1"
                                                class="white--text align-end"
                                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                                height="350"
                                            >
                                            </v-img>

                                        </v-card>
                                    </v-hover>
                                </v-col>
                            </v-row>
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
    data: () => ({
        cards: [
            {
                title: 'Cristiano Ferri',
                src: require('@/assets/images/home/ferri.jpeg'),
                flex: 4,
                linkedin: 'https://br.linkedin.com/in/crisferri/pt'
            },
            {
                title: 'Eduardo Magrani',
                src: require('@/assets/images/home/magrani.png'),
                flex: 4,
                linkedin: 'https://www.linkedin.com/in/eduardo-magrani-78216b21'
            },
            {
                title: 'Christian Miranda',
                src: require('@/assets/images/home/chris.jpeg'),
                flex: 4,
                linkedin: 'https://www.linkedin.com/in/christianmoryah'
            },
            {
                title: 'Andressa Sousa',
                src: require('@/assets/images/home/andressa.jpeg'),
                flex: 4,
                linkedin: 'https://www.linkedin.com/in/andressa-sousa-3b1187125/'
            },
            {
                title: 'Isabele',
                src: require('@/assets/images/home/isabele.jpeg'),
                flex: 4,
                linkedin: '#'
            },
            {
                title: 'Mário Pragmácio',
                src: require('@/assets/images/home/mario.jpeg'),
                flex: 4,
                linkedin: 'https://www.linkedin.com/in/m%C3%A1rio-pragm%C3%A1cio-13340436'
            }
        ],
    }),
}
</script>

<style>
#rounded-card {
    border-radius: 50%;
    min-height: 50px;
    min-width: 50px;
}
</style>