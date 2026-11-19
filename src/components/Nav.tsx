"use client";

import '@/styles/nav.scss';
import Logo from '@/components/Logo';
import IconeCompte from '@/components/icones/Compte';
import Link from 'next/link';
import { useRef,useLayoutEffect,useState } from 'react';

const links =[
  { href: '/', label: 'Accueil' },
  { href: '/', label: 'Comment ça marche ?' },
  { href: '/', label: 'Thèmes' },
  { href: '/', label: 'FAQ' }
]

export default function Nav() {
  const ul = useRef<HTMLUListElement>(null);
  const selecteur = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);

  const switchSelecteur = (li:HTMLElement) => {
    selecteur.current!.style.width = `${li.offsetWidth}px`;
    selecteur.current!.style.transform = `translateX(${li.offsetLeft}px)`;
  }
  // Place le sélecteur sur le premier lien avant l'affichage
  useLayoutEffect(() => {
    switchSelecteur(ul.current!.querySelector('li')!);
  }, []);

  return (
    <nav className="wrapper">
        <div className="nav-logo"><Logo /></div>
        <ul ref={ul}>
          <span className="nav-selecteur" ref={selecteur}></span>
          {links.map((link,i) => (
            <li key={link.label} onClick={(e) => {switchSelecteur(e.currentTarget); setActive(i);}}>
              <Link href={link.href} className={active === i ? 'active' : ''}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-compte"><IconeCompte /></div>
    </nav>
  );
}
