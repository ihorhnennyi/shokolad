import { useColorMode } from '@/lib/theme'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
	AppBar,
	Badge,
	Box,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material'
import Link from 'next/link'

export default function Header() {
	const { mode, toggle } = useColorMode()

	return (
		<AppBar
			position='sticky'
			color='transparent'
			elevation={0}
			sx={{ borderBottom: 1, borderColor: 'divider' }}
		>
			<Toolbar sx={{ gap: 2 }}>
				<Typography
					variant='h6'
					component={Link}
					href='/'
					sx={{ mr: 2, fontWeight: 700 }}
				>
					MyShop
				</Typography>

				<Box sx={{ display: 'flex', gap: 2 }}>
					<Typography
						component={Link}
						href='/about'
						sx={{ '&:hover': { textDecoration: 'underline' } }}
					>
						О нас
					</Typography>
					<Typography
						component={Link}
						href='/catalog'
						sx={{ '&:hover': { textDecoration: 'underline' } }}
					>
						Каталог
					</Typography>
				</Box>

				<Box sx={{ flex: 1 }} />

				<IconButton onClick={toggle} aria-label='toggle theme'>
					{mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
				</IconButton>

				<IconButton component={Link} href='/cart' aria-label='cart'>
					<Badge badgeContent={0} color='primary'>
						<ShoppingCartIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
