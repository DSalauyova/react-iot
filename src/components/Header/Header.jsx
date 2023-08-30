import style from './Header.module.css';

const Header = () => {
    return <header className={style.header_container}>
        <a href='#'><img src='https://logos-world.net/wp-content/uploads/2023/03/Skate-Logo.png' height={100} /></a>
    </header>
}

export default Header;