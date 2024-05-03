<script setup></script>

<template>
  <div class="page">
    <header>
      <nav></nav>
    </header>
    <div class="wrapper">
      <main>
        <RouterLink to="/a1" class="button">1</RouterLink>
        <RouterLink to="/a2" class="button">2</RouterLink>
        <RouterLink to="/a3" class="button">3</RouterLink>
        <RouterLink to="/a4" class="button">4</RouterLink>
      </main>
    </div>
    <footer></footer>
  </div>
</template>

<style scoped>
.page {
  font-size: 1.5em;
  font-family: Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow',
    sans-serif-condensed, sans-serif;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  display: inline-block;
  margin: 0 10px;
  padding-left: 11px;
  width: 90px;
  height: 90px;
  text-align: center;
  border-radius: 80px;
  line-height: 1.78em;
  background-color: rgb(15, 15, 15);
  box-shadow:
    black 0 0 10px,
    inset orangered 0 0 50px;
  transition:
    color 1s ease-out,
    box-shadow 1s ease-out;
}
.button:hover {
  box-shadow:
    black 0 0 15px 5px,
    inset springgreen 0 0 50px;
  transition:
    color 0.2s ease-out,
    box-shadow 0.2s ease-out;
}

a,
a:visited {
  text-decoration: none;
  font-size: 3em;
  font-weight: 100;
  letter-spacing: 0.2em;
  color: orangered;
  text-shadow: rgb(0, 0, 0) 0 0 6px;
  transition:
    color 1s ease-out,
    text-shadow 1s ease-out;
}

a:hover,
a:active {
  color: springgreen;
  text-shadow: rgb(0, 0, 0) 0 0 6px;
  transition:
    color 0.2s ease-out,
    text-shadow 0.2s ease-out;
}
</style>
