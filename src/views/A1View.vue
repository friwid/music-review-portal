<script setup></script>

<template>
  <div class="wrapper">
    <header>
      <nav><RouterLink to="/">&#8630;</RouterLink></nav>
    </header>
    <main></main>
    <footer></footer>
  </div>
</template>

<style scoped>
a,
a:visited {
  text-decoration: none;
  font-size: 3em;
  font-weight: 100;
  letter-spacing: 0.2em;
  color: orangered;
  text-shadow: orangered 0 0 10px;
  transition:
    color 1s ease-out,
    text-shadow 1s ease-out;
}

a:hover,
a:active {
  color: springgreen;
  text-shadow: springgreen 0 0 30px;
  transition:
    color 0.2s ease-out,
    text-shadow 0.2s ease-out;
}
</style>
