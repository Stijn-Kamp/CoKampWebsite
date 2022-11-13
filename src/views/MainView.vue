<script>
    import TitleView from "@views/TitleView.vue"
    import InfoView from "@views/InfoView.vue";
    import ImagesView from "@views/ImagesView.vue";
    import ContactView from "@views/ContactView.vue";

    export default {
    components: {
        TitleView,
        InfoView,
        ImagesView,
        ContactView,
    }
}
</script>

<template>
    <TitleView/>
    <InfoView id="Info"/>
    <ImagesView id="Images"/>
    <ContactView id="Contact"/>
</template>

<style>
    #Info{
        padding: 100px;
    }

    #Contact{
        padding-top: 50px;
    }

    #Images{
        padding: 100px;
    }
</style>

