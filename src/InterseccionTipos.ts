// La interseccion de Tipos
// Consiste en combinar dos o mas interfaces para crear una nueva, 
// con todas las propiedades de las interfaces originales.

// Interfaces: Prfil y Acceso

interface Perfil{
  name: string;
  compania: string;
  birthdate: string;
  anddres: string;
  about: string;
}

interface Acceso {
  id: string;
  email: string;
  user: string;
  password: string;
}

//Esta es la intercepcion
type Usuario = Perfil & Acceso;

function CrearUsuario(perfil: Perfil, acceso: Acceso): Usuario {
  return {
    ...perfil,
    ...acceso,
  }
}
