import React, { Component } from 'react'


class Tic extends Component{
    constructor(props){
        super(props);
        this.state={
            player_move:"X",
            Square:["","","","","","","","",""],
            condition: "true"
        }
    }
    
    buttonClick(index){
        
        if(this.state.condition=="true"){
        let playerturn=this.state. player_move
        let square = this.state.Square
        console.log("index",index)
        square[index]=playerturn
            
            let winning=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4.7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

       
        let conditions="true"
        for(let i=0;i<winning.length;i++){
            let winer=winning[i]
            let c1=winer[0]
            let c2=winer[1]
            let c3=winer[2]
            if(square[c1]!=''&&square[c1]==square[c2]&&square[c2]==square[c3]&&square[c3]==square[c1]){
                alert(`winning player ${playerturn}`)
                conditions="false"
            }
        }
        
        this.setState({
            condition: conditions
        })


        playerturn=(playerturn=="X")?"O":"X"
        this.setState({
            player_move:playerturn,
            Square : square
        })}
    }
    render(){
        return(
            <div className="App">
                <h1>Tic_tac_toe</h1>
                <div className="square">
                    {this.state.Square.map((item,index)=><div onClick={()=>this.buttonClick(index)} className="square"><h2>{item}</h2></div>)}
                </div>
            </div>
        )
    }
}
export default Tic
