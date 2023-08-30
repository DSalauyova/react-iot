import style from './Home.module.css';

const Home = (props) => {
    return <div className={style.connexion}>
        <a href="/login"><button>Connecte-toi</button></a>
        <a href="/sign-up"><button>Inscris-toi</button></a>
    </div>
}

export default Home;