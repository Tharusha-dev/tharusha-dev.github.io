
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
            <h1 id="goprofilefromseed-">GoProfileFromSeed 🕵️🏾‍♂️</h1>
            <h2 id="a-go-library-to-generate-user-profiles-based-on-a-seed-">A Go library to generate user profiles
                based on a seed.</h2>
            <p>A <code>Profile</code> is a structure with the following fields</p>
            <ul>
                <li><strong>First Name</strong></li>
                <li><strong>Last Name</strong></li>
                <li><strong>Username</strong></li>
                <li><strong>Email</strong></li>
                <li><strong>Region</strong></li>
                <li><strong>Address</strong></li>
                <li><strong>Seed</strong></li>
            </ul>
            <p><strong>You can also generate a unique profile image for each profile.</strong></p>
            <p>A <code>seed</code> is a 5 character string. Each character can a number or a lower case or upper case
                English letter.</p>
            <h2 id="how-it-works-">How it works 🛠️</h2>
            <p>The following image shows how each field is determined :</p>
            <p><img src="https://i.ibb.co/d2JZYnv/seed-1.png" alt="enter image description here"></p>
            <p><strong>Region</strong>: numbers, upper case letters and lower case letters are divided into groups and
                if the integer representation of the byte (n) of a character is within that group that region is
                assigned. Same for gender.</p>
            <p><strong>First names starting letter</strong> will be either,
                the first non-numerical character after the second character of the seed or if no non-numerical
                character is present after the second character of the seed, then the letter corresponding to the
                integer representation of the byte of the 3rd number + 17.</p>
            <p><strong>Last names starting letter</strong> will be either,
                the second non-numerical character after the second character of the seed or if only one non-numerical
                character is present after the second character of the seed, then the letter corresponding to the
                integer representation of the byte of the 4th number + 17.</p>
            <p><strong>Offset</strong> : The program will take the integer representation of the byte (n) of a character
                and will assign the item at the n th line in the data file belonging to the respective field. In the
                case of two letters, it will multiply those two numbers and get the n.</p>
            <p><strong>Username and email</strong> is generated using templates determined in the common_templates
                directory in the data.</p>
            <div class="gpfs-images">
                <h2 id="profile-image">Profile Image</h2>
                <p>Each profile image is a 250 <em> 250 pixel image. This square is divided into 25, 50</em>50 squares
                    and
                    according to the image below, five or fewer squares are painted based on each character of the seed
                    starting from the middle square.</p>
                <img src="https://i.ibb.co/Y8F2DXF/profile-img.png" alt="enter image description here">

                <br />
               
                <img src="https://i.ibb.co/D83r0rj/examples.png" alt="enter image description here">

            </div>

            <h2 id="data-files">Data files</h2>
            <p>Currently, the data files include common names and addresses of these regions:</p>
            <ul>
                <li>Sri Lanka 🇱🇰</li>
                <li>USA 🇺🇸</li>
                <li>UK 🇬🇧</li>
                <li>Australia 🇦🇺</li>
            </ul>
            <p>Information on how those data is gathered can be found in info.txt files inside each folder.</p>
            <h2 id="documentation">Documentation</h2>
            <p><a href="https://pkg.go.dev/github.com/Tharusha-dev/GoProfileFromSeed"
                    target="_blank">https://pkg.go.dev/github.com/Tharusha-dev/GoProfileFromSeed</a></p>
                    <div class="project-actions">
                        <a href="https://github.com/tharusha-dev/GoProfileFromSeed">
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


