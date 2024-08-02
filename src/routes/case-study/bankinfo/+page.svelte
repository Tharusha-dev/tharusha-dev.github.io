
    <a href="/">
        <div class="home-button">
        
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z" fill="#ffffff"/>
                </svg>
        </div>
    </a>
    <div class="casestudy-outer casestudy-outer-bankinfo">


        <div class="casestudy-inner">
            <h2 style="margin-top: 0;">The Problem</h2>
            Recently I wanted to look for a bank with high interest rates. Just like anyone would I googled "interest rates Sri Lanka" and looked for a website to compare rates against each other. To my suprise there was only one website that did something even close to this. But that website also lacked most of the features I thought would be very useful for someone looking to pick a good bank. 

<h2>BankInfo</h2>

<p>
BankInfo is a easy way to compare and find savings/interest rates and loan rates of banks in Sri Lanka. It also provides data and statistics on banks performances to aid in deciding a good bank.

</p>
<h2>
Getting the data

</h2>
<p>
Scraping data off a website is a easy and well documented process. The problem was not scraping but rather knowing when to scrape these data, because most bank change their rates monthly and every weekly. There a couple of ways to go about doing this. But after some thinking I settled on a system that consists of two components.

</p>
<h3>
Inside VPS I set-up 

</h3>
<ol>
    <li>
The reminder 
<br/>
A Python script to be executed at 00:00 every day (Sri Lankan time) 

    </li>
    <li>
        The scraper 
        <br/>
Another python script that actually scrapes the data using BS4.

    </li>
</ol>



<h2>
1. The reminder 

</h2>

<p>
The reminder script is a script that checks whether data about rates is out of date or not. There are 1000+ accounts form 16 different banks in BankInfo going through each one and checking whether they are changed is not efficient. So we just take a note of the "last updated" note on each banks website and check whether it's changed. If so it triggers the scraper and only scraped that specific website(s) and updated the DB.

</p>
<h3>
The "at" command in Linux:

</h3>
<p>
    <i>
"To schedule a task using the 'at' command in Linux, you simply specify the time for the task followed by the task itself. The basic syntax is as follows: echo 'Task' | at [desired_time]. The 'at' command is a powerful tool for scheduling tasks to run at a specific time in the Linux environment."

    </i>
</p>

<p>
So using this at command the script is set to run at 00:00.

</p>

<h2>
2. The scraper 

</h2>
<p>
    Each banks website has shows their rates on different ways, so for each 16 bank a separate algorithm was developed to scrape the data. This was the part that took the most of the development time. 
    The script takes a argument with a bank id.

</p>



