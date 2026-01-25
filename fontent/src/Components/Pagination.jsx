
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../Components/Card';
import { useSelector} from 'react-redux'

const Pagination = ({ itemsPerPage,}) => {

  const TOTALProducts = useSelector((state) => state.TOTALProducts.value);
 const items = TOTALProducts;
 console.log(TOTALProducts)




function Items({ currentItems }) {
  return (
    <div className='flex justify-between flex-wrap'>

    <>
      {currentItems &&
        currentItems.map((item) => (
          <Card
            key={item.id}
            photosrc={item.thumbnail}
            title={item.title}
            discount={Math.round(
              item.price - (item.price * item.discountPercentage) / 100
            )}
            price={item.price}
            rating={item.rating}
            reviews={item.reviews.length}
            Percentage={item.discountPercentage}
            btn="Add to Cart"
          />
        ))}
    </>
    </div>
  );
}


// Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className='flex gap-3 ml-0 '
        pageClassName='bg-black text-white px-5 cursor-pointer mb-[104px]'
      />
    </>
  )
}

export default Pagination
