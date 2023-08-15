import { render } from '@testing-library/react';
import CompanyList from '../components/companyList';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('CompanyList', () => {
  it('Should create empty CompanyList', () => {
    mockedDispatch.mockReturnValue();
    const view = render(<CompanyList />);

    expect(view).toMatchSnapshot();
  })
});
