import { FacebookIcon, InstagramIcon, TiktokIcon } from './components/icons'
import LinktreeItem from './components/linktree-item'

export default function Home() {
	return (
		<main className='linktree'>
			<div className='linktree__container'>
				<img src='/logo.png' alt='' className='linktree__logo' />
				<ul className='linktree__links__list'>
					<LinktreeItem text='Portafolio' url='#' />
					<LinktreeItem text='Servicios' url='#' />
					<LinktreeItem text='Whatsapp 1' url='#' />
					<LinktreeItem text='Whatsapp 2' url='#' />
				</ul>
				<div className='linktree__socials'>
					<a href='#' className='linktree__socials__link'>
						<InstagramIcon styles='linktree__socials__icon' />
					</a>
					<a href='#' className='linktree__socials__link'>
						<FacebookIcon styles='linktree__socials__icon' />
					</a>
					<a href='#' className='linktree__socials__link'>
						<TiktokIcon styles='linktree__socials__icon' />
					</a>
				</div>

				<div className='linktree__shape'>
					<svg
						data-name='Layer 1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1200 120'
						preserveAspectRatio='none'
					>
						<path
							d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
							className='shape-fill'
						></path>
					</svg>
				</div>
			</div>
		</main>
	)
}
