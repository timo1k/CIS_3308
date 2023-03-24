"use strict";
function blogContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
        <h2>My Blog</h2>
        <span><h4>Database</h4></span>
        <p>
            To represent a users playlist or a post about a certain anime </br>
            Table name: anime
            Which will include:
            <ul>
                <li>auto increment primary key: anime_id PK NN UQ</li>
                <li>English Name: anime_name NN</li>
                <li>Japanese Name: anime_japanese_name NULL</li>
                <li>URL pointing to an image: anime_img NULL</li>
                <li>Unique description: anime_desc NULL</li>
                <li>date watched: watch_date NULL</li>
                <li>Scale 1-5 how good it was: anime_rating NULL</li>
                <li>Person making a post: web_user_id NN</li>
            </ul>

        </p>
        <span><h4>Home Page Homework</h4></span>
        <p>
            For this homework I didnt have much experience with web development; 
            I had trouble with things like responsiveness. So I had to learn/played 
            around with flexbox, columns, and media query. I still need more practice 
            with it to feel comfortable.
        </p>
        <span><h4>JS UI Homework</h4></span>
        <p>
            This homework was pretty easy. All I had to do was be a consumer of the navRouter. For the Lab 
            It was also easy; it was mostly reading and playing around with things.
            I had a problem that was not necessarily about the hwk but with google itself. I found myself
            wasting wasting time because my image/content wouldnt show up while on localhost. I tried clearing cache
            and refreshing but that didnt work until I ran it again and it showed up.
            I also did not know how to use a new stylesheet and reference it after referencing NavRouter.css
            so your NavRouter preferences will overwrite the styles in NavRouter.css; I just changed the colors in 
            the original NavRouter.css.
        </p>
        <span><h4>My Web Development Experience</h4></span>
        <p>
            Hello! I dont have very much web dev. experience; building this spa was 
            challenging but fun at the same time. I can now add JS to my toolkit. 
        </p>
        <span><h4>JS Obj Homework</h4></span>
        <p>
            This homework was straight forward, as I have multiple examples to work with. 
            Like the Lab and learning js objs on the site/textbook. I just need to work on 
            my time management. I also needed a refresher on terminology since I waited so 
            long to do the homework after finishing the lab. What I took away/what was valuable about
            this assignment was that it reinforced work I had already learned before.
        </p>
        <span><h4>DB Homework</h4></span>
        
        <p>
            Click <a target="_blank" href='DB_HWK_KHUMPAN_TIMOTHY.pdf'> here </a> to see my database document.
            I do not have much database experience. This is my first time touching mysql and eveything 
            seems easy so far with the gui. I am exicted to learn more! As for the homework, it was easy. It
            was mostly just creating another database like in the lab.
        </p>
        <span><h4>WEB API Homework</h4></span>
        
        <p>
            Click <a target="_blank" href='web_api_khumpan_timothy.pdf'> here </a> to see my Web API error document.
            UPDatE THE LINK
            <br/>
            I have never worked with any code that requires server side db access. I do have an understanding
            of pulling in data from third party apis like coinmarketcap for live crypto data. At first I did have a hard
            time getting things setup and trying to publish, but after doing it multiple times: lab and homework, it became 
            easier. The code itself was easy to understand so I didnt really have any trouble with it; it was good practice
            for DB select statements, and learning new terminology.
        </p>
        <span><h4>Click Sort Homework</h4></span>
        
        <p>
            For this homework I had trouble with cors (ajax/api) while developing on local host. I tried to call the api that
            was already published online while developing on local host and I had to figure out what was the problem. I also had particular trouble
            trying to make the table responsive. I think what was my problem and why I turned in later than usual 
            was that I almost finished the homework but I left the responsive part last and in doing so I would have to change a lot
            just to fix that. In the end I still didn't make it responsive; it is something I can fix in the future.
        </p>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}