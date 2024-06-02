<template>
  <div class="container">
    <AppMenu></AppMenu>
    <IndexPage></IndexPage>
  </div>
</template>

<script>
import AppMenu from "./components/AppMenu.vue";
import IndexPage from "./components/IndexPage.vue";

export default {
  name: "App",
  components: {
    AppMenu,
    IndexPage,
  },
};
</script>

<style></style>
