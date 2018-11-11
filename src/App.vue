<template>
  <div id="app">
    <h1>Using Mixin With Components</h1>
    <p>2 different components  using mixin that changes the background color to a random color</p>
    <h2>below are 2 components from demoComponent1</h2>
    <DemoComponent1 msg="Change my colour with a mixin"/>
    <DemoComponent1 msg="Change my colour with a mixin"/>
    <h2>below are 2 components from demoComponent2</h2>
    <DemoComponent2 msg="Change my colour with a mixin"/>
    <DemoComponent2 msg="Change my colour with a mixin"/>
  </div>
</template>

<script>
import DemoComponent1 from "./components/DemoComponent1.vue";
import DemoComponent2 from "./components/DemoComponent2.vue";

export default {
  name: "app",
  components: {
    DemoComponent1,
    DemoComponent2
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin-bottom: 10px;
}
</style>
