import React from 'react';
import CurrentDate from './CurrentDate';
import Tabs from './Tabs';
import Price from './Price';
import Chart from './Chart';

class App extends React.Component {
    render() {
        return (<div className="ui grid" >
            <CurrentDate />
            <Tabs />
            <Price />
            <Chart />
        </div>
        )
    }
}

export default App;