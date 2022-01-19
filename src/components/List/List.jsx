import { Link } from 'react-router-dom';
import s from './List.module.css';

const List = ({ menu }) => {
    return (
        <>
        <div className={s.section}>
            <ul className={s.list}>
            {menu.map(({ id, title, path }) => (
            <li key={id} className={s.listItem}>
                {' '}
            <Link to={`/${path}`} className={s.link}>
                    {title}
            </Link>
            </li>
        ))}
            </ul>
        </div>
        </>
    )
}   

export default List