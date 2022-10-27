new gridjs.Grid({
    columns: ['Nombre', 'Marca', 'Categoria', 'Contenido','Proveedor','Descripcion','Precio'],
    style:{
      td: {
        border: '2px solid #ccc'
      },
      table: {
        'font-size': '15px'
      }
      
    },
    server: {
      url: 'http://localhost:8084/mostrarProductos',
      then: data => data.map(producto => 
        [producto.nomProducto, producto.marcaProd, producto.catProd, producto.contProd, producto.proveedor, producto.desProd, producto.precioProd]
      )
    } 
    
  }).render(document.getElementById("wrapper"));