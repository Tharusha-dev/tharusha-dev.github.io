
    <a href="/">
        <div class="home-button">

            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
                    fill="#ffffff" />
            </svg>
        </div>
    </a>
    <div class="casestudy-outer casestudy-outer-gpfs ">


        <div class="casestudy-inner">
            <h1 id="insight-">InSight 🔍</h1>
            <p>A chrome extension to extract information about your LinkedIn network without a LinkedIn developer
                account.
                All you need is your active LinkedIn login within the browser.</p>
            <p>Extract Key Network Details:</p>
            <ul>
                <li><strong>First Name</strong></li>
                <li><strong>Last Name</strong></li>
                <li><strong>Headline (Current Job Title)</strong></li>
            </ul>
            <h2 id="installation">Installation</h2>
            <ol>
                <li>Locate the latest version of the extension on the project releases page.</li>
                <li>Extract the downloaded file.</li>
                <li>Navigate to <code>chrome://extensions/</code> in your browser.</li>
                <li>Locate the toggle for &quot;Developer mode&quot; in the top right corner and activate it.</li>
                <li>Click &quot;Load unpacked&quot; and select the extracted folder.</li>
            </ol>
            <h2 id="disclaimer">Disclaimer</h2>
            <p>Please note that InSight is not affiliated with LinkedIn. Using it might violate LinkedIn&#39;s Terms of
                Service. Use it at your own risk. This extension is meant to be used as a personal network evaluation
                tool. By using this tool, you agree to not hold the author or contributors responsible for any
                consequences resulting from its usage.</p>
            <h2 id="how-it-works-">How it works 🛠️</h2>
            <p>LinkedIn prevents straightforward web scraping without session cookies and specific headers. This
                extension modifies HTTP requests made by LinkedIn. It retrieves your connections in bulk while
                preserving the essential headers and cookie data.</p>
            <p>The extension incorporates safeguards against exceeding LinkedIn&#39;s rate limits. It retrieves
                connections in batches of 100 (set as <code>requestChunksDivider</code> on background.js) and introduces
                random delays (maximum delay in miliseconds is set as <code>maxDelay</code> in background.js) between
                requests to ensure smooth operation.</p>
            <p>For more information about how linkedin Voyager API works, check out <a
                    href="https://github.com/tomquirk/linkedin-api">this</a> amazing project by tomquirk, which inspired
                this project. (This project does not rely on linkedin-api by tomquirk)</p>
            <h2 id="insight-prioritizes-user-privacy">InSight prioritizes user privacy</h2>
            <p>Importantly, <strong>no data will be stored externally</strong>. The extension does not save any of the
                gathered data on any external servers.</p>
                <div class="project-actions">
                    <a href="https://github.com/tharusha-dev/insight">
                        <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
    
    
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"
                                    fill="#ffffff">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path
                                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                            id="github-[#142]">
    
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
    
    
                    
                </div>
        </div>


    </div>


