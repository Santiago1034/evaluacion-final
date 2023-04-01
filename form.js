$(document).ready(function(){
    /* alert("Holaaaa") */
    $('#listar').on('click',function(){
        let tabla= document.querySelector('#tabla')   
        tabla.innerHTML='<thead><th>Codigo</th><th>nombre</th><th>categoria</th><th>precio</th><th>cantidad</th><th>total</th></thead>';
        $.ajax({
            url:"http://localhost:8080/producto",
            type: "GET",
            dataType: "JSON",
            success:function(respuesta){
                console.log(respuesta);
                for( i=0;i <=respuesta.length;i++){
                    tabla.innerHTML+='<tr><td>'+respuesta[i].codigo+'</td><td>'+
                        respuesta[i].nombre+'</td><td>'+    
                        respuesta[i].categoria+'</td><td>'+    
                        respuesta[i].precio+'</td><td>'+
                        respuesta[i].cantidad+'</td><td>'+
                        respuesta[i].total+ '</td></tr>'
                        
                } 
            }
        });     
    });

    $('#enviar').on('click', function() {
        let datos = {
            codigo: parseInt($('#codigo').val()),
            nombre: $('#nombre').val(),
            categoria: $('#categoria').val(),
            precio: $('#precio').val(),
            cantidad: $('#cantidad').val(),
            
        }
        console.log(datos);
        let datosEnvio = JSON.stringify(datos);
        console.log(datosEnvio);
    
        $.ajax({
            url: "http://localhost:8080/agregar-producto",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            dataType: "JSON",
            success: function(respuesta) {
                alert(respuesta);
            }
        });
        
    });


    $('#preciobt').on('click',function(){
        $.ajax({
            url:"http://localhost:8080/precio-mayor",
            type: "GET",
            dataType: "TEXT", 
            success: function(respuesta){
                alert(respuesta)
            
                
            }
        })
    })

});