import styles from './index.less';
import HeaderComponent from '@/components/Header';
export default function ContentComponent(props) {
    return (
        <div>
            <HeaderComponent />
            {props.children}
        </div>
    );
}
