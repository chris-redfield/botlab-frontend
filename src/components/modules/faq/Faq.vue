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
                                    <router-link to="#PRINCIPIOS-LGPD-TRATAMENTO-DADOS" @click.native="scrollTo('#PRINCIPIOS-LGPD-TRATAMENTO-DADOS')">
                                        Quais os princípios descritos na LGPD devem orientar o tratamento de dados?
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
                                    <router-link to="#MUNICIPIO-COMPETENTE-LGPD" @click.native="scrollTo('#MUNICIPIO-COMPETENTE-LGPD')">
                                        O município é competente para tratar sobre Proteção de Dados?
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
                                    base no perfil de determinada pessoa.[1]</li>
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
                            por pelo menos décadas.[2]
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
                           O conceito de IoT está intimamente ligado à ideia de “big data”, isto é, uma grande quantidade volumosa de dados 
                           estruturados, semiestruturados ou não estruturados que podem ser explorados para obter novas informações. A combinação 
                           desse grande volume de dados com a internet das coisas, por meio de objetos inteligentes, poderá alterar 
                           significativamente a forma como vivemos. Por exemplo, poderão ser criadas soluções mais eficazes para problemas 
                           já conhecidos, como poluição, congestionamento, eficiência produtiva, entre outros. Além disso, poderá trazer 
                           muitos benefícios para os cidadãos enquanto consumidores, ao permitir a criação de produtos e serviços mais rápidos 
                           e eficientes, trazendo maior conforto e comodidade.[1]
                        </p>

                        <p>
                            O conceito de IoT está intimamente ligado à ideia de “big data”, isto é, uma grande quantidade volumosa de dados 
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
                            Artificial esteja atento à legislação vigente, conforme já visto na conversa com o Assis. 
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
                            âmbito da LGPD, mesmo que as regras sejam executadas por ser representantes, funcionários ou prepostos. 
                            Lembrando sempre que o operador deve ser uma entidade distinta do controlador, ou seja, que não atua como 
                            profissional subordinado a ele ou como membro de seus órgãos. Por isso, funcionários que atuam em 
                            subordinação às decisões do controlador não serão operadores, mas meros funcionários.O que é um dado 
                            anônimo ou anonimizado?
                        </p>
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
                        <h2> Quais os princípios descritos na LGPD devem orientar o tratamento de dados?</h2>
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
                            Ademais, a Lei Geral de Proteção de Dados (LGPD) estabelece, em seu Art. 8º, que o titular dos dados 
                            poderá, a qualquer momento, revogar seu consentimento.
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
                            Autoridade Nacional de Proteção de Dados (ANPD), podendo ser, segundo o Art. 52 da LGPD, uma 
                            advertência, a determinação da publicação e divulgação da infração cometida, o bloqueio ou 
                            eliminação dos dados que sofreram violações e também multas simples e/ou diárias.
                        </p>
                        <p>
                            Recentemente, em 28 de outubro de 2021, foi aprovada a Resolução CD/ANPD nº 1 que regulamenta 
                            o Processo de Fiscalização e o Processo Administrativo Sancionador no âmbito da ANPD.O poder 
                            público está sujeito à LGPD?
                        </p>
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
                            Dados Pessoais (LGPD – Lei 13.709, de 2018).É possível o uso compartilhado de dados entre 
                            órgãos da Administração Pública?
                        </p>
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
                        <br>

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