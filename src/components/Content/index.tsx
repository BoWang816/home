import styles from './index.less';
import HeaderComponent from '@/components/Header';
import FooterComponent from '@/components/Footer';

// @ts-ignore
export default function ContentComponent(props) {
    return (
        <>
            <HeaderComponent />
            <section className={styles.content}>{props.children}</section>
            <FooterComponent />
        </>
    );
}
