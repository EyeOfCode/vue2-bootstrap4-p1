<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">VueJs 2 Bootstrap 4</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" @click="closeMenu">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact-active-class="active">
            Exercise 1
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ex2" active-class="active">
            Exercise 2
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ex3" active-class="active">
            Exercise 3
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ex4" active-class="active">
            Exercise 4
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ex5" active-class="active">
            Exercise 5
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ex6" active-class="active">
            Exercise 6
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ex7" active-class="active">
            Exercise 7
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ex8" active-class="active">
            Exercise 8
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    closeMenu() {
      const navbar = document.getElementById('navbarNav');
      navbar.classList.remove('show');
    },
  },
};
</script>

<style scoped>
.active {
  border-bottom: 2px solid green;
  padding-bottom: 2px;
}
.nav-link:hover {
  border-bottom: 2px solid gray;
  padding-bottom: 2px;
}
</style>
