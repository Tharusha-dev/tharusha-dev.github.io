<script>
	import reviews from '$lib/data/reviews.json';
	import upworkLogo from '$lib/images/upwork-logo.png';
	import fiverrLogo from '$lib/images/fiverr-logo.png';
	import { onMount } from 'svelte';
	import '../styles.css';

	// Function to generate star rating display
	function getStarRating(rating) {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;
		const stars = [];
		
		for (let i = 0; i < fullStars; i++) {
			stars.push('★');
		}
		
		if (hasHalfStar) {
			stars.push('★');
		}
		
		return stars.join('');
	}

	// Get the review ID from the URL hash if present
	let highlightedReviewId = '';
	
	onMount(() => {
		if (window.location.hash) {
			highlightedReviewId = window.location.hash.substring(1);
			// Scroll to the highlighted review
			setTimeout(() => {
				const element = document.getElementById(highlightedReviewId);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
					element.classList.add('highlighted-review');
				}
			}, 300);
		}
	});
</script>

<div class="wrapper">
	<div class="gradient gradient-1"></div>
	<div class="gradient gradient-2"></div>
	<div class="gradient gradient-3"></div>
</div>

<div class="reviews-page">
	<div class="nav-bar-outer">
		<div class="nav-bar">
			<div class="nav-item"><a href="/#home">HOME</a></div>
			<div class="nav-item"><a href="/#portfolio">PORTFOLIO</a></div>
			<div class="nav-item"><a href="/#about">ABOUT</a></div>
			<div class="nav-item"><a href="/blog">BLOG</a></div>
		</div>
	</div>

	<div class="reviews-container">
		<h1>Client Reviews</h1>
		<p class="reviews-intro">
			Here's what clients have said about working with me. These reviews are from my profiles on 
			<a href="https://www.upwork.com/freelancers/~01cc4a157cb61f5d6b" target="_blank" class="platform-link">Upwork</a> 
			and <a href="https://www.fiverr.com/s/VYLbP0Z" target="_blank" class="platform-link">Fiverr</a>.
		</p>

		<div class="reviews-grid">
			{#each reviews as { review, rating, country, platform }, i}
				<div class="review-card" id={`review-${i}`}>
					<p class="review-text">{review}</p>
					<div class="review-meta">
						<div class="rating">
							<span class="stars">{getStarRating(rating)}</span>
							<span class="rating-number">{rating.toFixed(1)}</span>
						</div>
						<div class="source-info">
							<span class="country-flag">{country}</span>
							<a href={platform === 'Upwork' ? 'https://www.upwork.com/freelancers/~01cc4a157cb61f5d6b' : 'https://www.fiverr.com/s/VYLbP0Z'} target="_blank">
								<img 
									src={platform === 'Upwork' ? upworkLogo : fiverrLogo} 
									alt="{platform} logo" 
									class="platform-logo"
								/>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.reviews-page {
		width: 100vw;
		min-height: 100vh;
		color: white;
		font-family: "Poppins";
		position: relative;
		z-index: 99999;
	}

	.reviews-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 15vh 5vw 5vh;
	}

	h1 {
		font-size: 3.5em;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.reviews-intro {
		font-size: 1.2em;
		font-weight: 300;
		margin-bottom: 3rem;
		max-width: 800px;
	}

	.platform-link {
		color: #9354BF;
		text-decoration: underline;
		transition: color 0.2s;
	}

	.platform-link:hover {
		color: #b47ad9;
	}

	.reviews-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
	}

	.review-card {
		background-color: #252525;
		border-radius: 0.5rem;
		border: 1px solid rgba(255, 255, 255, 0.15);
		padding: 1.5rem;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.review-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	.highlighted-review {
		border: 2px solid #9354BF;
		box-shadow: 0 0 15px rgba(147, 84, 191, 0.5);
	}

	.review-text {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		font-weight: 300;
	}

	.review-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.rating {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.stars {
		color: #9354BF;
		font-size: 1.2rem;
	}

	.rating-number {
		font-weight: bold;
	}

	.source-info {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.country-flag {
		font-size: 1.2rem;
	}

	.platform-logo {
		height: 24px;
		width: auto;
	}

	@media only screen and (max-width: 768px) {
		.reviews-grid {
			grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
			gap: 1.5rem;
		}

		h1 {
			font-size: 2.5em;
		}

		.reviews-intro {
			font-size: 1.1em;
		}
	}

	@media only screen and (max-width: 480px) {
		.reviews-container {
			padding: 12vh 5vw 5vh;
		}

		.reviews-grid {
			grid-template-columns: 1fr;
			gap: 1.25rem;
		}

		h1 {
			font-size: 2em;
		}

		.reviews-intro {
			font-size: 1em;
			margin-bottom: 2rem;
		}

		.review-text {
			font-size: 1rem;
		}
	}
</style> 