<div class="project-actions">


    <a href="https://bankinfo.lk" target="_blank">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="style=fill">
                <g id="web">
                    <g id="Vector">
                        <path
                            d="M15.3222 10.383C15.3796 10.9457 15.4125 11.4903 15.4125 12C15.4125 12.9541 15.2972 14.0315 15.1208 15.1208C14.0315 15.2972 12.9541 15.4125 12 15.4125C11.0502 15.4125 9.97313 15.2975 8.87911 15.1205C8.70281 14.0312 8.5875 12.954 8.5875 12C8.5875 11.4905 8.62039 10.9458 8.67789 10.383C9.82608 10.5668 10.9715 10.6875 12 10.6875C13.0286 10.6875 14.174 10.5668 15.3222 10.383Z"
                            fill="#ffffff" />
                        <path
                            d="M16.8752 10.0994C16.9462 10.7579 16.9875 11.399 16.9875 12C16.9875 12.8769 16.8997 13.8389 16.7599 14.8153C18.7425 14.4016 20.575 13.8731 21.5567 13.5722C21.8739 13.475 21.9986 13.4363 22.1658 13.3694C22.2494 13.336 22.326 13.302 22.4259 13.2543C22.4748 12.843 22.5 12.4244 22.5 12C22.5 10.878 22.324 9.79714 21.9982 8.78346L21.9133 8.81017C20.8868 9.12245 18.9652 9.6745 16.8752 10.0994Z"
                            fill="#ffffff" />
                        <path
                            d="M21.4017 7.31948C20.3698 7.63221 18.579 8.14039 16.6599 8.53603C16.2178 5.84926 15.443 3.16951 15.0702 1.95598C17.8422 2.80227 20.1273 4.76467 21.4017 7.31948Z"
                            fill="#ffffff" />
                        <path
                            d="M15.1117 8.82229C14.0253 8.99781 12.9513 9.1125 12 9.1125C11.0487 9.1125 9.97477 8.99781 8.88843 8.8223C9.30471 6.28005 10.0478 3.68306 10.4278 2.44333C10.525 2.12606 10.5637 2.00144 10.6306 1.83418C10.664 1.75062 10.698 1.67398 10.7457 1.57414C11.157 1.52518 11.5756 1.5 12 1.5C12.4434 1.5 12.8803 1.52748 13.3093 1.58083C13.3184 1.61564 13.3268 1.64679 13.3351 1.67626C13.3597 1.76333 13.3982 1.8857 13.4628 2.09104L13.4696 2.11261C13.7935 3.14223 14.6519 6.01401 15.1117 8.82229Z"
                            fill="#ffffff" />
                        <path
                            d="M7.34004 8.536C7.7801 5.86107 8.54986 3.19576 8.92192 1.98181L8.92983 1.95597C6.15777 2.80225 3.8727 4.76465 2.59835 7.31946C3.63018 7.63219 5.42095 8.14036 7.34004 8.536Z"
                            fill="#ffffff" />
                        <path
                            d="M2.00184 8.78345C1.67598 9.79714 1.5 10.878 1.5 12C1.5 12.4389 1.52693 12.8715 1.57923 13.2963L1.74471 13.3515L1.74603 13.3519L1.74765 13.3525L1.74879 13.3528C1.80205 13.3705 3.36305 13.886 5.41878 14.3975C5.99886 14.5418 6.61307 14.6844 7.24006 14.8151C7.10025 13.8388 7.0125 12.8769 7.0125 12C7.0125 11.3988 7.05374 10.7577 7.12472 10.0994C5.03428 9.67436 3.11218 9.12212 2.08597 8.80989L2.07883 8.80771L2.00184 8.78345Z"
                            fill="#ffffff" />
                        <path
                            d="M12 16.9875C12.8769 16.9875 13.8389 16.8997 14.8153 16.7599C14.4016 18.7425 13.8731 20.575 13.5722 21.5566C13.475 21.8739 13.4363 21.9985 13.3694 22.1658C13.336 22.2494 13.302 22.326 13.2543 22.4259C12.843 22.4748 12.4244 22.5 12 22.5C11.5756 22.5 11.157 22.4748 10.7457 22.4259C10.698 22.326 10.664 22.2494 10.6306 22.1658C10.5637 21.9986 10.525 21.8739 10.4278 21.5567C10.1269 20.5751 9.59846 18.7427 9.18478 16.7603C10.1579 16.8996 11.1201 16.9875 12 16.9875Z"
                            fill="#ffffff" />
                        <path
                            d="M5.0385 15.9259C3.73853 15.6024 2.63135 15.2775 1.95597 15.0702C2.97258 18.4002 5.59982 21.0274 8.92983 22.044L8.92192 22.0182C8.59705 20.9582 7.96897 18.7917 7.52191 16.4784C6.6525 16.3103 5.80722 16.1171 5.0385 15.9259Z"
                            fill="#ffffff" />
                        <path
                            d="M22.0182 15.0781C20.9582 15.403 18.7915 16.0311 16.4781 16.4781C16.0311 18.7915 15.403 20.9581 15.0781 22.0182L15.0702 22.044C18.4002 21.0274 21.0274 18.4002 22.044 15.0702L22.0182 15.0781Z"
                            fill="#ffffff" />
                        <path
                            d="M1.6103 13.323C1.64665 13.3277 1.67628 13.3327 1.68611 13.3349C1.69472 13.337 1.70821 13.3406 1.7131 13.3419L1.72391 13.345L1.72973 13.3468L1.73585 13.3487L1.74098 13.3503C1.7381 13.3494 1.67976 13.3348 1.6103 13.323Z"
                            fill="#ffffff" />
                    </g>
                </g>
            </g>
        </svg>
    </a>
</div>
</div>


        </div>




