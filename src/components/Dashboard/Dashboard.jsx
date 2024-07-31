import Welcome from '../Welcome/Welcome';
import style from './Dashboard.module.css';
import Distance from './Distance/Distance';
import Speed from './Speed/Speed';
import Time from './Time/Time';
import Trips from './Trips/Trips';

const Dashboard = () => {

  return <div>
    <Welcome username='Dasha' />
    <nav className={style.content}>
      <Trips />
      <Distance distance="87" />
      <Speed speed_max="25" />
      <Time time="0.12" />
    </nav>
  </div>
}

export default Dashboard;