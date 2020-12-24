const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			brand: 'Dim Kovy',
			product: 'Socks',
			image: './img/socks_green.jpg',
			description: 'Socks image',
			inStock: true,
			inventory: 100,
			onSale: true,
			details: ['50% cotton', '30% wool', '20% polyester'],
			variants: [
				{ id: 2234, color: 'green', image: './img/socks_green.jpg', quantity: 50 },
				{ id: 2235, color: 'blue', image: './img/socks_blue.jpg', quantity: 0 },
			],
			sizes: ['Shoe size: 5-9', 'Shoe size: 6-12', 'Shoe size: 12-15', 'Shoe size: 15-17'],
			
		}
	},
	methods: {
		addToCart() {
			this.cart += 1
		},
		removeFromCart() {
			// if (this.cart > 0) {this.cart -= 1}
			this.cart > 0 ? this.cart -= 1 : this.cart = 0
		},
		updateImage(variantImage) {
			this.image = variantImage
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		}
	}
})