$(document).ready(function () {
    $("#listar").on("click", function () {
      let tabla = document.querySelector("#tabla");
      
      let titulo = document.querySelector("#titulo");
      titulo.innerHTML = "Productos";
      tabla.innerHTML =
        "<thead><th>Codigo</th><th>nombre</th><th>categoria</th><th>precio</th><th>cantidad</th><th>total</th></thead>";
      $.ajax({
        url: "http://localhost:8080/producto",
        type: "GET",
        dataType: "JSON",
        success: function (respuesta) {
          /* Esta funcione forEach recorre el resultado, para que no le aparezca a cada rato el error en la consola */
          respuesta.forEach((producto) => {
            tabla.innerHTML +=
              "<tr><td>" +
              producto.codigo +
              "</td><td>" +
              producto.nombre +
              "</td><td>" +
              producto.categoria +
              "</td><td>" +
              producto.precio +
              "</td><td>" +
              producto.cantidad +
              "</td><td>" +
              producto.total +
              "</td></tr>";
          });
        },
      });
    });
  
    $("#enviar").on("click", function () {
      let datos = {
        codigo: parseInt($("#codigo").val()),
        nombre: $("#nombre").val(),
        categoria: $("#categoria").val(),
        precio: $("#precio").val(),
        cantidad: $("#cantidad").val(),
      };
      console.log(datos);
      let datosEnvio = JSON.stringify(datos);
      console.log(datosEnvio);
  
      $.ajax({
        url: "http://localhost:8080/agregar-producto",
        type: "POST",
        data: datosEnvio,
        contentType: "application/JSON",
        dataType: "JSON",
        success: function (respuesta) {
          alert(respuesta);
        },
      });
    });
  
    $("#preciobt").on("click", function () {
      
      let tabla = document.querySelector("#tabla");
      
      let titulo = document.querySelector("#titulo");
      titulo.innerHTML = "Precio mayor";
      tabla.innerHTML =
        "<thead><th>Codigo</th><th>nombre</th><th>categoria</th><th>precio</th><th>cantidad</th><th>total</th></thead>";
      $.ajax({
        url: "http://localhost:8080/precio-mayor",
        type: "GET",
        dataType: "JSON",
        success: function (respuesta) {
          
          tabla.innerHTML +=
            "<tr><td>" +
            respuesta.codigo +
            "</td><td>" +
            respuesta.nombre +
            "</td><td>" +
            respuesta.categoria +
            "</td><td>" +
            respuesta.precio +
            "</td><td>" +
            respuesta.cantidad +
            "</td><td>" +
            respuesta.total +
            "</td></tr>";
        },
      });
    });
  
    $("#menorbtn").on("click", function () {
      /*se agrega  editar por cada producto vendira a ser un boton*/
      let tabla = document.querySelector("#tabla");
     
      let titulo = document.querySelector("#titulo");
      titulo.innerHTML = "Precio menor";
      /* agregar boton editar */
      tabla.innerHTML =
        "<thead><th>Codigo</th><th>nombre</th><th>categoria</th><th>precio</th><th>cantidad</th><th>total</th><th>editar</th></thead>";
      $.ajax({
        url: "http://localhost:8080/precio-min",
        type: "GET",
        dataType: "JSON",
        success: function (respuesta) {
        
          respuesta.forEach((producto) => {
            tabla.innerHTML +=
              "<tr><td>" +
              producto.codigo +
              "</td><td>" +
              producto.nombre +
              "</td><td>" +
              producto.categoria +
              "</td><td>" +
              producto.precio +
              "</td><td>" +
              producto.cantidad +
              "</td><td>" +
              producto.total +
              "</td>" +
              
              '<th><button onclick="editar('+producto.codigo+')" type="button">Editar</button></th></tr>';
          });
        },
      });
    });
  });
  
  
  
  function editar(codigo) {
    let tabla = document.querySelector("#tabla");
    tabla.innerHTML +=
      "  <tr><th>"+codigo+"</th><th><input type='text' id='name' /></th><th><input type='text' id='category'/></th><th><input type='text' id='price'/></th><th><input type='text' id='cant'/></th><th><input type='text' id='tot'/></th><th><button onclick='enviar("+ codigo +")' type='button'>Enviar</button></th></tr>";
  }
  
 
  
  function enviar(codigo) {
    let producto = {
      codigo: codigo,
      nombre: $("#name").val(),
      categoria: $("#category").val(),
      precio: $("#price").val(),
      cantidad: $("#cant").val(),
      total: $("#total").val()
    }
  
    const data = JSON.stringify(producto)
  
    $.ajax({
      url: "http://localhost:8080/editar/"+codigo,
      type: "PUT",
      data: data,
      contentType: "application/JSON",
      datatype: "JSON",
      success: function (res) {
        alert(res)
      }
    })
    console.log(producto)
  }