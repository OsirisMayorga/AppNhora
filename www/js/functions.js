window.app = new Vue({
  el: '#reservas',
  data: {
    message: 'Hello Vue!',
    steep: 0,
  },
  methods:{
    initApp:function()
    {
      console.log("Hola!");
      this.steep = 1;
    }
  },
  mounted: function () {
    // this.initApp();
   
  }


});
