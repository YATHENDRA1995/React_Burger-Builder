import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Wrapper';

const sideDrawer = (props) => {
    let attachedClasses = [classes.sideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.sideDrawer, classes.Open];
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                {/* <Logo height="11%" /> */}
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;