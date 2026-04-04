<script>
    import '../../styles.css';
    import NavBar from '$lib/components/NavBar.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    // CodeQuest images
    import cq1 from '$lib/images/ach-codequest/1.jpg';
    import cq2 from '$lib/images/ach-codequest/2.jpg';
    import cq3 from '$lib/images/ach-codequest/3.jpg';
    import cq4 from '$lib/images/ach-codequest/4.jpg';

    // ReidXtreme images
    import rx1 from '$lib/images/ach-reidinjection/1.jpg';
    import rx2 from '$lib/images/ach-reidinjection/2.jpg';
    import rx3 from '$lib/images/ach-reidinjection/3.jpg';

    // Codefest images
    import cf1 from '$lib/images/ach-codefest/1.jpg';
    import cf2 from '$lib/images/ach-codefest/2.jpg';
    import cf3 from '$lib/images/ach-codefest/3.jpg';

    /** @type {Record<string, string[]>} */
    const imageMap = {
        'codequest': [cq1, cq2, cq3, cq4],
        'reidxtreme': [rx1, rx2, rx3],
        'codefest': [cf1, cf2, cf3]
    };

    $: images = imageMap[data.item.slug] || [];
    $: heroImage = images[0] || '';
    $: galleryImages = images.slice(1);

    let m = { x: 0, y: 0 };
    let gradient3Style = '';

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
        gradient3Style = `left: ${m.x}px; top: ${m.y}px;`;
    }

    let lightboxOpen = false;
    let lightboxIndex = 0;

    function openLightbox(/** @type {number} */ index) {
        lightboxIndex = index;
        lightboxOpen = true;
    }

    function closeLightbox() {
        lightboxOpen = false;
    }

    function nextImage() {
        lightboxIndex = (lightboxIndex + 1) % images.length;
    }

    function prevImage() {
        lightboxIndex = (lightboxIndex - 1 + images.length) % images.length;
    }

    /** @param {KeyboardEvent} e */
    function handleKeydown(e) {
        if (!lightboxOpen) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="wrapper">
    <div class="gradient gradient-1"></div>
    <div class="gradient gradient-2"></div>
    <div class="gradient gradient-3" style={gradient3Style}></div>
</div>

<div class="landing-page" on:mousemove={handleMousemove}>
    <NavBar activePage="nav-achievements" />

    <section id="achievements-detail">
        <a href="/achievements" class="back-link">← Back to Achievements</a>

        <!-- Hero image -->
        {#if heroImage}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="hero-image" on:click={() => openLightbox(0)}>
                <img src={heroImage} alt={data.item.title} />
            </div>
        {/if}

        <div class="detail-heading">
            <h1>{data.item.title}</h1>
            <h2>{data.item.organization}</h2>
        </div>

        <div class="detail-body">
            {#each data.item.content as block}
                {#if block.type === 'heading'}
                    <h3 class="content-heading">{block.text}</h3>
                {:else if block.type === 'subheading'}
                    <h4 class="content-subheading">{block.text}</h4>
                {:else if block.type === 'paragraph'}
                    <p>{block.text}</p>
                {:else if block.type === 'list'}
                    <ul class="content-list">
                        {#each block.items as item}
                            <li>{item}</li>
                        {/each}
                    </ul>
                {:else if block.type === 'tech'}
                    <div class="content-tech">
                        {#each block.items as tag}
                            <span class="tech-tag">{tag}</span>
                        {/each}
                    </div>
                {/if}
            {/each}
        </div>

        <!-- Photo gallery -->
        {#if galleryImages.length > 0}
            <div class="gallery-section">
                <h3 class="gallery-title">Photos</h3>
                <div class="gallery-grid">
                    {#each galleryImages as img, i}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div class="gallery-item" on:click={() => openLightbox(i + 1)}>
                            <img src={img} alt="{data.item.title} photo {i + 2}" loading="lazy" />
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </section>

    <!-- Lightbox -->
    {#if lightboxOpen}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="lightbox-overlay" on:click={closeLightbox}>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="lightbox-content" on:click|stopPropagation>
                <button class="lightbox-close" on:click={closeLightbox}>✕</button>
                {#if images.length > 1}
                    <button class="lightbox-nav lightbox-prev" on:click={prevImage}>‹</button>
                {/if}
                <img src={images[lightboxIndex]} alt="{data.item.title} photo {lightboxIndex + 1}" />
                {#if images.length > 1}
                    <button class="lightbox-nav lightbox-next" on:click={nextImage}>›</button>
                {/if}
                <span class="lightbox-counter">{lightboxIndex + 1} / {images.length}</span>
            </div>
        </div>
    {/if}
</div>

<style>
    #achievements-detail {
        margin-left: 15vw;
        padding: 5vh 5vw;
        color: white;
        min-height: 100vh;
    }

    .back-link {
        display: inline-block;
        color: #9354BF;
        font-size: 1.1em;
        margin-bottom: 2rem;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .back-link:hover {
        color: #b474e0;
    }

    /* Hero image */
    .hero-image {
        width: 100%;
        max-width: 900px;
        height: 400px;
        border-radius: 1vw;
        overflow: hidden;
        margin-bottom: 2.5rem;
        cursor: pointer;
    }

    .hero-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }

    .hero-image:hover img {
        transform: scale(1.03);
    }

    /* Heading */
    .detail-heading {
        margin-bottom: 2rem;
    }

    .detail-heading h1 {
        font-size: 3em;
        font-weight: 200;
        margin: 0 0 0.3em 0;
        line-height: 1.2;
    }

    .detail-heading h2 {
        color: #9354BF;
        font-weight: 300;
        font-size: 1.3em;
        margin: 0;
    }

    /* Description / Content blocks */
    .detail-body {
        margin-bottom: 3rem;
        max-width: 800px;
    }

    .detail-body p {
        line-height: 1.7;
        color: #d1d1d1;
        font-size: 1.1em;
        font-weight: 300;
        margin: 0 0 1em 0;
    }

    .content-heading {
        font-size: 1.6em;
        font-weight: 300;
        color: #ffffff;
        margin: 0 0 1.2em 0;
    }

    .content-subheading {
        font-size: 1.2em;
        font-weight: 400;
        color: #b474e0;
        margin: 1.6em 0 0.6em 0;
    }

    .content-list {
        list-style: none;
        padding: 0;
        margin: 0 0 1.2em 0;
    }

    .content-list li {
        position: relative;
        padding-left: 1.4em;
        line-height: 1.7;
        color: #d1d1d1;
        font-size: 1.05em;
        font-weight: 300;
        margin-bottom: 0.5em;
    }

    .content-list li::before {
        content: '▸';
        position: absolute;
        left: 0;
        color: #9354BF;
        font-size: 1.1em;
    }

    .content-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6em;
        margin: 1.5em 0 1.5em 0;
    }

    .tech-tag {
        background: rgba(147, 84, 191, 0.15);
        color: #b474e0;
        border: 1px solid rgba(147, 84, 191, 0.3);
        border-radius: 2em;
        padding: 0.35em 1em;
        font-size: 0.9em;
        font-weight: 400;
        letter-spacing: 0.02em;
        transition: background 0.2s, border-color 0.2s;
    }

    .tech-tag:hover {
        background: rgba(147, 84, 191, 0.25);
        border-color: rgba(147, 84, 191, 0.5);
    }

    /* Gallery */
    .gallery-section {
        max-width: 900px;
    }

    .gallery-title {
        font-size: 1.5em;
        font-weight: 300;
        margin-bottom: 1.5rem;
        color: #ffffff;
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .gallery-item {
        border-radius: 0.6vw;
        overflow: hidden;
        aspect-ratio: 4 / 3;
        cursor: pointer;
    }

    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }

    .gallery-item:hover img {
        transform: scale(1.06);
    }

    /* Lightbox */
    .lightbox-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.92);
        z-index: 100000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .lightbox-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .lightbox-content img {
        max-width: 85vw;
        max-height: 85vh;
        object-fit: contain;
        border-radius: 0.5vw;
    }

    .lightbox-close {
        position: absolute;
        top: -2.5rem;
        right: 0;
        background: none;
        color: white;
        font-size: 1.8em;
        cursor: pointer;
        padding: 0.3em;
        line-height: 1;
        opacity: 0.7;
        transition: opacity 0.2s;
    }

    .lightbox-close:hover {
        opacity: 1;
    }

    .lightbox-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.1);
        color: white;
        font-size: 2.5em;
        cursor: pointer;
        padding: 0.2em 0.5em;
        border-radius: 0.3em;
        line-height: 1;
        opacity: 0.7;
        transition: opacity 0.2s, background 0.2s;
    }

    .lightbox-nav:hover {
        opacity: 1;
        background: rgba(255, 255, 255, 0.2);
    }

    .lightbox-prev {
        left: -4rem;
    }

    .lightbox-next {
        right: -4rem;
    }

    .lightbox-counter {
        position: absolute;
        bottom: -2.5rem;
        left: 50%;
        transform: translateX(-50%);
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9em;
    }

    /* Responsive */
    @media (max-width: 1024px) {
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        #achievements-detail {
            margin-left: 0;
            padding: 12vh 5vw 5vh;
        }

        .hero-image {
            height: 250px;
            border-radius: 0.8em;
        }

        .detail-heading h1 {
            font-size: 2em;
        }

        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.6rem;
        }

        .lightbox-prev {
            left: 0.5rem;
        }

        .lightbox-next {
            right: 0.5rem;
        }

        .lightbox-nav {
            font-size: 1.8em;
            padding: 0.2em 0.4em;
        }
    }

    @media (max-width: 480px) {
        .gallery-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
