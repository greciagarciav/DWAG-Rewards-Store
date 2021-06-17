import React from 'react'
import Card from './cards'
import getProducts from '../crud/getProducts'
import pagination from '../hooks/pagination'
import { limit } from '../crud/variables'
import { userContext } from '../context/userContext';

const containerProducts = () => {
    const [products, setProducts] = React.useState([]);
    const [sortData, setSortData] = React.useState("recent");
    const { history } = React.useContext(userContext)

    React.useEffect(() => {
      getProducts().then(e => setProducts(e));
    },[]);

    const renderSwitch = () =>{
        switch(sortData){
            case "lowPrice":
                return products.sort((a,b) => parseFloat(a.cost) - parseFloat(b.cost)).map((data, id) => <Card key={id} {...data} />);
            case "highPrice":
                return products.sort((a,b) => parseFloat(b.cost) - parseFloat(a.cost)).map((data, id) => <Card key={id} {...data} />);
            default:
                return products.sort((a,b) => (a._id < b._id ? -1 : 1)).map((data, id) => <Card key={id} {...data} />)
        }
    }

    const { currentArray, next, prev, maxPage, currentPage } = pagination(renderSwitch(), limit);

    return (
        <section style={{display: history ? "none" : "block"}}>
            <section className="filters">
                <button className="btnFilter" onClick={() => setSortData("recent")}>Most recent</button>
                <button className="btnFilter" onClick={() => setSortData("lowPrice")}>Lowest price</button>
                <button className="btnFilter" onClick={() => setSortData("highPrice")}>Highest price</button>
            </section>
            <section className="container-cards">
            { currentArray }
            </section>
            <section className="buttonsPagination">
                <button className="btnPaginationLeft" onClick={() => prev()} disabled={ currentPage <= 1 }></button>
                <button className="btnPaginationRight" onClick={() => next()} disabled={ currentPage >= maxPage }></button>
            </section>
        </section>
    );
}

export default containerProducts;