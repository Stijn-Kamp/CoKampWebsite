<script>
    import TitleBar from "@components/TitleBar.vue";
    import InfoView from "@views/InfoView.vue";
    import ImagesView from "@views/ImagesView.vue";
    import ContactView from "@views/ContactView.vue";

    export default {
    components: {
        TitleBar,
        InfoView,
        ImagesView,
        ContactView
    }
}
</script>

<template>
    <TitleBar/>
    <InfoView id="Info"/>
    <ImagesView id="Images"/>
    <ContactView id="Contact"/>
</template>

