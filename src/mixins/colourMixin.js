const colorMixin = {
  created() {
    console.log("from within the mixin");
  },

  methods: {
    randomColour(componentThis) {
      const colours = [
        "green",
        "blue",
        "orange",
        "yellow",
        "red"
      ];
      let randomColour;
      let randomColour2;

      function randomizeColors() {
        randomColour = colours[Math.floor(Math.random() * colours.length)];
        randomColour2 = colours[Math.floor(Math.random() * colours.length)];
      }
      randomizeColors();

      while(randomColour === randomColour2) {
        randomizeColors();
      }
      console.log(randomColour, "randomColour");
      console.log(randomColour2, "randomColour2");

      componentThis.styleObject.background = randomColour;
      componentThis.styleObject.color = randomColour2;
      return randomColour;
    }
  }
};

export default colorMixin;
