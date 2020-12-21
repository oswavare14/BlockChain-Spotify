export const Address = "0xE7d0666789B5f070b91766eCD575e9d272Fadf22"

export const Abi = [
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "albumes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "CantidadCanciones",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "NombreAlbum",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ArtistaAlbum",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_Nombre",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Artista",
          "type": "string"
        }
      ],
      "name": "agregarAlbum",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id_album",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_NombreCancion",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Genero",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_DuracionSegundos",
          "type": "uint256"
        }
      ],
      "name": "agregarCancion",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]