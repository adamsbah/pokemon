import React, { Component } from 'react';
import axios from 'axios';
export default class Pokemon extends Component {
   state = {
       pokemon : []
   }
   getPokemon = () => {
       let id = Math.floor(Math.random()*150)+1
       const url = 'https://pokeapi.co/api/v2/pokemon/'+id
       axios.get(url)
       .then(response => this.setState({pokemon : response.data}))
   }
   componentDidMount(){
       this.getPokemon(4);
   }
   render() {
       return (
           <div>
               {
                 !this.state.pokemon.sprites ? "" :
               <>
                   <p>{this.state.pokemon.name} n° {this.state.pokemon.id}</p>
                   <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name} />
               </>
           }
           <br />
           <input type="button" onClick={this.getPokemon} value="Get another pokemon" />
           </div>
       )
   }
}