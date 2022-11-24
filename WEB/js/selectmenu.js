$(document).ready(function() {    
    $("#datos").hide();
    $("#menues").hide();

$('#compra1').click(function(){
        var valor="$2000";
        document.getElementById('costo').setAttribute("value", valor);
                $("#menues").hide();
                $("#datos").show();
                swal({
                    title: "Gracias por su compra",
                    text: "Por favor, complete los siguientes datos para continuar con su pedido",
                    icon: "info",
                    button: "Continuar",
                  });               
})

$('#compra2').click(function(){
    var valor="$1750";
    document.getElementById('costo').setAttribute("value", valor);
            $("#menues").hide();
            $("#datos").show();
            swal({
                title: "Gracias por su compra",
                text: "Por favor, complete los siguientes datos para continuar con su pedido",
                icon: "info",
                button: "Continuar",
              });      
})
    
$('#compra3').click(function(){
    var valor="$1500";
    document.getElementById('costo').setAttribute("value", valor);
            $("#menues").hide();
            $("#datos").show();
            swal({
                title: "Gracias por su compra",
                text: "Por favor, complete los siguientes datos para continuar con su pedido",
                icon: "info",
                button: "Continuar",
              });      
})
        

$('#compra4').click(function(){
var valor="$1300";
document.getElementById('costo').setAttribute("value", valor);
        $("#menues").hide();
        $("#datos").show();
        swal({
            title: "Gracias por su compra",
            text: "Por favor, complete los siguientes datos para continuar con su pedido",
            icon: "info",
            button: "Continuar",
          });      
})

$('#entrar').click(function(){
    var usuario= $("#usuario").val();
    var contraseña= $("#contraseña").val();
    if(usuario=="Usuario" && contraseña=="PedidosYa")
    {
        $("#menues").show();
        $("#foot").hide();
        $("#login").hide();
    }
    else
    {
        swal({
            title: "Error",
            text: "Error de usuario o contraseña",
            icon: "error",
            button: "Volver a intentar",
          });    
    }
    })


    $('#guardar').click(function(){
        var nombre= $("#nombre").val();
        var direccion= $("#Dir").val();
        var telefono= $("#telefono").val();
        var costo= $("#costo").val();
        if( validar()){
        swal({
            title: "Gracias por su compra",
            text: ''+nombre+', su pedido sera enviado a '+direccion+', antes de llegar nos contactaremos al '+telefono+'. Recuerde que el costo de su pedido es de '+costo+'. Muchas Gracias',
            icon: "success",
            button: "Continuar",
          });      
       $("#datos").hide();
        $("#menues").show();
    }})

        function tiene_numeros(validable){
            var numeros="0123456789";
            for(i=0; i<validable.length; i++){
               if (numeros.indexOf(validable.charAt(i),0)!=-1){
                  return true;
               }
            }
            return false;
         }
        
         function validar(){
            var nombre= $("#nombre").val();
            var direccion= $("#Dir").val();
            var telefono= $("#telefono").val();
            var costo= $("#costo").val();
            if (tiene_numeros (nombre)){
                swal({
                    title: "Error",
                    text: 'Su Nombre no puede contener numeros',
                    icon: "error",
                    button: "Continuar",
                  });}  
                else if (nombre == ""){
                        swal({
                            title: "Error",
                            text: 'Nombre no puede estar vacio.',
                            icon: "error",
                            button: "Continuar",
                          });
                        }
                        else if (direccion == ""){
                            swal({
                                title: "Error",
                                text: 'Dirección no puede estar vacio.',
                                icon: "error",
                                button: "Continuar",
                              });
                            }
                            else if ((telefono == "" || !(tiene_numeros(telefono))) ){
                                swal({
                                    title: "Error",
                                    text: 'Telefono no admitido',
                                    icon: "error",
                                    button: "Continuar",
                                  });
                                }
                    else{
                        return true;
                    }
                    }
    
})



