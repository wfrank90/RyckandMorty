import styles from './Card.module.css'
export default function Card(props) {
   const {name, id, status, species, gender, origin, image, onClose} = props;
   return (
      <div className={styles.wrapperCard}>
         <button className ={styles.btn} onClick={()=> {onClose(id)}}>Cerrar</button>
         <img src={image} alt="character" />
         <div className={styles.wrapperText}>
         <h2 className={styles.name}>{name}</h2>
         <div className={styles.details}>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         </div>
      </div>
      </div>
   );
}
