import SingleBook from "../components/singleBook/SingleBook";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "../index";

const OneBookPage = observer(() => {

    return(
        <>
            <SingleBook/>
        </>
    )
})

export default OneBookPage;