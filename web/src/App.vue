<script setup>
import HomeContent from './components/HomeContent.vue';
</script>

<template>
  <head>
    <title>Iantomate</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Recursive:wght@300..1000&display=swap" rel="stylesheet">
  </head>

  <body>
    <HomeContent/>
  </body>
</template>

<style>
p {
  color: white;
}
h1{
  color: white;
}
h2{
  color: white;
}
h5{
  color: white;
}
body {
  font-family: Recursive, Arial, sans-serif;
  background-image: url("./assets/ianto2.png");
  background-repeat: repeat;
}
</style>