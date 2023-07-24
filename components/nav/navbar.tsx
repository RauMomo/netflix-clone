import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../nav/Navbar.module.css';

interface NavbarProps{
  username: string,
}

const Navbar = (props : NavbarProps) => {
  const { username } = props;

  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOnClickHome = (e : any) => {
    e.preventDefault()
    router.push('/')
  }

  const handleOnClickMyList = (e : any) => {
    e.preventDefault()
    router.push('/browse/my-list')
  }

  const handleDropdown = (e: any) => {
    e.preventDefault()
    setShowDropdown(!showDropdown);
  }
  return (<div className={styles.container}>
    <div className={styles.wrapper}>
      <a className={styles.logoLink}>
        <div className={styles.logoWrapper}>
          <Image src={"/netflix.svg"} alt="Netflix Logo" width={128} height={34} />
        </div>
      </a>
    <ul className={styles.navItems}>
      <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
      <li className={styles.navItem} onClick={handleOnClickMyList}>My List</li>
    </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleDropdown}>
            <p className={styles.username}>{username}</p>
            <Image src={"/icons/expand-more.svg"} alt="Expand More Icon" height={24} width={24}/>
              {/* expand more*/}
          </button>
          {showDropdown && (
            <div className={styles.navDropdown}>
                <Link href="/login">
                  <p className={styles.linkName}>Sign out</p>
                </Link>
              <div className={styles.lineWrapper}></div>
            </div>
          )}
          </div>
        </nav>
    </div>
  </div>);
}

export default Navbar;