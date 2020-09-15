import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  './App.css'

function Drink(props){
  return(
    <div>
      <Link to={'/detail/' + props.data.strDrink}>
        <img style={{width:'300px'}} src={props.data.strDrinkThumb}/>
        <h4>{props.data.strDrink}</h4>
      </Link>
    </div>
  )
}
export default class App extends Component {
  state={
    data:[]
  }
  componentDidMount(){
    this.go()
  }
  go= async()=>{
    var resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
    var dt  = await resp.json()
    console.log(dt.drinks)
    this.setState({
      data:dt.drinks
    })
  }
  async findAlc(event) {
    var find = event.target.value
    if(find != 'Cocktail'){
      var response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + find)
      var dt  = await response.json()
      console.log(dt.drinks)
      this.setState({
        data:dt.drinks
      })
    }else{
      this.go()
    }
  }
  render() {
    return (
      <div>
          <select name="select" onChange={(event)=>{
            this.findAlc(event)
          }}>
            <option value="Alcoholic">Alcohol</option> 
            <option value="Non_Alcoholic"> NO Alcohol</option>
            <option value="Cocktail" selected>All</option>
          </select>
          <div className='cards'>
          {this.state ? this.state.data.map(elem=>{
            return(
              <Drink data={elem}/>
            )
          }):null
          }
          </div>
      </div>
    )
  }
}
