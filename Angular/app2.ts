// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder:string, arma:string="arco" ){
    
    var mensaje:string;

    if (nombre){
        if( poder ){
           mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        }else{
           mensaje = nombre + " tiene un " + poder;
        }
    }else{
        console.log("Error, debe ingresar un nombre valido");
    }
}
getAvenger(1,"Volar");

