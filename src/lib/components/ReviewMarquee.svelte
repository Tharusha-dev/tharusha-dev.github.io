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
    padding: 2rem 0;
    margin: 3vh 0;
    border-radius: 0.5rem;
  }
  
  .marquee-container {
    width: 100%;
    overflow: hidden;
  }
  
  .marquee {
    display: flex;
    animation: marquee 150s linear infinite;
    width: max-content;
  }
  
  .paused .marquee {
    animation-play-state: paused;
  }
  
  .review-card {
    min-width: 300px;
    max-width: 400px;
    margin: 0 1.5rem;
    padding: 1.25rem;
    background-color: #252525;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
    height: 20px;
    line-height: 1;
  }
  
  .stars {
    color: #9354BF;
    font-size: 1.1rem;
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
    gap: 0.75rem;
  }
  
  .country-flag {
    font-size: 1.1rem;
    line-height: 1;
    display: flex;
    align-items: center;
  }
  
  .platform-logo {
    height: 20px;
    width: auto;
    object-fit: contain;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-50%));
    }
  }
  
  @media only screen and (max-width: 768px) {
    .reviews-section {
      padding: 1.5rem 0;
      margin: 2vh 0;
      background-color: transparent;
    }
    
    .review-card {
      min-width: 220px;
      max-width: 75vw;
      margin: 0 0.75rem;
      padding: 1rem;
    }
    
    .review-text {
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
    }
    
    .marquee {
      animation: marquee 85s linear infinite;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .reviews-section {
      padding: 1rem 0;
    }
    
    .review-card {
      min-width: 180px;
      max-width: 70vw;
      margin: 0 0.5rem;
      padding: 0.875rem;
      border-radius: 0.375rem;
    }
    
    .review-text {
      font-size: 0.85rem;
      margin-bottom: 0.625rem;
      line-height: 1.4;
    }
    
    .review-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    
    .source-info {
      width: 100%;
      justify-content: space-between;
    }
    
    .rating {
      height: 18px;
    }
    
    .stars, .country-flag {
      font-size: 1rem;
    }
    
    .platform-logo {
      height: 18px;
    }
    
    .marquee {
      animation: marquee 85s linear infinite;
      width: max-content;
    }
  }
  
  @media only screen and (max-width: 360px) {
    .review-card {
      min-width: 170px;
      max-width: 75vw;
      padding: 0.75rem;
    }
    
    .review-text {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }
    
    .stars, .country-flag {
      font-size: 0.9rem;
    }
    
    .platform-logo {
      height: 16px;
    }
  }
</style> 