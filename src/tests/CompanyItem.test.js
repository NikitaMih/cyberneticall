import { render } from '@testing-library/react';
import CompanyItem from '../components/companyItem';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');

const item = {
    name: 'SPAN', 
    region: 'US', 
    currency: 'USD', 
    symbol: 'SPAN'
}

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('CompanyItem', () => {
  it('Should create CompanyItem with params', () => {
    mockedDispatch.mockReturnValue();
    const view = render(
        <CompanyItem {...item} />
    );

    expect(view).toMatchSnapshot();
  })
});
