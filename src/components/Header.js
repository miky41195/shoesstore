import classes from './Header.module.css';

const Header = (props) => {
    return(
        <header className={classes.header}>
            Shoes Store

            <ul className={classes.ul}>
                <li>
                    <button>Shop</button>
                </li>
                <li>
                    <button disabled={props.onDisable}>Cart</button>
                </li>
            </ul>
        </header>
    )
}

export default Header;