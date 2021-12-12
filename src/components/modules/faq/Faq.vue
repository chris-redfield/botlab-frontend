<template>
    <div>
        <v-container style="text-align: -webkit-center;">
            

           <Card :title="'Índice'" hideImg=“true”>
                
                <template v-slot:cardText> 
                    <div id="TOP" style="visibility:hidden">#</div>
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
                               <li>
                                    <router-link to="#RELACAO-IOT-CIDADES-INTELIGENTES" @click.native="scrollTo('#RELACAO-IOT-CIDADES-INTELIGENTES')">
                                        Qual a relação entre a IoT e cidades inteligentes
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#OBJETIVO-LGPD" @click.native="scrollTo('#OBJETIVO-LGPD')">
                                        Como garantir a segurança dos dados na IoT?
                                    </router-link>
                                </li>
                                
                            </ol>
                        </p>
                        <p>
                            Cibersegurança e proteção de dados
                            <ol>
                                <li>
                                    <router-link to="#SEGURANCA-DADOS-IOT" @click.native="scrollTo('#SEGURANCA-DADOS-IOT')">
                                        Qual o objetivo da Lei Geral de Proteção de Dados?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#FISCALIZA-LGPD" @click.native="scrollTo('#FISCALIZA-LGPD')">
                                        Quem fiscaliza a LGPD?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#DADOS-PESSOAIS-SEGUNDO-LGPD" @click.native="scrollTo('#DADOS-PESSOAIS-SEGUNDO-LGPD')">
                                        O que são dados pessoais, segundo a LGPD?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#CASOS-LGPD-APLICA" @click.native="scrollTo('#CASOS-LGPD-APLICA')">
                                        Em quais casos a LGPD se aplica?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#CASOS-LGPD-NAO-APLICA" @click.native="scrollTo('#CASOS-LGPD-NAO-APLICA')">
                                        Quando a LGPD não se aplica?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#O-QUE-E-TRATAMENTO-DE-DADOS" @click.native="scrollTo('#O-QUE-E-TRATAMENTO-DE-DADOS')">
                                        O que pode ser entendido como tratamento de dados?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#AGENTES-TRATAMENTO-DADOS" @click.native="scrollTo('#AGENTES-TRATAMENTO-DADOS')">
                                        Quem são os agentes de tratamento de dados?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#DADO-ANONIMO-ANONIMIZADO" @click.native="scrollTo('#DADO-ANONIMO-ANONIMIZADO')">
                                        O que é um dado anônimo ou anonimizado?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#PRINCIPIOS-LGPD-TRATAMENTO-DADOS" @click.native="scrollTo('#PRINCIPIOS-LGPD-TRATAMENTO-DADOS')">
                                        Quais princípios descritos na LGPD devem orientar o tratamento de dados?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#CONSENTIMENTO-REGRAS" @click.native="scrollTo('#CONSENTIMENTO-REGRAS')">
                                        O que é o consentimento? Quais suas regras?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#SANCOES-TRATAMENTO-IRREGULAR" @click.native="scrollTo('#SANCOES-TRATAMENTO-IRREGULAR')">
                                        Quem é responsabilizado no caso de tratamento de dados pessoais de forma irregular? Há sanções aplicáveis?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#PODER-PUBLICO-SUJEITO-LGPD" @click.native="scrollTo('#PODER-PUBLICO-SUJEITO-LGPD')">
                                        O poder público está sujeito à LGPD?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#MUNICIPIO-COMPETENTE-LGPD" @click.native="scrollTo('#MUNICIPIO-COMPETENTE-LGPD')">
                                        O município é competente para tratar sobre Proteção de Dados?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#USO-COMPARTILHADO-ADM-PUBLICA" @click.native="scrollTo('#USO-COMPARTILHADO-ADM-PUBLICA')">
                                        É possível o uso compartilhado de dados entre órgãos da Administração Pública?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#TRASNFERENCIA-DADOS-PUBLICO-PRIVADO" @click.native="scrollTo('#TRASNFERENCIA-DADOS-PUBLICO-PRIVADO')">
                                        O setor público pode transferir dados pessoais para o setor privado?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#INCIDENTE-SEGURANCA" @click.native="scrollTo('#INCIDENTE-SEGURANCA')">
                                       O que fazer e a quem informar no caso de um incidente de segurança?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#IMPORTANCIA-SEGURANCA-DIGITAL" @click.native="scrollTo('#IMPORTANCIA-SEGURANCA-DIGITAL')">
                                       Qual a importância da segurança digital e como me proteger?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#CIBERCRIME" @click.native="scrollTo('#CIBERCRIME')">
                                       O que é cibercrime?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#INFRAESTRUTURA-CRITICA" @click.native="scrollTo('#INFRAESTRUTURA-CRITICA')">
                                       O que é infraestrutura crítica?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#ACESSOS-INDEVIDOS" @click.native="scrollTo('#ACESSOS-INDEVIDOS')">
                                       Como ocorrem os acessos indevidos aos sistemas de informação?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#AMEACA-AMBIENTAL" @click.native="scrollTo('#AMEACA-AMBIENTAL')">
                                       Quando falamos de segurança digital, o que é a ameaça ambiental?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#AMEACA-DIREITOS-HUMANOS" @click.native="scrollTo('#AMEACA-DIREITOS-HUMANOS')">
                                       O que é considerado ameaça aos direitos humanos?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#FALTA-CAPACIDADE-SEGURANCA" @click.native="scrollTo('#FALTA-CAPACIDADE-SEGURANCA')">
                                       A falta de capacidade técnica dos funcionários pode comprometer a segurança digital?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#DADOS-AMEACAS-VULNERABILIDADES" @click.native="scrollTo('#DADOS-AMEACAS-VULNERABILIDADES')">
                                       Quando nos referimos aos dados, quais as maiores ameaças e vulnerabilidades?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#ROUBO-CRECENCIAL" @click.native="scrollTo('#ROUBO-CRECENCIAL')">
                                       O que é um roubo de credencial?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#VAZAMENTO-DADOS" @click.native="scrollTo('#VAZAMENTO-DADOS')">
                                       O que é um vazamento de dados?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#PROTOCOLOS-INFORMACOES" @click.native="scrollTo('#PROTOCOLOS-INFORMACOES')">
                                       O que são protocolos de compartilhamento de informações?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#RANSONWARE" @click.native="scrollTo('#RANSONWARE')">
                                       O que é ransomware?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#CAPACITACAO-SEGURANCA-DIGITAL" @click.native="scrollTo('#CAPACITACAO-SEGURANCA-DIGITAL')">
                                       Como melhorar a capacitação do pessoal em termos de segurança digital?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#PROTEGER-EQUIPES-CRIMES-CIBERNETICOS" @click.native="scrollTo('#PROTEGER-EQUIPES-CRIMES-CIBERNETICOS')">
                                       Como proteger as equipes contra crimes cibernéticos?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#PROTEGER-EQUIPES-ACESSOS-INDEVIDOS" @click.native="scrollTo('#PROTEGER-EQUIPES-ACESSOS-INDEVIDOS')">
                                       Como proteger a equipe contra acessos indevidos?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#PROTEGER-INFRAESTRUTURA-CRITICA" @click.native="scrollTo('#PROTEGER-INFRAESTRUTURA-CRITICA')">
                                       Como proteger a infraestrutura crítica?
                                    </router-link>
                                </li>
                                

                            </ol>
                        </p>
                        <p>
                            Propriedade Intelectual de IA
                            <ol>
                                <li>
                                    <router-link to="#IA-PROTEGIDA-PROPRIEDADE-INTELECTUAL" @click.native="scrollTo('#IA-PROTEGIDA-PROPRIEDADE-INTELECTUAL')">
                                        Como utilizar uma ferramenta de IA protegida por direitos de Propriedade Intelectual?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#PROPRIEDADE-INTELECTUAL-OBSTACULOS-IA" @click.native="scrollTo('#PROPRIEDADE-INTELECTUAL-OBSTACULOS-IA')">
                                       A propriedade intelectual impede ou cria obstáculos para o desenvolvimento de IA?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#PROPRIEDADE-INTELECTUAL-OBSTACULOS-IA" @click.native="scrollTo('#PROPRIEDADE-INTELECTUAL-OBSTACULOS-IA')">
                                       A propriedade intelectual impede ou cria obstáculos para o desenvolvimento de IA?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#PROPRIEDADE-INTELECTUAL-CAIXA-PRETA" @click.native="scrollTo('#PROPRIEDADE-INTELECTUAL-CAIXA-PRETA')">
                                       Como funciona a atribuição de direitos de Propriedade Intelectual quando a tecnologia de inteligência artificial é pouco explicável, considerada uma “caixa preta”?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#PROPRIEDADE-INTELECTUAL-IA-CONFLITANTES" @click.native="scrollTo('#PROPRIEDADE-INTELECTUAL-IA-CONFLITANTES')">
                                       A propriedade intelectual e a IA são conflitantes?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#BENEFICIOS-PI-IA" @click.native="scrollTo('#BENEFICIOS-PI-IA')">
                                       Quais os benefícios e utilidade em compreender os temas de PI e IA?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#DADOS-DOMINIO-PUBLICO-IA" @click.native="scrollTo('#DADOS-DOMINIO-PUBLICO-IA')">
                                       Dados em domínio público podem ser usados pela IA protegida por Propriedade Intelectual?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#MUNICIPIO-COMPETENTE-PROPRIEDADE-INTELECTUAL" @click.native="scrollTo('#MUNICIPIO-COMPETENTE-PROPRIEDADE-INTELECTUAL')">
                                       O município é competente para tratar sobre Propriedade Intelectual?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#MUNICIPIO-REGRAS-PI-IA" @click.native="scrollTo('#MUNICIPIO-REGRAS-PI-IA')">
                                       Como o município pode lidar com as regras de PI relacionadas à IA?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#PROPRIEDADE-INTELECTUAL-BASES-IA" @click.native="scrollTo('#PROPRIEDADE-INTELECTUAL-BASES-IA')">
                                       Há propriedade intelectual de bases de dados utilizada pela IA?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#TITULAR-PI-CEDER-DIREITOS" @click.native="scrollTo('#TITULAR-PI-CEDER-DIREITOS')">
                                       O titular de direitos de PI pode ceder seus direitos ao Município?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#SISTEMAS-IA-TIPOS-PI" @click.native="scrollTo('#SISTEMAS-IA-TIPOS-PI')">
                                       Os sistemas de IA podem ser protegidos por quais tipos de direitos dentro da Propriedade Intelectual?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#USO-AUTORIZADO-PI" @click.native="scrollTo('#USO-AUTORIZADO-PI')">
                                       O que é o uso autorizado de Propriedade Intelectual? Pode ser aplicada a um sistema de IA do município?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#LEIS-PI-BRASIL" @click.native="scrollTo('#LEIS-PI-BRASIL')">
                                       Quais as leis que tratam de Propriedade Intelectual no Brasil?
                                    </router-link>
                                </li>
                            </ol>
                        </p>
                        <p>
                            Ambiente regulatório e legislação aplicável à IA
                            <ol>
                                <li>
                                    <router-link to="#LEGISLACAO-APLICAVEL" @click.native="scrollTo('#LEGISLACAO-APLICAVEL')">
                                        Quais as legislações aplicáveis à IA?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#COMO-PROTEGER-IA" @click.native="scrollTo('#COMO-PROTEGER-IA')">
                                        Como proteger a IA?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#COMO-DESENVOLVER-IA-LEGAL" @click.native="scrollTo('#COMO-DESENVOLVER-IA-LEGAL')">
                                        Como desenvolver um projeto de IA em conformidade com a lei?
                                    </router-link>
                                </li>
                                
                            </ol>
                        </p>
                        <p>
                            Boas práticas para implementação de IA
                            <ol>
                                <li>
                                    <router-link to="#BOAS-PRATICAS-IA" @click.native="scrollTo('#BOAS-PRATICAS-IA')">
                                        O que são boas práticas em IA?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#ANALISE-IMPACTO-AVALIACAO-RISCOS" @click.native="scrollTo('#ANALISE-IMPACTO-AVALIACAO-RISCOS')">
                                        O que é uma análise de impacto e avaliação de riscos?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#AUDITORIA-ALGORITMOS" @click.native="scrollTo('#AUDITORIA-ALGORITMOS')">
                                        O que seria auditoria de algoritmos?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#EQUIPE-IA" @click.native="scrollTo('#EQUIPE-IA')">
                                        Como deve ser a equipe responsável pela tecnologia de IA na organização?
                                    </router-link>
                                </li>
                            </ol>
                        </p>
                        <p>
                            Governança de algoritmos e princípios éticos na implementação de IA
                            <ol>
                                <li>
                                    <router-link to="#PRINCIPIOS-ETICOS-IA" @click.native="scrollTo('#PRINCIPIOS-ETICOS-IA')">
                                        Quais os princípios éticos orientadores da IA?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#CRITERIO-INTERNACIONAL" @click.native="scrollTo('#CRITERIO-INTERNACIONAL')">
                                        As organizações devem seguir algum critério internacional obrigatoriamente?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#ACCOUNTABILITY" @click.native="scrollTo('#ACCOUNTABILITY')">
                                        O que significa "accountability", ligada à responsabilidade por quaisquer erros ou falhas da Inteligência Artificial (IA)?
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#GOVERNANCA-BRASIL" @click.native="scrollTo('#GOVERNANCA-BRASIL')">
                                        Como a governança de IA deve ser feita no Brasil?
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
                            A Inteligência Artificial é um sistema inteligente capaz de gerar resultados automaticamente,
                            de acordo com os dados e as métricas previamente definidas. Inicialmente, a ideia era simular 
                            a capacidade humana de pensar e agir autonomamente. De acordo com documentos da União Europeia, 
                            um sistema de inteligência artificial é um programa informático, que pode ser desenvolvido com 
                            uma ou várias técnicas diferentes, capaz de criar resultados, tendo em vista um determinado 
                            conjunto de objetivos definidos por seres humanos, tais como conteúdos, previsões, 
                            recomendações ou decisões, que influenciam os ambientes com os quais interage.
                            Veja mais em: 
                            <a href="https://digital-strategy.ec.europa.eu/en/library/proposal-regulation-laying-down-harmonised-rules-artificial-intelligence">
                            https://digital-strategy.ec.europa.eu/en/library/proposal-regulation-laying-down-harmonised-rules-artificial-intelligence</a>.
                        </p>
                        <p>
                            Na realidade, a IA é considerada mais um campo de estudo do que uma coisa em si, dividida em 
                            diferentes subcampos, como aprendizado de máquina, robótica, redes neurais, visão, processamento 
                            de linguagem natural e processamento de fala. Há um cruzamento significativo entre esses subcampos. 
                            A IA também vem de outras áreas além da ciência da computação, incluindo psicologia, neurociência, 
                            ciência cognitiva, filosofia, linguística, probabilidade e lógica.
                        </p>

                        <div id="O-QUE-COMPOE-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que compõe a Inteligência Artificial?</h2>
                        <br>

                        <p>
                            IA é uma coleção de tecnologias que combinam dados, algoritmos e poder de computação. Os avanços na 
                            computação e o aumento da disponibilidade de dados são, portanto, os principais impulsionadores do atual 
                            aumento da IA.
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
                                    [1]</li>
                                <li>aprendizado profundo (deep learning) – forma mais aprofundada de aprendizado de máquina, voltada para 
                                    tarefas mais complexas. Utiliza-se redes neurais que buscam imitar o funcionamento do cérebro humano, 
                                    de forma que essa técnica é capaz de aprender por si própria e continuar o desenvolvimento da 
                                    programação originalmente feita por um humano.</li>
                                <li>processamento de linguagem natural (Natural Language Processing) – é associada a diferentes tarefas, 
                                    mas é comum a ideia de tratamento de dados linguísticos, ou seja, a capacidade de a máquina processar 
                                    a linguagem utilizada pelos seres humanos. Ou seja, a tecnologia captura elementos linguísticos, que 
                                    podem ser textos, vídeo, som ou imagem, transforma-os em textos e faz análises a partir disso, 
                                    gerando os resultados.[1]</li>
                                <li>assistentes virtuais (chatbots) – os algoritmos da IA são programados de forma a permitir que a 
                                    máquina interaja e converse com seres humanos, o que pode ser feito por meio de voz ou texto. É 
                                    uma das tecnologias de IA de mais fácil percepção, já sendo utilizada em diferentes áreas, principalmente 
                                    atendimento ao cliente, FAQ e agendamento de serviços.[2]</li>
                                <li>Visão computacional – é uma tecnologia utilizada para que a máquina reconheça imagens e vídeos para extrair
                                     dados e padrões.[3]</li>
                                <li>Sistemas de recomendações – algoritmos utilizados para recomendação de conteúdos, produtos ou serviços com 
                                    base no perfil de determinada pessoa.[4]</li>
                            </ol>
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
                        <br>
                        [4] <a href="https://www.notion.so/O-que-uma-Interface-Conversacional-4a79ea785a7c425bb7d86eede6ec5e6d">O que é uma interface conversacional</a>
                        <br><br>
                        <div style="text-align: right;">
                        <router-link to="#TOP" @click.native="scrollTo('#TOP')">
                            Voltar ao índice
                        </router-link>
                        </div>
                        
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
                            Internet das coisas é um conceito importante quando se pensa no desenvolvimento de ferramentas de 
                            Inteligência Artificial, sobretudo no setor público. Embora não haja um conceito único associado à Internet 
                            das Coisas (Internet of Things – IOT), em resumo, ele pode ser entendido como a existência de um ambiente 
                            em que objetos físicos são interconectados à internet por meio de sensores pequenos e embutidos, o que cria 
                            um ecossistema de computação onipresente, com objetivo de facilitar o cotidiano das pessoas com a introdução 
                            de soluções mais funcionais. Logo, a expressão IoT é usada para designar conectividade e interação entre 
                            objetos físicos conectados à internet. Por isso, para que haja a IoT, é essencial que haja a junção de 
                            computadores, sensores e objetos que interagem uns com os outros, processando dados em um cenário de 
                            hiperconectividade.
                        </p>

                        <div id="COMO-CRIAR-IOT" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que é preciso para criação de um sistema de IoT?</h2>
                        <br>


                        <p>
                            A Internet das Coisas exige que haja coisas conectadas à internet, porém, isso envolve processos complexos o que 
                            pode incluir, por exemplo, um dispositivo físico (hardware) com sensores, conectividade sem fim, diferentes 
                            protocolos de comunicação, transmissão de dados, armazenamento de dados em nuvem, desenvolvimento de aplicações 
                            que se relacionam com dados e controlam os dispositivos, entre outros.[1]
                        </p>


                        <div id="O-QUE-PODE-SER-FEITO-IOT" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que pode ser feito com a Internet das Coisas?</h2>
                        <br>

                        <p>
                            O conceito de IoT está intimamente ligado à ideia de “big data”, isto é, uma grande quantidade de dados 
                            estruturados, semiestruturados ou não estruturados que podem ser explorados para obter novas informações. A 
                            combinação desse grande volume de dados com a internet das coisas, por meio de objetos inteligentes, poderá 
                            alterar significativamente a forma como vivemos. Por exemplo, poderão ser criadas soluções mais eficazes para 
                            problemas já conhecidos, como poluição, congestionamento, eficiência produtiva, entre outros. Além disso, poderá 
                            trazer muitos benefícios para os cidadãos enquanto consumidores, ao permitir a criação de produtos e serviços 
                            mais rápidos e eficientes, trazendo maior conforto e comodidade. Em resumo, a IoT pode ser uma forma de 
                            infraestrutura global específica para o ambiente digital, permitindo serviços mais avançados em consequência 
                            da interconexão de coisas com base em tecnologias de informação e comunicação.1 Objetos inteligentes 
                            interconectados podem ser a solução de problemas reais.[2]
                            
                        </p>

                        <div id="RELACAO-IOT-AREA-PUBLICA" style="visibility:hidden">#</div>
                        <br>
                        <h2> Qual a relação entre a IoT e a área pública?</h2>
                        <br>

                        <p>
                            A IoT pode ser uma importante ferramenta para solução de grandes desafios da gestão pública. A partir do uso 
                            da tecnologia integrada e de dados processados de forma massiva, é possível alcançar soluções mais eficientes e 
                            eficazes contra problemas de ordem pública, a exemplo da diminuição da burocracia estatal, poluição, 
                            congestionamento, criminalidade, eficiência produtiva, entre outros.[3]
                        </p>

                        <div id="RELACAO-IOT-CIDADES-INTELIGENTES" style="visibility:hidden">#</div>
                        <br>
                        <h2> Qual a relação entre a IoT e cidades inteligentes?</h2>
                        <br>

                        <p>
                            Cidades inteligentes (ou Smart cities) são lugares em que redes e serviços tradicionais são realizados de 
                            forma mais eficiente pelo uso do digital e das tecnologias de comunicação para beneficiar seus habitantes e as 
                            atividades econômicas. Para isso, elas devem investir na transformação digital em seis elementos que compõem o  
                            espaço urbano: mobilidade, vida cotidiana, governança, meio-ambiente, economia e pessoas. Logo, o primeiro passo 
                            para que uma cidade seja considerada inteligente é o investimento institucional em governança para que se possa 
                            fazer, por exemplo, planejamento urbano, o que permitirá a adoção especialmente de IA em atividades como o controle 
                            de horários do transporte coletivo, o acesso dos cidadãos à informação pública etc.
                        </p>

                        <p>
                            Não existe cidade 100% inteligente ou cidade não-inteligente, o que existem são níveis de desenvolvimento desta 
                            transformação digital nas cidades. Normalmente, as cidades que estão seguindo esse caminho utilizam dispositivos 
                            da Internet das Coisas, como sensores conectados, luzes e medidores inteligentes, para melhorar a infraestrutura 
                            do tecido urbano, coletando e analisando dados em tempo real dos cidadãos para identificar precisamente onde o 
                            problema está e como melhorar as condições dos serviços prestados.
                        </p>

                        <div id="REGULACAO-IOT" style="visibility:hidden">#</div>
                        <br>
                        <h2> Como o Brasil regula a Internet das Coisas?</h2>
                        <br>
                        
                        <p>
                            Em 2019, foi instituído, pelo Decreto nº 9.854 de 25 de junho de 2019, o Plano Nacional de Internet das Coisas, 
                            cujo objetivo foi de implementar e desenvolver a Internet das Coisas no país, com base na livre concorrência e na 
                            livre circulação de dados, além de diretrizes de segurança da informação e proteção de dados pessoais. A elaboração 
                            ocorreu a partir de uma parceria entre Ministério da Ciência, Tecnologia e Inovação com o Banco Nacional do Desenvolvimento. 
                            De acordo com o plano, seus objetivos principais são:
                        </p>
                        <ol>
                            <li> melhorar a qualidade de vida das pessoas e promover ganhos de eficiência nos serviços, por meio da implementação 
                                de soluções de IoT; 
                            </li>
                            <li> promover a capacitação profissional relacionada ao desenvolvimento de aplicações de IoT e a geração de empregos 
                                na economia digital;
                            </li>
                            <li> incrementar a produtividade e fomentar a competitividade das empresas brasileiras desenvolvedoras de IoT, 
                                por meio da promoção de um ecossistema de inovação neste setor;
                            </li>
                            <li> buscar parcerias com os setores público e privado para a implementação da IoT;
                            </li>
                            <li> aumentar a integração do País no cenário internacional, por meio da participação em 
                                fóruns de padronização, da cooperação internacional em pesquisa, desenvolvimento e 
                                inovação e da internacionalização de soluções de IoT desenvolvidas no País.[4]
                            </li>
                        </ol>
                        <p>
                            Mais recentemente, em dezembro de 2020, foi criada uma espécie de “Lei incentivo à Internet das Coisas” 
                            (Lei nº 14.108/2020), cuja vigência iniciou em janeiro de 2021 com validade de 5 anos. Apesar de ser bem 
                            específica e com prazo determinado, a lei reduz a zero as taxas de fiscalização de instalação e as taxas 
                            de fiscalização de funcionamento dos sistemas de comunicação máquina a máquina, além de isentar esses 
                            sistemas de pagamento da Contribuição para o Fomento da Radiodifusão Pública (CFRP) e da Contribuição 
                            para o Desenvolvimento da Indústria Cinematográfica Nacional (Condecine)[5]
                        </p>

                        <div id="SEGURANCA-DADOS-IOT" style="visibility:hidden">#</div>
                        <br>
                        <h2> Como garantir a segurança dos dados na IoT?</h2>
                        <br>
                        
                        <p>
                            É essencial que haja sempre a testagem de vulnerabilidades em softwares e sistemas, conjuntamente com a 
                            conscientização dos usuários da importância de manter os dispositivos atualizados com ferramentas de 
                            segurança eficientes e acessíveis. Segundo Magrani (2018), o que pode ser considerado um dos maiores 
                            desafios à segurança de dados nesse cenário de IoT é o correto armazenamento e tratamento desses dados 
                            pelos operadores dos serviços, responsabilidade que se multiplica com o maior volume de dados captados 
                            pelos dispositivos onipresentes no cotidiano dos cidadãos.
                        </p>



                        <br>
                        Referências:<br>
                        [1]  MAGRANI, Eduardo. A Internet das Coisas. Rio de Janeiro: FGV Editora, 2018, 192p. p. 20.
                        <br>
                        [2]  MAGRANI, Eduardo. A Internet das Coisas. Rio de Janeiro: FGV Editora, 2018, 192p. p. 162.
                        <br>
                        [3] MAGRANI, Eduardo. A Internet das Coisas. Rio de Janeiro: FGV Editora, 2018, 192p. p. 45.
                        <br>
                        [4] Ministério da Ciência, Tecnologia e Inovações. 
                        <a href="https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/internet-das-coisas">
                            Plano Nacional de Internet das Coisas
                        </a>.
                        <br>
                        [5] Ministério da Ciência, Tecnologia e Inovações. 
                        <a href="https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2020/12/lei-da-internet-das-coisas-e-sancionada-pelo-presidente-da-republica"> 
                            Lei da Internet das Coisas é sancionada pelo presidente da República
                        </a>.
                        <br><br>
                        <div style="text-align: right;">
                        <router-link to="#TOP" @click.native="scrollTo('#TOP')">
                            Voltar ao índice
                        </router-link>
                        </div>

                    </div>

                </template>
            </Card>

            <br><br><br><br>

            <Card :title="'Cibersegurança e proteção de dados'">
                
                <template v-slot:cardText>
                    <div class="black--text">

                        <br>
                        <p>
                            A fim de garantir que dados públicos e dos cidadãos sejam tratados de maneira adequada, observando 
                            princípios legais, é necessário que o município que queira implementar ferramentas de Inteligência 
                            Artificial esteja atento à legislação vigente. 
                            Desse modo, a primeira Lei a ser verificada é a nova Lei Geral de Proteção de Dados.
                        </p>

                        <div id="OBJETIVO-LGPD" style="visibility:hidden">#</div>
                        <br>
                        <h2> Qual o objetivo da Lei Geral de Proteção de Dados?</h2>
                        <br>
                        
                        <p>
                            A lei nº 13.709/18, conhecida como Lei Geral de Proteção de Dados (LGPD),[1] foi criada com o objetivo 
                            de proporcionar ao cidadão brasileiro um controle maior sobre o tratamento de seus dados pessoais, 
                            de maneira equilibrada com o desenvolvimento tecnológico e inovação. A lei estabelece princípios 
                            e cria regras que devem ser observados tanto por organizações privadas quanto públicas, além de 
                            criar a Autoridade Nacional de Proteção de Dados (ANPD), entidade reguladora específica para o 
                            tema. A LGPD foi criada em 2018 e entrou em vigor em setembro de 2020, porém suas sanções começaram 
                            a ser aplicadas a partir de agosto de 2021.
                        </p>

                        <div id="FISCALIZA-LGPD" style="visibility:hidden">#</div>
                        <br>
                        <h2> Quem fiscaliza a LGPD?</h2>
                        <br>
                        
                        <p>
                            A fiscalização referente à LGPD é de responsabilidade primária da Autoridade Nacional de Proteção de 
                            Dados (ANPD), órgão da administração pública federal criado para fiscalizar o cumprimento da lei, zelar 
                            pela proteção de dados pessoais, elaborar diretrizes e também aplicar as sanções em casos de irregularidades. 
                            Porém, o Ministério Público e outras organizações continuam competentes para lidar com as questões que se 
                            relacionam aos direitos difusos dos cidadãos, sobretudo a partir da Emenda Constitucional que reconheceu a 
                            proteção de dados como direito fundamental.
                        </p>

                        <p>
                            Especificamente sobre a Autoridade Nacional de Proteção de Dados (ANPD), ela é um órgão da administração 
                            pública federal com autonomia técnica e decisória, vinculado à Presidência da República, responsável por 
                            fiscalizar e garantir o cumprimento da lei, bem como aplicar sanções administrativas em caso de descumprimento. 
                            A ANPD guiará a interpretação da Lei e regulamentará padrões e técnicas aplicáveis às questões de segurança da 
                            informação, interoperabilidade e processos de anonimização, além de poder requisitar informações sobre 
                            tratamentos de dados pessoais para agentes de tratamento, editar normas e orientações.
                        </p>

                        <div id="DADOS-PESSOAIS-SEGUNDO-LGPD" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que são dados pessoais, segundo a LGPD?</h2>
                        <br>

                        <p>
                            De acordo com a LGPD, em seu Art. 5º, inciso I, um dado pessoal é informação relacionada à pessoa natural 
                            identificada ou identificável. Exemplos: número do CPF, data de nascimento, endereço residencial e e-mail.
                        </p>
                        <p>
                            Além disso, há o conceito de dados pessoais sensíveis, qual seja, qualquer dado pessoal sobre origem 
                            racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter 
                            religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, 
                            quando vinculado a uma pessoa natural.
                        </p>

                        <div id="CASOS-LGPD-APLICA" style="visibility:hidden">#</div>
                        <br>
                        <h2> Em quais casos a LGPD se aplica?</h2>
                        <br>

                        <p>
                            Segundo o Art. 3º da Lei Geral de Proteção de Dados, a lei se aplica a qualquer operação de tratamento 
                            realizada por pessoa natural ou por pessoa jurídica de direito público ou privado, independentemente do 
                            meio, do país de sua sede ou do país onde estejam localizados os dados, que tenham sido coletados dentro 
                            do território brasileiro ou que tenha como objetivo oferecer bens ou serviços a pessoas localizadas no 
                            Brasil. Não é verdade que a LGPD se aplica somente ao ambiente online. Até aquele arquivo de aço ou 
                            ficha cadastral preenchida à caneta tem que observar a LGPD.
                        </p>
                        <p>
                            Por fim, é válido mencionar que as atividades realizadas com Inteligência Artificial, que utilizam 
                            dados pessoais, devem estar de acordo com a LGPD, respeitando esse marco legal.
                        </p>
                        
                        <div id="CASOS-LGPD-NAO-APLICA" style="visibility:hidden">#</div>
                        <br>
                        <h2> Quando a LGPD não se aplica?</h2>
                        <br>

                        <p>
                            A Lei Geral de Proteção de Dados (LGPD), segundo o seu Art. 4º, não se aplica nos casos em que o 
                            tratamento de dados pessoais for feito por uma pessoa física, para fins particulares; não comerciais 
                            ou realizados para fins exclusivamente jornalísticos, artísticos e acadêmicos. Além disso, não se 
                            aplica também quando o Poder Público tratar dados no caso de segurança pública, defesa nacional, 
                            segurança do Estado e atividades de investigação e repressão de infrações penais.
                        </p>

                        <div id="O-QUE-E-TRATAMENTO-DE-DADOS" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que pode ser entendido como tratamento de dados?</h2>
                        <br>

                        <p>
                            O tratamento de dados é um conceito abrangente, que inclui qualquer atividade que utilize uma 
                            informação pessoal na execução da sua operação. Dentre os processos mais comuns estão a coleta, 
                            a reprodução, o acesso, a produção, o armazenamento, a distribuição de dados pessoais, dentre outros. 
                            No âmbito da Lei Geral de Proteção de Dados (LGPD), o tratamento dos dados pessoais pode ser realizado 
                            por dois agentes de tratamento: o controlador, a quem competem as decisões referentes ao tratamento 
                            dos dados pessoais; e o operador, que realiza o tratamento de dados pessoais em nome do controlador 
                            (Art. 5º, incisos VI e VII).
                        </p>
                        <p>
                            Especificamente sobre dados pessoais sensíveis, segundo o Art. 14 da Lei Geral de Proteção de Dados 
                            (LGPD), o tratamento de dados sensíveis somente poderá ocorrer com o consentimento do titular ou seu 
                            responsável legal, de forma destacada e para finalidades específicas. Sem fornecimento de consentimento 
                            do titular, o tratamento de dados sensíveis é permitido quando for indispensável para: cumprimento de 
                            obrigação legal ou regulatória pelo controlador; pela administração pública, de políticas públicas 
                            previstas em leis ou regulamentos; estudos por órgão de pesquisa; exercício regular de direitos, 
                            inclusive em contrato e em processo judicial, administrativo e arbitral; proteção da vida; tutela 
                            da saúde; garantia da prevenção à fraude e à segurança do titular.
                        </p>

                        <div id="AGENTES-TRATAMENTO-DADOS" style="visibility:hidden">#</div>
                        <br>
                        <h2> Quem são os agentes de tratamento de dados?</h2>
                        <br>

                        <p>
                            São agentes de tratamento o controlador e o operador de dados pessoais, que podem ser pessoas naturais ou 
                            jurídicas (de direito público ou privado).  Segundo a Lei Geral de Proteção de Dados (LGPD), controlador 
                            é quem toma as decisões referentes ao tratamento dos dados pessoais, segundo o Art. 5º, incisos VI. Na 
                            Administração Pública, o controlador será a pessoa jurídica do órgão ou entidade pública sujeita à Lei, 
                            representada pela autoridade responsável por tomar as decisões acerca do tratamento de tais dados. O 
                            teste é relativamente simples: se o órgão ou a organização toma as decisões sobre o tratamento, então, 
                            é provavelmente controlador.
                        </p>
                        <p>
                            No âmbito da Lei Geral de Proteção de Dados (LGPD), operador é quem realiza o tratamento de dados pessoais 
                            em nome do controlador, segundo o Art. 5º, incisos VII. Estão incluídas as pessoas jurídicas diversas daquela 
                            representada pelo controlador. O teste é relativamente simples: se o órgão ou a organização executa as decisões 
                            sobre o tratamento por ordem de terceiros, então, é provavelmente operador.
                        </p>
                        <p>
                            Logo, de acordo com a Autoridade Nacional de Proteção de Dados (ANPD), a definição dos agentes varia de 
                            acordo com seu caráter institucional. Em outras palavras, não podem ser classificados como agentes os indivíduos 
                            subordinados, tais como funcionários, servidores públicos ou as equipes de trabalho de uma organização, já que 
                            atuam sob o poder diretivo do agente de tratamento
                        </p>
                        <p>
                            Quando falamos de pessoas jurídicas, inclusive de direito público, a organização é o agente de tratamento no 
                            âmbito da LGPD, mesmo que as regras sejam executadas por seus representantes, funcionários ou prepostos. 
                            Lembrando sempre que o operador deve ser uma entidade distinta do controlador, ou seja, que não atua como 
                            profissional subordinado a ele ou como membro de seus órgãos. Por isso, funcionários que atuam em 
                            subordinação às decisões do controlador não serão operadores, mas meros funcionários.
                        </p>

                        <div id="DADO-ANONIMO-ANONIMIZADO" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que é um dado anônimo ou anonimizado?</h2>
                        <br>
                        
                        
                        <p>
                            Dado anônimo ou anonimizado é definido pela LGPD, em seu Art. 5º, inciso III, como qualquer dado 
                            pessoal que, submetido a meios técnicos razoáveis, passe a não mais identificar ou a proporcionar a 
                            identificação de uma pessoa natural, direta ou indiretamente, de maneira definitiva e irreversível. 
                            A determinação do que seja razoável deve levar em consideração fatores objetivos, tais como custo e 
                            tempo necessários para reverter o processo de anonimização, de acordo com as tecnologias disponíveis, 
                            e a utilização exclusiva de meios próprios (Art. 12, § 1º da LGPD). Os dados anonimizados não serão 
                            considerados dados pessoais, segundo o Art. 12, salvo quando o processo de anonimização ao qual foram 
                            submetidos for revertido, utilizando exclusivamente meios próprios, ou quando, com esforços razoáveis, 
                            puder ser revertido.
                        </p>

                        <div id="PRINCIPIOS-LGPD-TRATAMENTO-DADOS" style="visibility:hidden">#</div>
                        <br>
                        <h2> Quais princípios descritos na LGPD devem orientar o tratamento de dados?</h2>
                        <br>

                        <p>
                            A Lei Geral de Proteção de Dados (LGPD) traz alguns princípios que devem ser respeitados no tratamento 
                            de dados pessoais, em seu Art. 6º: finalidade, adequação, necessidade, livre acesso, qualidade dos dados, 
                            transparência, segurança, prevenção, não discriminação e responsabilização e prestação de contas.
                        </p>

                        <div id="CONSENTIMENTO-REGRAS" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que é o consentimento? Quais suas regras?</h2>
                        <br>

                        <p>
                            O consentimento é uma das bases legais para tratamento de dados pessoais na LGPD. Segundo a LGPD, em seu 
                            Art. 5º, inciso XII, consentimento é a manifestação livre, informada e inequívoca pela qual o titular 
                            concorda com o tratamento de seus dados pessoais para uma finalidade determinada. O consentimento e sua 
                            finalidade devem estar claros e destacados.
                        </p>
                        <p>
                            A Lei Geral de Proteção de Dados (LGPD) prevê o termo de consentimento pelo titular como uma exigência 
                            para o tratamento de dados pessoais, em seu Art. 7°. O termo de consentimento, como consta no Art. 8°, 
                            pode ser adquirido por escrito ou por outro meio que demonstre a manifestação de vontade do titular, e 
                            precisa apresentar de maneira clara e adequada, segundo o Art. 9°: a finalidade do tratamento; a forma 
                            e duração do tratamento, observados os segredos comercial e industrial; a identificação e informações 
                            de contato do controlador; informações acerca do uso compartilhado de dados pelo controlador e a 
                            finalidade; as responsabilidades dos agentes que realizarão o tratamento; e a menção explicita dos 
                            direitos do titular (contidos no Art. 18 da LGPD). Ainda segundo o Art. 8°, o titular dos dados 
                            poderá, a qualquer momento, revogar seu consentimento, bem como qualquer alteração na finalidade 
                            de uso dos dados pessoais é necessário informar o titular sobre este novo intuito, além de atualizar 
                            o consentimento do titular.
                        </p>
                        <p>
                            Por fim, a LGPD estabelece, em seu Art. 14, que o tratamento de dados pessoais de crianças e 
                            adolescentes deverá ser realizado em seu melhor interesse. Para tratamento de dados de crianças 
                            até 12 anos de idade, é necessário consentimento específico e em destaque, dado por, pelo menos, 
                            um dos pais ou pelo responsável legal. Os dados de crianças e adolescentes poderão ser coletados 
                            sem o consentimento, quando for necessário para sua proteção ou para contatar os pais ou o 
                            responsável legal, sendo utilizados uma única vez e sem armazenamento. Sem consentimento, 
                            em nenhum caso, poderão ser repassados a terceiros.
                        </p>

                        <div id="SANCOES-TRATAMENTO-IRREGULAR" style="visibility:hidden">#</div>
                        <br>
                        <h2> Quem é responsabilizado no caso de tratamento de dados pessoais de forma irregular? 
                            Há sanções aplicáveis?</h2>
                        <br>

                        <p>
                            Caberá a Autoridade Nacional de Proteção de Dados (ANPD) fiscalizar e garantir o cumprimento da 
                            LGPD. Se o tratamento de dados não acontecer como previsto na lei, os controladores serão 
                            responsabilizados. Caso o operador não tenha cumprido ordens passadas pelo controlador ou 
                            falhe na segurança dos dados, este também pode ser penalizado solidariamente. 
                        </p>
                        <p>
                            A LGPD prevê sanções para o seu descumprimento. A penalidade imposta irá depender da avaliação 
                            da Autoridade Nacional de Proteção de Dados (ANPD), podendo ser, segundo o Art. 52 da LGPD, uma 
                            advertência, a determinação da publicação e divulgação da infração cometida, o bloqueio ou 
                            eliminação dos dados que sofreram violações e também multas simples e/ou diárias.
                        </p>
                        <p>
                            Recentemente, em 28 de outubro de 2021, foi aprovada a Resolução CD/ANPD nº 1 que regulamenta 
                            o Processo de Fiscalização e o Processo Administrativo Sancionador no âmbito da ANPD.
                        </p>

                        <div id="PODER-PUBLICO-SUJEITO-LGPD" style="visibility:hidden">#</div>
                        <br>
                        <h2> O poder público está sujeito à LGPD?</h2>
                        <br>
                        
                        <p>
                            Sim, os dados pessoais tratados pelo Poder Público também estarão sujeitos à LGPD. Porém, o 
                            Poder Público, pode tratar dados pessoais sem pedir o consentimento do titular sempre que for 
                            necessário para a execução de políticas públicas, segundo o Art. 7°, inciso III. O Poder 
                            Público também poderá tratar dados pessoais, fora do escopo da lei, no caso de segurança 
                            pública, defesa nacional, segurança do Estado e atividades de investigação e repressão de 
                            infrações penais, que serão tratados de acordo com legislação específica, que contenha 
                            medidas proporcionais e necessárias para que o tratamento de dados pessoais atenda ao 
                            interesse público, segundo o Art. 4°, inciso III. Para a criação das normas específicas 
                            para esses casos, a Autoridade Nacional de Proteção de Dados Pessoais (ANPD) emitirá 
                            recomendações e opiniões técnicas.
                        </p>

                        <div id="MUNICIPIO-COMPETENTE-LGPD" style="visibility:hidden">#</div>
                        <br>
                        <h2> O município é competente para tratar sobre Proteção de Dados?</h2>
                        <br>

                        <p>
                            Não. A recém aprovada PEC 17/2019 torna a proteção de dados pessoais, inclusive nos meios 
                            digitais, um direito fundamental expressamente previsto na Constituição Federal e, além 
                            disso, remete privativamente à União a função de legislar sobre o tema. Desta forma, 
                            atualmente, cabe à União as competências de organizar e fiscalizar o tratamento dos 
                            dados pessoais dos indivíduos, oferecendo agora “abrigo constitucional” ao funcionamento 
                            da Autoridade Nacional de Proteção de Dados (ANPD), prevista na Lei Geral de Proteção de 
                            Dados Pessoais (LGPD – Lei 13.709, de 2018)
                        </p>
                            

                        <div id="USO-COMPARTILHADO-ADM-PUBLICA" style="visibility:hidden">#</div>
                        <br>
                        <h2> É possível o uso compartilhado de dados entre órgãos da Administração Pública?</h2>
                        <br>

                        <p>
                            A LGPD permite o uso compartilhado de dados pessoais entre entes do poder público, desde 
                            que atenda a finalidades específicas de execução de políticas públicas e a atribuição legal 
                            desses órgãos, respeitados os princípios do art. 6º. O inciso III do art. 7º assegura, como 
                            uma de suas dez bases legais para o tratamento de dados, o tratamento e uso compartilhado pela 
                            Administração Pública de dados necessários à execução de políticas públicas previstas em leis, 
                            regulamentos ou ainda respaldadas em contratos, convênios ou instrumentos congêneres, nos 
                            termos do Cap. IV.
                        </p>

                        <div id="TRASNFERENCIA-DADOS-PUBLICO-PRIVADO" style="visibility:hidden">#</div>
                        <br>
                        <h2> O setor público pode transferir dados pessoais para o setor privado?</h2>
                        <br>

                        <p>
                            A Lei Geral de Proteção de Dados (LGPD), em seu Art. 26, prevê que o uso compartilhado de 
                            dados pessoais pelo Poder Público deve atender a finalidades específicas de execução de 
                            políticas públicas e atribuição legal pelos órgãos e pelas entidades públicas, respeitados 
                            os princípios de proteção de dados pessoais elencados no art. 6º da Lei. É vedado ao Poder 
                            Público transferir a entidades privadas dados pessoais constantes de bases de dados a que 
                            tenha acesso, exceto: em casos de execução descentralizada de atividade pública que exija a 
                            transferência, exclusivamente para esse fim específico e determinado, observado o disposto 
                            na Lei nº 12.527/11 (Lei de Acesso à Informação); em casos em que os dados forem acessíveis 
                            publicamente; quando houver previsão legal ou a transferência for respaldada em contratos, 
                            convênios ou instrumentos congêneres; para prevenção de fraudes e irregularidades, ou 
                            proteger e resguardar a segurança e a integridade do titular dos dados.
                        </p>

                        <div id="INCIDENTE-SEGURANCA" style="visibility:hidden">#</div>
                        <br>
                        <h2>O que fazer e a quem informar no caso de um incidente de segurança?</h2>
                        <br>

                        <p>
                            A Lei Geral de Proteção de Dados determina, em seu Art. 48, que o controlador deverá 
                            comunicar tanto ao titular quanto à Autoridade Nacional de Proteção de Dados Pessoais 
                            (ANPD) sobre a ocorrência de qualquer incidente de segurança que possa causar risco 
                            ou dano ao titular.
                        </p>

                        <div id="IMPORTANCIA-SEGURANCA-DIGITAL" style="visibility:hidden">#</div>
                        <br>
                        <h2>Qual a importância da segurança digital e como me proteger?</h2>
                        <br>

                        <p>
                            A proteção contra as ameaças, as vulnerabilidades e os riscos digitais, segundo estudo 
                            do Instituto Igarapé, devem levar em consideração, além das infraestruturas e sistemas 
                            de comunicação e informação com as redes e os dispositivos neles conectados (como por 
                            exemplo computadores e celulares), os processos e as pessoas. Essa integração inclui o 
                            indivíduo como parte central do desenho e implementação de estratégias de mitigação dos 
                            riscos, sendo fundamental, portanto, para a segurança digital. Quais os principais 
                            riscos de segurança digital? Quais os riscos mais frequentes no setor público 
                            brasileiro? Como mitigar tais riscos?
                        </p>
                        <p>
                            Existe um conjunto amplo de riscos à proteção e à segurança digital. Segundo o 
                            Instituto Igarapé, eles estão associados a: 
                            <ol>
                                <li>ausência ou inadequação de marcos regulatórios, </li>
                                <li>ausência de protocolos de segurança, </li>
                                <li>ocorrência de cibercrimes, </li>
                                <li>desinformação e manipulação,</li>
                                <li>ameaça à infraestrutura crítica,</li>
                                <li>acesso indevido,</li>
                                <li>ameaças ambientais,</li>
                                <li>ameaças ao direito de propriedade imaterial,</li>
                                <li>ameaças aos direitos humanos, e</li>
                                <li>falta de capacitação</li>
                            </ol>
                            
                        </p>
                        <p>
                            Segundo o referido levantamento do Instituto Igarapé, os três maiores riscos digitais 
                            encontrados nas experiências do setor público no Brasil se referem à: 
                            i. cibercrimes, ii. ameaça à infraestrutura crítica e iii. falta de capacitação. 
                            
                            Isso não exclui, é claro, a necessidade de se realizar um mapeamento amplo dos riscos à 
                            proteção e à segurança digital que levem também em conta as demais ameaças e 
                            vulnerabilidades existentes na realidade em que você ou sua instituição está inserido. 
                            Tendo em vista os três maiores riscos digitais encontrados nas experiências do setor 
                            público no Brasil, o Instituto Igarapé orienta que o aprimoramento da prevenção e 
                            combate aos crimes cibernéticos, o aprimoramento da proteção de infraestruturas críticas, 
                            bem como o amplo esforço de capacitação multissetorial são ações importantes para a 
                            mitigação dos riscos.
                        </p>

                        <div id="CIBERCRIME" style="visibility:hidden">#</div>
                        <br>
                        <h2>O que é cibercrime?</h2>
                        <br>
                        

                        <p>
                            Cibercrimes ou crimes cibernéticos são atos criminosos praticados com o uso de um ou mais 
                            computadores, que podem violar direitos de personalidade - como crimes contra a honra e 
                            discriminação - representar a prática de pedofilia e exploração infantil ou realizar 
                            roubo de credenciais, assim como o acesso indevido a outros tipos de dados.A ausência 
                            ou inadequação às regras jurídicas trazem riscos à segurança digital?
                        </p>
                        <p>
                            A ausência de marcos legais adequados para a proteção de sistemas, infraestruturas e 
                            indivíduos, bem como a existência de leis que possam prejudicar a proteção de direitos, 
                            dificultam a padronização de processos e coloca incerteza ao ambiente legal.É preciso 
                            desenvolver protocolos de proteção e segurança digital?
                        </p>
                        <p>
                            Um conjunto de protocolos deve ser levado em consideração para tentar mitigar os riscos 
                            à segurança digital. Porém, a ausência de protocolos de compartilhamento de informações, 
                            de responsabilização integral sobre processos de integração (muitas vezes os protocolos de 
                            responsabilização se concentram apenas em componentes individuais dos processos ou em 
                            serviços independentes) apresentam grandes vulnerabilidades. É necessário também se 
                            preocupar com a ausência de planos de resposta aos incidentes que levem em consideração 
                            os danos diretos e indiretos que podem afetar a integridade física, psicológica e 
                            patrimonial de indivíduos.
                        </p>

                        <div id="INFRAESTRUTURA-CRITICA" style="visibility:hidden">#</div>
                        <br>
                        <h2>O que é infraestrutura crítica?</h2>
                        <br>

                        <p>
                            A infraestrutura crítica reúne os ativos e serviços que são considerados essenciais para o 
                            funcionamento de uma tecnologia. Suas principais ameaças envolvem desde quedas de 
                            fornecimento de energia ou manutenção inadequada, que podem comprometer servidores e 
                            outros componentes, até falhas no controle de temperatura ou de umidade. Falhas no 
                            controle de descarte de material também oferecem risco, bem como a falta de pessoal 
                            capacitado. 
                        </p>


                        <div id="ACESSOS-INDEVIDOS" style="visibility:hidden">#</div>
                        <br>
                        <h2>Como ocorrem os acessos indevidos aos sistemas de informação?</h2>
                        <br>


                        <p>
                            Acesso indevido aos sistemas de informação podem ser obtidos por meio de roubo de 
                            credenciais ou engenharia social, técnica empregada por criminosos virtuais para induzir 
                            usuários desavisados a enviar dados confidenciais, infectar seus computadores com malware 
                            ou abrir links para sites infectados, valendo-se principalmente da falta de conhecimento 
                            do usuário. O acesso indevido pode prejudicar os processos de interação entre os diferentes 
                            componentes de um determinado sistema ou organização.
                        </p>

                        <div id="AMEACA-AMBIENTAL" style="visibility:hidden">#</div>
                        <br>
                        <h2>Quando falamos de segurança digital, o que é a ameaça ambiental?</h2>
                        <br>


                        <p>
                            As ameaças ambientais que colocam em risco à segurança digital reúnem fenômenos naturais, 
                            que afetam o ambiente e podem afetar a disponibilidade e integridade dos sistemas, tais 
                            como: condições climáticas desfavoráveis, alagamentos, enchentes, tempestades e raios e 
                            interferências eletromagnéticas.
                        </p>

                        <div id="AMEACA-DIREITOS-HUMANOS" style="visibility:hidden">#</div>
                        <br>
                        <h2>O que é considerado ameaça aos direitos humanos?</h2>
                        <br>

                        <p>
                            São ações que podem prejudicar o exercício de direitos humanos e fundamentais (como 
                            liberdade de expressão e de imprensa, privacidade e proteção de dados) através dos 
                            meios tecnológicos. Podem ser perpetrados por agentes de Estado ou pelo setor privado, 
                            como é na prática de coleta massiva de dados de forma indevida.
                        </p>

                        <div id="FALTA-CAPACIDADE-SEGURANCA" style="visibility:hidden">#</div>
                        <br>
                        <h2>A falta de capacidade técnica dos funcionários pode comprometer a segurança digital?</h2>
                        <br>


                        <p>
                            A ausência de conhecimento de práticas básicas de proteção de dados em sistemas de 
                            informática traz riscos à sociedade, em geral. Quando nos referimos às ações do poder 
                            público, a ausência de capacitação técnica do pessoal encarregado por determinada 
                            infraestrutura coloca em risco não somente a estratégia de segurança digital de uma 
                            organização, como também de toda a população.
                        </p>
                        <p>
                            A falta de clareza sobre as responsabilidades e competências torna vulnerável a proteção 
                            de sistemas de infraestruturas e bancos de dados. Isso ocorre, sobretudo, por conta de 
                            processos não planejados ou mal planejados - por serem desenhados de forma muito 
                            simplificada ou excessivamente complexa. A ausência de políticas e protocolos para o 
                            tratamento de dados e proteção de sistemas também expõem às vulnerabilidades, bem como 
                            a falta de integração institucional e ausência de capacitação sobre novas tecnologias 
                            de informação e comunicação. 
                        </p>

                        <div id="DADOS-AMEACAS-VULNERABILIDADES" style="visibility:hidden">#</div>
                        <br>
                        <h2>Quando nos referimos aos dados, quais as maiores ameaças e vulnerabilidades?</h2>
                        <br>


                        <p>
                            As principais ameaças e vulnerabilidades que colocam em risco a segurança de dados vão 
                            desde o vazamento de dados e o roubo de credenciais, até a ausência de marcos regulatórios 
                            e de protocolos de compartilhamento de informações. Ransomwares e outros softwares 
                            maliciosos também colocam em risco a segurança digital e sua ocorrência se relaciona 
                            diretamente com a falta de conhecimento de práticas básicas de proteção de dados em 
                            sistemas de informática.
                        </p>

                        <div id="ROUBO-CRECENCIAL" style="visibility:hidden">#</div>
                        <br>
                        <h2>O que é um roubo de credencial?</h2>
                        <br>


                        <p>
                            É a obtenção não autorizada de credenciais de segurança que concedem acesso indevido a 
                            dados, incluindo identificação, autenticação, senhas e perfis de acesso.
                        </p>

                        <div id="VAZAMENTO-DADOS" style="visibility:hidden">#</div>
                        <br>
                        <h2>O que é um vazamento de dados?</h2>
                        <br>

                        <p>
                            É a transmissão não autorizada de dados de uma organização para destino ou recipiente 
                            externo, realizado de modo eletrônico ou físico, acidental ou intencional, que colocam 
                            em risco o serviço público e toda a sociedade. A Lei Geral de Proteção de Dados 
                            determina, em seu Art. 48, que o controlador deverá comunicar tanto ao titular quanto 
                            à Autoridade Nacional de Proteção de Dados Pessoais (ANPD) sobre a ocorrência de 
                            qualquer incidente de segurança que possa causar risco ou dano ao titular.
                        </p>

                        <div id="PROTOCOLOS-INFORMACOES" style="visibility:hidden">#</div>
                        <br>
                        <h2>O que são protocolos de compartilhamento de informações?</h2>
                        <br>

                        <p>
                            Protocolos de compartilhamento de informações são essenciais para a segurança digital. 
                            São parâmetros internos e externos que definem como dados podem ser compartilhados e/ou 
                            transferidos entre diferentes departamentos de uma organização e/ou entre diferentes organizações.
                        </p>

                        <div id="RANSONWARE" style="visibility:hidden">#</div>
                        <br>
                        <h2>O que é ransomware?</h2>
                        <br>

                        <p>
                            Age como um sequestro de informações, indisponibilizando o acesso de dados por meio 
                            de implementação de código malicioso até que um valor seja pago pelo resgate.
                        </p>


                        <div id="CAPACITACAO-SEGURANCA-DIGITAL" style="visibility:hidden">#</div>
                        <br>
                        <h2>Como melhorar a capacitação do pessoal em termos de segurança digital?</h2>
                        <br>

                        <p>
                            Segundo o Instituto Igarapé, as principais estratégias para mitigar os riscos atrelados 
                            à ausência de capacitação envolvem a criação de trilhas de capacitação para os servidores 
                            públicos e funcionários, com medição e mensuração de eficiência e eficácia de resultados, 
                            o desenvolvimento de um repositório de pontos de contato de especialistas em segurança 
                            digital alocados em órgãos públicos, bem como ações de conscientização e sensibilização 
                            da sociedade sobre a segurança digital. No âmbito da formação, é possível destacar a 
                            ampliação de noções básicas de segurança digital em todos os níveis de ensino e a 
                            priorização de temas de segurança digital nos cursos técnicos, nível superior e pós-graduação. 
                            Também é bastante útil a realização de simulações e cenários de ataques, tanto como instrumentos 
                            de capacitação para estudantes e profissionais, bem como para a integração de setores.
                        </p>

                        <div id="PROTEGER-EQUIPES-CRIMES-CIBERNETICOS" style="visibility:hidden">#</div>
                        <br>
                        <h2>Como proteger as equipes contra crimes cibernéticos?</h2>
                        <br>

                        <p>
                            Segundo o Instituto Igarapé, as principais estratégias para mitigar os riscos de crimes 
                            cibernéticos (ou cibercrimes) envolvem a criação de rotinas de fiscalização e manutenção 
                            dos sistemas utilizados por entes públicos e privados, o desenvolvimento de ferramentas 
                            públicas e abertas para detecção, filtragem e prevenção de ataques, assim como incentivo 
                            ao desenvolvimento e ao uso de sistemas que sejam seguros por design. A capacitação da 
                            equipe também corrobora para minimizar as vulnerabilidades, principalmente através da 
                            conscientização a respeito de ferramentas e mecanismos básicos de proteção, disponíveis 
                            a todos, como o uso de dispositivos e plataformas com criptografia de ponta a ponta, 
                            VPNs, múltiplos fatores de autenticação e criação de senhas fortes.
                        </p>

                        <div id="PROTEGER-EQUIPES-ACESSOS-INDEVIDOS" style="visibility:hidden">#</div>
                        <br>
                        <h2>Como proteger a equipe contra acessos indevidos?</h2>
                        <br>

                        <p>
                            Segundo o Instituto Igarapé, as principais estratégias para mitigar os riscos de acessos 
                            indevidos envolvem principalmente a conscientização a respeito de ferramentas e mecanismos 
                            básicos de proteção, disponíveis a todos, como o uso de dispositivos e plataformas com 
                            criptografia de ponta a ponta, VPNs, múltiplos fatores de autenticação e criação de senhas 
                            fortes. O incentivo ao desenvolvimento e uso de sistemas que sejam seguros por design, a 
                            criação de ferramentas abertas e públicas para o usuário individual, bem como o incentivo à 
                            publicação e à divulgação de relatórios ou outras medidas de transparência por parte de entes 
                            públicos e privados, relatando os acessos indevidos aos seus sistemas também corroboram para 
                            um ambiente digital mais seguro.
                        </p>


                        <div id="PROTEGER-INFRAESTRUTURA-CRITICA" style="visibility:hidden">#</div>
                        <br>
                        <h2>Como proteger a infraestrutura crítica?</h2>
                        <br>

                        <p>
                            Segundo o Instituto Igarapé, as principais estratégias para mitigar as ameaças à estrutura 
                            crítica envolvem o estabelecimento de políticas rigorosas de acesso aos sistemas ligados à 
                            infraestrutura crítica, com perfis de segurança, controle e registro de usuários, além do 
                            incentivo às políticas de manutenção mensal de hardwares essenciais, bem como a criação de 
                            uma cultura de realização de auditorias externas regulares. Somente com manutenção contínua e 
                            mapeamento detalhado das vulnerabilidades é possível diminuir os riscos.
                        </p>



                        <br>
                        Saiba mais<br>
                        [1]  <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm.">
                            Lei Geral de Proteção de Dados (LGPD), lei nº 13.709/18
                            </a>. <br>
                        [2] <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">
                            http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
                            </a>. <br>
                        [3] <a href="https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/2021.05.27GuiaAgentesdeTratamento_Final.pdf">
                            https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/2021.05.27GuiaAgentesdeTratamento_Final.pdf
                            </a>. <br>
                        [4] <a href="https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-1-de-28-de-outubro-de-2021-355817513">
                            https://www.in.gov.br/en/web/dou/-/resolucao-cd/anpd-n-1-de-28-de-outubro-de-2021-355817513
                            </a>. <br>
                        [5] <a href="https://igarape.org.br/wp-content/uploads/2021/04/Agenda-Seguranca-Digital.pdf">
                            https://igarape.org.br/wp-content/uploads/2021/04/Agenda-Seguranca-Digital.pdf
                            </a>. <br>
                        <br><br>
                        <div style="text-align: right;">
                        <router-link to="#TOP" @click.native="scrollTo('#TOP')">
                            Voltar ao índice
                        </router-link>
                        </div>

                    </div>

                </template>
            </Card>

            <br><br><br><br>

            <Card :title="'Propriedade Intelectual de IA'">
                
                <template v-slot:cardText>
                    <div class="black--text">

                        <br>

                        <div id="IA-PROTEGIDA-PROPRIEDADE-INTELECTUAL" style="visibility:hidden">#</div>
                        <br>
                        <h2>Como utilizar uma ferramenta de IA protegida por direitos de Propriedade Intelectual?</h2>
                        <br>

                        <p>
                            Em primeiro lugar, é necessário saber se o programa de computador ou sistema de Inteligência 
                            Artificial está protegido pelas normas de Propriedade Intelectual ou não, de acordo com a 
                            legislação brasileira. Há casos que criações dessa natureza estejam disponibilizadas, 
                            gratuitamente, para uso livre na Administração Pública, como acontece com os chamados 
                            softwares livres, que são boas alternativas. Por outro lado, se for alguma tecnologia 
                            "proprietária", é importante estar atento aos termos de uso, que podem prever um 
                            licenciamento específico e, muito provavelmente, pagamento para a sua utilização. 
                            Noutras palavras, se os criadores da tecnologia não tiverem liberado o seu uso, será 
                            preciso pedir para usar e, provavelmente, pagar uma quantia ao criador (ou titular) da 
                            inteligência artificial; é o que chamamos de licença. Porém, é essencial destacar que, 
                            mesmo com muitos detalhes obrigatórios para uso lícito da tecnologia protegida, em nenhuma 
                            hipótese é recomendável recorrer à pirataria ou ao plágio - comportamentos bastante 
                            arriscados, pois o autor pode intentar uma ação contra os usos ilegais de sua criação para 
                            impedi-los, e, na pior das hipóteses, pode solicitar indenização e até ser enquadrado como crime.
                        </p>

                        <div id="PROPRIEDADE-INTELECTUAL-OBSTACULOS-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2>A propriedade intelectual impede ou cria obstáculos para o desenvolvimento de IA?</h2>
                        <br>

                        <p>
                            Este ponto é muito delicado e alvo de muita discussão entre os estudiosos da matéria. A lei de direitos 
                            autorais do Brasil exige que o autor dê autorização para que uma criação seja utilizada. Quando esta 
                            criação for uma inteligência artificial, isso pode gerar limitações sobre a sua difusão. Todavia, 
                            também é necessário haver uma regulação sobre o assunto que permita segurança jurídica e confiança, 
                            de modo que o investimento nessas tecnologias seja assegurado – em outras palavras, que os criadores 
                            tenham reconhecimento e remuneração sobre os produtos de seu trabalho. Por isso, há recomendações de 
                            boas práticas a serem seguidas: inicialmente, para que haja equilíbrio, seria recomendável que o 
                            legislador adotasse definições neutras sobre inteligência artificial. Por mais que o Município não 
                            possa legislar sobre o tema, propriamente, é sempre útil ter o conhecimento sobre a matéria para sugerir 
                            eventuais melhorias no âmbito federal. Além do mais – e isto já é algo em que o gestor público municipal 
                            pode ter mais margem de manobra -, também é bom que se faça uma avaliação setorial das implicações da 
                            inteligência artificial para os direitos de propriedade intelectual, levando em consideração o grau de 
                            intervenção humana no sistema naquele caso concreto, os dados utilizados, se há ou não direitos inetelctuais 
                            protegidos envolvidos, etc. Se medidas como estas se concretizarem, a propriedade intelectual poderá ser 
                            não um entrave, mas um auxílio ao desenvolvimento dos sistemas.
                        </p>

                        <div id="PROPRIEDADE-INTELECTUAL-CAIXA-PRETA" style="visibility:hidden">#</div>
                        <br>
                        <h2>Como funciona a atribuição de direitos de Propriedade Intelectual quando a tecnologia de inteligência 
                            artificial é pouco explicável, considerada uma “caixa preta”?</h2>
                        <br>

                        <p>
                            Nosso direito de propriedade intelectual, especificamente no caso de direito autoral, exige que haja um 
                            autor para atribuição de autoria. Em outras palavras, a lei dispõe de respostas para os casos em que há 
                            vários os criadores de uma obra, mas não para o caso de não ser possível identificar quem a criou; e 
                            isso é um verdadeiro impasse. Isso porque, atualmente, a inteligência artificial tem a capacidade de 
                            “aprender a pensar” por si mesma – quando alimentada com certa quantidade e qualidade de dados, sendo, 
                            ainda, instruída no sentido daqueles dados conduzirem a um determinado resultado. Ela passa a percorrer 
                            este caminho sozinha e vai respondendo a demandas mais complexas com base nesse conhecimento previamente 
                            adquirido. É o que se chama de "machine learning" (aprendizado da máquina, em inglês). A distância em 
                            relação ao ser humano pode ser ainda maior se este aprendizado for se aprofundando em diversas camadas 
                            de dados e algoritmos que se condensam, o que recebe o nome de "deep learning" (aprendizado profundo; 
                            por isso usamos a palavra “aprofundando” anteriormente). Nesse contexto, pode ser difícil entender como 
                            a máquina chegou a um determinado resultado, o que é conhecido como o “efeito caixa-preta” (black-box), 
                            já que ninguém sabe ao certo o que está dentro, ou por detrás, do mecanismo. 
                            E, sendo assim, é muito difícil atribuir direitos de propriedade intelectual a quem estiver envolvido neste processo.
                        </p>

                        <div id="PROPRIEDADE-INTELECTUAL-IA-CONFLITANTES" style="visibility:hidden">#</div>
                        <br>
                        <h2>A propriedade intelectual e a IA são conflitantes?</h2>
                        <br>

                        <p>
                            A inteligência artificial e a propriedade intelectual podem se relacionar de múltiplas formas. Alguns destes pontos de encontro são colisões; outros, porém, são convergências. Um exemplo de conflito tem relação com a rastreabilidade do criador: o Parlamento Europeu aponta (no seu relatório sobre inteligência artificial e propriedade intelectual na União Europeia, de 2020), a depender do seu nível de complexidade, que seja difícil rastrear os direitos de propriedade intelectual. Isso acontece, por exemplo, quando não é possível identificar claramente o autor por detrás de tantos códigos e algoritmos, o que impediria, por sua vez, uma remuneração justa para o criador, que é algo previsto no sistema de propriedade intelectual. Por outro lado, há pontos em que essas duas áreas convivem em paz. Para citar apenas dois exemplos: i) a inteligência artificial pode ajudar a identificar e processar direitos de propriedade intelectual com muito maior rapidez do que os seres humanos fazem, o que poupa tempo e custos (recursos que devem ser particularmente otimizados na execução das tarefas cotidianas); ii) e há mesmo quem discuta, hoje em dia, se os próprios sistemas em si podem ser criadores/inventores, e, consequentemente, ter os direitos de propriedade intelectual atribuídos às máquinas.
                        </p>

                        <div id="BENEFICIOS-PI-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2>Quais os benefícios e utilidade em compreender os temas de PI e IA?</h2>
                        <br>

                        <p>
                            A utilidade de conhecer e compreender esses temas não é fundamental apenas para a cidade, mas para qualquer cidadão, em um mundo cada vez mais hiperconectado. Primeiro, porque o número de patentes concedidas a tecnologias relacionadas à inteligência artificial tem se multiplicado; depois, porque o progresso da inteligência artificial gera perguntas sobre como a inovação deve ser protegida e fomentada, e, com sua natureza industrial ou artística, surgem oportunidades de negócio e de expansão de atividades culturais, o que traz benefícios para o Município. Um exemplo que revela esse aspecto prático, cotidiano, é a proteção de conteúdos postados na internet, por exemplo, que sejam protegidos por direitos de propriedade intelectual. É o caso do ContentID – um sistema do YouTube responsável por analisar se os vídeos colocados no site têm conteúdo utilizado sem a permissão do criador, e, se for o caso, retirar o vídeo do ar automaticamente ou desmonetizar o canal. 
                        </p>
                        <p>
                            Além disso, a inteligência artificial também pode elaborar tarefas administrativas gerais ou repetitivas, auxiliando os servidores da Administração Pública, por exemplo. É o exemplo do Victor, uma inteligência artificial usada no Supremo Tribunal Federal, que, dentre outras tarefas, identifica recursos e os agrupa por similaridade – a ponto de já ter sido apelidado de “12º Ministro”. Logo, as aplicações de IA já são uma realidade prática e muitos países mais desenvolvidos têm investido fortemente em educar e inserir seus servidores públicos, assim como cidadãos em geral, nesse universo. 
                        </p>

                        <div id="DADOS-DOMINIO-PUBLICO-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2>Dados em domínio público podem ser usados pela IA protegida por Propriedade Intelectual?</h2>
                        <br>

                        <p>
                            “Domínio público” significa que uma obra não tem restrições de uso, de modo que não é preciso pedir autorização a ninguém para utilizar a informação nela contida. Dados que estão em obras caídas em domínio público são muito importantes para os sistemas de inteligência artificial. Isso porque um primeiro passo para a utilização de uma informação é, justamente, saber se ela é protegida por direitos de propriedade intelectual ou se, por outro lado, pertence ao domínio público. Além disso, porque, como a inteligência artificial precisa de dados para melhorar o seu funcionamento – mas que sejam de qualidade -, estes tipos de dados podem ser muito úteis, já que os produtos gerados pela inteligência artificial não podem ser discriminatórios ou enviesados; e uma das formas mais eficazes de assegurar que isto ocorra é por meio da inserção do máximo possível de dados não pessoais para o treinamento e o aprendizado automático do sistema (atenção com a Lei Geral de Proteção de Dados - LGPD).
                        </p>

                        <div id="MUNICIPIO-COMPETENTE-PROPRIEDADE-INTELECTUAL" style="visibility:hidden">#</div>
                        <br>
                        <h2>O município é competente para tratar sobre Propriedade Intelectual?</h2>
                        <br>

                        <p>
                            Não. Inclusive, todas as leis sobre propriedade intelectual no Brasil são de competência da União. Isto tem relação com a repartição de competências legislativas, ou seja, aquilo sobre que cada ente federado (Municípios; Estados; e a União) pode legislar. Para ilustrar com outro caso de competência e de como ela pode se distribuir por entre cidade, Estado e o país, pensemos em alguns dos impostos que pagamos: ISS (Imposto Sobre Serviços) é de competência do Município, enquanto que o ICMS (Imposto sobre a Circulação de Mercadorias e Serviços) é de competência do Estado e, por fim, o Imposto de Renda é de competência da União. De volta à propriedade intelectual, podemos analisar que o fato de a competência ser reservada ao nível mais central, como é considerado o federal, tem a vantagem de permitir uma só legislação para todo o país a respeito do tema; com isso, torna-se mais fácil proteger de maneira uniforme os direitos de propriedade intelectual, o que colabora para a segurança jurídica e uma economia mais dinâmica, já que pode haver confiança, por parte dos cidadãos, sobre aquele tema.
                        </p>


                        <div id="MUNICIPIO-REGRAS-PI-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2>Como o município pode lidar com as regras de PI relacionadas à IA?</h2>
                        <br>

                        <p>
                            Considera-se que a União é o ente federado que deve ser responsável por instituir regras sobre a matéria, porque, desse modo, é possível evitar problemas como a fragmentação do mercado e a aplicação de normas que sejam muito diferentes de Estado para Estado, ou de Município para Município. Uma legislação bem-orientada para o futuro deve focar na segurança jurídica (que não existe quando há dúvidas sobre qual a norma a ser aplicável numa determinada situação, ou quando diversas delas competem entre si, o que poderia acontecer caso fossem várias as leis), pois ela estimula o desenvolvimento tecnológico, na medida em que fomenta mais confiança no cidadão. Mas atenção: isso não quer dizer que os Municípios não podem implementar projetos de IA, tampouco criar suas próprias estratégias de desenvolvimento tecnológico. Além disso, ainda é preciso considerar que vivemos num país muito grande e com muitas diferenças consoante a região em que nos encontremos, pelo que também será importante que a União não aja sozinha. É fundamental contar com os Estados e Municípios para tratar de situações que exigem mais pormenor, como é o caso dos relatórios de impacto. Estes relatórios são estudos que a União Europeia recomenda que sejam feitos para o desenvolvimento da inteligência artificial e da propriedade intelectual, e devem ser bem detalhados. E os entes federados com base geográfica mais delimitada, como os Municípios, poderão desempenhar melhor esta tarefa.
                        </p>

                        <div id="PROPRIEDADE-INTELECTUAL-BASES-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2>Há propriedade intelectual de bases de dados utilizada pela IA?</h2>
                        <br>

                        <p>
                            As bases ou bancos de dados são um conjunto de informações que se relacionam entre si. Esses dados podem ser brutos (sem tratamento adicional) ou enriquecidos (se houve um trabalho sobre eles, tornando-lhes, de certa maneira, "originais"). Por causa deste trabalho e da originalidade, apenas os segundos podem ser protegidos por direitos autorais. Esta proteção é de um tipo “sui generis”, isto é, especial, feito à medida deste regime, e é conferida pelos arts. 7º, inciso XII, e 87 da Lei de Direitos Autorais. Parece estranho, mas o titular do direito sobre a base de dados pode autorizar ou proibir sua reprodução, modificação, reprodução, dentre outras modalidades elencadas na lei. Este assunto é muito importante para o desenvolvimento de sistemas de inteligência artificial porque, como ela se alimenta de dados, se eles não forem protegidos, não é preciso observar nenhuma formalidade, mas, por outro lado, se se envolver o tratamento de bases de dados protegidas, será necessário respeitar os direitos de propriedade intelectual sobre elas. O assunto é tão importante que, na União Europeia, há uma diretiva (espécie de lei) sobre bases de dados; e, no seu âmbito, houve uma consulta pública para buscar adequá-la, da melhor forma possível, a esta nova realidade trazida pelas tecnologias de IA.
                        </p>

                        <div id="TITULAR-PI-CEDER-DIREITOS" style="visibility:hidden">#</div>
                        <br>
                        <h2>O titular de direitos de PI pode ceder seus direitos ao Município?</h2>
                        <br>

                        <p>
                            Se a inteligência artificial for veiculada por meio de um programa de computador, é possível invocar o direito autoral para proteger o software. Como o software é o veículo, é necessário que o sistema seja objeto de cessão ou licença. Mas atenção: o que pode ser objeto dessa transferência são os direitos patrimoniais, isto é, tudo aquilo que diz respeito à exploração econômica da criação intelectual. Os poucos direitos morais que são reconhecidos na Lei de Software, por outro lado, como o direito ao reconhecimento de que aquela pessoa foi a criadora, não podem ser alienados. Eles são, portanto, intransmissíveis. Nesse ponto, é essencial fazer a diferenciação entre software e hardware. A primeira vem definida no art. 1º da Lei de Software, e, uma vez que se verificar este conceito, pode-se concluir que ele é algo mais abstrato. O software é o sistema operacional do nosso celular – iOS, para iPhone, ou Android, para Samsung, Motorola, entre outros. Já o hardware, é como se fosse o corpo, a parte física, do computador. É o celular em si, ou um pen-drive, por exemplo; consiste em algo mais concreto.
                        </p>


                        <div id="SISTEMAS-IA-TIPOS-PI" style="visibility:hidden">#</div>
                        <br>
                        <h2>Os sistemas de IA podem ser protegidos por quais tipos de direitos dentro da Propriedade Intelectual?</h2>
                        <br>

                        <p>
                            O direito de propriedade intelectual divide-se em algumas classificações, sendo que elas ainda se subdividem entre si. Por isso, podemos dizer que temos “tipos” de direitos de propriedade intelectual no Brasil. A grande divisão é entre o direito autoral e o direito da propriedade industrial. O primeiro é ligado à propriedade literária, científica e artística da criação e com sua difusão cultural; o segundo, por outro lado, é mais ligado à propriedade industrial e à difusão tecnológica. Mas isso não quer dizer que um sistema, a par da legislação específica que lhe é aplicável (Lei nº 9.609/1998, sobre o software), só possa ser protegido enquanto obra (direito autoral) ou invenção (propriedade industrial); existe, por exemplo, no nosso país, a possibilidade de proteção por direitos conexos, que são como que vizinhos do direito autoral, mas com eles não se confundem. Um exemplo mais concreto de direito conexo seria aquele que assiste ao cantor, quanto interpreta uma música de outro compositor: quando Elis Regina cantava uma música escrita por Belchior, ela tinha direitos conexos sobre a música, e ele, direitos autorais. Mesmo assim, nos países europeus, os estudiosos da matéria já discutem se a proteção a conceder aos sistemas de inteligência artificial não deveria ser diferente, específica para tal. Há quem defenda que o sistema existente de direitos de propriedade intelectual está sendo desafiado pelas novas tecnologias e que é necessário que a lei adote novas respostas a elas.
                        </p>

                        <div id="USO-AUTORIZADO-PI" style="visibility:hidden">#</div>
                        <br>
                        <h2>O que é o uso autorizado de Propriedade Intelectual? Pode ser aplicada a um sistema de IA do município?</h2>
                        <br>

                        <p>
                            O uso autorizado é aquele em que a lei de direitos autorais dispensa, à pessoa que deseja utilizar aquela criação, o requisito de solicitar a permissão do criador ou titular dos direitos intelectuais. Existem exemplos de uso autorizado nas nossas leis, quando falam em exceções aos direitos de propriedade intelectual (é o caso da paródia, se obedecer aos requisitos legais, consoante nos informa o art. 47 da Lei de Direitos Autorais; e, na lei específica sobre software, também temos a exceção de citação parcial do programa para fins didáticos, desde que referenciada, nos termos do art. 6º, inciso II). Este uso livre pode ser interessante aos sistemas de inteligência artificial, na medida em que aquela informação estará disponível, facilitando o incremento da inteligência artificial. Como as máquinas precisam de dados, quanto mais informação disponível e de qualidade, melhor ela funcionará e mais precisa ela será. Mas nem tudo são vantagens quanto ao uso autorizado, afinal, o autor deixará de poder reivindicar alguns dos seus direitos relacionados à sua obra, tendo possíveis prejuízos.
                        </p>

                        <div id="LEIS-PI-BRASIL" style="visibility:hidden">#</div>
                        <br>
                        <h2>Quais as leis que tratam de Propriedade Intelectual no Brasil?</h2>
                        <br>

                        <p>
                            Nosso quadro legislativo já esteve compilado, mas, atualmente, não dispomos de um código de normas sobre propriedade intelectual - temos códigos para outros assuntos, como o civil, o penal e do trabalho. Nesse contexto, existem quatro leis importantes no universo brasileiro da propriedade intelectual que vale a pena ter em mente. São elas: a Lei nº 9.279/1996, sobre propriedade industrial; a Lei nº 9.456/1997, acerca de cultivares; a Lei nº 9.609/1998, que versa sobre software; e a Lei nº 9.610/1998, que se ocupa dos direitos autorais.
                        </p>
                        
                        <br>
                        mais informações sobre esse conteúdo:<br>
                        [1] <a href="http://www.planalto.gov.br/ccivil_03/leis/l9609.htm">
                            http://www.planalto.gov.br/ccivil_03/leis/l9609.htm
                        </a><br>
                        [2] <a href="http://www.planalto.gov.br/ccivil_03/leis/l9610.htm">
                            http://www.planalto.gov.br/ccivil_03/leis/l9610.htm
                        </a><br>
                        [3] <a href="http://www.planalto.gov.br/ccivil_03/leis/l9456.htm">
                            http://www.planalto.gov.br/ccivil_03/leis/l9456.htm
                        </a><br>
                        [4] <a href="http://www.planalto.gov.br/ccivil_03/leis/l9279.htm">
                            http://www.planalto.gov.br/ccivil_03/leis/l9279.htm
                        </a><br>
                        [5] <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm#art65">
                            http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm#art65
                        </a><br>
                        [6] <a href="https://igarape.org.br/wp-content/uploads/2021/04/Agenda-Seguranca-Digital.pdf">
                            https://igarape.org.br/wp-content/uploads/2021/04/Agenda-Seguranca-Digital.pdf
                        </a><br>
                        [7] <a href="https://support.google.com/youtube/answer/2797370?hl=pt-PT">
                            https://support.google.com/youtube/answer/2797370?hl=pt-PT
                        </a><br>
                        [8] <a href="https://op.europa.eu/en/publication-detail/-/publication/912bc3f8-7d67-11eb-9ac9-01aa75ed71a1/language-en/format-PDF/source-193597312">
                            https://op.europa.eu/en/publication-detail/-/publication/912bc3f8-7d67-11eb-9ac9-01aa75ed71a1/language-en/format-PDF/source-193597312
                        </a><br>
                        [9] <a href="https://www.europarl.europa.eu/doceo/document/A-9-2020-0176_PT.html">
                            https://www.europarl.europa.eu/doceo/document/A-9-2020-0176_PT.html
                        </a><br>
                        [10] <a href="https://www.jota.info/coberturas-especiais/inova-e-acao/stf-aposta-inteligencia-artificial-celeridade-processos-11122018">
                            https://www.jota.info/coberturas-especiais/inova-e-acao/stf-aposta-inteligencia-artificial-celeridade-processos-11122018
                        </a><br>
                        <br><br>
                        <div style="text-align: right;">
                        <router-link to="#TOP" @click.native="scrollTo('#TOP')">
                            Voltar ao índice
                        </router-link>
                        </div>

                        

                        
                    </div>
                </template>
            </Card>

            <br><br><br><br>


            <Card :title="'Ambiente regulatório e legislação aplicável à IA'">
                
                <template v-slot:cardText>
                    <div class="black--text">
                        <div id="LEGISLACAO-APLICAVEL" style="visibility:hidden">#</div>
                        <br>
                        <h2> Quais as legislações aplicáveis à IA?</h2>
                        <br>

                        <p>
                            Ainda não há uma legislação específica sobre IA no Brasil. Algumas propostas de lei tramitam, tanto no parlamento brasileiro, como no europeu, os quais buscam traçar regras e princípios éticos de como usar IA respeitando direitos fundamentais das pessoas. No cenário brasileiro, destaca-se o Projeto de Lei 21/2020, aprovado no final de setembro de 2021 na Câmara dos Deputados. 
                        </p>
                        <p>
                            Porém, como a IA é uma ferramenta tecnológica que utiliza dados, muitas vezes pessoais, e, em grande parte do tempo, é desenvolvida para serviços no ambiente digital, podem ser aplicáveis a Lei Geral de Proteção de Dados (LGPD) e o Marco Civil da Internet. Essas leis regulam, a partir de diferentes perspectivas (a primeira visa a garantia de proteção de dados pessoais e a segunda, a observância de princípios mais gerais relacionados ao ambiente digital), o desenvolvimento e o uso de ferramentas digitais tanto na Administração Pública quanto no setor privado. 
                        </p>
                        <p>
                            Recentemente, foi lançada, através da Portaria nº 4.617/2021, a Estratégia Brasileira de Inteligência Artificial (EBIA), que é um documento importante para se planejar os rumos da IA no Brasil. Apesar de a EBIA não ter seguido a linha de documentos internacionais mais robustos, tais como os relatórios e propostas de regulação da União Europeia, ainda é um importante marco legal.
                        </p>
                        <p>
                            Além disso, deve-se observar a legislação local e o regimento do órgão que aplicará a IA. Por fim, a depender do contexto de utilização, há outras legislações que podem ser aplicadas, como regras de direito do consumidor, resoluções do Banco Central e regras de propriedade intelectual. 
                        </p>

                        <div id="COMO-PROTEGER-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2> Como proteger a IA?</h2>
                        <br>

                        <p>
                            Para proteger a IA enquanto criação, é muito importante conhecer as leis de Propriedade Intelectual (PI), pois elas estabelecem regras sobre quem é o "dono" da aplicação de inteligência artificial, definindo quais usos estão permitidos ou quais mecanismos devemos acionar em caso de violação dos direitos intelectuais. Uma das três principais leis de PI, a Lei de Direitos Autorais (LDA), Lei 9.610/98, surgiu para proteger aquelas criações intelectuais que possuem uma finalidade meramente estética, tais como um livro, uma música ou um quadro. Mesmo tendo esse viés artístico, não se engane: a LDA pode ter a ver com IA. É que a Lei de Direitos Autorais também considera os programas de computador como criações intelectuais protegidas pelo Direito de Autor. Segundo a lei, os programas de computador assemelham-se aos textos literários e, portanto, passíveis de proteção pelo Direito Autoral. 
                        </p>
                        <p>
                            Por serem muito específicos, os programas de computador acabaram ganhando uma lei própria, a chamada Lei de Software (Lei 9.609/98), que estabeleceu regras e procedimentos para proteção desse tipo de tecnologia. Em resumo, ela define o que são programas de computador - um conceito tão abrangente que abarca diversas aplicações de IA - e permite um regime especial de cessão dos direitos intelectuais de softwares desenvolvidos sob encomenda. No âmbito do poder público, essa lei estabelece condições para que os direitos intelectuais de um programa de computador criado por um servidor público, sob a égide da sua função, sejam de titularidade do Poder Público.
                        </p>
                        <p>
                            Já a Lei de Propriedade Industrial (Lei 9.279/96) é destinada a proteger aquelas criações intelectuais que possuem finalidade comercial/industrial, tais como as invenções tecnológicas. Essa lei traz diversos mecanismos de proteção aos direitos intelectuais, tais como o segredo industrial, a concorrência desleal e as patentes. As patentes, vale destacar, são mecanismos destinados à proteção das invenções (ou modelos de utilidade), a qual se concede ao inventor uma exclusividade na exploração econômica daquela criação por um prazo determinado. Para que uma patente seja concedida, é fundamental que haja a junção de três elementos caracterizadores de uma invenção: novidade, atividade inventiva e aplicação industrial, de acordo com o art. 8º da lei.
                        </p>
                        <p>
                            Por conta desse viés monopolista, que impede o uso não autorizado de terceiros, é cada vez mais crescente os pedidos de patentes de invenções que utilizam soluções de IA, mas é necessário, além de preencher os requisitos legais, ficar atento às orientações do Instituto Nacional de Propriedade Industrial, órgão responsável pela concessão dessas patentes. Ao pedir a patente de uma invenção junto ao INPI, é necessário descrever e tornar pública todas as etapas e procedimentos que levaram àquela solução tecnológica. Noutras palavras, a patente, quando concedida, cria um monopólio temporal ao criador, mas, por outro lado, se torna obrigatório publicizar o passo a passo daquela invenção. Por isso, muitas organizações optam por proteger suas invenções através do segredo, em vez das citadas patentes, valendo-se, ainda, da concorrência desleal, toda vez que sentir ameaça à sua propriedade intelectual.
                        </p>

                        <div id="COMO-DESENVOLVER-IA-LEGAL" style="visibility:hidden">#</div>
                        <br>
                        <h2> Como desenvolver um projeto de IA em conformidade com a lei? </h2>
                        <br>


                        <p>
                            Deve-se observar a legislação vigente, sobretudo a LGPD e o Marco Civil da Internet para desenvolver ou usar qualquer iniciativa de IA. Criada em 2004, a Lei de Inovação é bastante importante para a implementação de projetos de IA, pois criou mecanismos para Administração Pública lidar com os riscos de tais projetos, os quais envolvem temas de grande complexidade. Nessa lei, há uma categoria legal em que se encaixa a IA, chamada “Encomenda tecnológica” (ETEC), que se constitui como quaisquer Tecnologias de Informação e Comunicação a serem contratadas por órgãos do Poder Público, “que envolvam risco tecnológico, para solução de problema técnico específico ou obtenção de produto, serviço ou processo inovador” (caput do artigo com redação dada pela Lei nº 13.243, de 11/1/2016). Em dezembro de 2020, o Tribunal de Contas da União lançou uma publicação intitulada “Etapa de Negociação em Contratações por Encomenda Tecnológica”. Esse texto consiste em instruções acerca desse tipo de encomenda, que reúne “referências legais e técnicas para a etapa de negociação com fornecedores” (TCU, 2020, p.1) desse tipo de produto, o que pode ajudar os gestores a lidar com todo o processo burocrático que a implementação desse tipo de inovação requer. 
                        </p>

                        <br>
                        Veja mais em:<br>
                        [1] <a href="https://portal.tcu.gov.br/data/files/8E/C1/63/06/3F3477100CE24177F18818A8/ETEC_negociacao_encomenda_tecnologica.pdf ">
                            https://portal.tcu.gov.br/data/files/8E/C1/63/06/3F3477100CE24177F18818A8/ETEC_negociacao_encomenda_tecnologica.pdf 
                        </a><br>
                        [2] <a href="https://www.in.gov.br/en/web/dou/-/portaria-gm-n-4.617-de-6-de-abril-de-2021-*-313212172">
                            https://www.in.gov.br/en/web/dou/-/portaria-gm-n-4.617-de-6-de-abril-de-2021-*-313212172
                        </a><br>
                        [3] <a href="http://www.planalto.gov.br/ccivil_03/leis/l9610.htm">
                            http://www.planalto.gov.br/ccivil_03/leis/l9610.htm
                        </a> <br>
                        [4] <a href="http://www.planalto.gov.br/ccivil_03/leis/l9609.htm">
                            http://www.planalto.gov.br/ccivil_03/leis/l9609.htm
                        </a> <br>
                        [5] <a href="http://www.planalto.gov.br/ccivil_03/leis/l9279.htm">
                            http://www.planalto.gov.br/ccivil_03/leis/l9279.htm
                        </a> <br>
                        [6] <a href="https://www.gov.br/inpi/pt-br/servicos/patentes/pagina_consultas-publicas/arquivos/copy_of_DiretrizesExame_InvencoesImplementadasComputadorversaoConsulta_07072020.pdf">
                            https://www.gov.br/inpi/pt-br/servicos/patentes/pagina_consultas-publicas/arquivos/copy_of_DiretrizesExame_InvencoesImplementadasComputadorversaoConsulta_07072020.pdf
                        </a> <br>
                        <br><br>
                        <div style="text-align: right;">
                        <router-link to="#TOP" @click.native="scrollTo('#TOP')">
                            Voltar ao índice
                        </router-link>
                        </div>


                    </div>
                </template>
            </Card>

            <br><br><br><br>

            <Card :title="'Boas práticas para implementação de IA'">
                
                <template v-slot:cardText>
                    <div class="black--text">

                        <div id="BOAS-PRATICAS-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que são boas práticas em IA?</h2>
                        <br>
                        
                        <p>
                            As boas-práticas são medidas relacionadas a princípios éticos que devem ser consideradas em todas as etapas do ciclo de vida da inteligência artificial aplicada na prática, do desenvolvimento até o efetivo uso. Primeiramente, é fundamental que haja a construção de uma cultura de dados e de atuação ética, responsável e confiável no âmbito da IA. Apesar de regras de privacidade e proteção de dados pessoais estarem positivadas na LGPD, é essencial que a proteção dos dados passe a fazer parte da rotina das organizações e das pessoas. Essa cultura não abrange apenas aspectos relacionados aos dados, mas principalmente respeito aos princípios éticos da IA.
                        </p>
                        <p>
                            Em um segundo momento, é essencial que haja mapeamento interno e definição estratégia. Para desenvolver uma cultura de IA ética, é essencial que haja o mapeamento interno, isto é, antes de aplicar mudanças e incluir a tecnologia de IA, é fundamental definir os objetivos almejados, estratégias, ferramentas e infraestrutura disponíveis, níveis de qualificação e possíveis problemas. Em outras palavras, as ferramentas de IA devem se direcionar a questões específicas e conjuntamente com apoio multissetorial. É fundamental que essa etapa ocorra de forma rotineira.
                        </p>
                        <p>
                            Além disso, é indispensável que haja uma equipe responsável pela implementação da IA, encarregado do planejamento, acompanhamento e execução. Essa equipe deve ser multissetorial e multidisciplinar, incluindo engenheiros, cientistas de dados, gerentes de produtos, analistas de marketing, encarregado de tratamento de dados pessoais e uma equipe diversa de juristas. Isso pode ser feito também pela contratação de empresas ou funcionários terceirizados. É essencial que essa equipe seja o mais diversa possível, especialmente no que tange à diversidade de raça e gênero. A equipe deve ser capacitada e treinada para melhor entender a tecnologia de IA que se visa implementar.
                        </p>
                        <p>
                            Além disso, outras boas práticas são: criação de políticas de privacidade e de dados abrangentes; análise de impacto e avaliação de riscos; auditoria de algoritmos; elaboração de relatórios. Em resumo, são medidas relacionadas aos princípios éticos, como transparência, segurança, prestação de contas, proteção de dados e explicabilidade, o que deve ser cumprido desde o início do planejamento da incorporação da IA até o seu efetivo uso.
                        </p>


                        <div id="ANALISE-IMPACTO-AVALIACAO-RISCOS" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que é uma análise de impacto e avaliação de riscos?</h2>
                        <br>

                        <p>
                            A IA pode ser muito benéfica para a sociedade, porém, é também capaz de produzir alguns danos, o que faz com que seja essencial que haja sempre processos de identificação de riscos e ações de mitigação, de forma preventiva. Nesse cenário, podemos falar de alguns níveis de risco que vão variar de acordo com as dificuldades para superá-los e a probabilidade de causarem danos. Cada tecnologia de IA é utilizada em um determinado contexto, o que faz com que haja níveis diferentes de risco de acordo com as circunstâncias do caso concreto, por exemplo, a partir da análise da categoria de dados utilizados, pessoas afetadas, impactos possíveis e campo de aplicação.
                        </p>

                        <p>
                            A partir da detecção do nível de risco (baixo, médio ou alto), é essencial que sejam implementadas medidas de mitigação, o que pode incluir, por exemplo, cumprimento de regras de proteção de dados e cibersegurança, atualização dos sistemas, auditorias contra vieses discriminatórios, técnicas de anonimização, entre outros.
                        </p>


                        <div id="AUDITORIA-ALGORITMOS" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que seria auditoria de algoritmos?</h2>
                        <br>

                        <p>
                            A auditoria de algoritmos é essencial para garantir maior transparência e prestação de contas, pois visa avaliar a consistência dos modelos de IA em relação aos princípios éticos e normas vigentes, com foco especial para revisão dos códigos e nos impactos dos resultados dos algoritmos. É um mecanismo de governança e compliance direcionado para a IA, de forma a avaliar o respeito a regras jurídicas e adequação das técnicas e exigências de cibersegurança. Essa auditoria deve ser realizada por uma entidade independente da organização que visa implementar a tecnologia. É essencial que a auditoria de algoritmos seja um processo constante dentro da organização.
                        </p>


                        <div id="EQUIPE-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2> Como deve ser a equipe responsável pela tecnologia de IA na organização?</h2>
                        <br>

                        <p>
                            É essencial que haja uma equipe responsável pela IA dentro da organização, que deve ser a mais diversa e capacitada possível. Por isso, deve haver profissionais de diferentes áreas, como engenheiros, cientistas de dados, especialistas em ética, marketing e publicidade, encarregado de proteção de dados e equipe jurídica ampla. A organização apenas se beneficia de um corpo profissional de formação diversa e experiências distintas, inclusive quanto à diversidade de raça e gênero. Isso torna possível que haja diferentes perspectivas, o que será positivo na identificação de riscos e aplicação de medidas de mitigação mais eficientes. Essa diversidade é também essencial para detectar e prevenir vieses de gênero, raça, idade, nacionalidade, entre outros, o que efetiva o princípio da transparência. 
                        </p>

                         <br>
                        Saiba mais em:<br>
                        [1] <a href="https://www.demarest.com.br/demarest-lanca-guia-de-boas-praticas-de-inteligencia-artificial">
                            https://www.demarest.com.br/demarest-lanca-guia-de-boas-praticas-de-inteligencia-artificial
                        </a><br>
                        <br><br>
                        <div style="text-align: right;">
                        <router-link to="#TOP" @click.native="scrollTo('#TOP')">
                            Voltar ao índice
                        </router-link>
                        </div>

                    </div>
                </template>
            </Card>

            <br><br><br><br>

            <Card :title="'Governança de algoritmos e princípios éticos na implementação de IA'">
                
                <template v-slot:cardText>
                    <div class="black--text">

                        <div id="PRINCIPIOS-ETICOS-IA" style="visibility:hidden">#</div>
                        <br>
                        <h2> Quais os princípios éticos orientadores da IA?</h2>
                        <br>
                        
                        <p>
                            Os princípios éticos devem orientar o desenvolvimento e aplicação dos sistemas de IA, desde seu design até o seu uso, respeitando a centralidade do ser humano. No Brasil, o uso ético é uma das finalidades da Estratégia Brasileira de Inteligência Artificial (EBIA), conforme dispõe o art.1º, I da Portaria nº 4.617/2021 do Ministério da Ciência, Tecnologia, Inovações e Comunicações (MCTI). São citados na Portaria: - Princípios da OCDE sobre Inteligência Artificial (2019).; - G20 - Declaração Ministerial sobre Comércio e Economia Digital - Princípios para IA Centrada nos Humanos (2019).; - Grupo Independente de Peritos de Alto Nível sobre a Inteligência Artificial criado pela Comissão Europeia em junho de 2018 - Orientações Éticas para uma IA de Confiança.; - A Declaração de Toronto: Protegendo os Direitos à Igualdade e à Não-Discriminação em Sistemas de Aprendizado por Máquinas (2018).;- Comunicação da Comissão Europeia: Inteligência Artificial para a Europa (2018).; - Diretrizes Universais para Inteligência Artificial (Public Voice Coalition, 2018).;- Declaração sobre Ética e Proteção de Dados em Inteligência Artificial (ICDPPC, 2018).- Asilomar AI Principles (2017). 
                        </p>
                        <p>
                            A EBIA tem como um dos seus objetivos "contribuir para a elaboração de princípios éticos para o desenvolvimento e uso de IA responsáveis", mencionando (mas não determinando) alguns princípios éticos que podem ser observados, tais como: i. crescimento inclusivo, desenvolvimento sustentável e bem-estar; ii. valores centrados no ser humano e equidade; iii. transparência e explicabilidade; iv. Robustez, segurança e proteção. 
                        </p>
                        <p>
                            Além dos princípios extraídos do "Recommendation of the Council on Artificial Intelligence" da OCDE, mencionados no anexo da Portaria nº 4.617/2021, no atual debate internacional, há uma grande lista de princípios gerais humanocêntricos para o desenvolvimento tecnológico, que podem ser sintetizados na seguinte lista: transparência, justiça, não maleficência, responsabilidade, privacidade, beneficência, autonomia, confiança, dignidade, sustentabilidade e solidariedade.
                        </p>
                        <p>
                            <b>Transparência</b>: inclui principalmente ações para promover a explicabilidade e interpretabilidade da IA, além de outros esforços de comunicação para os usuários;
                        </p>
                        <p>
                            <b>Equidade</b>: por um lado, está amplamente relacionada aos conceitos de prevenção, monitoramento e redução de discriminação e preconceitos indesejados. Por outro lado, também está relacionada à oportunidade de interpelar ou contestar decisões, além do direito de reparação;
                        </p>
                        <p>
                            <b>Não maleficência</b>: abrange noções de segurança e proteção. É um agir negativo da tecnologia. Relaciona-se ao fato de que a IA nunca deve causar danos previsíveis ou não intencionais e exige estratégias de gerenciamento de risco;
                        </p>
                        <p>
                            <b>Responsabilidade</b>: os esforços para delimitar o significado deste princípio incluem atuar com responsabilidade e integridade no uso e desenvolvimento da IA, reconhecendo também a responsabilidade legal dos agentes envolvidos em sua criação e apresentação ao mercado;
                        </p>
                        <p>
                            <b>Privacidade</b>: a privacidade está frequentemente ligada a noções de proteção e segurança de dados, fornecendo diretrizes para o desenvolvimento de medidas como: privacidade garantida desde o design das ferramentas, minimização de dados e controle de acesso;
                        </p>
                        <p>
                            <b>Beneficência</b>: este conceito é frequentemente mencionado, apesar de sua definição ser ainda incerta. Há algum consenso no sentido de este princípio se relacionar à não maleficência, do ponto de vista diretamente contrário. Ou seja, trata-se de uma ação positiva da tecnologia no sentido de fomentar a valorização dos sentidos humanos, a promoção do bem-estar humano, o desenvolvimento de oportunidades socioeconômicas, paz e felicidade;
                        </p>
                        <p>
                            <b>Autonomia</b>: principalmente relacionada à liberdade de expressão, autodeterminação informacional e mecanismos de proteção da privacidade do usuário. Também pode se relacionar à promoção da liberdade, capacitação e autodeterminação;
                        </p>
                        <p>
                            <b>Confiança</b>: destaca a importância da confiança dos clientes nas recomendações, julgamentos e utilizações da IA. Também pode incluir questões de educação, confiabilidade, responsabilidade, processos de monitoramento e avaliação da integridade do projeto da IA, para garantir a conformidade com normas e padrões;
                        </p>
                        <p>
                            <b>Dignidade</b>: entrelaçado com os direitos humanos, o princípio da dignidade neste contexto orienta que a IA deve respeitar e preservar a dignidade humana;
                        </p>
                        <p>
                            <b>Sustentabilidade</b>: Espera-se que a IA afete diversas práticas e contextos, modificando a forma como os indivíduos vivem e impactando o meio ambiente. Nesse sentido, a sustentabilidade exige uma regulamentação e implementação de IA capaz de direcionar o vasto potencial da tecnologia para o maior benefício de indivíduos e do meio ambiente; e
                        </p>
                        <p>
                            <b>Solidariedade</b>: tem como foco a sociedade como um todo e aborda temas como a redistribuição de benefícios gerados pela tecnologia para que a coesão social não seja prejudicada. Relaciona-se também à proteção e respeito a grupos sociais vulneráveis - como as crianças e adolescentes.
                        </p>


                        <div id="CRITERIO-INTERNACIONAL" style="visibility:hidden">#</div>
                        <br>
                        <h2> As organizações devem seguir algum critério internacional obrigatoriamente?</h2>
                        <br>


                        <p>
                            O Brasil lançou, recentemente, através da Portaria nº 4.617/2021, a Estratégia Brasileira de Inteligência Artificial (EBIA). Uma das críticas que têm sido feitas à EBIA é a falta de ações de concretização e governança; que ela peca por ser demasiadamente abstrata, já que elenca ações estratégicas como "Estruturar ecossistemas de governança do uso da IA, tanto no setor público quanto no setor privado", mas não indica exatamente como fazê-lo. 
                        </p>
                        <p>
                            É nessa linha que documentos como os relatórios e propostas de regulação da União Europeia sobre temas como responsabilidade dos sistemas de IA são bons norteadores, pois, apesar de não serem aplicáveis ao nosso ordenamento jurídico como normas, são relevantes como boas práticas. Ao tratarem da aplicação de IA em situações concretas, tais como: a utilização deste tipo de sistemas em armas letais, veículos autônomos, na medicina, etc., podem ajudar o servidor público brasileiro a estruturar melhor as políticas de governança a serem adotadas.
                        </p>
                        <p>
                            Tendo em conta que a EBIA é criticada por ser demasiadamente genérica, elencando ações estratégicas como "Estruturar ecossistemas de governança do uso da IA, tanto no setor público quanto no setor privado", mas sem indicar propriamente como, uma das formas de efetivar o que está previsto neste documento é, de fato, recorrer a outros documentos que tenham desenvolvido mais detalhadamente o assunto. Um destes materiais é a Proposta de Regulamento em matéria de IA da União Europeia. Esta Proposta, no seu art. 10, estabelece que as práticas de governança em sistemas de alto risco devem ser particularmente exigentes, e devem perpassar as escolhas na estrutura do design; uma avaliação da quantidade e serventia, para aquela finalidade, dos dados a serem coletados; a identificação e eliminação de enviesamentos; entre outros (art. 10/2, diversas alíneas). 
                        </p>
                        <p>
                            O conceito de alto risco acima citado, que também pode ser útil para os servidores brasileiros, vem também desenvolvido em outro texto, a Proposta de Regime de responsabilidade civil aplicável à IA, e envolve o uso de armas letais, veículos autônomos e a aplicação de IA na medicina. Ele é aplicável ao emprego de IA em usos particularmente sensíveis e implica um regime de responsabilização mais gravoso, o que pode ter relação com os mecanismos de governança a serem adotados dentro das nossas fronteiras, para servir de norte, de modo a evitar eventuais responsabilizações futuras, caso o Brasil venha a adotar regime semelhante.
                        </p>
                        <p>
                            Ademais, de volta à Proposta de Regulamento sobre a IA, o art. 18 estabelece uma obrigação, para os operadores de sistemas de alto risco, de se preparar toda a documentação acerca de governança; e o título VI do instrumento, que contém os arts. 56 a 58, estabelece como deve ser criado e estruturado um Conselho Europeu de IA, que servirá, dentre outros, para implementar estas estruturas de governança, exemplo que pode ser seguido pelo Brasil. 
                        </p>
                        <p>
                            Outro documento que pode ser útil é a Proposta de Regime relativo aos aspectos éticos da IA, da robótica e das tecnologias conexas, que estabelece, em seus arts. 18 e seguintes, que as normas de governança devem ser desenvolvidas e aplicadas, de preferência, a nível coordenado em toda a União Europeia.
                        </p>


                        <div id="ACCOUNTABILITY" style="visibility:hidden">#</div>
                        <br>
                        <h2> O que significa "accountability", ligada à responsabilidade por quaisquer erros ou falhas da Inteligência Artificial (IA)?   </h2>
                        <br>

                        <p>
                            O termo não tem uma tradução exata para a nossa língua, mas, de acordo com a Estratégia Brasileira de Inteligência Artificial (EBIA), significa responsabilidade e prestação de contas no uso dos sistemas de IA seguindo uma lógica de transparência no processamento dos dados utilizados, e tomando como norte, sempre, o princípio da precaução. Este princípio significa que é preciso, na utilização de IA por parte do setor público, ter o máximo de cuidado e ser previdente, evitando situações que apresentem risco para os dados processados e, consequentemente, para os seus titulares. 
                        </p>
                        <p>
                            Para concretizar a "accountability" e o princípio da precaução, a EBIA fala na intervenção regulatória proporcional ao grau de risco relacionado a determinada aplicação da IA. Em outras palavras, devem existir mais regras que guiem o uso dos sistemas quanto mais arriscado este uso for. 
                        </p>
                        <p>
                            A ideia também é ligada a limitações restritas a usos específicos, assim como à necessidade de envolver o maior número de interessados possíveis, para assegurar a imparcialidade. 
                        </p>
                        <p>
                            A Estratégia sugere, ainda, para ajudar a concretizar o processo, que se criem selos, certificados e afins, que permitam assegurar com mais objetividade quando um sistema é confiável. 
                        </p>
                        <p>
                            Portanto, apesar de ser um conceito ligado à responsabilidade - ou seja, à lógica de responder por algum prejuízo causado -, a "accountability", tal como trazida pela EBIA, preza por um comportamento preventivo, de maneira que se evitem danos.
                        </p>


                        <div id="GOVERNANCA-BRASIL" style="visibility:hidden">#</div>
                        <br>
                        <h2> Como a governança de IA deve ser feita no Brasil?</h2>
                        <br>

                        <p>
                            De acordo com a Estratégia Brasileira de Inteligência Artificial (EBIA), é fundamental na utilização dos sistemas de IA combater o enviesamento dos dados inseridos. Isso significa que é preciso lutar contra alguma tendência que o algoritmo possa ter em direção a uma resposta ou outra, como no caso de um dado viciado num jogo de tabuleiro. 
                        </p>
                        <p>
                            A EBIA também diz que é importante poder rastrear como o sistema chegou à determinada conclusão, o que tem relação com os princípios, consagrados no documento, da transparência e da explicabilidade.
                        </p>
                        <p>
                            Outra ideia importante é a de fazer rotinas de gestão de risco dos sistemas ao longo de todo o seu ciclo de vida, mas também incorporar princípios éticos desde o começo da configuração da IA. Ou seja, por mais que seja importante avaliar quão arriscado será o seu uso num determinado caso, é preciso minimizar estes riscos no momento da programação, por meio da incorporação de dados corretos, como explicado acima, e também de princípios éticos - alguns são a transparência e a explicabilidade já mencionadas, mas também há outros, como a não-discriminação. 
                        </p>
                        <p>
                            A governança, por fim, ainda envolve ações como: promover a conscientização sobre a IA; fazer relatórios de impacto; e designar grupos específicos de pessoas com estas tarefas.
                        </p>

                        <br>
                        Saiba mais sobre isso em:<br>
                        [1] <a href="https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/arquivosinteligenciaartificial/ia_estrategia_doc_referencia.pdf">
                            https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/arquivosinteligenciaartificial/ia_estrategia_doc_referencia.pdf
                        </a><br>
                        [2] <a href="https://digital-strategy.ec.europa.eu/en/library/proposal-regulation-laying-down-harmonised-rules-artificial-intelligence">
                            https://digital-strategy.ec.europa.eu/en/library/proposal-regulation-laying-down-harmonised-rules-artificial-intelligence
                        </a><br>
                        [3] <a href="https://www.europarl.europa.eu/doceo/document/TA-9-2020-0275_PT.html">https://www.europarl.europa.eu/doceo/document/TA-9-2020-0275_PT.html
                        </a><br>
                        <br><br>
                        <div style="text-align: right;">
                        <router-link to="#TOP" @click.native="scrollTo('#TOP')">
                            Voltar ao índice
                        </router-link>
                        </div>

                    </div>
                </template>
            </Card>
            


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