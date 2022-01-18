import { useState } from 'react';
import menu from '../../JSON/footerAboutList.json'
import services from '../../JSON/services.json'
import AboutList from '../AboutList/AboutList';
import ServicesList from '../ServicesList';


const FooterNavigation = () => {
   
    const [visibleServices, setVisibleServices] = useState(false);
    const [visibleCompany, setVisibleCompany] = useState(false);

  
    const onClick = (event) => {
        console.log(event.target.textContent);
        if (event.target.textContent === 'Про Компанию') {
            setVisibleCompany(true)
        } if (event.target.textContent === 'Сервисы') {
            setVisibleServices(true)
        }


 }
    const closeMenu = () => {
        setVisibleCompany(false);
        setVisibleServices(false)
  };
    
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <p onClick={onClick}>Про Компанию</p>
                        {visibleCompany && <AboutList menu={menu} onClose={closeMenu}/>}
                    </li>
                    <li>
                        <p onClick={onClick}>Сервисы</p>
                        {visibleServices && <ServicesList menu={services} onClose={closeMenu}/>}
                    </li>
                </ul>
        </nav>
        </>
    )
}

export default FooterNavigation