import React, { Component } from 'react'
import Web3 from 'web3'
import { Abi, Address } from "../Abis/abi"
import CrearCanciones from "./CrearCanciones"
import { Link } from "react-router-dom";

class ListarAlbumes extends Component {
    constructor() {
        super()
        this.state = {
            ID:"",
            Artista: "",
            NombreAlbum: "",
            Album: []
        }
    }

    componentDidMount() {
        this.ListarAlbum()
    }

    ListarAlbum = async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
        const accounts = await web3.eth.getAccounts()
        const album = new web3.eth.Contract(Abi, Address)
        const cantidadAlbumes = await album.methods.CantidadAlbumes().call()

        for (let i = 3; i <= cantidadAlbumes; i++){
            var nombre = await album.methods.albumes(i).call()
            this.setState({
                ID:nombre.id,
                NombreAlbum: nombre.NombreAlbum,
                Artista: nombre.ArtistaAlbum
            })
            this.state.Album.push({ ID:this.state.ID, NombreAlbum: this.state.NombreAlbum, ArtistaAlbum: this.state.Artista })
        }
        this.setState({
            Album :this.state.Album 
        })
        
     //   console.log("Esto es lo de listar - ",this.state.Album)
     //   console.log("Esto es lo de listar Nombre- ",this.state.Album[0].NombreArtista)
    }

    render() {
        const myFunction = () => {

            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");

            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
        return (
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight">Albumes</h2>
                    </div>
                    <div class="my-2 flex sm:flex-row flex-col">
                        <div class="flex flex-row mb-1 sm:mb-0">
                        </div>
                        <div class="block relative">
                            <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                    <path
                                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                            </span>
                            <input id="myInput" placeholder="Search" onKeyDown={myFunction}
                                class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                        </div>
                    </div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table id="myTable" class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Artista
                                </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Álbum
                                </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Canciones
                                </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Album.map(elemento => {
                                        return (
                                            <tr key={elemento.ID}>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex items-center">
                                                        <div class="ml-3">
                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                {elemento.ArtistaAlbum}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">{elemento.NombreAlbum}</p>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <button class="bg-gray-900 hover:bg-gray-700 text-white text-base font-semibold px-6 py-2 rounded-lg focus:outline-none focus:shadow-outline">
                                                        <Link to= {{
                                                            pathname:'/canciones',
                                                            aboutProps:{
                                                                id: elemento.ID
                                                            }
                                                        }} className="btn btn-primary rounded cursor-pointer text-white">Agregar Canciones</Link>
                                                    </button>
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

export default ListarAlbumes