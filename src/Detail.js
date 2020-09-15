import React, { Component } from 'react'
import {Link} from 'react-router-dom'

function Coctail(props){
    return(
        <div>
            <img src={props.data.strDrinkThumb}/>
            <h1>{props.data.strDrink}</h1>
            <b> Ingredients </b>
            <ul>
                <li>
                <Link to={"/ingridient/" + props.data.strIngredient1 }>{props.data.strIngredient1}</Link></li>
                <li><Link to={"/ingridient/" + props.data.strIngredient2 }>{props.data.strIngredient2}</Link></li>
                <li><Link to={"/ingridient/" + props.data.strIngredient3 }>{props.data.strIngredient3}</Link></li>
                <li><Link to={"/ingridient/" + props.data.strIngredient4 }>{props.data.strIngredient4}</Link></li>
                <li><Link to={"/ingridient/" + props.data.strIngredient5 }>{props.data.strIngredient5}</Link></li>
                <li><Link to={"/ingridient/" + props.data.strIngredient6 }>{props.data.strIngredient6}</Link></li>
               

            </ul>
            <b> Measure </b>
            <ul>
                <li>{props.data.strMeasure1}</li>
                <li>{props.data.strMeasure2}</li>
                <li>{props.data.strMeasure3}</li>
                <li>{props.data.strMeasure4}</li>
                <li>{props.data.strMeasure5}</li>
                <li>{props.data.strMeasure6}</li>
                
            </ul>
        </div>
    )
}


export default class Detail extends Component {

    state={
        data:[],
        param:''
    }

    componentWillMount(){
        this.setState({
            param:this.props.match.params.name
        })
    }
    async componentDidMount(){
        var name  = this.state.param
        var resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+name)
        var dt = await resp.json()

        this.setState({
            data: dt.drinks
        })
    }

    render() {
        let state = this.state
        return (
            <div>
                {state ? state.data.map(elem=>{
                    return(
                        <Coctail data={elem}/>
                    )
                }):null}
            </div>
        )
    }
}
