import { CartItem } from './cart'

export type Order = {
	item: CartItem[]
	total: number
	user: {
		name: string
		phone: string
		address: string
	}
}
