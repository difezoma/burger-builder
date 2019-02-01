import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/burgerlogo.png';

const logo =  ( props ) => (

    <div className={classes.Logo}>
        <img src={burgerLogo} alt="BurgerLogo" />
    </div>

);

export default logo;