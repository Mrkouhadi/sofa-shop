import { useState } from "react";

const usePagination = (data =[], itemsPerPage) => {
        const [currentPage, setCurrentPage] = useState(1);
        const maxPage = Math.ceil(data.length / itemsPerPage);

        const currentData =()=> {
            const begin = (currentPage - 1) * itemsPerPage;
            const end = begin + itemsPerPage;
        return data.slice(begin, end);
        };

        const next = ()=> {
            setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
        };

        const prev = () => {
            setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
        };

        const jump = (page) => {
            const pageNumber = Math.max(1, page);
            setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
        };

    return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;


/* how to use it:
import usePagination from './custom_hooks/usePagination';
    const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(data , 8);
    currentData().map(data=>  <li className=''>{data}</li>)
    then we have buttons like next and prev
*/

