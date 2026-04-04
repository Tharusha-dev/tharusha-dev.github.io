<script>
    import '../styles.css';
    import NavBar from '$lib/components/NavBar.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    import codequestThumb from '$lib/images/ach-codequest/1.jpg';
    import reidxtremeThumb from '$lib/images/ach-reidinjection/1.jpg';
    import codefestThumb from '$lib/images/ach-codefest/1.jpg';

    /** @type {Record<string, string>} */
    const thumbMap = {
        'codequest': codequestThumb,
        'reidxtreme': reidxtremeThumb,
        'codefest': codefestThumb
    };
    
    let m = { x: 0, y: 0 };
    let gradient3Style = '';

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
        gradient3Style = `left: ${m.x}px; top: ${m.y}px;`;
    }
</script>

<svelte:head>
	<title>Achievements | Tharusha Jayasooriya</title>
	<meta name="description" content="My hackathon journey and accomplishments." />
</svelte:head>

<div class="wrapper">
	<div class="gradient gradient-1"></div>
	<div class="gradient gradient-2"></div>
	<div class="gradient gradient-3" style={gradient3Style}></div>
</div>

<div class="landing-page" on:mousemove={handleMousemove}>
    <NavBar activePage="nav-achievements" />

    <section id="achievements">
        <div class="achievements-content">
            <h1 class="page-title">Achievements</h1>
            <p class="page-subtitle">My hackathon journey and accomplishments</p>

            <div class="card-container">
                {#each data.achievements as item}
                    <a href="/achievements/{item.slug}" class="card-link">
                        <div class="card">
                            <div class="card-image">
                                <!-- svelte-ignore a11y-img-redundant-alt -->
                                {#if thumbMap[item.slug]}
                                    <img src={thumbMap[item.slug]} alt={item.title} />
                                {:else}
                                    <div class="placeholder-image">Image coming soon</div>
                                {/if}
                            </div>
                            <div class="card-content">
                                <h2>{item.title}</h2>
                                <h3>{item.organization}</h3>
                                <span class="card-arrow">→</span>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>
</div>

<style>
    #achievements {
        margin-left: 15vw;
        padding: 5vh 5vw;
        color: white;
        min-height: 100vh;
    }

    .page-title {
        font-size: 3.5em;
        margin-bottom: 0.3em;
        font-weight: 200;
    }

    .page-subtitle {
        font-size: 1.2em;
        color: #959595;
        margin-bottom: 3em;
        font-weight: 300;
    }

    .card-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .card-link {
        text-decoration: none;
        color: inherit;
        display: block;
    }

    .card {
        background-color: rgba(37, 37, 37, 0.6);
        border: 0.04vw solid rgba(255, 255, 255, 0.15);
        border-radius: 1vw;
        overflow: hidden;
        transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .card:hover {
        transform: translateY(-6px);
        background-color: rgba(37, 37, 37, 0.95);
        border-color: rgba(147, 84, 191, 0.4);
    }

    .card-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
        background-color: #2a2a2a;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .placeholder-image {
        color: #777;
        font-size: 0.9em;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }

    .card:hover .card-image img {
        transform: scale(1.05);
    }

    .card-content {
        padding: 1.5rem 1.8rem 1.8rem;
    }

    .card h2 {
        color: #ffffff;
        margin: 0 0 0.5rem 0;
        font-size: 1.3em;
        font-weight: 500;
        line-height: 1.3;
    }

    .card h3 {
        color: #9354BF;
        margin: 0;
        font-weight: 300;
        font-size: 0.95em;
        line-height: 1.4;
    }

    .card-arrow {
        display: inline-block;
        margin-top: 1rem;
        color: #9354BF;
        font-size: 1.2em;
        transition: transform 0.3s ease;
    }

    .card:hover .card-arrow {
        transform: translateX(6px);
    }

    @media (max-width: 1200px) {
        .card-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        #achievements {
            margin-left: 0;
            padding: 12vh 5vw 5vh;
        }

        .page-title {
            font-size: 3em;
        }

        .page-subtitle {
            font-size: 1.1em;
            margin-bottom: 2em;
        }

        .card-container {
            grid-template-columns: 1fr;
        }
    }
</style>
