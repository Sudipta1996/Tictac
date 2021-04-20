import React, { Component } from 'react'


class Tic extends Component{
    constructor(props){
        super(props);
        this.state={
            player_move:"X",
            Board:["","","","","","","","",""],
            condition: "true"
        }
    }
    buttonClick(index){
        
        if(this.state.condition=="true"){
        let playerturn=this.state. player_move
        let board = this.state.Board
        console.log("index",index)
        board[index]=playerturn

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
            if(board[c1]!=''&&board[c1]==board[c2]&&board[c2]==board[c3]&&board[c3]==board[c1]){
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
            Board : board
        })}
    }
    render(){
        return(
            <div className="App">
                <h1>Tic_tac_toe</h1>
                <div className="board">
                    {this.state.Board.map((item,index)=><div onClick={()=>this.buttonClick(index)} className="square"><h2>{item}</h2></div>)}
                </div>
            </div>
        )
    }
}
export default Tic