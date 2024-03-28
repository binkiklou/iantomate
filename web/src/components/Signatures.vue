<script setup>
import { ref } from 'vue';

const status_txt = ref('En cours de chargement');
const willShow = ref(true);

const votes = ref([{nom:'aaaa'}]);

fetch('http://172.21.102.45:3000/signataires',{
    method: "GET",
    mode: "cors",
    headers:{
        "Content-Type":"application/json"
    }
}).then(
    async (r) => {
        r.json().then(
            async (a) => {
                var arg = [];
                var i = 0;
                for(let x of a){
                    var t = x;
                    x['id'] = i;
                    arg.push(t);
                    i++;
                }
                console.log(arg);
                willShow.value = false;
                votes.value = a;
            },
            async (e) => {
                status_txt.value = "Erreur de chargement :c";
                console.error(e);
            }
        )
    },
    async (e) => {
        status_txt.value = "Erreur de chargement :c";
        console.error(e);
    }
)
</script>

<template>
    <div>
        <h2>Mur des signatures</h2>
        <div class="bigDiv">
            <p style="color:black;" v-show="willShow">{{ status_txt }}</p>

            <li v-for="vote in votes" :key="vote.id">
                <strong :class="{
                    yeser:(vote['vote']=='Oui'),
                    noner:(vote['vote']=='Non')
                }">{{ vote['nom'] }}   ({{ vote['vote'] }})</strong>
            </li>
        </div>        
    </div>
</template>

<style>
.bigDiv
{
    min-width: 150px;
    background-color: white;
    color: black;
    text-align: left;
}
.yeser
{
    color: #2ecc71;
}
.noner
{
    color: #e74c3c;
}
</style>