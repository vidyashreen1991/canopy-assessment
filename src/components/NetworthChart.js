import React, { Component } from 'react'
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import AmCharts from '@amcharts/amcharts3-react';

import { connect } from 'react-redux';

import { fetchNetworth } from '../actions/Networth';
import { getOneYearData } from '../selectors/Networth';

class NetworthChart extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchNetworth());
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <AmCharts.React
                className="networth-chart"
                options={{
                    type: "serial",
                    dataProvider: this.props.data,
                    categoryField: this.props.categoryField,
                    dataDateFormat: this.props.dateFormat,
                    categoryAxis: {
                        labelRotation: 90,
                    },
                    graphs: [{
                        id: "g1",
                        valueField: this.props.valueField,
                        bullet: "round",
                        bulletBorderAlpha: 1,
                        bulletColor: "#FFFFFF",
                        bulletSize: 3,
                        hideBulletsCount: 0,
                        lineThickness: 2,
                        title: "Networth",
                        useLineColorForBulletBorder: true,
                        balloonText: "<span style='font-size:10px;'>[[net_worth]]</span>"
                    }],
                    theme: "light",
                    marginRight: 10,
                    marginLeft: 100,
                    autoMarginOffset: 20,
                    mouseWheelZoomEnabled: true,

                    chartCursor: {
                        pan: true,
                        cursorColor: "#a9a9a9",
                        valueLineAlpha: 0.2,
                    }
                }
                }
            />
        );
    }
}

const mapStateToProps = (state) => {
    let { networth } = state;
    let { categoryField, valueField, dateFormat } = networth;
    return {
        data: getOneYearData(state),
        categoryField,
        valueField,
        dateFormat
    }
}
export default connect(mapStateToProps)(NetworthChart)