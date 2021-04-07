import styles from './index.less';
import SearchComponent from '@/components/Search';
import { Card } from 'antd';

const list = [
    {
        title: 'Github',
        logo: 'https://www.zdzn.net/assets/img/ic-github.png',
        href: 'https://asdasdas',
    },
];
export default function IndexPage() {
    return (
        <>
            <SearchComponent />
            <Card>
                {list.map((item) => {
                    return (
                        <a href={item.href} className={styles.link} key={item.href}>
                            <img className={styles.logo} src={item.logo} alt={item.title} />
                            <span className={styles.title}>{item.title}</span>
                        </a>
                    );
                })}
            </Card>
        </>
    );
}
