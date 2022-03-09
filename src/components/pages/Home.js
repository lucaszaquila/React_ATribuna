import {useState, useEffect} from 'react'

import SimpleRow from '../layout/sections/SimpleRow';
import HighlightRow from '../layout/sections/HighlightRow';
import Ad from '../layout/blocks/Ad';
import TitleSeeMore from '../layout/TitleSeeMore';
import FiveBlocks from '../layout/sections/FiveBlocks'

const Home = () => {
    const [articles, setArticles] = useState([])
    const [dataBase, setDataBase] = useState([])

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

    useEffect(() => {
        fetch(`http://localhost/src/api/index`, {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setDataBase(data)
        console.log(dataBase)
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
            <TitleSeeMore title="Santos FC" />
            <FiveBlocks articles={articles} />
            <Ad />
            <TitleSeeMore title="Variedades" />
            <FiveBlocks articles={articles} invert={true} />
        </>
    )
}

export default Home