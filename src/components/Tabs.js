import React, { useEffect, useState } from 'react';
//import Currencies from './Currencies';


const Tabs = () => {
    // 缺 active 設定的function
    
    const [currentActive, setCurrentActive] = useState(0)

    const tabChange = position => {
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


//
/**
 *             <Currencies className={currentActive} position="first" currency="美元" onClick={tabChange}/>
            <Currencies className="" position="second" currency="日幣" />
            <Currencies className="" position="third" currency="人民幣"/>
            <Currencies className="" position="fourth" currency="歐元"/>
 */



// class Tabs extends React.Component {

//     render() {
//         return (
//             <div className="ui top attached tabular menu">
//                 <div className="item active" data-tab="first">美元</div>
//                 <Currencies position="first" currency="美元" />
//                 <Currencies position="second" currency="日幣" />
//                 <Currencies position="third" currency="人民幣" />
//                 <Currencies position="fourth" currency="歐元" />

//             </div>

//         )
//     }
// };

export default Tabs;

/**
 *             <div className="item active" data-tab="first">美元</div>
            <div className="item" data-tab="second" onClick={()=>{console.log('日幣')}}>日幣</div>
            <div className="item" data-tab="third" onClick={()=>{console.log('人民幣')}}>人民幣</div>
 */