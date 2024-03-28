<script setup>
import { ref } from 'vue';
const v = ref('?!?');
if(localStorage.getItem("votreVote") !== undefined){
    if(localStorage.getItem("votreVote") == 'Oui'){
        v.value = 'Oui';
    }
    else{
        v.value = 'Non';
    }
}
</script>

<template>
    <div>
        <h1>Votre vote: </h1>
        <h1>{{ v }}</h1>
    </div>
</template>