'use client'

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { Box, Button, Stack, Typography } from '@mui/material'

export default function Home() {
	return (
		<Box py={6}>
			<Typography variant='h3' fontWeight={700} gutterBottom>
				Next.js
			</Typography>

			<Typography variant='body1' color='text.secondary' mb={3}>
				Чистый старт. Готов к разработке.
			</Typography>

			<Stack direction='row' spacing={2}>
				<Button variant='contained' startIcon={<RocketLaunchIcon />}>
					Get started
				</Button>
				<Button variant='outlined'>Docs</Button>
			</Stack>
		</Box>
	)
}
