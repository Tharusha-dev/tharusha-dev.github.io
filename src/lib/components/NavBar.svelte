<script>
	export let activePage = '';
	export let isHome = false;

	let isMobileMenuOpen = false;

	function toggleMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
		// Prevent background scrolling when menu is open
		if (typeof document !== 'undefined') {
			if (isMobileMenuOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	}

	function closeMenu() {
		if (isMobileMenuOpen) {
			isMobileMenuOpen = false;
			if (typeof document !== 'undefined') {
				document.body.style.overflow = '';
			}
		}
	}
</script>

<div class="mobile-menu-btn" on:click={toggleMenu} on:keydown={(e) => e.key === 'Enter' && toggleMenu()} tabindex="0" role="button">
	<div class="hamburger" class:is-active={isMobileMenuOpen}>
		<span></span>
		<span></span>
		<span></span>
	</div>
</div>

<div class="nav-bar-outer" class:mobile-open={isMobileMenuOpen}>
	<div class="nav-bar" on:click={closeMenu} on:keydown={(e) => e.key === 'Escape' && closeMenu()} tabindex="0" role="navigation">
		<div class="nav-item nav-styled {activePage === 'nav-home' ? 'active-nav-item' : ''}" id="nav-home">
			<a href="{isHome ? '#home' : '/'}">HOME</a>
		</div>
		<div class="nav-item nav-styled {activePage === 'nav-portfolio' ? 'active-nav-item' : ''}" id="nav-portfolio">
			<a href="{isHome ? '#portfolio' : '/#portfolio'}">PORTFOLIO</a>
		</div>
		<div class="nav-item nav-styled {activePage === 'nav-achievements' ? 'active-nav-item' : ''}" id="nav-achievements">
			<a href="/achievements">ACHIEVEMENTS</a>
		</div>
		<div class="nav-item nav-styled {activePage === 'nav-volunteering' ? 'active-nav-item' : ''}" id="nav-volunteering">
			<a href="/volunteering">VOLUNTEERING</a>
		</div>
		<div class="nav-item nav-styled {activePage === 'nav-about' ? 'active-nav-item' : ''}" id="nav-about">
			<a href="{isHome ? '#about' : '/#about'}">ABOUT</a>
		</div>
		<div class="nav-item nav-styled {activePage === 'nav-blog' ? 'active-nav-item' : ''}" id="nav-blog">
			<a href="/blog">BLOG</a>
		</div>
		<div class="nav-item nav-styled {activePage === 'nav-reviews' ? 'active-nav-item' : ''}" id="nav-reviews">
			<a href="/reviews">REVIEWS</a>
		</div>
	</div>
</div>

<style>
	.mobile-menu-btn {
		display: none;
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 10000;
		cursor: pointer;
		padding: 12px;
		background: rgba(37, 37, 37, 0.6);
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		transition: background 0.3s ease;
	}

	.mobile-menu-btn:hover {
		background: rgba(37, 37, 37, 0.9);
	}

	.hamburger {
		width: 24px;
		height: 16px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.hamburger span {
		display: block;
		width: 100%;
		height: 2px;
		background-color: white;
		transition: all 0.3s ease;
		border-radius: 2px;
	}

	.hamburger.is-active span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.hamburger.is-active span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.is-active span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* Note: base styles like .active-nav-item and .nav-bar are derived from global styles.css 
	   but we use scoped styling to override for mobile */
	
	@media (max-width: 768px) {
		.mobile-menu-btn {
			display: block;
		}

		.nav-bar-outer {
			position: fixed !important;
			top: 0 !important;
			left: -100% !important;
			width: 100vw !important;
			height: 100vh !important;
			background: rgba(27, 27, 27, 0.95) !important;
			backdrop-filter: blur(15px) !important;
			-webkit-backdrop-filter: blur(15px) !important;
			z-index: 9999 !important;
			transition: left 0.4s cubic-bezier(0.77, 0, 0.175, 1) !important;
			display: flex !important;
			align-items: center !important;
			justify-content: center !important;
		}

		.nav-bar-outer.mobile-open {
			left: 0 !important;
		}

		.nav-bar {
			margin: 0 !important;
			background: transparent !important;
			flex-direction: column !important;
			gap: 30px !important;
			border: none !important;
			padding: 0 !important;
		}

		.nav-item.nav-styled {
			writing-mode: horizontal-tb !important;
			transform: none !important;
			font-size: 1.6rem !important;
			padding: 10px 20px !important;
			text-align: center !important;
			letter-spacing: 0.15em !important;
		}

		.nav-item.nav-styled a {
			font-weight: 300 !important;
			transition: color 0.3s ease !important;
		}

		.nav-item.nav-styled.active-nav-item {
			background: transparent !important;
		}
		
		.nav-item.nav-styled.active-nav-item a {
			color: #9354BF !important;
			font-weight: 500 !important;
		}
	}
</style>
