let products = [];
products.push({name: "The Kardashian", description: "A high-end option for connected partiers.", price: "@#8369;1781", image-url: "TheKardashian.jpg"});
products.push({name: "The Rat Pack", description: "Because, why not?", price: "@#8369;891", image-url: "TheRatPack.jpg"});
products.push({name: "The Bounce House", description: "For the life of the party.", price: "@#8369;1336", image-url: "TheBounceHouse.jpg"});
products.push({name: "The Urkel", description: "Show off your nerdy!", price: "@#8369;1425", image-url: "TheUrkel.png"});
products.push({name: "The Free Spirit", description: "Our most affordable option.", price: "@#8369;713", image-url: "hat2.jpg"});
products.push({name: "The Neon Cowgirl", description: "This one's for the girls.", price: "@#8369;850", image-url: "neon_cowgirl.jpg"});
products.push({name: "Pretty In Pink", description: "The classiest, wearable WiFi.", price: "@#8369;850", image-url: "pretty_pink.jpg"});
products.push({name: "The Snow Bunny", description: "A hat for those cold winter parties.", price: "@#8369;400", image-url: "snow_bunny1.jpg"});




let cards = document.getElementById("flex-wrapper");

for (let i = 0; i < products.length; i++) {
	cards.innerHTML += `<div class="card-wrapper">
							<ul class="product-info">
								<li class="product-image">
									${products[i].url}
								</li>
								<li>${products[i].name}</li>
								<li>${products[i].description}</li>
								<li>${products[i].price}</li>
							</ul>
						</div>`;
}