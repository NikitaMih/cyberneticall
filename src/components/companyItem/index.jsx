import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReportCard from '../reportCard/index';
import {
    selectActiveItem,
    selectCompany,
    SetActiveItem,
    getCompanyData,
} from '../../slices/reportSlice';
import './style.scss';

const CompanyItem = ({name, region, currency, symbol}) => {
    const dispatch = useDispatch();
    const activeItem = useSelector(selectActiveItem);
    const company = useSelector(selectCompany);

    const [open, SetOpen] = useState(false);

    useEffect(() => {
        if (symbol === activeItem) {
            SetOpen(true); 
        } else {
            SetOpen(false); 
        };
    }, [activeItem, symbol]);

    const showCard = (element) => {
        dispatch(SetActiveItem(element.parentElement.id));
        if (!open) {
            dispatch(getCompanyData(symbol));
        };
        SetOpen(!open);
    };

    return (
        <tr id={symbol} className={open ? 'open-line' : 'close-line' } >
            <td>{name}</td>
            <td>{region}</td>
            <td>{currency}</td>
            <td>
                <button 
                    style={{transform: open ? 'rotate(45deg)' : 'rotate(90deg)'}} 
                    className='line-btn' 
                    onClick={(event) => showCard(event.target.parentElement)}
                    >+</button>
            </td>
            {open && <ReportCard {...company} />}
        </tr>
    )
};

export default CompanyItem;
