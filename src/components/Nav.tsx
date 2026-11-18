import '@/styles/nav.scss';
import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="wrapper">
        <div className="nav-logo"><Logo /></div>
        <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/">Comment ça marche ?</Link></li>
            <li><Link href="/">Thèmes</Link></li>
            <li><Link href="/">FAQ</Link></li>
        </ul>
        <div className="nav-compte">Compte</div>
    </nav>
  );
}
