import Button from '../components/Button/Button';
import style from './Home.module.css';

const Home = (props) => {
    return <div className={style.connexion}>
        <Button href="/login" label="Connecte-toi" className="" />
        <Button href="/sign-up" label="Inscris-toi" className="" />
    </div>
}

export default Home;