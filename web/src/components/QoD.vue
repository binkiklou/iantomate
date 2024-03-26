<script setup>
import { ref } from 'vue';

// --- PARTITIONAGE COOL ---
const ok_valid = ref(true);
const part = ref(1);
const can_next = ref(false);

const message = ref('Question très importante!');

function update_parts(){
    if(ok_valid.value){
        part.value++;
        console.log(part.value);
        ok_valid.value = false;
    }
}

// --- P2 ---
const oui_selected = ref(false);
const non_selected = ref(false);
const any_selected = ref(false);

const choix_txt = ref('?!?');

// Fait aussi la logique pour select oui
function select_oui(oui)
{
    any_selected.value = true;

    if(oui)
    {
        oui_selected.value = true;
        non_selected.value = false;

        choix_txt.value = 'Oui';
    }
    else
    {
        non_selected.value = true;
        oui_selected.value = false;

        choix_txt.value = 'Non';
    }

    ok_valid.value = true;
}

// --- P3 ---
const nom_txt = ref('');

function update_signature()
{
    if(nom_txt.value.length >= 3){
        ok_valid.value = true;
    }
}

</script>

<template>
    <div :class="{oksee:part==1,dontsee:part!=1}" >
        <h1>Question très <strong class="blinker">importante!</strong></h1>
        <p>Cliquez sur <span class="qtext">OK</span> pour commencer.</p>
    </div>

    <div class="fancy" :class="{oksee:part>=2,dontsee:part<2}">
        <h1 class="qtext">
            Ian-Tomate?
        </h1>

        <div class="parent">
            <div class="child">
                <button id="oui_btn" @click="select_oui(true)" class="choix" 
                :class="{coui_unselected: !oui_selected, coui_selected:oui_selected}">
                <strong>Oui</strong></button>
            </div>

            <div class="child">
                <button class="choix"  @click="select_oui(false)" 
                :class="{cnon_unselected: !non_selected, cnon_selected:non_selected}">
                <strong>Non</strong></button>
            </div>
        </div>
    </div>

    <div class="fancy" :class="{oksee:part>=3,dontsee:part<3}">
        <p>
            Votre Signature:
        </p>
        <input type="text" v-model="nom_txt" @input="update_signature">
    </div>

    <div class="fancy" :class="{oksee:part>=4,dontsee:part<4}">
        <p>
            Moi, <b>{{ nom_txt }}</b>, je vote que <span :class="{trouge:!oui_selected,tvert:oui_selected}">{{ choix_txt }}</span>, Ianthomate.
        </p>
        <h6>J'accepte les <a href="/termes" target="_blank"><span style="color:#3498db;">termes et conditions</span></a>.</h6>
        <button>FINI</button>
    </div>

    <br/>

    <button class="fancy okbtn" :class="{okok:ok_valid, oknon:!ok_valid}" v-show="part<4" @click="update_parts()"><h3>OK</h3></button>
</template>

<style>
/* --- ANIMATION --- */
.fancy
{
    transition: max-height 2s ease, opacity 1s linear, scale 1s linear;
}

.dontsee
{
    scale: 0;
    opacity: 0;
    height: fit-content;
    max-height: 0px;
}

.oksee
{
    /*scale: 1;*/
    opacity: 1;
    height: auto;
    max-height: 500px;
}

/* --- BUTTONS CHOIX --- */
.choix
{
    font-family: Recursive, Arial, sans-serif;
    min-height: 20vh;
    width: 90%;
    font-size: 24px;
    transition: all 1s;
}
.coui_unselected
{
    color: #2ecc71;
    border: 6px solid #2ecc71;
    background-color: white;
}
.coui_unselected:hover
{
    border: 12px solid #2ecc71;
}
.cnon_unselected
{
    color: #e74c3c;
    background-color: white;
    border: 6px solid #e74c3c;
}
.cnon_unselected:hover
{
    border: 12px solid #e74c3c;
}
.coui_selected
{
    background-color: #2ecc71;
    border: 6px solid white;
    color: white;
}
.cnon_selected
{
    background-color: #e74c3c;
    color: white;
    border: 6px solid white;
}
.parent {
  /*border: 1px solid black;
  margin: 1rem;
  padding: 2rem 2rem;*/
  text-align: center;
}

.child {
  display: inline-block;
  /*
  border: 1px solid white;
  padding: 1rem 1rem;
  */
  vertical-align: middle;
  width: 400px;
  max-width: 30%;
}

/* --- ELEMENTS --- */
.blinker{
    animation: blinking 2s ease-in-out infinite;
    color:#2ecc71;
}
@keyframes blinking {
    50%{
        color:#27ae60;
    }
}

.qtext
{
    color:#2ecc71;
}
.okbtn
{
    border: 4px;
    border-radius: 4px;
    padding-left: 12px;
    padding-right: 12px;
    min-width: 20vw;
    transition: color 250ms, background-color 250ms;
}
.okok
{
    background-color: #2ecc71;
    color: white;
}
.okok:hover{
    background-color: #27ae60;
}
.oknon
{
    background-color: #ecf0f1;
    color: white;
}
.trouge{
    color: #e74c3c;
}
.tvert{
    color: #2ecc71;
}
</style>