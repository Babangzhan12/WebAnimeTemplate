const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top:0
        })
    }

    const handleNextPage = () =>{
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    const handleGoToLastPage = () => {
        setPage(lastPage);
        scrollTop();
      };

      const handleGoToFirstPage = () => {
        setPage(1);
        scrollTop();
      };

        return (
        <div className="flex justify-center items-center py-4 gap-4 text-color-primary text-2xl">
            {page <= 1 ? null :
            <button onClick={handleGoToFirstPage} className="transition-all hover:text-color-accent">First Page</button>
            }
            {page <= 1 ? null : 
            <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
            }
            <p>{page} of {lastPage}</p>

            {page >= lastPage ? null : 
            <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
            }

            {page >= lastPage ? null : 
            <button onClick={handleGoToLastPage} className="transition-all hover:text-color-accent">Last Page</button>
            }
        </div>
    )
}

export default Pagination