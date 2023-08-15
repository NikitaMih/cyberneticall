import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetPage, selectSymbols, selectPage  } from '../../slices/reportSlice';
import './style.scss';

const Pagination = () => {
    const dispatch = useDispatch();
    const symbols = useSelector(selectSymbols);
    const currentPage = useSelector(selectPage);

    const lastPage = symbols?.length ? Math.ceil(symbols?.length/ 10) : 0;

    const changePage = (plus) => {
        if (plus && currentPage !== lastPage) {
            dispatch(SetPage(currentPage + 1));
        };
        if (!plus && currentPage !== 1) {
            dispatch(SetPage(currentPage - 1)); 
        };
    };

    const handlePage = (event) => {
        if (event.target.id) {
            dispatch(SetPage(+event.target.id));
        };
    };

    return (
        <div className='pagination'>
            <div className='pagination__page'><span>Page:</span><span className='active'>{currentPage}</span></div>
            <button className='pagination__btn' onClick={() => changePage(false)}>prev</button>
                <ul className='pagination__list' onClick={(event) => handlePage(event)}>
                    <li id='1'>1</li>
                    {currentPage > 2 && <li>...</li>}
                    {(1 < currentPage && currentPage < lastPage) && <li>{currentPage}</li>}
                    {currentPage < lastPage - 1 && <li>...</li>}
                    {currentPage > lastPage - 1 && <li id={lastPage - 1}>{lastPage - 1}</li>}
                    {lastPage > 1 && <li id={lastPage}>{lastPage}</li>}
                </ul>
            <button className='pagination__btn' onClick={() => changePage(true)}>next</button>
        </div>
    )
};

export default Pagination;
