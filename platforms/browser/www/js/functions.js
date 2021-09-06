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
      Swal.fire({
        title: 'Realmente deseas cancelar?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Si, cancelar`,
        denyButtonText: `No, regresar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    },
    openModal: function(id)
    {
      $("#"+id).modal("show");
    },
  },
  mounted: function () {
    // this.initApp();   
  }


});
