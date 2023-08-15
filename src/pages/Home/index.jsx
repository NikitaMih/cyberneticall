import React, { useEffect } from 'react';
import { selectLoading, getSymbols } from '../../slices/reportSlice';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../../components/pagination';
import CompanyList from '../../components/companyList';
import loader from '../../assets/loader.gif';
import './style.scss';

const HomePage = () => {
   const dispatch = useDispatch();
   const loading = useSelector(selectLoading)

   useEffect(() => {
    dispatch(getSymbols());
   }, []);

    return (
        <>
            {loading && 
                <div className='loader'>
                    <img src={loader} alt='loader'></img>
                </div>
            }
            <CompanyList />
            <Pagination />
        </>
    )
};

export default HomePage;
