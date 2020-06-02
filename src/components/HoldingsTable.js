import React, { Component } from 'react'
import { Collapse } from 'reactstrap';

import { connect } from 'react-redux';

import { fetchHoldings } from '../actions/Holdings';
import { holdingsSelector } from '../selectors/Holdings';

class HoldingsTable extends Component {

    constructor(props) {
        super(props)
        this.collapse = this.collapse.bind(this);
        this.state = {}
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchHoldings());
    }

    collapse(event) {
        let id = event.currentTarget.id;
        this.setState((prevState) => {
            return {
                [id]: !prevState[id]
            }
        })
    }

    render() {
        return (
            <div className="container-fluid m-0 p-5">
                <div className="row font-weight-bold">
                    <div className="col-1"></div>
                    <div className="col-3">Name</div>
                    <div className="col-3">Ticker</div>
                    <div className="col-1">Asset class</div>
                    <div className="col-1">Average price</div>
                    <div className="col-1">Market price</div>
                    <div className="col-1">Latest change percentage</div>
                    <div className="col-1">Market value in Base CCY</div>
                </div>
                {this.props.holdings.map((holding, index) => {
                    holding = [...holding];
                    if (holding && holding.length) {
                        let firstHolding = holding.shift();
                        let { name, ticker, asset_class, avg_price, market_price, latest_chg_pct, market_value_ccy, id } = firstHolding;
                        return (
                            <div key={id}>
                                <div className={`row border-top ${holding.length ? 'clickable-row' : ''}`} id={index} onClick={this.collapse}>
                                    <div className="col-1 collapse-icon" data-isopen={this.state[index]}></div>
                                    <div className="col-3 p-2">{name}</div>
                                    <div className="col-3 p-2 text-truncate">{ticker}</div>
                                    <div className="col-1 p-2 text-truncate">{asset_class}</div>
                                    <div className="col-1 p-2 text-truncate">{avg_price}</div>
                                    <div className="col-1 p-2 text-truncate">{market_price}</div>
                                    <div className="col-1 p-2 text-truncate">{latest_chg_pct}</div>
                                    <div className="col-1 p-2 text-truncate">{market_value_ccy}</div>
                                </div>
                                <Collapse key={`${id}${asset_class}`} isOpen={this.state[index]}>
                                    {
                                        holding.map((item, innerIndex) => {
                                            let { name, ticker, asset_class, avg_price, market_price, latest_chg_pct, market_value_ccy, id } = item;
                                            return (
                                                <div key={id} className="row border-top">
                                                    <div className="col-1"></div>
                                                    <div className="col-3 p-2 text-truncate">{name}</div>
                                                    <div className="col-3 p-2 text-truncate">{ticker}</div>
                                                    <div className="col-1 p-2 text-truncate">{asset_class}</div>
                                                    <div className="col-1 p-2 text-truncate">{avg_price}</div>
                                                    <div className="col-1 p-2 text-truncate">{market_price}</div>
                                                    <div className="col-1 p-2 text-truncate">{latest_chg_pct}</div>
                                                    <div className="col-1 p-2 text-truncate">{market_value_ccy}</div>
                                                </div>
                                            )
                                        })}
                                </Collapse>
                            </div>
                        )
                    } else {
                        return null
                    }
                })}

            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        holdings: holdingsSelector(state)
    }

}
export default connect(mapStateToProps)(HoldingsTable)