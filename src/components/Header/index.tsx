import { NavLink } from 'umi';
import styles from './index.less';

export default function HeaderComponent() {
    return (
        <div className={styles.header}>
            <NavLink to="/" exact activeClassName={styles.selected}>
                首页
            </NavLink>
            <NavLink to="/docs" activeClassName={styles.selected}>
                官方文档
            </NavLink>
            <NavLink to="/tools" activeClassName={styles.selected}>
                在线工具
            </NavLink>
            <NavLink to="/interview" activeClassName={styles.selected}>
                面试题
            </NavLink>
            <NavLink to="/blogs" activeClassName={styles.selected}>
                博客聚合
            </NavLink>
            <NavLink to="/about" activeClassName={styles.selected}>
                关于
            </NavLink>
        </div>
    );
}
