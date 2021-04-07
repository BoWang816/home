import styles from './index.less';

export default function FooterComponent() {
    return (
        <div className={styles.footer}>
            <div>©2020 - 2021 By Bo.Wang</div>
            <div>陕ICP备19011549号</div>
            <div>
                <p>
                    <a target="_blank" href="https://vercel.com/" rel="external nofollow noreferrer">
                        <img
                            src="https://img.shields.io/badge/Hosted-Vervel-brightgreen?style=flat&amp;logo=Vercel"
                            title="本站默认线路托管于Vercel"
                            data-ll-status="loading"
                        />
                    </a>
                    &nbsp;
                    <a target="_blank" href="https://github.com/BoWang816/webHome" rel="external nofollow noreferrer">
                        <img
                            src="https://img.shields.io/badge/Source-Github-d021d6?style=flat&amp;logo=GitHub"
                            title="本站项目源码由Gtihub托管"
                            data-ll-status="loading"
                        />
                    </a>
                    &nbsp;
                    <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="external nofollow noreferrer">
                        <img
                            src="https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&amp;logo=Claris"
                            title="本站采用知识共享署名-非商业性使用-相同方式共享4.0国际许可协议进行许可"
                            data-ll-status="loading"
                        />
                    </a>
                </p>
            </div>
        </div>
    );
}
