let usuario='Admin';
let contraseña='Admin';
let validarUsuario=prompt("Ingrese su usuario")
let validarContraseña=prompt("Ingrese su contraseña")
let repetir=true;
let saldoCuneta=1000000;

//Funciones:
let consultarSaldo=function(){
    console.log("Su salod es: "+saldoCuneta);
}
function retirarDinero(){
    console.log("Haz un retiro por: ");
    let valorTransaccion=Number(prompt("Ingrese el monto a retirar"));
    if(valorTransaccion<10000){
        console.log("El saldo minimo a retirar son 10000")}
    else if(valorTransaccion>saldoCuneta){console.log("No tines Fondos suficientes");}
    else{console.log("Usted hizo un retiro por: " + saldoCuneta);
        saldoCuneta-=valorTransaccion;
        console.log("Su nuevo saldo es: "+saldoCuneta);
    }
}
function transferirDinero(){
    valorTransaccion=Number(prompt("Inrese el valor que desea Transferir: "))
    if(valorTransaccion>saldoCuneta){console.log("Fondos Insuficinetes");}
    else{console.log("Usted hizo una transferencia por: "+valorTransaccion)
        saldoCuneta-=valorTransaccion;
        console.log("Su nuevo saldo es: "+saldoCuneta);
    };
}
function consignarDinero(){
    let valorTransaccion=Number(prompt("Ingrese el monto a consignar"));
    if(valorTransaccion<10000){
        console.log("El saldo minimo a consignar son 10000")}
    else if(valorTransaccion>saldoCuneta){console.log("No tines Fondos suficientes");}
    else{console.log("Usted recibió: " + saldoCuneta+" Pesos");
        saldoCuneta+=valorTransaccion;
        console.log("Su nuevo saldo es: "+saldoCuneta);
    } 

}
if(usuario==validarUsuario){
    if(contraseña==validarContraseña){
        console.log("Bienvenido: "+validarUsuario);
        
        while(repetir){
            let menu=Number(prompt("1.Consultar saldo \n 2.Retirar Dinero \n 3.Transferir Dinero  \n 4.Consignar Dinero \n 5.Salir"))
            switch(menu){
                case 1:
                    consultarSaldo();
                    break;
                
                case 2:
                    retirarDinero();
                    break;
                case 3:
                    transferirDinero()
                    break;
                case 4:
                    consignarDinero()
                    break;
                case 5:
                    repetir=false;
                    break;
            }
    
        }

    }else{console.log("Contraseña incorrecta");
    }
}else{
    console.log("Usuario no existe");}
        