<script>
  import { onMount } from 'svelte';
  import reviews from '$lib/data/reviews.json';
  import upworkLogo from '$lib/images/upwork-logo.png';
  import fiverrLogo from '$lib/images/fiverr-logo.png';
  // Duplicate the reviews array to create a seamless loop
  const duplicatedReviews = [...reviews, ...reviews];
  
  let marqueeContainer;
  let animationPaused = false;
  
  function handleMouseEnter() {
    animationPaused = true;
  }
  
  function handleMouseLeave() {
    animationPaused = false;
  }
  
  // Star rating component
  function StarRating({ rating }) {
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
</script>

<div class="reviews-section">
  <div 
    class="marquee-container" 
    class:paused={animationPaused}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    bind:this={marqueeContainer}
  >
    <div class="marquee">
      {#each duplicatedReviews as { review, rating, country, platform }, i}
        <div class="review-card">
          <p class="review-text">{review}</p>
          <div class="review-meta">
            <div class="rating">
              <span class="stars">{StarRating({ rating })}</span>
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
  .reviews-section {
    width: 100%;
    overflow: hidden;
    background-color: #1B1B1B;
    padding: 2rem 0;
    margin: 5vh 0;
    /* border: 0.04vw solid rgba(255, 255, 255, 0.308); */
    border-radius: 1vw;
  }
  
  .marquee-container {
    width: 100%;
    overflow: hidden;
  }
  
  .marquee {
    display: flex;
    animation: marquee 30s linear infinite;
  }
  
  .paused .marquee {
    animation-play-state: paused;
  }
  
  .review-card {
    min-width: 300px;
    max-width: 400px;
    margin: 0 1.5rem;
    padding: clamp(1rem, 2vw, 1.5rem);
    background-color: #252525;
    border-radius: 0.8vw;
    border: 0.04vw solid rgba(255, 255, 255, 0.308);
    color: white;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .review-text {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    font-weight: 300;
  }
  
  .review-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    gap: 1rem;
  }
  
  .rating {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    height: clamp(16px, 2.5vw, 20px);
    line-height: 1;
  }
  
  .stars {
    color: #9354BF;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1;
    display: flex;
    align-items: center;
  }
  
  .rating-number {
    font-weight: bold;
  }
  
  .source-info {
    display: flex;
    align-items: center;
    gap: clamp(0.5rem, 1vw, 0.75rem);
  }
  
  .country-flag {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1;
    display: flex;
    align-items: center;
  }
  
  .platform-logo {
    height: clamp(16px, 2.5vw, 20px);
    width: auto;
    object-fit: contain;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  @media only screen and (max-width: 768px) {
    .review-card {
      min-width: 250px;
      margin: 0 1rem;
    }
    
    .review-text {
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
    }
    
    .review-meta {
      gap: 0.75rem;
    }
    
    .source-info {
      gap: 0.4rem;
    }
    
    .rating {
      gap: 0.25rem;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .review-card {
      min-width: 200px;
      margin: 0 0.75rem;
    }
    
    .review-text {
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
    }
    
    .review-meta {
      gap: 0.5rem;
    }
    
    .source-info {
      gap: 0.3rem;
    }
  }
</style> 