import { useState } from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar(props) {
   const {onSearch} =props;

   const [id, setId] = useState(""); 
   const handledChange = (e) =>{
      setId(e.target.value);
   };
   return (
      <div className={styles.navbar}>
      <div className={styles.wrapperSearch}>
         <input className ={styles.input}
         type='search'
         onChange={ handledChange} 
         value={id}
         />
         <button className = {styles.btn} onClick={() =>{onSearch(id)}}>🔍</button>
      </div>
      </div>
   );
}
