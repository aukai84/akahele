import * as Recharts from 'recharts';
import React, {Component} from 'react';

// const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

// const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

const {BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

class MultiBarGraph extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataKey: 'murder_and_manslaughter',
            crimeName: 'murder'
        }
    }

    crimeChange = (event) =>{
        console.log('event ', event.target.value)
        this.setState({
            dataKey: event.target.value,
            crimeName: event.target.value.split('_').join(' ')
        })
    }

    setDataKey(){
        if(this.props.currentView === 'Nation'){
            this.setState({
                key: 'state'
            })
        } else {
            this.setState({
                key: 'city'
            })
        }
    }

    componentWillMount() {
        this.setDataKey();
    }

    render(){
        return(
            <div className="multibar-main">
                <div className="multibar-nav">
                <div className="multibar-state">{this.props.currentView}</div>

                <div className="multibar-dropdown">
                 <select onChange={this.crimeChange}>
                        <option value='murder_and_manslaughter'>murder</option>
                        <option value='rape'>rape</option>
                        <option value='robbery'>robbery</option>
                        <option value='aggravated_assault'>aggravated assault</option>
                        <option value="burglary">burglary</option>
                        <option value='larceny_theft'>theft/larceny</option>
                        <option value='motor_vehicle_theft'>motor vehicle theft</option>
                        <option value='arson'>arson</option>
                </select>
                </div>
                </div>

                <BarChart className="multi-bar-graph" width={800} height={300} data={this.props.multiBarData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey={this.state.key} fontSize={15} />
                    <YAxis fontSize={15}/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend verticalAlign="top" wraperStyle={{lineHeight: '40px'}} />
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey={this.state.key} height={20} stroke="#075953"/>
                    <Bar dataKey={this.state.dataKey} name={this.state.crimeName} fill="#075953"/>
                </BarChart>
            </div>
            )
    }
}

export default MultiBarGraph;