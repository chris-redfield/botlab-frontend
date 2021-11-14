<template>
    <div>
        <v-container style="text-align: -webkit-center;">
            
           
            

            <Card :title="'Inteligência Artificial (IA): modelos e aplicações'">
                
                <template v-slot:cardText>
                    <div class="black--text">
                        <div id="O-QUE-E-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que é a Inteligência Artificial?</h2>
                        <br>
                        
                        <p>
                            Em poucas palavras, a Inteligência Artificial é um sistema inteligente capaz de gerar resultados automaticamente, 
                            de acordo com os dados e as métricas previamente definidas. Inicialmente, a ideia era simular a capacidade humana 
                            de pensar e agir autonomamente. De acordo com documentos da União Europeia, um sistema de inteligência artificial 
                            é um programa informático, que pode ser desenvolvido com uma ou várias técnicas diferentes, capaz de criar resultados, 
                            tendo em vista um determinado conjunto de objetivos definidos por seres humanos, tais como conteúdos, previsões, 
                            recomendações ou decisões, que influenciam os ambientes com os quais interage.<a href="#">¹</a>
                        </p>
                        <p>
                            Na realidade, a IA é considerada mais um campo de estudo do que uma coisa em si, dividida em diferentes subcampos,
                             como aprendizado de máquina, robótica, redes neurais, visão, processamento de linguagem natural e processamento de 
                             fala. Há um cruzamento significativo entre esses subcampos. A IA também vem de outras áreas além da ciência da 
                             computação, incluindo psicologia, neurociência, ciência cognitiva, filosofia, linguística, probabilidade e lógica.
                            <a href="#">²</a>
                        </p>

                        <div id="O-QUE-COMPOE-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que compõe a Inteligência Artificial?</h2>
                        <br>


                        <p>
                            Simplificando, IA é uma coleção de tecnologias que combinam dados, algoritmos e poder de computação. Os avanços 
                            na computação e o aumento da disponibilidade de dados são, portanto, os principais impulsionadores do atual aumento da IA.
                        </p>

                        <div id="TECNICAS-DE-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2> Quais as técnicas de Inteligência Artificial?</h2>
                        <br>
                        

                        <p>
                            A inteligência artificial tem diferentes técnicas e formas de programação, que podem ser 
                            utilizadas de forma conjunta ou separada. Os mais comuns são:
                            <ol>
                                <li>aprendizado de máquina (machine learning) – nessa técnica, o algoritmo é configurado com um grande volume
                                    de dados para responder a um determinado problema, mas, com o passar do tempo, o próprio sistema encontra 
                                    novas formas de resolver o problema específico. Essa técnica pode ser subdividida em três: a.1) aprendizado 
                                    supervisionado – dados rotulados e informações já conhecidas são conhecidas, o que faz com que a IA gere 
                                    respostas esperadas, mas altamente precisas; a.2) aprendizado não supervisionado – dados não rotulados 
                                    são utilizados, de forma a buscar informações não conhecidas até então. Um exemplo possível é o uso 
                                    desse modelo para identificar padrões; a.3) aprendizado por reforço – esse modelo usa reforços 
                                    positivos e negativos, valendo-se de seus próprios erros e acertos para tomar uma decisão.
                                    <a href="#">¹</a></li>
                                <li>aprendizado profundo (deep learning) – forma mais aprofundada de aprendizado de máquina, voltada para 
                                    tarefas mais complexas. Utiliza-se redes neurais que buscam imitar o funcionamento do cérebro humano, 
                                    de forma que essa técnica é capaz de aprender por si própria e continuar o desenvolvimento da 
                                    programação originalmente feita por um humano.</li>
                                <li>processamento de linguagem natural (Natural Language Processing) – é associada a diferentes tarefas, 
                                    mas é comum a ideia de tratamento de dados linguísticos, ou seja, a capacidade de a máquina processar 
                                    a linguagem utilizada pelos seres humanos. Ou seja, a tecnologia captura elementos linguísticos, que 
                                    podem ser textos, vídeo, som ou imagem, transforma-os em textos e faz análises a partir disso, 
                                    gerando os resultados.<a href="#">¹</a></li>
                                <li>assistentes virtuais (chatbots) – os algoritmos da IA são programados de forma a permitir que a 
                                    máquina interaja e converse com seres humanos, o que pode ser feito por meio de voz ou texto. É 
                                    uma das tecnologias de IA de mais fácil percepção, já sendo utilizada em diferentes áreas, principalmente 
                                    atendimento ao cliente, FAQ e agendamento de serviços.<a href="#">¹</a> </li>
                                <li>Visão computacional – é uma tecnologia utilizada para que a máquina reconheça imagens e vídeos para extrair
                                     dados e padrões.<a href="#">¹</a> </li>
                                <li>Sistemas de recomendações – algoritmos utilizados para recomendação de conteúdos, produtos ou serviços com 
                                    base no perfil de determinada pessoa.<a href="#">¹</a></li>
                            </ol>
                        </p>

                        <div id="IA-FRACA-IA-FORTE" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que é uma IA fraca? E IA forte?</h2>
                        <br>

                        <br>
                        Referências:<br>
                        [1] Artigo 3º (1). Comissão Europeia. Proposta de Regulamento em matéria de IA da União Europeia. Disponível em: 
                        https://digital-strategy.ec.europa.eu/en/library/proposal-regulation-laying-down-harmonised-rules-artificial-intelligence.
                        <br>
                        [2] ANDERSEN, Lindsey. Human Rights in the Age of Artificial Intelligence.
                        <br>
                        [3] MAGRANI, Eduardo; DE OLIVEIRA, Renan Medeiros; CAMPELLO, Tatiana. Guia de Boas Práticas em Inteligência Artificial. 
                        Demarest, publicado em outubro de 2021.
                        
                    </div>
                </template>
            </Card>

        <!--a href="#TESTE"> FUnciona </a><br> -> esse só funciona com href + Name

        <router-link to="#TESTE" @click.native="scrollTo('#TESTE')">Será?</router-link -> esse funciona só com div + ID -->

        </v-container>
    </div>
</template>

<script>
import Card from '../commom/Card.vue';
const TIMEOUT = 1;
export default {
    name: 'About',
    components: {
        Card,
    },
    data() {
        return {

        }
    },
    mounted () {
    // From testing, without a brief timeout, it won't work.
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
    }
  },
  methods: {
    scrollTo: function (hashtag) {
      setTimeout(() => { location.href = hashtag }, TIMEOUT)
    }
  }
    
}
</script>

<style>

</style>