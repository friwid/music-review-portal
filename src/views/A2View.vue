<script setup></script>

<template>
  <div class="page">
    <header>
      <nav><RouterLink to="/" class="backButton">&#8617;</RouterLink></nav>
    </header>
    <div class="wrapper">
      <main></main>
    </div>
    <footer></footer>
  </div>
</template>

<style scoped>
.page {
  font-family: Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow',
    sans-serif-condensed, sans-serif;
  padding: 10px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
