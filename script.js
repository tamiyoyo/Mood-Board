var moodTypes = ['happy', 'sad', 'angry', 'excited', 'uncomfortable', 'comical', 'stressed'];

function go(type, bgColor, img1, img2, img3) {
    $('img').hide();
    $('body').css('background-color', bgColor);
    $('.af').append('<img class="pics" src="' + img1 + '">');
    $('.af').append('<img class="pics" src="' + img2 + '">');
    $('.af').append('<img class="pics" src="' + img3 + '">');
}

$('button').click(function() {
    var mood = $('input').val();

    if (mood === moodTypes[0]) {
        go('happy', 'yellow', 'https://normaltypicalkids.files.wordpress.com/2018/03/happy.jpg', 'https://media1.giphy.com/media/l0IyiY9zRnf6nH5Cw/source.gif', 'https://66.media.tumblr.com/161e024e9de7b8b0050e146fa36d4d05/tumblr_o2ou6002HK1tspgcto7_r1_250.jpg');

    } else if (mood === moodTypes[1]) {
        go('sad', 'lightblue', 'https://media1.tenor.com/images/7e4dd1a83e83a435863e15b4d6acdb19/tenor.gif?itemid=12995700', 'data:image/jpeg;base64,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', 'https://i.redd.it/ffvyd9ygkj3z.gif');

    } else if (mood === moodTypes[2]) {
        go('angry', 'red', 'https://i.pinimg.com/originals/c5/00/9e/c5009ee610fe1471cfb68f0736ef3b8c.png', 'https://cbsnews2.cbsistatic.com/hub/i/r/2010/08/20/89d66a34-a642-11e2-a3f0-029118418759/resize/620x465/3ad9970a349552713c99ed3f0c448797/iStock_000008964742XSmall.jpg', 'https://66.media.tumblr.com/095ba6564411ef3ad3c3ea8a355e482c/tumblr_pi3vk9IuG21vspu4o_540.jpg');
    } else if (mood === moodTypes[3]) {
               go('excited', 'green', 'https://media1.tenor.com/images/1f84b096cbe1cc9f3763c803bb17e10e/tenor.gif?itemid=5878976', 'https://media1.giphy.com/media/BcPbK9ci4EU31qUTkR/source.gif', 'https://thumbs.gfycat.com/LividQualifiedAppaloosa-size_restricted.gif');
        } else if (mood === moodTypes[4]) {
            go('uncomfortable','orange', 'data:image/jpeg;base64,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', 'https://i.kinja-img.com/gawker-media/image/upload/s--RcdZaMZy--/c_scale,f_auto,fl_progressive,q_80,w_800/jxq1mz1yukjqwmn2jo2x.jpg', 'https://cdn.ignitedfundraising.com/wp-content/uploads/2018/08/DontMakeDonorsUncomfortable.jpg');

        } else if (mood === moodTypes[5]) {
             go('comical','#f1f442', 'https://www.colourbox.com/preview/5813732-comical-face.jpg', 'https://media.tenor.com/images/2dfa355f1d25b69d514147a48faea57f/tenor.gif', 'http://williambrucewest.com/wp-content/uploads/2013/02/comical-e1360300819336.jpg');
                } else if (mood === moodTypes[6]) {
                     go('stressed','#129692', 'https://ei.marketwatch.com/Multimedia/2018/10/30/Photos/ZH/MW-GW341_511a58_20181030173726_ZH.jpg', 'https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2017/stressedrunn.jpg', 'https://welldoing.org/storage/app/uploads/public/5af/ae8/c89/5afae8c892664274779035.jpg');
                    }

});