<script>var __pbpa = true;</script><script>var translated_warning_string = 'Warning: Never enter your Tumblr password unless \u201chttps://www.tumblr.com/login\u201d\x0ais the address in your web browser.\x0a\x0aYou should also see a green \u201cTumblr, Inc.\u201d identification in the address bar.\x0a\x0aSpammers and other bad guys use fake forms to steal passwords.\x0a\x0aTumblr will never ask you to log in from a user\u2019s blog.\x0a\x0aAre you absolutely sure you want to continue?';</script><script type="text/javascript" language="javascript" src="https://assets.tumblr.com/assets/scripts/pre_tumblelog.js?_v=472beb185dc3d62d59bcf893499ebf45"></script><!DOCTYPE html>

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# blog: http://ogp.me/ns/blog#"> 

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <title>broken age</title>
        
<style>figure{margin:0}.tmblr-iframe{position:absolute}.tmblr-iframe.hide{display:none}.tmblr-iframe--amp-cta-button{visibility:hidden;position:fixed;bottom:10px;left:50%;transform:translateX(-50%);z-index:100}.tmblr-iframe--amp-cta-button.tmblr-iframe--loaded{visibility:visible;animation:iframe-app-cta-transition .2s ease-out}</style><style>figure{margin:0}.tmblr-iframe{position:absolute}.tmblr-iframe.hide{display:none}.tmblr-iframe--amp-cta-button{visibility:hidden;position:fixed;bottom:10px;left:50%;transform:translateX(-50%);z-index:100}.tmblr-iframe--amp-cta-button.tmblr-iframe--loaded{visibility:visible;animation:iframe-app-cta-transition .2s ease-out}</style><link rel="stylesheet" media="screen" href="https://assets.tumblr.com/client/prod/standalone/blog-network-npf/index.build.css?_v=b84ed2eb31f8e1bbdb3e7a53afa67dd4"><link rel="shortcut icon" href="http://78.media.tumblr.com/avatar_64975811f704_128.pnj" />

<link rel="alternate" type="application/rss+xml" href="http://testingp-12345678.tumblr.com/rss" />

<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
" rel="stylesheet">


<link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet' type='text/css'>
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

<script src="https://static.tumblr.com/d4tdea8/Mkhnw70y5/pxuphotoset.js"></script>
<script src="https://static.tumblr.com/d4tdea8/8rfo8l8ry/jquery.infinitescroll.min.js"></script>

 <script>
$(document).ready(function(){
    
     //Audio Color
    $('iframe.tumblr_audio_player').load( function() {
         $('iframe.tumblr_audio_player').contents().find("head")
            .append($("<style type='text/css'> .audio-player{background:!important;}.play-pause{color:#777777!important;}.progress {display:none !important;}  </style>"));
      });
    
      var photosetOptions = {
           lightoox: true,
        rounded: false,
        gutter: 0,
        photoset: '.photo-slideshow',
        photoWrap: '.photo-data',
        photo: '.pxu-photo'
        };
        
    $('.photo-slideshow').pxuPhotoset(photosetOptions);
    
    $('#entries').infinitescroll({ 
         navSelector  : ".numbered-pagination",
         nextSelector : ".numbered-pagination a:first",
        itemSelector : "#entries .post",
       loadingImg: '',
       loadingText: '<em></em>',
       bufferPx: 2000,
        errorCallback: function(){
            $('.load-more').hide();
            },
        },
        function(newElements){                    
          $(newElements).find('.photo-slideshow').pxuPhotoset(photosetOptions);
        var $newElems = $(newElements);
        var $newElemsIDs = $newElems.map(function(){ 
            return this.id; 
        }).get();
        console.log($newElems, $newElemsIDs);
        Tumblr.LikeButton.get_status_by_post_ids($newElemsIDs);
        //Audio Color
    $('iframe.tumblr_audio_player').load( function() {
         $('iframe.tumblr_audio_player').contents().find("head")
            .append($("<style type='text/css'> .audio-player{background:!important;}.play-pause{color:#777777!important;}.progress {display:none !important;}  </style>"));
      });
    });
        
        
                
        $(window).unbind('.infscr');
        $('.load-more').click(function(){
           $('#entries').infinitescroll('retrieve');
           return false
        });
        
    
    
});
</script>