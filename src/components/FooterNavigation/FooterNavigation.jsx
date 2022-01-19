/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import menu from '../../JSON/footerAboutList.json'
import services from '../../JSON/services.json'
import AboutList from '../AboutList/AboutList';
import ServicesList from '../ServicesList';
import s from './FooterNavigation.module.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';



const FooterNavigation = () => {
   
    const [visibleServices, setVisibleServices] = useState(false);
    const [visibleCompany, setVisibleCompany] = useState(false);
    const viewPort = useWindowDimensions();
  
    const onClick = (event) => {
         event.preventDefault();
        if (event.target.textContent === 'Про Компанию') {
            setVisibleCompany(true)
        } if (event.target.textContent === 'Сервисы') {
            setVisibleServices(true)
        }


 }
    function closeMenuCompany(event) {
       setVisibleCompany(false)
    };
    
    function closeMenuServices(event) {
        setVisibleServices(false)   
    };
    
    return (
        <nav className={s.navSection}>
            {viewPort.width <1212 && (
                
                    <ul className={s.navList}>
                        <li className={s.navItem}>
                            <div onClick={onClick} className={s.navTitle} >Про Компанию</div>
                            {visibleCompany && <AboutList menu={menu} onClose={closeMenuCompany} />}
                        </li>
                        
                        <li className={s.navItem}>
                            <div onClick={onClick} className={s.navTitle} >Сервисы</div>
                            {visibleServices && <ServicesList menu={services} onClose={closeMenuServices} />}
                        </li>
                    
                    </ul>
                )}
            {viewPort.width >= 1212 && (
                
                    <ul className={s.navList}>
                        <li className={s.navItem}>
                            <div  className={s.navTitle} >Про Компанию</div>
                            <AboutList menu={menu}  />
                        </li>
                        
                        <li className={s.navItem}>
                            <div className={s.navTitle} >Сервисы</div>
                            <ServicesList menu={services} />
                        </li>
                    
                    </ul>
                
            )}
        </nav>
    )
}

export default FooterNavigation