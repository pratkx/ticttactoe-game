import {useState} from 'react';

function Square({value,onsqClick})
{
  return <button className="square" onClick={onsqClick}>{value}</button>;
}
export default function Board() {

  const[xisnext,setxisnext]=useState(true);
  const[cs,ns]=useState(Array(9).fill(null));
  function handleClick(i)
  {
    if(cs[i]||calculateWinner(cs))
     return;
    const nextsq=cs.slice();
    if(xisnext)
     nextsq[i]="X";
    else
     nextsq[i]="O";
    setxisnext(!xisnext);
    ns(nextsq);
  }

  const winner = calculateWinner(cs);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xisnext ? "X" : "O");
  }

  return (
    <>
        <div className="status">{status}</div>
        <div className="board-row">
        <Square value={cs[0]}onsqClick={() => handleClick(0)} />
        <Square value={cs[1]}onsqClick={() => handleClick(1)} />
        <Square value={cs[2]}onsqClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={cs[3]}onsqClick={() => handleClick(3)} />
        <Square value={cs[4]}onsqClick={() => handleClick(4)} />
        <Square value={cs[5]}onsqClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={cs[6]}onsqClick={() => handleClick(6)} />
        <Square value={cs[7]}onsqClick={() => handleClick(7)} />
        <Square value={cs[8]}onsqClick={() => handleClick(8)} />
      </div>
    </>
  );


  
  function calculateWinner(cs) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cs[a] && cs[a] === cs[b] && cs[a] === cs[c]) {
        return cs[a];
      }
    }
    return null;
  }
}