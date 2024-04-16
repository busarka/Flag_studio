import styles from "./Main.module.css";
import MapContainer from "../components/map/MapContainer";
import List from "../components/list/List";
import useChoosenCountry from "../hooks/useChoosenCountry";
import useOpenFullInfo from "../hooks/useOpenFullInfo";
import useData from "../hooks/useData";

function Main() {
    const [data, isLoading] = useData();
    const [countryName, handleChooseCountry] = useChoosenCountry();
    const [shownFullInfos, toggleComment, setColor, setTransform] = useOpenFullInfo();

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <List
                    data={data}
                    isLoading={isLoading}
                    countryName={countryName}
                    handleChooseCountry={handleChooseCountry}
                    shownFullInfos={shownFullInfos}
                    toggleComment={toggleComment}
                    setColor={setColor}
                    setTransform={setTransform}>
                </List>
                <div className={styles.mapcontainer}>
                    <MapContainer
                        countryName={countryName}
                        data={data}
                        shownFullInfos={shownFullInfos}>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default Main;
