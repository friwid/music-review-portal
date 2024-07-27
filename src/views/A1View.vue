<script setup></script>

<template>
  <div class="page">
    <header>
      <nav><RouterLink to="/" class="backButton">&#8617;</RouterLink></nav>
    </header>
    <div class="wrapper">
      <main>
        <form>
          <h1>Login</h1>
          <label for="email">E-Mail:</label>
          <input type="email" id="email" name="email" required />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
    <footer></footer>
  </div>
</template>

<style scoped>
.page {
  font-family: Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow',
    sans-serif-condensed, sans-serif;
  padding: 10px;
  color: white;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 191, 255, 0.138);
  padding: 10px;
  border-radius: 5px;
  box-shadow:
    black 0 0 50px,
    deepskyblue 0 0 300px 150px;
  transition: box-shadow 2s ease-out;
}
label,
button {
  margin-top: 10px;
  line-height: 1.5em;
}

input {
  border-radius: 4px;
  border: none;
  line-height: 1.5em;
}
</style>
