import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSymbols, selectCompany, SetShowWindow, getCompanyData  } from '../../slices/reportSlice';
import find from '../../assets/find.svg';
import './style.scss';

const ModalWindow = () => {
    const dispatch = useDispatch();
    const symbols = useSelector(selectSymbols);
    const company = useSelector(selectCompany);

    const [companyName, SetCompanyName] = useState('');
    const [result, SetResult] = useState(false);
    const [notFound, SetNotFound] = useState(false);

    const handleCompany = (value) => {
        SetCompanyName(value);
    };

    const closeWindow = () => {
        dispatch(SetShowWindow(false));
    };

    const findCompany = () => {
        const name = companyName.toLowerCase();
        const companyData = symbols.find((com) => com.name.toLowerCase().match(name));
        if (companyData) {
            dispatch(getCompanyData(companyData.symbol));
            SetResult(true);
            SetNotFound(false);
        } else {
            SetNotFound(true);
        };
    };

    return (
        <div className='background-window'>
            <div className='window'>
                <button className='btn-cancel' onClick={closeWindow}>x</button>
                <h3 className='window__title'>Find Company</h3>
                <div className='window__input'>
                    <input type='text' onChange={(event) => handleCompany(event.target.value)} />
                    <button onClick={findCompany}><img src={find} alt='find'/></button>
                </div>
                {result && <div className='results'>
                            <div className='results__block'><span>Company Name</span><span>{company?.companyName}</span></div>
                            <div className='results__block'><span>Latest Price</span><span>{company?.latestPrice}</span></div>
                            <div className='results__block'><span>Avg Total Volume</span><span>{company?.avgTotalVolume}</span></div>
                            <div className='results__block'><span>Week 52 High</span><span>{company?.week52High}</span></div>
                            <div className='results__block'><span>Week 52 Low</span><span>{company?.week52Low}</span></div>
                </div> }
                {notFound && <p className='window__err'>Company not found</p>}
            </div>
        </div>
    )
};

export default ModalWindow;
