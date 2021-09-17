<template>
    <div>
        <v-container style="text-align: -webkit-center;">
            <Card :title="'Quem é o Assis?'">
                <template v-slot:cardText>
                    <div class="black--text">
                        <p>
                            Desenvolvido por uma parceria entre <b>Oficina Municipal</b> e <b>Fundação Konrad Adenauer</b>, 
                            o Assis é um professor virtual que ensina aos gestores públicos o que é Inteligência Artificial, 
                            orientando e apresentando as principais vantagens do uso da tecnologia na gestão pública, 
                            sem esquecer dos princípios éticos e diretrizes legais.
                        </p>
                        <p>
                            Além disso, é possível avaliar o desempenho do Assis como assistente. Sua avaliação é recebida 
                            por um time de especialistas que ajustam o aprendizado do Assis, garantindo que suas respostas 
                            estejam corretas para tirar as diversas dúvidas sobre o uso da Inteligência Artificial na 
                            administração pública.
                        </p>
                        <p>
                            Do que o Assis sabe falar:
                            <ul>
                                <li>O que é inteligência artificial e como funciona</li>
                                <li>Como implementar</li>
                                <li>Como aplicar em diferentes municípios</li>
                                <li>Que exemplos de projetos de IA existem na administração pública</li>
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