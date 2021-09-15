<template>
    <div>
        <v-container style="text-align: -webkit-center;">
            <Card :title="'Quem é o Assis?'">
                <template v-slot:cardText>
                    <div class="black--text">
                        <p>
                            Desenvolvido por uma parceria entre <b>Oficina Municipal</b> e <b>Fundação Konrad Adenauer</b>, o Assis é um 
                            professor virtual que ensina gestores públicos como modernizar sua administração, instruindo e 
                            tirando dúvidas sobre inovação na gestão pública, com uso de inteligência artificial, 
                            observando princípios éticos e diretrizes legais.
                        </p>
                        <p>
                            Além disso, é possível avaliar o desempenho do Assis como assistente. Sua avaliação é recebida
                            por um time de especialistas que ajustam o aprendizado do Assis para garantir que ele está 
                            dando as respostas corretas para ajudar em seus problemas mais difíceis.
                        </p>
                        <p>
                            Do que o Assis sabe falar:
                            <ul>
                                <li>O que é inteligência artificial e como funciona</li>
                                <li>Como implementar inteligência artificial</li>
                                <li>Como aplicar inteligência artificial em diferentes municípios</li>
                                <li>Que exemplos de projetos de inteligência artificial existem na administração pública</li>
                                <li>Que leis e diretrizes estão relacionadas a esse tipo de inovação</li>
                            </ul>
                        </p>
                        <p>
                            Coisas que o Assis não sabe falar:
                            <ul>
                                <li>Assuntos pessoais</li>
                                <li>Atualidades da política brasileira</li>
                            </ul>
                        </p>
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