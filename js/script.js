$(document).ready(function() {
    
        var composeTweet = $(".tweet-compose");
        var tweetControls = $("#tweet-controls")
        var charCount = $("#char-count")
        var tweetButton = $("#tweet-submit")
        var tweetStream = $('#stream');
        var tweet = $('.tweet');
    
    
        function toggleTweetControl() {
    
            tweetControls.hide();
        }
    
        toggleTweetControl();
    
        composeTweet.on('click', function(){
            composeTweet.css("height", "5em");
            tweetControls.show();
        });
    
        composeTweet.keyup(function(){
            var len = $(this).val().length;
            charCount.text(140 - len);
            if (len >= 130) {
                charCount.css('color','red');
            } else {
                charCount.css('color','');
            }
            if (len > 140) {
                tweetButton.prop('disabled', true);
            } else {
                tweetButton.prop('disabled', false);
            }
        });
    
        var userAvatar = $('#profile-summary .content .avatar');
        var userName = $('#profile-summary .content p');
    
        tweetButton.on('click', function() {
            var timeNow = new Date();
            tweetStream.prepend(
                `<div class="tweet">
                            <div class="content">` +
                '<img class="avatar" src="' + userAvatar.attr('src') + '" />' + 
                                `<strong class="fullname">` + userName.val() + `</strong>` + 
                                `<span class="username">@JimBobJ</span>` + 
                                `<p class="tweet-text">` + composeTweet.val() + `</p>` +
    
                                `<div class="tweet-actions"> 
                                    <ul> 
                                        <li><span class="icon action-reply"></span> Reply</li>
                                        <li><span class="icon action-retweet"></span> Retweet</li>
                                        <li><span class="icon action-favorite"></span> Favorite</li>
                                        <li><span class="icon action-more"></span> More</li>
                                    </ul>
                                </div>` +
    
                                `<div class="stats">
                                    <div class="retweets">
                                        <p class="num-retweets">0</p>
                                        <p>RETWEETS</p>
                                    </div>
                                    <div class="favorites">
                                        <p class="num-favorites">0</p>
                                        <p>FAVORITES</p>
                                    </div>
                                    <div class="users-interact">
                                        <div>
                                        </div>
                                    </div>
                                    <div class="time">` +
                                    timeNow.getHours() + ':' + timeNow.getMinutes() + ' ' + timeNow.getDate() + ' ' + (timeNow.getMonth()+1) +
                                    `</div>
                                </div>` +
                                `<div class="reply">
                                    <img class="avatar" src="` + userAvatar.attr('src') + `" />` +
                                    `<textarea class="tweet-compose" placeholder="Reply to @JimbobJ"/></textarea>
                                </div>
                            </div>
                        </div>`
            );
    
        });
    
        var stats = $('.stats');
    
        stats.hide();
    
        tweet.on('click', function() {
            $(this).children('.content').children('.stats').show();
        })
    
    
    
    
    });