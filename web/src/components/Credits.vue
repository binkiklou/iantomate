<script setup>
import { ref } from "vue";

const showCredits = ref(false);

function showTruc(){
    showCredits.value = true;
}
</script>

<template>
    <div>
        <h1>Credits</h1>
        
        <div v-show="!showCredits">
            <button @click="showTruc()" class="bigB">Voir les Credits</button>
        </div>
        
        <div v-show="showCredits">
            <p><strong>Adaptée d'une Idée par:</strong> Maxence Cossette</p>
            <p><strong>Direction Artistique:</strong> Maxence Cossette</p>
            <p><strong>Programmation réseaux: </strong> Maxence Cossette</p>
            <p><strong>Design Web: </strong> Maxence Cossette</p>
            <p><strong>Design Mobile: </strong> Maxence Cossette</p>
            <p><strong>Programmation Interface: </strong> Maxence Cosette</p>
            <p><strong>Écriture Crédits:</strong> Maxence</p>
            <p><strong>Directeur Infrastructure Réseaux & Hébergement:</strong> Édouard Bégin</p>
        </div>
        
    </div>
</template>

<style>
h3{
    color: white;
}

.bigB{
    border: 4px;
    border-radius: 4px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size:  16px;
    min-width: 20vw;
    border: none;
}
</style>