"use strict";
function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `
        
        <h2>My Anime Recommendation</h2>
    
        <p>
            Share, Review, Recomend, Animes!
        </p>

        <div class="row">
                
            <div class='column column33'>
                <img id="img" src="pics/crunchyroll_logo_0.jpeg" alt="logo">
            </div>

            <div class='column column66'>
                <span>MAR</span> is the ultimate platform for sharing and reviewing animes! 
            Effortlessly navigate through user posts to find the newest show to watch!

            <a id="link" href="https://www.youtube.com/"> Click here to watch on Youtube!</a>
            </div>

        </div>

        <div style="clear:both"></div>

        <p>
            Are you passionate about anime and want to share your thoughts with others? 
            Look no further! Our platform allows you to create your own posts and share 
            your anime reviews with the community. Join us and let your voice be heard!
        </p>
        <!-- HTML comment: use for space to scroll if needed.
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque nec sem sed auctor. 
                    Donec luctus tempor egestas. Pellentesque in sagittis mi, tincidunt sollicitudin dui. 
                    Integer a mauris gravida, scelerisque nibh at, accumsan mauris. 
                    Integer laoreet lacus at nisi suscipit facilisis non et elit. 
                    Fusce mattis, libero maximus hendrerit finibus, diam dolor tempor felis, ut finibus dui purus quis risus. 
                    Duis arcu eros, tincidunt non accumsan et, hendrerit vel eros. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    In mauris lectus, commodo nec rhoncus non, imperdiet vitae mauris.
                    Nunc vitae imperdiet est. Donec quis elit nec tellus cursus elementum. 
                    Sed ultrices a lectus quis sagittis. Nulla pellentesque, lorem finibus congue pretium, 
                    lacus sem pretium eros, sed tempus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque nec sem sed auctor. 
                    Donec luctus tempor egestas. Pellentesque in sagittis mi, tincidunt sollicitudin dui. 
                    Integer a mauris gravida, scelerisque nibh at, accumsan mauris. 
                    Integer laoreet lacus at nisi suscipit facilisis non et elit. 
                    Fusce mattis, libero maximus hendrerit finibus, diam dolor tempor felis, ut finibus dui purus quis risus. 
                    Duis arcu eros, tincidunt non accumsan et, hendrerit vel eros. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    In mauris lectus, commodo nec rhoncus non, imperdiet vitae mauris.
                    Nunc vitae imperdiet est. Donec quis elit nec tellus cursus elementum. 
                    Sed ultrices a lectus quis sagittis. Nulla pellentesque, lorem finibus congue pretium, 
                    lacus sem pretium eros, sed tempus.
                </p>

            -->
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }