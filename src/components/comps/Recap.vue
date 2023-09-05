<template>
    <div class="recap_container">
        <h2>Recap</h2>
        <p>Hai vinto: &euro; {{ formatNumber(punteggio) }}</p>
        <p>Risposte corrette: {{ risposteCorrette }}</p>
        <p>Risposte sbagliate: {{ risposteSbagliate }}</p>
        <p>Punteggio totale: {{ calcolaPunteggio() }}</p>
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
    }
}
</script>

<style scoped>
.recap_container {
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100vh;
}
</style>