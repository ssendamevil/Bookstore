import CategoryBook from "./CategoryBook";

import './CategoryBookList.scss';

const CategoryBookList = () => {
    const arr = [1,1,1,1,1,1,11,1,1,1,1,1,1,1]
    return(
        <div className="shelf-of-books">
            {
                arr.map((i, index)=>(
                    <CategoryBook index={index+1}/>
                ))
            }
        </div>
    )
}

export default CategoryBookList;