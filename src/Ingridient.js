import React, { Component } from 'react'

export default class Ingridient extends Component {

    state={
        data:[],
        param:''
    }

    componentWillMount(){
        this.setState({
            param:this.props.match.params.ingridient
        })
    }


        async componentDidMount(){
            var name  = this.state.param
            var resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i='+name)
            var dt = await resp.json()
    
            this.setState({
                data: dt.ingredients[0]
            })
            console.log(this.state.data)
        }
    

    render() {
        let state = this.state
        return (
            <div>
                <h1>{this.state.data.strIngredient}</h1>
                <p>{this.state.data.strDescription}</p>

            </div>
        )
    }
}
