import React from 'react'
import { userContext } from '../context/userContext';
import { limit } from '../crud/variables'
import Pagination from '../hooks/Pagination'

const History = () => {
    const { history, record } = React.useContext(userContext)
    const { currentArray, next, prev, maxPage, currentPage } = Pagination(record, limit);

    return (
        <div style={{display: history ? "block" : "none"}}>
            <table>
                    <thead>
                        <tr>
                            <th> Product Id </th>
                            <th> Product Name </th>
                            <th> Product Cost </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentArray.map((item, i) => 
                                <tr key={item.productId + i}>
                                    <td>{item.productId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.cost}</td>
                                </tr>
                            )
                        }
                    </tbody>
            </table>
            <section className="buttonsPagination">
                <button className="btnPaginationLeft" onClick={() => prev()} disabled={ currentPage <= 1 }></button>
                <button className="btnPaginationRight" onClick={() => next()} disabled={ currentPage >= maxPage }></button>
            </section>
        </div>
    );
}

export default History;