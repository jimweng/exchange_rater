import React, { useState } from 'react';

const Currency = ({ position, currency }) => {
    const [open, setOpen] = useState('first');
    
    const onClick = (event) => {
        if (event.metaKey || event.crtlKey) {
            return;
        }

        //event.preventDefault();
        window.history.pushState({}, '', currency);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        setOpen(position)
        console.log('position:', position)
        console.log('open: ', open)
        console.log('currency:', currency)
    }

    return (<div className={`item ${open === position ? 'active' : ''}`} data-tab={position} onClick={onClick}>{currency}</div>)
}


export default Currency;