import classes from '../Pagination/Pagination.module.css'

const Pagination = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {

    let pagesCount = Math.ceil((totalUsersCount / pageSize) / 500);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && classes.page}
                onClick={() => { onPageChanged(p) }}>{p}</span>
        })}
    </div>
};

export default Pagination;