<template>
    <div class="container_buttons">
        <button class="btn_answer" v-for="(risposta, index) in risposte" :key="risposta.id"
            @click="selezionaRisposta(risposta)" :class="{
                'risposta-selezionata': risposta.selezionata,
                'risposta-arancione': risposta.stato === 'arancione',
                'risposta-corretta': risposta.stato === 'corretta' && risposta.isCorrect,
                'risposta-sbagliata': risposta.stato === 'sbagliata' && !risposta.isCorrect
            }">
            <span class="answer_code">{{ String.fromCharCode(65 + index) }}:</span>
            <span class="answer_label">{{ risposta.text }}</span>
        </button>
    </div>
    <div class="audio_player">
        <button class="btn_audio" @click="toggleVolume">
            <i :class="['fa-solid', audioAbilitati ? 'fa-volume-high' : 'fa-volume-xmark']"></i>
        </button>
        <audio loop ref="audioElement">
            <source :src="pathAudio + audioBg" type="audio/mp3">
        </audio>
        <audio ref="audioCorrect">
            <source :src="pathAudio + audioWin" type="audio/mp3">
        </audio>
        <audio ref="audioLose">
            <source :src="pathAudio + audioLose" type="audio/mp3">
        </audio>
    </div>
</template>

<script>
export default {
    name: "Risposta",
    props: {
        risposte: Array, // Le risposte possibili
    },
    data() {
        return {
            primaSelezione: false,
            audioAbilitati: true, // Inizia con gli audio abilitati
            volume: 1, // Imposta il volume massimo
            pathAudio: "/_resources/audio/",
            audioBg: "background.mp3",
            audioWin: "win.mp3",
            audioLose: "lose.mp3",
        }
    },
    methods: {
        reloadPage() {
            window.location.reload();
        },
        selezionaRisposta(risposta) {
            if (!this.primaSelezione) {
                this.$refs.audioElement.play(); // Avvia l'audio
                this.primaSelezione = true; // Imposta la primaSelezione a true
            }

            // Imposta lo stato della risposta su "arancione" al momento del click
            risposta.stato = 'arancione';

            // Usa setTimeout per applicare la classe corretta e riportare all'inizio dopo 2 secondi
            setTimeout(() => {
                if (risposta.isCorrect) {
                    this.$refs.audioCorrect.play(); // Avvia l'audio

                    // La risposta è corretta, applica la classe per far diventare il bottone verde
                    risposta.stato = 'corretta';

                    setTimeout(() => {
                        this.$emit('risposta-selezionata', risposta);
                    }, 2000)

                } else {
                    this.$refs.audioLose.play(); // Avvia l'audio

                    // La risposta è sbagliata, applica la classe per far diventare il bottone rosso
                    risposta.stato = 'sbagliata';

                    // Trova la risposta corretta e applica la classe per far diventare il suo bottone verde
                    const rispostaCorretta = this.risposte.find(r => r.isCorrect);
                    if (rispostaCorretta) {
                        rispostaCorretta.stato = 'corretta';
                    }

                    setTimeout(() => {
                        this.reloadPage()
                    }, 3000)
                }
            }, 2000);
        },
        toggleVolume() {
            // Cambia lo stato dell'audio (abilitato/disabilitato)
            this.audioAbilitati = !this.audioAbilitati;

            // Modifica il volume in base allo stato dell'audio
            if (this.audioAbilitati) {
                this.volume = 1; // Riporta il volume al massimo
            } else {
                this.volume = 0; // Imposta il volume a 0 (audio disabilitato)
            }

            // Applica il volume all'elemento audio
            this.$refs.audioElement.volume = this.volume;
            this.$refs.audioCorrect.volume = this.volume;
            this.$refs.audioLose.volume = this.volume;
            // Puoi aggiungere altre sorgenti audio da regolare qui se necessario
        },
    }
}
</script>

<style scoped>
.container_buttons {
    width: 100%;
    padding: 0 10em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
}

.btn_answer {
    background-image: url("/_resources/imgs/sprite_ans_normal.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 50px;
    height: 50px;
    color: #fff;
    font-size: 1.2rem;
    margin: 1em;
    padding: .5em 2em;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
}

.answer_code {
    color: #e1a02e;
    margin-right: .5em;
}

.btn_answer:hover {
    background-image: url("/_resources/imgs/sprite_ans_selected.png");
    color: #000;
}

.btn_answer:hover .answer_code {
    color: #fff;
}

.risposta-arancione {
    background-image: url("/_resources/imgs/sprite_ans_selected.png");
    cursor: default;
    user-select: none;
    pointer-events: none;
}

.risposta-corretta {
    background-image: url("/_resources/imgs/sprite_ans_corrected.png");
    color: #000;
    cursor: default;
    user-select: none;
    pointer-events: none;
}

.btn_answer.risposta-corretta .answer_code {
    color: #000;
}

.risposta-sbagliata {
    background-image: url("/_resources/imgs/sprite_ans_selected.png");
    color: #000;
    cursor: default;
    user-select: none;
    pointer-events: none;
}

.btn_answer.risposta-sbagliata .answer_code {
    color: #000;
}

.btn_audio{
    background-color: transparent;
    border: none;
    outline: none;
    width: 40px;
    height: 40px;
    aspect-ratio: 1;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: .5;
    transition: opacity 300ms ease;
}

.btn_audio:hover {
    opacity: 1;
}

.btn_audio i{
    color: #e1a02e;
    font-size: 1.2rem;
}

/* Media Quer's */
@media only screen and (max-width: 1150px) {
    .container_buttons {
        padding: 0 5em;
    }
}

@media only screen and (max-width: 850px) {
    .container_buttons {
        padding: 0 2em;
    }

    .btn_answer {
        margin: .5em;
    }
}

@media only screen and (max-width: 600px) {
    .container_buttons {
        padding: 0;
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>