<template>
    <div class="recap_container">
        <h2 class="win_label">Hai vinto: &euro; {{ formatNumber(punteggio) }}</h2>
        <div class="summary">
            <div class="row">
                <span class="label_summ">Risposte corrette</span>
                <span class="count_summ">{{ risposteCorrette }}</span>
            </div>
            <div class="row">
                <span class="label_summ">Risposte sbagliate</span>
                <span class="count_summ">{{ risposteSbagliate }}</span>
            </div>
            <div class="row">
                <span class="label_summ">Punteggio totale</span>
                <span class="count_summ">{{ calcolaPunteggio() }}</span>
            </div>
            <button type="button" class="btn" @click="reloadPage">Gioca di nuovo</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Recap",
    props: {
        punteggio: Number, // Premio
        risposteCorrette: Number, // Il numero di risposte corrette
        risposteSbagliate: Number // Il numero di risposte sbagliate
    },
    methods: {
        calcolaPunteggio() {
            // Puoi implementare la logica per calcolare il punteggio totale
            // Ad esempio, somma il punteggio delle risposte corrette e sottrai il punteggio delle risposte sbagliate
            return this.risposteCorrette * 10 - this.risposteSbagliate * 5;
        },
        formatNumber(number) {
            // Funzione per formattare un numero come stringa con separatore delle migliaia
            return number.toLocaleString();
        },
        reloadPage() {
            window.location.reload();
        },
    }
}
</script>

<style scoped>
.recap_container {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.win_label {
    color: #e1a02e;
    font-size: 2.5rem;
    font-weight: 600;
    transition: all 1s ease;
}

.summary {
    width: 500px;
    padding: 0 1em;
    margin-top: 1em;
}

.row {
    width: 100%;
    margin-bottom: .5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.row:last-child {
    margin-bottom: 0;
}

.label_summ {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    opacity: .7;
}

.count_summ {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
}

.btn {
    background-image: url("/_resources/imgs/sprite_ans_normal.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 50px;
    margin-top: 2em;
    width: 100%;
    height: 50px;
    padding: .5em 2em;
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
}

.btn:hover {
    background-image: url("/_resources/imgs/sprite_ans_selected.png");
}

/* Media Quer's */
@media only screen and (max-width: 500px) {

    .win_label {
        font-size: 2rem;
    }

    .summary {
        width: 400px;
        padding: 0 1em;
        margin-top: 1em;
    }

    .label_summ,
    .count_summ {
        font-size: .8rem;
    }
}
</style>