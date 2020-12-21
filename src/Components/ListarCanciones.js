import React, { Component } from 'react'
import Web3 from 'web3'
import { Abi, Address } from "../Abis/abi"

class ListarCanciones extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Nombre: "",
            Duracion: "",
            Genero: "",
            Datos: [],
            id: props.id
        }
    }

    componentDidMount() {
        this.ListarAlbum()
    }

    ListarAlbum = async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
        const accounts = await web3.eth.getAccounts()
        const album = new web3.eth.Contract(Abi, Address)
        /*const cantidadAlbumes1 = await album.methods.albumes(2).call()
        const cantidadAlbumes = cantidadAlbumes1.CantidadCanciones().call()
        console.log("Estas son las canciones ", cantidadAlbumes)
        console.log(cantidadAlbumes)
        for (let i = 1; i <= cantidadAlbumes; i++) {
            //var nombre1 = await album.methods.canciones(3).call()
            //var nombre = await nombre.canciones(i).call()
            console.log("este es el nombre - ", nombre)
            this.setState({
                Nombre: nombre.NombreCancion,
                Duracion: nombre.DuracionSegundos,
                Genero: nombre.GeneroCancion
            })
            this.state.Datos.push({ Nombre: this.state.Nombre, Genero: this.state.Genero, Duracion: this.state.Duracion })
        }
        this.setState({
            Album: this.state.Album
        })
*/
    }

    render() {
        return (
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight">Canciones</h2>
                    </div>
                    <div class="my-2 flex sm:flex-row flex-col">
                        <div class="flex flex-row mb-1 sm:mb-0">
                        </div>
                    </div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table id="myTable" class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Nombre Cancion
                                </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Duracion
                                </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Genero
                                </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Datos.map(elemento => {
                                        return (
                                            <tr key={elemento.ID}>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex items-center">
                                                        <div class="ml-3">
                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                {elemento.Nombre}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">{elemento.Duracion}</p>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">{elemento.Genero}</p>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListarCanciones