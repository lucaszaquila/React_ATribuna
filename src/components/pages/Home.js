import SimpleRow from '../layout/sections/SimpleRow';
import HighlightRow from '../layout/sections/HighlightRow';
import Ad from '../layout/blocks/Ad';
import TitleSeeMore from '../layout/TitleSeeMore.js';

const Home = () => {
    return(
        <>
            <Ad />
            <HighlightRow />
            <SimpleRow />
            <SimpleRow />
            <Ad />
            <TitleSeeMore title="Porto e Mar"/>
            <SimpleRow />
            <TitleSeeMore title="Brasil e Mundo"/>
            <SimpleRow />
            <Ad />
        </>
    )
}

export default Home