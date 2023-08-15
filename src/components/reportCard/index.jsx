import React from 'react';
import './style.scss';

const ReportCard = ({ symbol, latestPrice, avgTotalVolume, week52High, week52Low }) => {

    return (
        <div className='card'>
            <table>
                <tr>
                    <th>Symbol</th>
                    <tb>{symbol}</tb>
                </tr>
                <tr>
                    <th>Latest Price</th>
                    <tb>{latestPrice}</tb>
                </tr>
                <tr>
                    <th>Avg Total Volume</th>
                    <tb>{avgTotalVolume}</tb>
                </tr>
                <tr>
                    <th>Week 52 High</th>
                    <tb>{week52High}</tb>
                </tr>
                <tr>
                    <th>Week 52 Low</th>
                    <tb>{week52Low}</tb>
                </tr>
            </table>
        </div>
    )
};

export default ReportCard;
