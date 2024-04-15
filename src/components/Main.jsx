import styles from './Main.module.css';
import MapContainer from './map/MapContainer'
import List from './list/List'

function Main() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <List></List>
        <div className={styles.mapcontainer}>
          <MapContainer></MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Main;