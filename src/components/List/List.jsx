import { Link } from 'react-router-dom';
import s from './List.module.css';

const List = ({ menu }) => {
    return (
        <>
            <div>
                <ul>
                    {menu.map(({ id, title, path }) => (
                        <li key={id}>
                            {' '}
                            <Link to={`/${path}`}>
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