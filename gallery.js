var count=1;
var images = [
  "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg",
  "https://www.peterizzardphotography.com.au/wp-content/uploads/2014/11/Nirvana-Pool1.jpg",
  "https://www.queenstown.com/images/sobipro/blog/3852/img_a-winter-wonderland-landscape-photographers-queenstown-tour-1.jpg",
  "http://media.masslive.com/linkfarm/images/original.jpg",
  "http://fullhdwall.com/wp-content/uploads/2018/08/Mountain-Landscape.jpg",
  "https://s15149.pcdn.co/wp-content/uploads/2015/09/Waiheke-Island-Landscapes-4-1024x684.jpg",
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/flint-hills-sunset-cow-jonathan-tasler.jpg",
  "http://files.all-free-download.com//downloadfiles/wallpapers/1920_1200/old_farm_wallpaper_landscape_nature_1439.jpg",
  "http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/vietnam-top10s/best-amazing-landscape-vietnam/pagePropertiesImage/amazing-vietnam.jpg.jpg",
  "http://blog.agroknow.com/wp-content/uploads/2016/03/6835100-landscape.jpg"
];
var total=images.length;
$(".next").click(function() {
  nextImage();
});
$(".prev").click(function() {
  prevImage();
});
function nextImage() {
  nextImage();
};
function prevImage() {
  nextImage();
};
function nextImage() {
  $(".layer-right").toggleClass("move-right");
  $(".layer-left").toggleClass("move-left");
  $(".layer-right-next").toggleClass("move-right");
  $(".layer-left-next").toggleClass("move-left");
  count = count + 1;
  if(count >= total) {
    count = 0;
  }
  if(count%2 == 0) {
    document.getElementsByClassName('layer-right')[0].style.backgroundImage = "url('" + images[count] + "')";
    document.getElementsByClassName('layer-left')[0].style.backgroundImage = "url('" + images[count] + "')";
  }
  else {
    document.getElementsByClassName('layer-right-next')[0].style.backgroundImage = "url('" + images[count] + "')";
    document.getElementsByClassName('layer-left-next')[0].style.backgroundImage = "url('" + images[count] + "')";
  }
};
$('.circle').on('click',function(){
  var animClass = $(this).data('animation');
  var removeTime = $(this).data('remove');
  if($(this).hasClass(animClass)){
     $(this).removeClass(animClass);
  }else{
    $(this).addClass(animClass);
    if(typeof removeTime != 'undefined'){
      var el = $(this);
       setTimeout(function(){
         el.removeClass(animClass);
       },removeTime);
    }
  }
});