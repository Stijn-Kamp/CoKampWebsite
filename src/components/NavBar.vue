<script>
import WebsiteLogo from "@components/icons/WebsiteLogo.vue";

export default {
  components: {
    WebsiteLogo,
  },
};
</script>

<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-dark bg-light bg-primary"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><WebsiteLogo class="logo" /> Co Kamp</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#Info">Over ons</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Images">Projecten</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.logo {
  width: 25px;
  height: 25px;
}
</style>
