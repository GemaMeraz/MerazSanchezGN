export const pasarMayusculas=(cadena)=>{
    return cadena.toUpperCase();
}

export const quitarEspacios=(cadena)=>{
    return cadena.replace(/ /g,"");
}

const obtenerLongitud=(cadena)=>{
    return cadena.length;
}

/*exports.pasarMayusculas=pasarMayusculas;
exports.quitarEspacios=quitarEspacios;
exports.obtenerLongitud=obtenerLongitud;*/