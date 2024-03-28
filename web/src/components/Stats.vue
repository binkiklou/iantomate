<script setup>
import { ref } from 'vue';

const fuckmavie = ref(0);
const meursvp = ref(0);

setInterval(() => {
    if(localStorage.getItem("firstVisit")){
        fuckmavie.value = Math.round((Date.now() - localStorage.getItem("firstVisit"))/1000);
    }
    if(localStorage.getItem("tempsPerdu")){
        meursvp.value = localStorage.getItem("tempsPerdu");
    }
}, 1000);
</script>

<template>
    <div>
        <h1>Statistiques</h1>

        <p>Ça fait <strong class="chorrible">{{ fuckmavie }}s</strong> que tu souffre de la connaisance de l'existence de ce site !</p>
        <p><strong>et</strong></p>
        <p><strong class="chorrible">{{ meursvp }}s</strong> de perdu sur ce site!!</p>
    </div>
</template>

<style>
.chorrible{
    color: #2ecc71;
}
</style>