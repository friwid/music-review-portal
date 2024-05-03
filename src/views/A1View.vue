<script setup></script>

<template>
  <div class="page">
    <header>
      <nav><RouterLink to="/" class="backButton">&#8617;</RouterLink></nav>
    </header>
    <div class="wrapper">
      <main>
        <h1>Login</h1>
        <form>
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
}

.backButton {
  display: block;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  font-size: 2em;
  line-height: 1.3em;
  background-color: rgb(15, 15, 15);
  box-shadow:
    black 0 0 10px,
    inset orangered 0 0 20px;
  transition:
    color 1s ease-out,
    box-shadow 1s ease-out;
}
.backButton:hover {
  box-shadow:
    black 0 0 10px 2px,
    inset springgreen 0 0 20px;
  transition:
    color 0.2s ease-out,
    box-shadow 0.2s ease-out;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

a,
a:visited {
  text-decoration: none;
  color: orangered;
  text-shadow: rgb(0, 0, 0) 0 0 4px;
  transition:
    color 1s ease-out,
    text-shadow 1s ease-out;
}

a:hover,
a:active {
  color: springgreen;
  text-shadow: rgb(0, 0, 0) 0 0 4px;
  transition:
    color 0.2s ease-out,
    text-shadow 0.2s ease-out;
}

form {
  display: flex;
  flex-direction: column;
}
label,
button {
  margin-top: 10px;
}
</style>
