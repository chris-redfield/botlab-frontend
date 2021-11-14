<template>
    <div>
        <v-container style="text-align: -webkit-center;">
            

           <Card :title="'Índice'" hideImg=“true”>
                
                <template v-slot:cardText> 
                    <div class="black--text">
                     <p>
                            Inteligência Artificial (IA): modelos e aplicações
                            <ol>
                                <li>
                                    <router-link to="#O-QUE-E-IA" @click.native="scrollTo('#O-QUE-E-IA')">
                                        O que é a Inteligência Artificial?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#O-QUE-COMPOE-IA" @click.native="scrollTo('#O-QUE-COMPOE-IA')">
                                        O que compõe a Inteligência Artificial?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#TECNICAS-DE-IA" @click.native="scrollTo('#TECNICAS-DE-IA')">
                                        Quais as técnicas de Inteligência Artificial?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#IA-FRACA-IA-FORTE" @click.native="scrollTo('#IA-FRACA-IA-FORTE')">
                                        O que é uma IA fraca? E IA forte?
                                    </router-link>
                                </li>
                            </ol>
                        </p>
                        <p>
                            Internet das Coisas – Armazenamento e Processamento de dados na área pública (IoT-APP)
                            <ol>
                                <li>
                                    <router-link to="#O-QUE-E-IOT" @click.native="scrollTo('#O-QUE-E-IOT')">
                                        O que é a Internet das Coisas?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#COMO-CRIAR-IOT" @click.native="scrollTo('#COMO-CRIAR-IOT')">
                                        O que é preciso para criação de um sistema de IoT?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#O-QUE-PODE-SER-FEITO-IOT" @click.native="scrollTo('#O-QUE-PODE-SER-FEITO-IOT')">
                                        O que pode ser feito com a Internet das Coisas?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#RELACAO-IOT-AREA-PUBLICA" @click.native="scrollTo('#RELACAO-IOT-AREA-PUBLICA')">
                                        Qual a relação entre a IoT e a área pública?
                                    </router-link>
                                </li>
                            </ol>
                        </p>

                     </div>
                </template>
            </Card>

            <br><br>

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

                        <p>
                            IA fraca ou “narrow AI” - o que está atualmente em uso - é a aplicação de inteligência artificial de tarefa única 
                            para usos como reconhecimento de imagem, tradução de linguagem e veículos autônomos. As máquinas atualmente 
                            funcionam com mais precisão do que os humanos nesses tipos de tarefas. No futuro, os pesquisadores esperam 
                            alcançar a IA forte ou uma IA geral. Isso envolveria sistemas que exibem comportamento inteligente em uma 
                            série de tarefas cognitivas. No entanto, os pesquisadores não estimam que essas capacidades serão alcançadas 
                            por pelo menos décadas.<a href="#">¹</a>
                        </p>

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




            <br><br><br><br>




            <Card :title="'Internet das Coisas – Armazenamento e Processamento de dados na área pública (IoT-APP)'">
                
                <template v-slot:cardText>
                    <div class="black--text">
                        <div id="O-QUE-E-IOT" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que é a Internet das Coisas?</h2>
                        <br>
                        
                        <p>
                            Não há um conceito único associado à Internet das Coisas (Internet of Things – IOT). Em resumo, pode ser entendido como um 
                            ambiente em que objetos físicos são interconectados à internet por meio de sensores pequenos e embutidos, o que cria um 
                            ecossistema de computação ubíqua, com objetivo de facilitar o cotidiano das pessoas com a introdução de soluções mais 
                            funcionais. Logo, a expressão IoT é usada para designar conectividade e interação entre objetos físicos conectados à 
                            internet. Por isso, para que haja a IoT, é essencial que haja a junção de computadores, sensores e objetos que 
                            interagem uns com os outros, processando dados em um cenário de hiperconectividade.<a href="#">¹</a>
                        </p>

                        <div id="COMO-CRIAR-IOT" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que é preciso para criação de um sistema de IoT?</h2>
                        <br>


                        <p>
                            A Internet das Coisas exige que haja coisas conectadas à internet, porém, isso envolve processos complexos o que 
                            pode incluir, por exemplo, um dispositivo físico (hardware) com sensores, conectividade sem fim, diferentes 
                            protocolos de comunicação, transmissão de dados, armazenamento de dados em nuvem, desenvolvimento de aplicações 
                            que se relacionam com dados e controlam os dispositivos, entre outros. <a href="#">¹</a>
                        </p>


                        <div id="O-QUE-PODE-SER-FEITO-IOT" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que pode ser feito com a Internet das Coisas?</h2>
                        <br>
                        

                        <p>
                           O conceito de IoT está intimamente ligado à ideia de “big data”, isto é, uma grande quantidade volumosa de dados 
                           estruturados, semiestruturados ou não estruturados que podem ser explorados para obter novas informações. A combinação 
                           desse grande volume de dados com a internet das coisas, por meio de objetos inteligentes, poderá alterar 
                           significativamente a forma como vivemos. Por exemplo, poderão ser criadas soluções mais eficazes para problemas 
                           já conhecidos, como poluição, congestionamento, eficiência produtiva, entre outros. Além disso, poderá trazer 
                           muitos benefícios para os cidadãos enquanto consumidores, ao permitir a criação de produtos e serviços mais rápidos 
                           e eficientes, trazendo maior conforto e comodidade. <a href="#">¹</a>
                        </p>

                        <p>
                            Em resumo, a IoT pode ser uma forma de infraestrutura global específica para o ambiente digital, permitindo 
                            serviços mais avançados em consequência da interconexão de coisas com base em tecnologias de informação e 
                            comunicação.<a href="#">¹</a> Objetos inteligentes interconectados podem ser a solução de problemas reais.
                            <a href="#">²</a>
                        </p>

                        <div id="RELACAO-IOT-AREA-PUBLICA" style="visibility:hidden">#</div>
                        <br>
                        <h2> Qual a relação entre a IoT e a área pública?</h2>
                        <br>

                        <p>
                            A IoT pode ser uma importante ferramenta para solução de grandes desafios da gestão pública. A partir do uso da 
                            tecnologia integrada e de dados processados de forma massiva, é possível alcançar soluções mais eficientes e eficazes 
                            contra problemas de ordem pública, a exemplo da diminuição da burocracia estatal, poluição, congestionamento, criminalidade, 
                            eficiência produtiva, entre outros. <a href="#">¹</a>
                        </p>

                        <br>
                        Referências:<br>
                        [1]  MAGRANI, Eduardo. A Internet das Coisas. Rio de Janeiro: FGV Editora, 2018, 192p. p. 20.
                        <br>
                        [2]  MAGRANI, Eduardo. A Internet das Coisas. Rio de Janeiro: FGV Editora, 2018, 192p. p. 162.
                        <br>
                        [3] MAGRANI, Eduardo. A Internet das Coisas. Rio de Janeiro: FGV Editora, 2018, 192p. p. 45.
                        <br>
                        [4] MAGRANI, Eduardo. A Internet das Coisas. Rio de Janeiro: FGV Editora, 2018, 192p. p. 46.
                        <br>
                        [5] MAGRANI, Eduardo. A Internet das Coisas. Rio de Janeiro: FGV Editora, 2018, 192p. p. 82.
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