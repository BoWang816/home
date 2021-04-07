import styles from './index.less';
import HeaderComponent from '@/components/Header';
import FooterComponent from '@/components/Footer';

export default function ContentComponent(props) {
    return (
        <div>
            <HeaderComponent />
            {props.children}
            <FooterComponent />
        </div>
    );
}
