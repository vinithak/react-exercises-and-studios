import { useState } from 'react';



export default function BoardAssignment () {

   const[boardName, setName] = useState("'no boards yet!'");
   
   const boards = [
      {
         "label": "italian",
         "value": "abc"

      },
      {
         "label": "american",
         "value": "def"
      },
      {
         "label": "french",
         "value": "ghi"
      },     
   ];
   
   const handleChange = (event) => {
      event.preventDefault();
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
            {
            boards.map((board) => <option value={board.value}>{board.label}</option>)
            } 
                    
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}