'use client'

import { motion } from 'framer-motion'

const menuPrincipal = ['À Propos', 'Menus', 'Offres', 'Événements']
const informations = ['Contact', 'Commandes & Retours', 'Vidéos', 'Réservation']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a href="#" className="footer__logo">
            <img src="/assets/img/logo.png" alt="logo" />
            Sushi
          </a>

          <p className="footer__description">
            La nourriture pour le corps ne suffit pas. <br />
            Il faut aussi de la nourriture <br />
            pour l&apos;âme.
          </p>
        </motion.div>

        <motion.div
          className="footer__content"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div>
            <h3 className="footer__title">Menu Principal</h3>
            <ul className="footer__links">
              {menuPrincipal.map((item) => (
                <li key={item}>
                  <a href="#" className="footer__link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Informations</h3>
            <ul className="footer__links">
              {informations.map((item) => (
                <li key={item}>
                  <a href="#" className="footer__link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Adresse</h3>
            <ul className="footer__links">
              <li className="footer__information">
                12 Rue de la Paix <br />
                75001 Paris, France
              </li>
              <li className="footer__information">
                9h – 23h
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Réseaux Sociaux</h3>
            <ul className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="Twitter"
              >
                <i className="ri-twitter-fill"></i>
              </a>
            </ul>
          </div>
        </motion.div>

        <img src="/assets/img/spring-onion.png" alt="" className="footer__onion" />
        <img src="/assets/img/spinach-leaf.png" alt="" className="footer__spinach" />
        <img src="/assets/img/leaf-branch-4.png" alt="" className="footer__leaf" />
      </div>

      <motion.div
        className="footer__info container"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="footer__card">
          <img src="/assets/img/footer-card-1.png" alt="carte de paiement" />
          <img src="/assets/img/footer-card-2.png" alt="carte de paiement" />
          <img src="/assets/img/footer-card-3.png" alt="carte de paiement" />
          <img src="/assets/img/footer-card-4.png" alt="carte de paiement" />
        </div>

        <span className="footer__copy">
          &#169; Copyright Bedimcode. Tous droits réservés
        </span>
      </motion.div>
    </footer>
  )
}
