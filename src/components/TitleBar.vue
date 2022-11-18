<script>
import CoKamp from "@components/icons/IconCoKamp.vue";

export default {
  components: {
    CoKamp,
  },
};
</script>

<template>
  <header class="masthead">
    <div class="container h-100">
      <div class="row h-50 align-items-center">
        <div class="col-20 text-center">
          <CoKamp />
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.masthead {
  height: 500px;
  min-height: 250px;
  /* https://www.shutterstock.com/nl/image-photo/collection-vintage-woodworking-tools-on-rough-727422358?utm_campaign=image&utm_medium=googleimages&utm_source=iptc */
  background-image: url("@assets/images/ToolShed.jpg"); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
