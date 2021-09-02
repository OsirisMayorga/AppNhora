window.app = new Vue({
  el: '#reservas',
  data: {
    message: 'Hello Vue!',
    steep: 0
  },
  methods:{
    initApp:function()
    {
      console.log("Hola!");
      this.steep = 1;
    },
    cancelarAlert:function(){
      alert("Hello! I am an alert box!");
    }
  },
  mounted: function () {
    // this.initApp();   
  }


});
