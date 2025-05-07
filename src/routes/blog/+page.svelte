<script>
  export let data;
  import { onMount } from 'svelte';
  
  let inViewElements;
  
  onMount(() => {
    inViewElements = document.querySelectorAll('.in-top');
    fadeIn();
    window.addEventListener('scroll', fadeIn);
    
    return () => {
      window.removeEventListener('scroll', fadeIn);
    };
  });
  
  function fadeIn() {
    if (!inViewElements) return;
    
    for (let i = 0; i < inViewElements.length; i++) {
      const element = inViewElements[i];
      const distInView = element.getBoundingClientRect().top - window.innerHeight;
      
      if (distInView < 0) {
        try {
          element.classList.add('in-animate');
        } catch (err) {}
      } else {
        try {
          element.classList.remove('in-animate');
        } catch (err) {}
      }
    }
  }

</script>

<svelte:head>
  <title>Blog | Tharusha Jayasooriya</title>
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

<div class="blog-page">
  <div class="blog-header">
    <h1>Blog</h1>
    <p>Thoughts, ideas, and tutorials on technology, programming, and more.</p>
  </div>
  
  <div class="blog-posts">
    {#each data.posts as post, i}
      <div class="blog-post in-top" style="transition-delay: {i * 100}ms">
        <div class="post-meta">
          <span class="post-date">{new Date(post.pubDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
          <div class="post-categories">
            {#if post.isPinned}
              <span class="post-category pinned">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2L12 12"></path>
                  <circle cx="12" cy="17" r="1"></circle>
                </svg>
                Pinned
              </span>
            {/if}
            {#each post.categories.slice(0, 3) as category}
              <span class="post-category">{category}</span>
            {/each}
          </div>
        </div>
        
        <h2 class="post-title">
          <a href={post.link}>{post.title}</a>
        </h2>
        
        <p class="post-description">{post.description}</p>
        
        <div class="post-footer">
          <a href={post.link} class="read-more">Read Article</a>
          <a href={post.originalLink} target="_blank" rel="noopener noreferrer" class="medium-link">
            View on Medium
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    font-family: "Poppins";
}

  .blog-page {
    max-width: 1000px;
    margin: 0 auto;
    padding: 5vh 20px;
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
  .blog-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .blog-header h1 {
    font-size: 3.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .blog-header p {
    font-size: 1.2rem;
    color: #959595;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .blog-posts {
    display: grid;
    gap: 2rem;
  }
  
  .blog-post {
    border: 0.04vw solid rgba(255, 255, 255, 0.308);
    border-radius: 1vw;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .blog-post:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .post-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .post-date {
    color: #959595;
    font-size: 0.9rem;
  }
  
  .post-categories {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .post-category {
    background-color: #303030;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 50px;
    font-size: 0.8rem;
  }
  
  .post-title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  .post-title a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .post-title a:hover {
    color: #9354BF;
  }
  
  .post-description {
    color: #959595;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .read-more, .medium-link {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border-radius: 0.5vw;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .read-more {
    background-color: #303030;
    color: white;
  }
  
  .medium-link {
    background-color: transparent;
    color: #959595;
    border: 1px solid #303030;
  }
  
  .read-more:hover {
    background-color: #9354BF;
  }
  
  .medium-link:hover {
    background-color: #303030;
    color: white;
  }
  
  @media (max-width: 600px) {
    .blog-page {
      padding: 3vh 15px;
    }
    
    .home-button {
        left: auto;
        top: 0;
        width: 6vw;
    }
    .blog-header h1 {
      font-size: 2.5rem;
    }
    
    .blog-post {
      padding: 1.5rem;
    }
    
    .post-meta {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .post-title {
      font-size: 1.5rem;
    }
    
    .post-footer {
      flex-direction: column;
      gap: 1rem;
    }
    
    .read-more, .medium-link {
      width: 100%;
      text-align: center;
    }
  }
  
  .post-category.pinned {
    background-color: #9354BF;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: 500;
  }
</style>
