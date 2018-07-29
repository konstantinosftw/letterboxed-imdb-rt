$(document).ready(function () {

    title = $(".headline-1").text() + " " + $("[itemprop=datePublished]").text();
    href = ($("[data-track-action=IMDb]").attr('href'));
    rt_href = ('https://www.google.com/search?q=rottentomatoes.com%20' + title + '&btnI=Im+Feeling+Lucky').replace(/ /g, ";");
    imdbId = href.split("/")[4];
    apikey = "REPLACE THIS TEXT WITH YOUR KEY - keep the quotes!"
    data = $.getJSON("https://www.omdbapi.com/?apikey=" + apikey + "=" + imdbId, function (load) {

        imdbRating = load.Ratings[0].Value.split('/')[0];
        rtRating = load.Ratings[1].Value;

        // Create Element for ratings
        $('#userpanel').after('<div id="custom-ratings"><a id="rt" href=' + href + '> <img src="https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/plugins/imdb_star_22x21-2889147855._CB514892068_.png" align="left" width="22" height="21">' + imdbRating + '</a><a id="rt" href=' + rt_href + '> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/139px-Rotten_Tomatoes.svg.png" align="left" width="30" height="30">' + rtRating + '</a></div>');
    });
});