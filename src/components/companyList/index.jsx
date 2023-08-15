import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSymbols, selectPage, selectShowWindow, SetShowWindow } from '../../slices/reportSlice';
import CompanyItem from '../companyItem';
import ModalWindow from '../modalWindow'
import find from '../../assets/find.svg';
import './style.scss';

const CompanyList = () => {
    const dispatch = useDispatch();
    const symbols = useSelector(selectSymbols);
    const currentPage = useSelector(selectPage);
    const openWindow = useSelector(selectShowWindow);

    const endRange = currentPage * 10;
    const startRange = endRange - 10;
    const companies = symbols ? symbols.slice(startRange, endRange) : [];

    const showModal = () => {
        dispatch(SetShowWindow(true));
    };

    return (
        <table className='company-list'>
            <thead>
                <tr className='company-list__head'>
                    <th className='company-list__name'>
                        Company name 
                        <button 
                            className='company-list__btn' 
                            onClick={showModal}
                        ><img src={find} alt='find'/></button>
                    </th>
                    <th>Region</th>
                    <th>Currency</th>
                    <th></th>   
                </tr>
            </thead>
            <tbody>
                { companies.map((company) => <CompanyItem key={company.symbol} {...company}/>) }
            </tbody>
            { openWindow && <ModalWindow /> }
        </table>
    )
};

export default CompanyList;
