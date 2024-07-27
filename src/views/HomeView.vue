<script setup></script>

<template>
  <div class="page">
    <header>
      <nav></nav>
    </header>
    <div class="wrapper">
      <main>
        <RouterLink to="/a1" class="button button1">1</RouterLink>
        <RouterLink to="/a2" class="button button2">2</RouterLink>
        <RouterLink to="/a3" class="button button3">3</RouterLink>
        <RouterLink to="/a4" class="button button4">4</RouterLink>
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
}
.button1 {
  box-shadow:
    black 0 0 10px,
    inset orangered 0 0 50px,
    deepskyblue -10px 0 15px;
  transition:
    color 1s ease-out,
    box-shadow 1s ease-out;
}
.button2 {
  box-shadow:
    black 0 0 10px,
    inset orangered 0 0 50px,
    deepskyblue -5px 0 15px;
  transition:
    color 1s ease-out,
    box-shadow 1s ease-out;
}
.button3 {
  box-shadow:
    black 0 0 10px,
    inset orangered 0 0 50px,
    deepskyblue 5px 0 15px;
  transition:
    color 1s ease-out,
    box-shadow 1s ease-out;
}
.button4 {
  box-shadow:
    black 0 0 10px,
    inset orangered 0 0 50px,
    deepskyblue 10px 0 15px;
  transition:
    color 1s ease-out,
    box-shadow 1s ease-out;
}
.button:hover {
  box-shadow:
    deepskyblue 0 0 30px,
    inset springgreen 0 0 50px;
  transition:
    color 0.5s ease-out,
    box-shadow 0.5s ease-out;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
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
    color 0.5s ease-out,
    text-shadow 0.5s ease-out;
}
</style>
