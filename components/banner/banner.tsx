import styles from '../banner/Banner.module.css';

interface BannerProps{
  title: string,
  subtitle: string,
  imgUrl: string
}


const Banner = (props: BannerProps) => {
  var { title, subtitle, imgUrl } = props;

  const handleOnPlay = () => {
    console.log('aselole');
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subtitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <span className={styles.playText}>Play</span>
            </button>
          </div>

          <div
            className={styles.bannerImg}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundImage: `url('../../public/aku.jpeg')`,
            }}
           ></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;