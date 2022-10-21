import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div>
      <footer>
        <ul className={styles.social_list}>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
          <li><FaYoutube/></li>
        </ul>
        <p>Rede Sociais Rodapé</p>
      </footer>
    </div>
  )
}

export default Footer