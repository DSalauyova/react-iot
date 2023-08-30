import Welcome from '../components/Welcome/Welcome';
import style from './AllRides.module.css';

const Rides = () => {
    return (
        <div className={style.rides}>
            <Welcome username='Dasha' />
            <h3>Tes trajets</h3>
            <table>
                <tr>
                    <td>Destination</td>
                    <td>Temps</td>
                    <td>Vitesse</td>
                    <td>Distance</td>
                </tr>
                <tr>
                    <td>Charpennes</td>
                    <td>1min</td>
                    <td>15km/h</td>
                    <td>1km</td>
                </tr>
                <tr>
                    <td>J-Macé</td>
                    <td>18min</td>
                    <td>19km/h</td>
                    <td>10km</td>
                </tr>
            </table>
        </div>
    )
}

export default Rides;