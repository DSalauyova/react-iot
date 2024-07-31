import Welcome from '../Welcome/Welcome';
import style from './Dashboard.module.css';
import Distance from './Distance/Distance';
import Trips from './Last_trips/Last_trips';
import Speed from './Speed/Speed';
import Time from './Time/Time';

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