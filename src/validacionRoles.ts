// Guardas de Tipo:
// Desafio:
// Implementar un guarda de tipo, el cual valide que el valor del parametro 'rol''
// pertenezca al enum 'Rol'correspondiente

enum Rol {
    ADMIN = 'admin',
    MIEMBRO = 'miembro',
    INVITADO = 'invitado',
}

interface Usuario {
    email: string,
    usuario: string,
    rol: Rol,
}

//crea una funcion para el Guarda de tipo:
function esRolValido(valor: string): valor is Rol {
    //Return de la funcion Object.Values y llamar la funcion del arreglo include 
    return Object.values<string>(Rol).includes(valor);
}


function obtenerRol(rol:string): Rol {
    if(!esRolValido(rol)){
        throw new Error('El rol pasado como parametro no es valido');
    }
    //En caso del que if no se ejecute   
    return rol as Rol;
}

function crearUsuario(email: string, usuario: string, rol: string): Usuario {
    return {
        email,
        usuario,
        rol: obtenerRol(rol)
    }
}