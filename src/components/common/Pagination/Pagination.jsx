import { useState } from 'react';
import classes from './Pagination.module.css'
import cn from 'classnames';

const Pagination = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil((totalItemsCount / pageSize));
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    };

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={classes.pagination}>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [classes.selectedPage]: currentPage === p
                }, classes.pageNumber)}
                    key={p}
                    onClick={(e) => { onPageChanged(p) }}>{p}</span>
            })}

        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>
};

export default Pagination;