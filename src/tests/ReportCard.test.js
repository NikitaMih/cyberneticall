import { render } from '@testing-library/react';
import ReportCard from '../components/reportCard';

const item = {
    symbol: 'SPAN', 
    latestPrice: '187', 
    avgTotalVolume: '674', 
    week52High: '376', 
    week52Low: '133'
};

describe('CompanyItem', () => {
    it('Should create ReportCard with params', () => {
        const view = render(
            <ReportCard {...item} />
        );
    
        expect(view).toMatchSnapshot();
    })
});
