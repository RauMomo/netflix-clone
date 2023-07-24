import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from '../card/Card.module.css';

interface ImageProps {
  imgUrl: string;
  size: string;
  id: number
}

const Card = (props: ImageProps) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    size = "medium",
    id, } = props;
  
  const classMap : any = {
    'large': styles.lgItem,
    'medium': styles.mdItem,
    'small': styles.smItem,
  }

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <div className={styles.container}>
      <motion.div whileHover={{ ...scale }} className={classNames(styles.imgMotionWrapper, classMap[size])}>
        <Image src={imgUrl} alt="Movie Image" layout="fill" className={styles.cardImg} />
      </motion.div>
    </div>
  );
}

export default Card;