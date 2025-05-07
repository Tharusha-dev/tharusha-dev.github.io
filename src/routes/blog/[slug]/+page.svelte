<script>
	export let data;
	import { onMount } from 'svelte';
	
	let contentElement;
	
	onMount(() => {
		// Process images to make them responsive
		if (contentElement) {
			const images = contentElement.querySelectorAll('img');
			images.forEach(img => {
				img.classList.add('responsive-image');
				// Wrap images in figure if not already
				if (img.parentNode.tagName !== 'FIGURE') {
					const figure = document.createElement('figure');
					img.parentNode.insertBefore(figure, img);
					figure.appendChild(img);
				}
			});
			
			// Add target="_blank" to all links
			const links = contentElement.querySelectorAll('a');
			links.forEach(link => {
				link.setAttribute('target', '_blank');
				link.setAttribute('rel', 'noopener noreferrer');
			});
		}
	});
</script>

<svelte:head>
	<title>{data.post.title} | Tharusha Jayasooriya</title>
</svelte:head>
<a href="/">
	<div class="home-button">
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
				fill="#ffffff"
			/>
		</svg>
	</div>
</a>
<div class="blog-container">
	<article>
		<header>
			<h1>{data.post.title}</h1>
			<div class="meta">
				<span class="author">By {data.post.author}</span>
				<span class="date">{new Date(data.post.pubDate).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}</span>
			</div>
			<div class="categories">
				{#each data.post.categories as category}
					<span class="category">{category}</span>
				{/each}
			</div>
		</header>
		
		<div class="content" bind:this={contentElement}>
			{@html data.post.content}
		</div>
		
		<footer>
			<a href={data.post.link} target="_blank" rel="noopener noreferrer" class="original-link">
				Read on Medium
			</a>
			<a href="/blog" class="back-link">
				Back to all articles
			</a>
		</footer>
	</article>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    font-family: "Poppins";
}

	.blog-container {
		max-width: 800px;
		margin: 5vh auto;
		padding: 0 20px;
		color: white;
	}

	.home-button {
    position: fixed;
    width: 1.4vw;
    left: 0;
    padding: 0.7%;
    background-color: #313131;
    border-radius: 0 0.3vw 0.3vw 0;

}
	article {
		border: 0.04vw solid rgba(255, 255, 255, 0.308);
		border-radius: 1vw;
		padding: 2rem;
		background-color: rgba(0, 0, 0, 0.2);
	}
	
	header {
		margin-bottom: 2rem;
	}
	
	h1 {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	
	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1rem;
		font-size: 0.9rem;
		color: #959595;
	}
	
	.categories {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	
	.category {
		background-color: #303030;
		color: white;
		padding: 0.3rem 0.8rem;
		border-radius: 50px;
		font-size: 0.8rem;
	}
	
	.content {
		line-height: 1.8;
		font-size: 1.1rem;
	}
	
	.content :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 0.5vw;
		margin: 1.5rem 0;
	}
	
	.content :global(figure) {
		margin: 2rem 0;
	}
	
	.content :global(h2) {
		font-size: 1.8rem;
		margin: 2rem 0 1rem;
		font-weight: 500;
	}
	
	.content :global(h3) {
		font-size: 1.5rem;
		margin: 1.5rem 0 1rem;
		font-weight: 500;
	}
	
	.content :global(p) {
		margin-bottom: 1.5rem;
	}
	
	.content :global(pre) {
		background-color: #1e1e1e;
		padding: 1rem;
		border-radius: 0.5vw;
		overflow-x: auto;
		margin: 1.5rem 0;
	}
	
	.content :global(code) {
		font-family: monospace;
	}
	
	.content :global(blockquote) {
		border-left: 4px solid #2177FF;
		padding-left: 1rem;
		margin-left: 0;
		color: #959595;
	}
	
	footer {
		margin-top: 3rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
	}
	
	.original-link, .back-link {
		display: inline-block;
		background-color: #303030;
		color: white;
		padding: 0.8rem 1.5rem;
		border-radius: 0.5vw;
		text-decoration: none;
		transition: background-color 0.3s;
	}
	
	.original-link:hover, .back-link:hover {
		background-color: #2177FF;
	}
	
	@media (max-width: 600px) {
		.blog-container {
			padding: 0 15px;
		}
		
		.home-button {
        left: auto;
        top: 0;
        width: 6vw;
    }
		article {
			padding: 1.5rem;
		}
		
		h1 {
			font-size: 1.8rem;
		}
		
		.content {
			font-size: 1rem;
		}
		
		footer {
			flex-direction: column;
		}
	}
</style>