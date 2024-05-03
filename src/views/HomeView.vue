<script setup></script>

<template>
  <div class="wrapper">
    <header>
      <nav></nav>
    </header>
    <main>
      <RouterLink to="/a1">A1</RouterLink>
      <RouterLink to="/a2"> A2 </RouterLink>
      <RouterLink to="/a3"> A3 </RouterLink>
      <RouterLink to="/a4">A4</RouterLink>
    </main>
    <footer></footer>
  </div>
</template>

<style scoped>
.wrapper {
  line-height: 1.6;
  font-family: Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow',
    sans-serif-condensed, sans-serif;
  font-size: 12px;
  font-weight: normal;
  display: flex;
  place-items: center;
}
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
