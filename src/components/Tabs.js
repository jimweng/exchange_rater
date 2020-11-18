import React, { useEffect, useState } from 'react';
import BankOfTaiwan from '../api/BankOfTaiwan';


const Tabs = () => {
    const [currentActive, setCurrentActive] = useState(0)

    const tabChange = async (position) => {

        // const { data } = await BankOfTaiwan.get('USD')
        // const domparser = new DOMParser(data)
        // const doc = domparser.parseFromString(data, 'text/html')

        // console.log('result: ', doc.getElementsByTagName)
        setCurrentActive(position)
        console.log('onClcik: ', position)
    }



    return (
        <div className="ui top attached tabular menu">
            <div className={`item ${currentActive === "first" ? 'active' : ''}`} data-tab="first" onClick={()=>{tabChange("first")}}>美元</div>
            <div className={`item ${currentActive === "second" ? 'active' : ''}`} data-tab="second" onClick={()=>{tabChange("second")}}>日幣</div>
            <div className={`item ${currentActive === "third" ? 'active' : ''}`} data-tab="third" onClick={()=>{tabChange("third")}}>人民幣</div>
            <div className={`item ${currentActive === "fourth" ? 'active' : ''}`} data-tab="fourth" onClick={()=>{tabChange("fourth")}}>歐元</div>
        </div>
        )
}

export default Tabs;