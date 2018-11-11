<template>
  <div class="Demo-component-2">
    <button v-bind:style="styleObject" @click="changeColour">{{ msg }}</button>
  </div>
</template>

<script>
import colourMixin from "@/mixins/colourMixin.js";
export default {
  name: "DemoComponent2",
  mixins: [colourMixin],
  props: {
    msg: String
  },
  data() {
    return {
      styleObject: {
        background: "#fafafa"
      }
    };
  },
  methods: {
    changeColour() {
      this.randomColour(this);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-size: 16px;
  padding: 20px;
  background: rgb(250, 250, 250);
  border-radius: 22px;
}
</style>
