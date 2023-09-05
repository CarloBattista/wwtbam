<template>
    <h2 class="container_question">{{ question.text }}</h2>
</template>

<script>
export default {
    name: "Domanda",
    props: {
        question: Object // La domanda corrente
    }
}
</script>

<style scoped>
.container_question {
    background-image: url("/_resources/imgs/quest.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 70px;
    height: 70px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    padding: .5em 20em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2em;
}

/* Media Quer's */
@media only screen and (max-width: 1150px) {
    .container_question {
        padding: .5em 10em;
    }
}

@media only screen and (max-width: 850px) {
    .container_question {
        background-image: url("/_resources/imgs/quest_m.webp");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 110px;
        height: 110px;
        padding: .5em 3em;
    }
}
</style>