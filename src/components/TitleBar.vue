<script>
  import CoKamp from "@components/icons/IconCoKamp.vue"

  export default {
        components: {
            CoKamp,            
        }
    }
</script>


<template>
    <header class="masthead">
      <div class="col-20 text-center align-items-center">
        <CoKamp/>
      </div>
    </header>
</template>

<style>
    .masthead {
    height: 500px;
    min-height: 250px;
    background-image: url("@assets/images/WoodBanner.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    }
</style>