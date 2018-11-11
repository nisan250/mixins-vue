<template>
  <div class="Demo-omponent-1">
    <button v-bind:style="styleObject" @click="changeColour">{{ msg }}</button>
  </div>
</template>

<script>
import colourMixin from "@/mixins/colourMixin.js";
export default {
  name: "DemoComponent1",
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
  created() {
    console.log("DemoComponent1 Component");
  },
  methods: {
    changeColour() {
      this.randomColour(this);
    }
  }
};
</script>