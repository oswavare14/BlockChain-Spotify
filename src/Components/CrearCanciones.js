import React, { Component } from 'react'
import Web3 from 'web3'
import { Abi, Address } from "../Abis/abi"
import ListarCanciones from './ListarCanciones'

class CrearCanciones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Nombre: "",
            Genero: "",
            Duracion: "",
            id: props.location.aboutProps.id
        }
    }

    handleNombre = (event) => {
        this.setState({
            Nombre: event.target.value
        })
    }

    handleGenero = (event) => {
        this.setState({
            Genero: event.target.value
        })
    }

    handleDuracion = (event) => {
        this.setState({
            Duracion: event.target.value
        })
    }

    AgregarCancion = async (event) => {
        event.preventDefault()
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
        const accounts = await web3.eth.getAccounts()
        const album = new web3.eth.Contract(Abi, Address)
        const crearAlbum = album.methods.agregarCancion(this.state.id, this.state.Nombre, this.state.Genero, this.state.Duracion)
            .send({ from: accounts[0] }).once('receipt', (receipt) => {
            })
    }



    render() {
        return (
            <div class="mx-auto max-w-6xl p-12">
                <div class="flex flex-col md:flex-row justify-center">
                    <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                        <div class="md:text-4xl text-xl font-black uppercase">Bienvenido a tu personal blockchain!</div>
                        <div class="text-xl mt-4">Inicia agregando Canciones</div>
                    </div>

                    <div class="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2 ">
                        <div class="shadow-md flex-auto max-w-sm p-10 pb-20">
                            <div class="w-full">
                                <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span>Nombre Cancion</div>
                                <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input onChange={this.handleNombre} placeholder="David" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
                            </div>
                            <div class="w-full">
                                <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span>Duracion</div>
                                <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input type="number" onChange={this.handleDuracion} placeholder="3" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
                            </div>
                            <div class="w-full">
                                <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span>Genero</div>
                                <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input onChange={this.handleGenero} placeholder="David" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
                            </div>
                            <div class="mt-6 relative">
                                <button onClick={this.AgregarCancion} class="shadow-md font-medium py-2 px-4 text-green-500
                        cursor-pointer bg-teal-600 rounded text-lg tr-mt  absolute text-center w-full">Agregar Cancion</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ListarCanciones id={this.state.id}/>
                </div>
            </div>
        );
    }
}

export default CrearCanciones