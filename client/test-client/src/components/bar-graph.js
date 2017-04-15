import React from 'react';
import ReactDOM from 'react-dom';
import DataBars from './data-bars';
import * as d3 from 'd3';



export default (props) => {
    const scales = {yScale: yScale(props)}
    return <svg width={props.width} height={props.width}>
                <DataBars {...scales} {...props}/>
            </svg>
}
