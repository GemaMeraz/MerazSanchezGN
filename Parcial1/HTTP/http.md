# Métodos y Codigos de repuesta HTTP

HTTP es un protocolo, el acrónimo significa Protocolo de Transferencia de Hipertexto. Este protocolo rige la estructura y el lenguaje de las peticiones y respuestas que tienen lugar entre clientes y servidores. Los clientes suelen ser los navegadores web, pero pueden presentarse de muchas formas, como los robots de los motores de búsqueda.

### **Métodos de las peticiones**
Los HTTP post request o métodos HTTP de petición son solicitudes que se realizan para llevar a cabo una acción en un recurso concreto, como puede ser el acceso a una página concreta o el envío de los datos de un formulario web.

Las peticiones HTTP consisten en una serie de mensajes que un cliente web realiza y que conllevan una acción en el servidor web a las que se dirigen. Estos mensajes pueden ir acompañados de distintos parámetros con la intención de que el servidor web comprenda mejor qué es lo que se le solicita. Estos parámetros se pueden apreciar en las direcciones web, pues se adjuntan a la misma.

* **GET** .- Las peticiones HTTP GET se utilizan para recuperar o extraer información de un servidor. Este método de petición tiene la particularidad de que solo puede ser utilizado para recuperar información. El método HTTP GET es uno de los más utilizados desde el comienzo de la world wide web. Un ejemplo habitual del uso de esta petición es la solicitud que realiza un navegador web para solicitar un archivo HTML. Cuando el usuario introduce la URL de un sitio web, el navegador hace una petición HTTP GET al servidor solicitando el archivo HTML que le permite mostrar el contenido del sitio.

* **HEAD**.- Este método de petición HTTP solicita al servidor que solo envíe el encabezado de la respuesta y no el archivo completo. Un ejemplo del uso de HTTP HEAD es cuando se accede a un archivo de gran tamaño, y con esta petición HEAD se obtiene información sobre el tamaño del archivo, para luego decidir si se descarga o no. El método HEAD se suele utilizar para comprobar los enlaces rotos de un sitio web, ya que es mucho más rápido que hacerlo con GET.

* **POST**.- Este método HTTP se utiliza cuando es necesario enviar información desde el cliente al servidor. Por ejemplo, cuando un usuario rellena un formulario web, el navegador envía una petición POST hacia el servidor para que reciba y procese la información recibida.

* **PUT** .- Es similar al método de petición POST, solo que el método PUT puede ser ejecutado varias veces y tiene el mismo efecto, caso contrario a un POST que cada vez que se ejecuta realiza la agregación de un nuevo objeto, ya que semánticamente es como una inserción de un nuevo registro. 

* **DELETE**.- Este método de petición permite eliminar un recurso específico.  También puede ser ejecutado varias veces y tiene el mismo efecto similar al PUT y GET. Semánticamente se utiliza para eliminar de información existente, es semejante a un DELETE de datos a nivel de base de datos.

* **PATCH**.- Este método de petición es similar al método HTTP GET, sin embargo no retorna ningún contenido HTTP Response. Cuando se trabaja con este método de petición no se está interesado en el contenido, solo en el código de HTTP de Respuesta y el encabezado (Headers). Este método se puede emplear en casos particulares.

* **OPTIONS**.- Es uno de los métodos HTTP. Este método se utiliza para comprobar que opciones de comunicación posee el recurso de destino. Es más utilizado con CORS (Cross-Origin Resource Sharing), para revisar si el servidor acepta peticiones de diferentes orígenes.

Los tipos de peticiones HTTP como los métodos DELETE, PATCH y OPTIONS son relativamente poco frecuentes en el uso cotidiano.

