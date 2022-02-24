import HighlightSlide from "../blocks/HighlightSlide";
import TextBlock from "../blocks/TextBlock";

import styles from "./HighlightRow.module.css"

const HighlightRow = () => {
    return(
        <section className={styles.highlights}>
            <TextBlock />
            <HighlightSlide />
        </section>
    )
}

export default HighlightRow