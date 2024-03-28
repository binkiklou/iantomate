<script setup>
import { ref } from 'vue';

import QoD from './QoD.vue';

import Signatures from './Signatures.vue';
import Stats from './Stats.vue';
import Credits from './Credits.vue';

// Utilisateur privlegier(pas la premiere visite)
const priv = ref(false);
var s = sessionStorage.getItem("sent");
console.log(s);
if(s != undefined && s == 'true'){
    priv.value = true;
}

// Tracker
if(localStorage.getItem("firstVisit") == undefined){
    localStorage.setItem("firstVisit", Date.now());
}

setInterval(()=>{
    if(localStorage.getItem("tempsPerdu") != undefined){
        localStorage.setItem("tempsPerdu", Number(localStorage.getItem("tempsPerdu"))+1);
    }
    else
    {
        localStorage.setItem("tempsPerdu", 0);
    }
}, 1000);
</script>

<template>
    <div id="main-content">
        <QoD v-show="priv==false"/>
        <div v-show="priv">
            <Signatures/>
            <Stats/>
            <Credits/>
        </div>
        <p style="color:#e74c3c">Un site par Maxence</p>
    </div>
</template>

<style>
#main-content
{
    margin: 0 auto;
    max-width: 1080px;
    text-align: center;
    border: 3px solid green;
    padding: 10px;
    background-color: #c0392b;
}
</style>