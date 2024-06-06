interface Props {
	text: string
	url: string
}

export default function LinktreeItem({ text, url }: Props) {
	return (
		<li className='linktree__item'>
			<a href={url} className='linktree__link'>
				{text}
			</a>
		</li>
	)
}
