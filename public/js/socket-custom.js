var socket = io();

//escuchar sucesos
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Pedro',
    mensaje: 'Hola muchachos'
}, function(resp) {
    console.log('respuesta server:', resp);
})

//escuchar información
socket.on('enviarMensaje', function(respuesta) {

    console.log('Servidor :', respuesta);
})