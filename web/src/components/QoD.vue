<script>
// Toggle button oui/non
var btn_selected = false;
var btn_values;
</script>

<template>
    <div id="part1">
        <h1>Ceci est une question très importante</h1>
    </div>

    <div id="part2">
        <h1 class="qtext">
            Ian-Tomate?
        </h1>

        <div class="parent">
            <div class="child">
                <button class="choix coui_unselected"><strong>Oui</strong></button>
            </div>

            <div class="child">
                <button class="choix cnon_unselected"><strong>Non</strong></button>
            </div>
        </div>
    </div>

    <div id="part3">
        <p>
            Votre Signature:
        </p>
        <input type="text">
    </div>

    <div id="part4">
        <p>
            Moi, ???, je vote que ???, Ianthomate.
        </p>
        <h6>J'accepte les <span style="color:#3498db;">termes et conditions</span>.</h6>
        <button>FINI</button>
    </div>

    <br/>

    <button><h3>OK</h3></button>
</template>

<style>
.choix
{
    font-family: Recursive, Arial, sans-serif;
    min-height: 200px;
    width: 90%;
}

.coui_unselected
{
    color: #2ecc71;
    border: 6px solid #2ecc71;
    background-color: white;
}

.cnon_unselected
{
    color: #e74c3c;
    background-color: white;
    border: 6px solid #e74c3c;
}

.coui_selected
{
    background-color: #2ecc71;
    border: 6px solid #2ecc71;
    color: white;
}

.cnon_selected
{
    background-color: #e74c3c;
    color: white;
    border: 6px solid #e74c3c;
}

.qtext
{
    color:#27ae60;
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
</style>