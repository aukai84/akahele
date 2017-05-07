import React, {Component} from 'react';
import * as Recharts from 'recharts';

const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;
// const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

class SyncedAreaCharts extends Component {
    constructor(props){
        super(props);
        this.state = {
            locationOneBar: props.locationOneBar,
            locationTwoBar: props.locationTwoBar,
            dataKey: props.dataKey,
            crimeName: props.crimeName
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            locationOneBar: nextProps.locationOneBar,
            locationTwoBar: nextProps.locationTwoBar,
            dataKey: nextProps.dataKey,
            crimeName: nextProps.crimeName
        })
    }



    render(){
        console.log('new state of synced charts ', this.state.dataKey)
        return(
            <div>
                <h4>Location One</h4>
                <AreaChart width={600} height={200} data={this.state.locationOneBar} syncId="anyId"
                      margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                  <XAxis dataKey="year"/>
                  <YAxis/>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip/>
                  <Area type='monotone' dataKey={this.state.dataKey} name={this.state.crimeName} stroke='#8884d8' fill='#8884d8' />
                </AreaChart>
                <h4>Location Two</h4>
                <AreaChart width={600} height={200} data={this.state.locationTwoBar} syncId="anyId"
                      margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                  <XAxis dataKey="year"/>
                  <YAxis/>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip/>
                  <Area type='monotone' dataKey={this.state.dataKey} name={this.state.crimeName} stroke='#82ca9d' fill='cornflowerblue' />
                </AreaChart>
      </div>
        )     
    }

}

export default SyncedAreaCharts;

