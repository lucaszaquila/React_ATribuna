import SimpleRow from '../layout/sections/SimpleRow';
import HighlightRow from '../layout/sections/HighlightRow';
import Ad from '../layout/blocks/Ad';

const Home = () => {
    return(
        <>
            <Ad />
            <HighlightRow />
            <SimpleRow />
            <SimpleRow />
            <SimpleRow />
        </>
    )
}

export default Home