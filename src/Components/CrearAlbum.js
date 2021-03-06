import React, { Component } from 'react'
import Web3 from 'web3'
import { Abi, Address } from "../Abis/abi"
import MetaMaskLoginButton from 'react-metamask-login-button';
import ListarAlbumes from './ListarAlbumes'

class CrearAlbum extends Component {

    constructor() {
        super();
        this.state = {
            Nombre: "",
            Artista: "",
            Album: []
        }
    }

    handleNombre = (event) => {
        this.setState({
            Nombre: event.target.value
        })
    }

    handleArtista = (event) => {
        this.setState({
            Artista: event.target.value
        })
    }

    AgregarAlbum = async (event) => {
        event.preventDefault()
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
        const accounts = await web3.eth.getAccounts()
        const album = new web3.eth.Contract(Abi, Address)
        const crearAlbum = album.methods.agregarAlbum(this.state.Nombre, this.state.Artista)
            .send({ from: accounts[0] }).once('receipt', (receipt) => {
            })
    }

    render() {
        return (
            <div>

                <div class="mx-auto max-w-6xl p-12">
                    <div class="grid grid-cols-3 py-4">
                        <div />
                        <div />
                        <div>
                            <MetaMaskLoginButton />
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-center">
                        <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                            <div class="md:text-4xl text-xl font-black uppercase">Bienvenido a tu personal blockchain!</div>
                            <div class="text-xl mt-4">Inicia agregando albumes</div>
                        </div>

                        <div class="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2 ">
                            <div class="shadow-md flex-auto max-w-sm p-10 pb-20">
                                <div class="w-full">
                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span>Artista</div>
                                    <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input onChange={this.handleArtista} placeholder="David" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
                                </div>
                                <div class="w-full">
                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span>Nombre del álbum</div>
                                    <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input onChange={this.handleNombre} placeholder="Doe" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
                                </div>
                                <div class="mt-6 relative">
                                    <button onClick={this.AgregarAlbum} class="shadow-md font-medium py-2 px-4 text-green-500
                        cursor-pointer bg-teal-600 rounded text-lg tr-mt  absolute text-center w-full">Agregar Álbum</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ListarAlbumes />
                    </div>
                </div>
            </div>
        );
    }


}

export default CrearAlbum