const cells=document.querySelectorAll('.bt');
const resultText=document.querySelector('.result-text');
const resetButton=document.getElementById('reset-Button');
let currentPlayer='X';
let gameBoard=['','','','','','','','',''];
let gameActive=true;
const winningCombinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const checkWinner=() =>{
    for(let combo of winningCombinations){
        const[a,b,c]=combo;
        if(gameBoard)[a]&&gameBoard[a]===gameBoard[b]&&gameBoard[a]===gameBoard[c]
    }
}
