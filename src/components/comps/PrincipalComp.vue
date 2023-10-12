<template>
    <div class="header">
        <div class="logo"></div>
    </div>
    <div class="container" v-if="!recapMostrato">
        <div class="container_boxs">
            <Domanda v-if="currentQuestion" :question="currentQuestion" @risposta-selezionata="gestisciRisposta" />
            <Risposta v-if="currentQuestion" :risposte="currentQuestion.answers" @risposta-selezionata="gestisciRisposta" />
        </div>
        <div class="container_awards">
            <div class="award_price" v-for="(premio, index) in premi" :key="premio"
                :class="['premio', 'premio-' + premio, { 'active': index === currentQuestionIndex }]">
                <span class="count_label_price_awd">{{ index + 1 }}</span> &euro; {{ formatNumber(premio) }}
            </div>
        </div>
    </div>
    <div v-else>
        <Recap :punteggio="punteggio" :risposteCorrette="risposteCorrette" :risposteSbagliate="risposteSbagliate" />
    </div>
</template>

<script>
import Domanda from './Domanda.vue';
import Risposta from './Risposta.vue';
import Recap from './Recap.vue';

export default {
    name: "PrincipalComp",
    components: {
        Domanda,
        Risposta,
        Recap
    },
    props: {
        questions: Array // Passa l'array di domande e risposte da App.vue
    },
    data() {
        return {
            currentQuestionIndex: 0,
            currentQuestion: null, // La domanda corrente
            risposteCorrette: 0, // Numero di risposte corrette
            risposteSbagliate: 0, // Numero di risposte sbagliate
            recapMostrato: false, // Flag per mostrare o nascondere il recap

            punteggio: 0,
            premi: [
                100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000,
                64000, 125000, 250000, 500000, 1000000
            ],
            premioAttualeIndex: 0 // Inizia con il premio da 100
        };
    },
    methods: {
        gestisciRisposta(risposta) {
            // Verifica se la risposta è corretta
            if (risposta.isCorrect) {
                // La risposta è corretta, incrementa il contatore delle risposte corrette
                this.risposteCorrette++;

                this.punteggio = this.premi[this.premioAttualeIndex]; // Imposta il punteggio con il premio corrente

                if (this.premioAttualeIndex < this.premi.length) {
                    this.premioAttualeIndex++; // Passa al prossimo premio
                }
                this.selezionaNuovaDomanda();
            } else {
                // La risposta è errata, incrementa il contatore delle risposte sbagliate
                this.risposteSbagliate++;
            }

            // Verifica se ci sono altre domande disponibili
            if (this.currentQuestionIndex < this.questions.length - 1) {
                // Passa alla domanda successiva
                this.currentQuestionIndex++;
                this.currentQuestion = this.questions[this.currentQuestionIndex];
            } else {
                // Hai completato tutte le domande, mostra il recap
                this.mostraRecap();
            }
        },
        mostraRecap() {
            // Imposta il flag per mostrare il recap
            this.recapMostrato = true;
        },
        formatNumber(number) {
            // Funzione per formattare un numero come stringa con separatore delle migliaia
            return number.toLocaleString();
        },
        selezionaNuovaDomanda() {
            // Implementa la logica per selezionare una nuova domanda in base alla fascia di premio corrente
            // Assicurati di mescolare le domande in modo casuale
        },
    },
    mounted() {
        // Inizializza la prima domanda qui
        this.currentQuestion = this.questions[0];
    },
}
</script>

<style scoped>
.header {
    width: 100%;
    padding: 2em;
    display: flex;
    justify-content: center;
}

.logo {
    background-image: url("_resources/imgs/logo.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 150px;
    height: auto;
    aspect-ratio: 1;
}

.container {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    padding: 3em;
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: space-between;
}

.container_boxs{
    width: 100%;
}

.award_price {
    background-image: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 25px;
    width: 180px;
    height: 25px;
    margin: .3em 0;
    padding: 0 1em;
    border: none;
    outline: none;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.award_price.active {
    background-image: url("/_resources/imgs/step_activ.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 25px;
    width: 180px;
    height: 25px;
    margin: .3em 0;
    padding: 0 1em;
    border: none;
    outline: none;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #000;
}

.count_label_price_awd {
    width: 30px;
    margin-right: .4em;
    text-align: center;
}

.premio {
    color: #e1a02e;
}

.premio-1000,
.premio-32000,
.premio-1000000 {
    color: #fff;
}

/* Media Quer's */
@media only screen and (max-width: 1150px) {
    .header {
        padding: 1em;
    }

    .logo {
        width: 150px;
        height: auto;
        aspect-ratio: 1;
    }
}

@media only screen and (max-width: 500px) {
    .container {
        padding: 1em;
    }
}
</style>