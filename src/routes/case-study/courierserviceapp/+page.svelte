<a href="/">
    <div class="home-button">

        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
                fill="#ffffff" />
        </svg>
    </div>
</a>

<div class="casestudy-outer casestudy-outer-csa ">


    <div class="casestudy-inner">

<h1 id="courier-service-app---tharusha-jayasooriya">Courier Service App - Tharusha Jayasooriya</h1>
<h2 id="installation">Installation</h2>
<ol>
<li><p>Clone the repo </p>
</li>
<li><p>Make sure docker and docker compose is installed and docker service is running 
 Follow this <a href="https://docs.docker.com/compose/install/">link</a> for a guide.</p>
</li>
<li><p>Run the following commands (some bugs with docker needs certain package versions)</p>
</li>
</ol>
<pre><code>    pip uninstall requests
    pip install requests=2.31.0
    pip install &#39;urllib3&lt;2&#39;
</code></pre>
<ol start="4">
<li>Fix : Make sure all other docker docker-compose is down</li>
</ol>
<pre><code>    docker-compose down
</code></pre>
<ol start="5">
<li>Finally run this command from the project root (parent of api and client)</li>
</ol>
<pre><code>    docker-compose up --build
</code></pre>
<p>You&#39;ll know when docekr compose is done when you see this message.</p>
<pre><code>client_1  | webpack compiled with 1 warning
client_1  | No issues found.
</code></pre>
<p>*Please note that docker downloads arround 100MB of images, and the full process downloading images, verifying and building can take 5-10 mins. 
That should be it,</p>
<p>After that, the frontend should be accessible on 
<a href="http://localhost:3000">http://localhost:3000</a></p>
<p>(The backend is accessible via <a href="http://localhost:5000">http://localhost:5000</a>)</p>
<p><a href="https://github.com/vishnubob/wait-for-it/">wait-for-it.sh</a> was used to fix some issues with docker compose, where api was doing requests before db was done setting up. </p>
<h2 id="how-it-works">How it works</h2>
<h2 id="authentication">Authentication</h2>
<p>Authentication is done entirely using JWT with the <strong>Refresh-Access token model</strong>. </p>
<p>When a new user sign-up user details are stored in the database. <strong>Password is hashed with bcrypt before storing for added security.</strong> </p>
<p>Refresh token is also generated upon sign-up and ,</p>
<ol>
<li>Gets stored in the dB</li>
<li>Stored as a http only cookie on user browser.</li>
</ol>
<p>This means client side <strong>JS can&#39;t access the refresh token at all</strong> since it&#39;s only stored as a http only cookie on client side.</p>
<p>Access token are generated when a signed up use sign into the application.</p>
<p>This <strong>access token ONLY remains in web application memory as react state</strong>. This is to ensure common attacks like session hijacking is impossible. </p>
<p>Access token expire every 30mins, 
While refresh token expire every 30days.</p>
<p>With every request the client makes, axios middlewhere is used to put the access token as authentication headers. </p>
<p>In the backend all routes that needs verification goes through a express middlewhere called &quot;verify&quot; (can be found in api/auth/auth.ts). 
It does these processes.</p>
<ol>
<li><p>It will verify the access token, and only let the user access resources that the user supposed to. </p>
</li>
<li><p>It will also send a new access token if the Access token is expired. </p>
</li>
<li><p>If the user refresh the browser the access token is lost, but the refresh token remains as a cookie. Verify will then verify the refresh token and provide the user with a new access token. </p>
</li>
<li><p>Since access token also includes information about the privilege level it will also make sure only admins can access/performance certain actions.</p>
</li>
</ol>
<h2 id="persistent-login">Persistent login</h2>
<p>If the user refresh the browser after loggin in the access token is lost, but the refresh token remains as a cookie. Verify middlewhere will then verify the refresh token and provide the user with a new access token. </p>
<h2 id="database">Database</h2>
<p>I decided to use Prisma ORM because,</p>
<ol>
<li>The entire project is type safe, Prisma allows the database communications to also be type safe.</li>
<li>Reduce the risk of sql injection attacks.</li>
<li>Productivity and developer experience</li>
</ol>
<h2 id="users">Users</h2>
<p>The docker setup will also add some dummy data to the db as well. I used one of my <a href="https://github.com/Tharusha-dev/GoProfileFromSeed/tree/main/data/by_region/LK">previous projects</a> for the data. All users I made have a made up email domain called csa (courier service app). The admin user have a bunch of shipments as well, so its a good place to start. Only admin users will see a &quot;Admin panel&quot; button on their dashboard.</p>
<p>Admin user :</p>
<p>Email : <a href="mailto:&#97;&#100;&#x6d;&#x69;&#110;&#64;&#x63;&#x73;&#x61;&#46;&#x63;&#111;&#x6d;">&#97;&#100;&#x6d;&#x69;&#110;&#64;&#x63;&#x73;&#x61;&#46;&#x63;&#111;&#x6d;</a>
Password: 12345</p>
<p>Regular user:</p>
<p>Email : <a href="mailto:&#116;&#x68;&#x61;&#x72;&#x75;&#x73;&#x68;&#x61;&#x40;&#x63;&#115;&#x61;&#46;&#99;&#x6f;&#x6d;">&#116;&#x68;&#x61;&#x72;&#x75;&#x73;&#x68;&#x61;&#x40;&#x63;&#115;&#x61;&#46;&#99;&#x6f;&#x6d;</a>
password:12345</p>
<h2 id="ps">P.S.</h2>
<p>Secret keys for JWT are hardcoded and obviously needs to be more secure than &quot;mySecretKey&quot; in a production version. </p>


</div>
</div>