### **Códigos de respuesta**
Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:
1. 100s: Códigos informativos que indican que la solicitud iniciada por el navegador continúa.
2. 200s: Los códigos con éxito regresaron cuando la solicitud del navegador fue recibida, entendida y procesada por el servidor.
3. 300s: Códigos de redireccionamiento devueltos cuando un nuevo recurso ha sido sustituido por el recurso solicitado.
4. 400s: Códigos de error del cliente que indican que hubo un problema con la solicitud.
5. 500s: Códigos de error del servidor que indican que la solicitud fue aceptada, pero que un error en el servidor impidió que se cumpliera.

**Ejemplos**

|Código  |  Significado|
|------- | -----------------|
|*100 Coninue.* |  Este código de estado notifica que el servidor ha recibido la primera petición y está esperando recibir más instrucciones del navegador.|  
|*101 Switching Protocols.* |  Se utiliza cuando el servidor acepta un cambio propuesto por el navegador.|  
|*102 Processing.* |  El servidor ha recibido la petición, pero no la ha completado. Esto evita que el navegador interprete que la petición se ha perdido, si no que todavía no ha finalizado.|  
|*103 Checkpoint.* |  Se utiliza para reanudar una petición que previamente fue perdida o cancelada.|  
|*200 OK.* |Se utiliza cuando la petición fue completada de manera exitosa. No suele mostrarse al usuario final.|
|*201 Created.*|La petición del navegador se completó correctamente y se creó un nuevo recurso.
|*203 Non-Authoritative Information.*| La petición del navegador se completó correctamente, pero el contenido corresponde a un servidor diferente al que se ha realizado la petición.|
|*204 No Content.*| La petición del navegador se completó correctamente, pero la respuesta no muestra ningún tipo de contenido.|
|*205 Reset Content.*| Se utiliza cuando la petición del usuario se completa, pero es necesario volver a cargar la página. Es muy habitual cuando se envían datos a través de un formulario de contacto y se recarga la página.|
|*400 Bad Request.*| El servidor no entiende la petición del navegador porque la sintaxis no es correcta.|
|*401 Unauthorized.*| La petición que realiza el navegador precisa autenticación.|
|*403 Forbidden.*|La petición que realiza el navegador es correcta, pero denega el acceso al recurso solicitado.|
|*404 Not Found.*|  El recurso que solicita el navegador no se encuentra o no está disponible en el servidor.|
|*405 Method Not Allowed.*| El navegador utiliza un método para obtener el recurso que no es aceptado por el servidor.|
|*408 Request Timeout.*| Este código HTTP se muestra cuando el navegador ha tardado tanto tiempo en realizar su petición que el servidor ya no la espera.|
|*429 Too Many Request.*| El navegador realiza demasiadas peticiones en un período de tiempo determinado.|
|*500 Internal Server Error.*| No se puede completar la petición, ya que se ha producido un error inesperado en el navegador.|
|*501 Not implemented.*| El servidor no soporta alguna funcionalidad necesaria para responder a la solicitud que realiza el navegador.|
|*502 Bad Gateway.*| El servidor no puede responder con la petición del navegador, ya que este servidor está actuando como proxy o gateway, o tiene instalado un proxy inverso y ha recibido una respuesta no válida desde dicho servidor.|

![Imagen de ejemplo](https://kinsta.com/wp-content/uploads/2016/08/google-404-1-1.png)  
Imagen de ejemplo de un código de respuesta  

* https://kinsta.com/es/blog/codigos-de-estado-de-http/
* https://www.lucushost.com/blog/codigos-http-mas-comunes/
* https://www.ibm.com/docs/es/ibm-mq/7.5?topic=ssfksj-7-5-0-com-ibm-wmqfte-doc-web-httpresponsecodes-htm
* https://developer.mozilla.org/es/docs/Web/HTTP/Status
* https://kinsta.com/es/base-de-conocimiento/que-es-una-peticion-http/
* https://diego.com.es/metodos-http
* https://www.hostingplus.mx/blog/metodos-http-de-peticion-que-debes-conocer/
* https://www.ionos.mx/digitalguide/hosting/cuestiones-tecnicas/http-request/




