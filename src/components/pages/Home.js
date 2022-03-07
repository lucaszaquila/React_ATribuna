import {useState, useEffect} from 'react'

import SimpleRow from '../layout/sections/SimpleRow';
import HighlightRow from '../layout/sections/HighlightRow';
import Ad from '../layout/blocks/Ad';
import TitleSeeMore from '../layout/TitleSeeMore';
import FiveBlocks from '../layout/sections/FiveBlocks'

const Home = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/articles/`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setArticles(data)
    })
    .catch((err) => console.log(err))
        
    }, [])
    return(
        <>
            <Ad />
            <HighlightRow />
            <SimpleRow articles={articles} />
            <SimpleRow articles={articles} />
            <Ad />
            <TitleSeeMore title="Porto e Mar" />
            <SimpleRow articles={articles} hide={true} />
            <TitleSeeMore title="Brasil e Mundo" />
            <SimpleRow articles={articles} hide={true} />
            <Ad />
            <FiveBlocks articles={articles} />
        </>
    )
}

export default Home