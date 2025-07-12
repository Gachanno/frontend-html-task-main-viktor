import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import c from './style.module.scss'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(true);
    const [activeButton, setActiveButton] = useState(undefined)
    const containerClassnames = classnames(c.sidebar , { [c.opened]: isOpened });

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <div className={`${containerClassnames} ${color}`}>
            <div className={c['sidebar__logo-wrapper']}>
                <img src={ logo } alt="TensorFlow logo" className={c.logo}/>
                <span className={`${c['sidebar__logo-text']} ${c.sidebar__text}`}>TensorFlow</span>
                <div onClick={ toggleSidebar } className={c['sidebar__theme-button']}>
                    <FontAwesomeIcon icon={'angle-right'}/>
                </div>
            </div>
            <div className={c['sidebar__routes-wrapper']}>
                {
                    routes.map(route => (
                        <div
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                                setActiveButton(route.title)
                            }}
                            className={`${c.sidebar__button}
                            ${route.title === activeButton ? c['sidebar__button--active'] : ''}`}
                        >
                            <FontAwesomeIcon icon={ route.icon } className={c.sidebar__icon}/>
                            <span className={c.sidebar__text}>{ route.title }</span>
                        </div>
                    ))
                }
            </div>
            <div className={`${c['sidebar__routes-wrapper']} ${c['sidebar__routes-wrapper--bottom']}`}>
                {
                    bottomRoutes.map(route => (
                        <div
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                                setActiveButton(route.title)
                            }}
                            className={`${c.sidebar__button}
                            ${route.title === activeButton ? c['sidebar__button--active'] : ''}`}
                        >
                            <FontAwesomeIcon icon={ route.icon }  className={c.sidebar__icon}/>
                            <span className={c.sidebar__text}>{ route.title }</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
