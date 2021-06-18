import React from 'react'
import Card from './card'
import getProducts from '../crud/getProducts'
import Pagination from '../hooks/Pagination'
import { limit } from '../crud/variables'
import { userContext } from '../context/userContext';

const ContainerProducts = () => {
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

    const { currentArray, next, prev, maxPage, currentPage } = Pagination(renderSwitch(), limit);

    return (
        <section style={{display: history ? "none" : "block"}}>
            <section className="filters">
                <button className="btn btn-dark m-1" onClick={() => setSortData("recent")}>Most recent</button>
                <button className="btn btn-dark m-1" onClick={() => setSortData("lowPrice")}>Lowest price</button>
                <button className="btn btn-dark m-1" onClick={() => setSortData("highPrice")}>Highest price</button>
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

export default ContainerProducts;