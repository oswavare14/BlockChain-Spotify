pragma solidity >=0.4.22 <0.8.0;

contract Albumes{

    uint CantidadAlbumes;

    struct Cancion{
        string NombreCancion;
        string Genero;
        uint DuracionSegundos;
    }

    struct Album{
        uint CantidadCanciones;
        uint id;
        string NombreAlbum;
        string ArtistaAlbum;
        mapping (uint => Cancion) canciones;
    }

    mapping (uint => Album) public albumes;


    function agregarAlbum(string memory _Nombre, string memory _Artista) public{
        CantidadAlbumes++;
        albumes[CantidadAlbumes].id = CantidadAlbumes;
        albumes[CantidadAlbumes].NombreAlbum = _Nombre;
        albumes[CantidadAlbumes].ArtistaAlbum= _Artista;
        albumes[CantidadAlbumes].CantidadCanciones = 0;

    }

    function agregarCancion (uint id_album, string memory _NombreCancion, string memory _Genero, uint _DuracionSegundos) public {
        albumes[id_album].CantidadCanciones++;
        uint indice = albumes[id_album].CantidadCanciones;
        albumes[id_album].canciones[indice].NombreCancion = _NombreCancion;
        albumes[id_album].canciones[indice].Genero = _Genero;
        albumes[id_album].canciones[indice].DuracionSegundos = _DuracionSegundos;

    }





}