<template>
  <PrincipalComp :questions="questions" />
</template>

<script>
import PrincipalComp from './components/comps/PrincipalComp.vue';

export default {
  name: "",
  components: {
    PrincipalComp
  },
  data() {
    return {
      questions: [
        {
          id: 1,
          text: "Qual è la capitale dell'Italia?",
          answers: [
            { id: 1, text: "Roma", isCorrect: true },
            { id: 2, text: "Milano", isCorrect: false },
            { id: 3, text: "Firenze", isCorrect: false },
            { id: 4, text: "Napoli", isCorrect: false }
          ]
        },
        {
          id: 2,
          text: "Quale pianeta è il più vicino al Sole?",
          answers: [
            { id: 5, text: "Terra", isCorrect: false },
            { id: 6, text: "Marte", isCorrect: false },
            { id: 7, text: "Venere", isCorrect: true },
            { id: 8, text: "Giove", isCorrect: false }
          ]
        },
        {
          id: 3,
          text: "Quale è la squadra più titolata d'italia?",
          answers: [
            { id: 9, text: "Milan", isCorrect: false },
            { id: 10, text: "Juventus", isCorrect: true },
            { id: 11, text: "Inter", isCorrect: false },
            { id: 12, text: "Parma", isCorrect: false }
          ]
        },
        {
          id: 4,
          text: "Quale è il simbolo chimico dell'ossigeno?",
          answers: [
            { id: 13, text: "O", isCorrect: true },
            { id: 14, text: "H", isCorrect: false },
            { id: 15, text: "C", isCorrect: false },
            { id: 16, text: "N", isCorrect: false }
          ]
        },
        {
          id: 5,
          text: "Quale è il fiume più lungo del mondo?",
          answers: [
            { id: 17, text: "Nilo", isCorrect: true },
            { id: 18, text: "Amazon", isCorrect: false },
            { id: 19, text: "Mississippi", isCorrect: false },
            { id: 20, text: "Danubio", isCorrect: false }
          ]
        },
        {
          id: 6,
          text: "Chi scrisse 'La Divina Commedia'?",
          answers: [
            { id: 21, text: "Dante Alighieri", isCorrect: true },
            { id: 22, text: "William Shakespeare", isCorrect: false },
            { id: 23, text: "Homer", isCorrect: false },
            { id: 24, text: "Leo Tolstoy", isCorrect: false }
          ]
        },
        {
          id: 7,
          text: "Quale è il pianeta conosciuto come 'la stella del mattino'?",
          answers: [
            { id: 25, text: "Marte", isCorrect: false },
            { id: 26, text: "Venere", isCorrect: true },
            { id: 27, text: "Giove", isCorrect: false },
            { id: 28, text: "Saturno", isCorrect: false }
          ]
        },
        {
          id: 8,
          text: "Qual è l'organo più grande del corpo umano?",
          answers: [
            { id: 29, text: "Cervello", isCorrect: false },
            { id: 30, text: "Polmone", isCorrect: false },
            { id: 31, text: "Fegato", isCorrect: true },
            { id: 32, text: "Stomaco", isCorrect: false }
          ]
        },
        {
          id: 9,
          text: "In quale anno fu dichiarata l'indipendenza degli Stati Uniti d'America?",
          answers: [
            { id: 33, text: "1776", isCorrect: true },
            { id: 34, text: "1789", isCorrect: false },
            { id: 35, text: "1801", isCorrect: false },
            { id: 36, text: "1824", isCorrect: false }
          ]
        },
        {
          id: 10,
          text: "Qual è il gas più abbondante nell'atmosfera terrestre?",
          answers: [
            { id: 37, text: "Ossigeno", isCorrect: false },
            { id: 38, text: "Azoto", isCorrect: true },
            { id: 39, text: "Idrogeno", isCorrect: false },
            { id: 40, text: "Anidride carbonica", isCorrect: false }
          ]
        },
        {
          id: 11,
          text: "Qual è il più grande mammifero del mondo?",
          answers: [
            { id: 41, text: "Leone", isCorrect: false },
            { id: 42, text: "Elefante", isCorrect: true },
            { id: 43, text: "Tigre", isCorrect: false },
            { id: 44, text: "Giraffa", isCorrect: false }
          ]
        },
        {
          id: 12,
          text: "Qual è il simbolo chimico del ferro?",
          answers: [
            { id: 45, text: "O", isCorrect: false },
            { id: 46, text: "Fe", isCorrect: true },
            { id: 47, text: "Cu", isCorrect: false },
            { id: 48, text: "Ag", isCorrect: false }
          ]
        },
        {
          id: 13,
          text: "Qual è il primo elemento della tavola periodica?",
          answers: [
            { id: 49, text: "Ossigeno", isCorrect: false },
            { id: 50, text: "Idrogeno", isCorrect: true },
            { id: 51, text: "Azoto", isCorrect: false },
            { id: 52, text: "Carbonio", isCorrect: false }
          ]
        },
        {
          id: 14,
          text: "In quale anno è stata fondata la NASA?",
          answers: [
            { id: 53, text: "1950", isCorrect: false },
            { id: 54, text: "1965", isCorrect: false },
            { id: 55, text: "1958", isCorrect: true },
            { id: 56, text: "1972", isCorrect: false }
          ]
        },
        {
          id: 15,
          text: "Chi ha scritto 'Il Piccolo Principe'?",
          answers: [
            { id: 57, text: "F. Scott Fitzgerald", isCorrect: false },
            { id: 58, text: "Antoine de Saint-Exupéry", isCorrect: true },
            { id: 59, text: "J.K. Rowling", isCorrect: false },
            { id: 60, text: "Ernest Hemingway", isCorrect: false }
          ]
        },
        // Aggiungi altre domande e risposte qui...
      ],
      currentQuestionIndex: 0
    };
  },
}
</script>

<style></style>