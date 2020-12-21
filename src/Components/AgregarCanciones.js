import React, { Component } from 'react'

class AgregarCanciones extends Component{
    constructor(){
        super()
        this.state={
            Nombre:"",
            Duracion:"",
            Genero:""
        }
    }

    handlerNombre =(event) =>{
        console.log(event.target.value);
        this.setState({
            Nombre:event.target.value
        })
    }


    handlerDuracion =(event) =>{
        console.log(event.target.value);
        this.setState({
            Duracion:event.target.value
        })
    }


    handlerGenero =(event) =>{
        console.log(event.target.value);
        this.setState({
            Genero:event.target.value
        })
    }

    render(){
        return (
            <div className="grid min-h-screen place-items-center">
                <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                    <h1 className="text-xl font-semibold text-center">Hola 👋<span className="font-normal"> Aquí puedes agregar canciones</span></h1>
                    <form className="mt-6">
                    <div className="flex justify-between gap-3">
                        <span className="w-1/2">
                        <label className="block text-xs font-semibold text-gray-600 uppercase">Nombre de la canción</label>
                        <input onChange={this.handlerNombre} id="Nombre" type="text" name="Nombre" placeholder="Bad News" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        </span>
                        <span className="w-1/2">
                        <label className="block text-xs font-semibold text-gray-600 uppercase">Género</label>
                        <input onChange={this.handlerGenero} id="Genero" type="text" name="Genero" placeholder="Rhythm and Blues" autoComplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        </span>
                    </div>
                    <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Duración en segundos</label>
                    <input onChange={this.handlerDuracion} id="Duracion" type="number" name="Duracion" placeholder="200" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                        Guarda tu canción
                    </button>

                    </form>
                </div>
                </div>
        );
    }

}

export default AgregarCanciones;