import styles from './index.less';

export default function ListComponent(props: { list: any[] }) {
    return (
        <>
            {props.list.length > 0 ? (
                props.list.map((item) => {
                    return (
                        <section className={styles.list}>
                            {item.title && <p className={styles.categoryTitle}>{item.title}</p>}
                            <div className={styles.itemContent}>
                                {
                                    // @ts-ignore
                                    item.list.map((webItem) => {
                                        return (
                                            <a href={webItem.href}>
                                                <div className={styles.item}>
                                                    <h3 className={styles.itemTitle}>
                                                        <img
                                                            className={styles.logo}
                                                            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                                                        />{' '}
                                                        {webItem.title}
                                                    </h3>
                                                    <span className={styles.itemDesc}>{webItem.description}</span>
                                                </div>
                                            </a>
                                        );
                                    })
                                }
                            </div>
                        </section>
                    );
                })
            ) : (
                <div>暂无</div>
            )}
        </>
    );
}
