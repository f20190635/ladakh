

// ----- HELPER FUNCTIONS ----- //

// get index of an element in its parent node

function indexInParent(node) {
  var children = node.parentNode.childNodes;
  var num = 0;
  for (var i=0; i<children.length; i++) {
	if (children[i]==node) return num;
	if (children[i].nodeType==1) num++;
  }
  return -1;
}

// element(index) selector 

function eq(index) {
  if(index>=0 && index < this.length)
	return this[index];
  else 
	return -1;
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
	  e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
	preventDefault(e);
	return false;
  }
}


// function disableScroll() {
//   if (window.addEventListener) // older FF
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
// }

// function enableScroll() {
//     if (window.removeEventListener)
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.onmousewheel = document.onmousewheel = null; 
//     window.onwheel = null; 
//     window.ontouchmove = null;  
//     document.onkeydown = null;  
// }


// ----- MENU OPEN ----- //


// var nav = document.getElementById('mainNav');
// var res = document.getElementById('bookNow');
// var cls = document.getElementById('closePop');
// var mob = document.getElementById('navMobile');
// var nam = document.getElementById('navMobileBtn');

// var navCont = document.getElementById('navContent');
// var resCont = document.getElementById('reservation');
// var mainCont = document.getElementById('mainContent');

// var navOver = document.getElementById('navOverlay');
// var navItems = navCont.querySelectorAll('.q_split_wrap');
// var menuScreen = document.getElementById('menu_screen');
// var menuScreenItems = menuScreen.querySelectorAll('.screen_item'); 


// for (var i = navItems.length - 1; i >= 0; i--) {
//   var navItem = navItems[i];
//   navHoverHandler(navItem, i);
// };

// nav.addEventListener( 'click', function() {
// 	hideContent();
// 	openNav();
// });
// nam.addEventListener( 'click', function() {
//     hideContent();
//     openNav();
// });
// res.addEventListener( 'click', function() {
// 	var resTop = resCont.offsetTop;
// 	window.scroll(0, resTop)
// });
// cls.addEventListener( 'click', function() {
// 	showContent();
//   	closeNav();
// });


// function navHoverHandler(item, i){
// 	item.addEventListener( 'mouseover', function() {
// 		TweenMax.to(
// 		  menuScreenItems[i],.3, 
// 		  {alpha:1, ease:Power1.easeOut}
// 		);
// 	});
// 	item.addEventListener( 'mouseout', function() {
// 		TweenMax.to(
// 		  menuScreenItems[i],.3, 
// 		  {alpha:0, ease:Power1.easeOut}
// 		);
// 	});
// }

// function hideContent(){
// 	disableScroll();
// 	TweenMax.to(
// 	  mainCont,1, 
// 	  {xPercent:"-=50", ease:Expo.easeOut}
// 	);
// 	TweenMax.to(
// 	  navOver,1.5, 
// 	  {alpha:1, ease:Expo.easeOut}
// 	);
// 	TweenMax.to(
// 	  nav,.6, 
// 	  {right:-200, ease:Power3.easeOut}
// 	);
//     TweenMax.to(
//         mob,.6,
//         {top:-100, ease:Power3.easeOut}
//     );
// 	TweenMax.to(
// 	  res,.6, 
// 	  {right:-200, ease:Power3.easeOut}
// 	);
// 	TweenMax.to(
// 	  cls,.6, 
// 	  {right:-20, ease:Power3.easeOut}
// 	);
// }

// function showContent(){
// 	enableScroll();
// 	TweenMax.to(
// 	  mainCont,1, 
// 	  {xPercent:0, ease:Expo.easeOut}
// 	);
// 	TweenMax.to(
// 	  navOver,1, 
// 	  {alpha:0, ease:Expo.easeOut}
// 	);
	
// 	setTimeout(function(){ 
//    	TweenMax.to(
// 		  res,.6, 
// 		  {right:-20, ease:Power3.easeOut}
// 		);
// 		TweenMax.to(
// 	  	nav,.6, 
// 	 	 {right:-20, ease:Power3.easeOut}
// 		);
//         TweenMax.to(
//             mob,.6,
//             {top:0, ease:Power3.easeOut}
//         );
//   }, 1000);

//   TweenMax.to(
// 	  cls,.6, 
// 	  {right:-200, ease:Power3.easeOut}
// 	); 
	
	
// }

//TweenMax.set(navCont,{xPercent:100});


// function openNav(){
// 	TweenMax.to(
// 	  navCont,1, 
// 	  {xPercent:0, ease:Expo.easeOut}
// 	);
	
// 	TweenMax.staggerFromTo(
// 	  navItems,1, 
// 	  {alpha:0, y:100},
// 	  {alpha:1, y:0, ease:Expo.easeOut, delay: 0.1},0.05
// 	);
// }


// function closeNav(){
// 	TweenMax.to(
// 	  navCont,1, 
// 	  {xPercent:100, ease:Expo.easeOut}
// 	);
// }






/**
 * loader
 */
function loader(){
	var loader = document.querySelector('.loader');
	
	if(loader){
		loader.classList.add('loaded');   
	}

	// interval for popup
	var popup = document.querySelector('.popup-homepage');
	if(popup){
		setTimeout(function(){
			popup.classList.add('open');
		}, 1200);
	}
}
//window.onload = loader;



// ---------- Loading Screen ---------- //

;(function(){
  function id(v){ return document.getElementById(v); }
//   function loadbar() {
//     var ovrl = id("overlay"),
//         stat = id("progstat"),
//         cvrl = id("content-overlay"),
//         pvrl = id("progress-overlay"),
//         itms = id("loading-items"),
//         img = document.images,
//         c = 0,
//         tot = img.length;


//     if(tot == 0) { 
//     	setTimeout(function(){
//     		doneLoading();
//     	},200);
//     }

//     function imgLoaded(){
//       c += 1;
//       var perc = ((100/tot*c) << 0);
      
//       if (stat) stat.innerHTML = "Loading "+ perc + "%";

//       if(c===tot) { 
// 	    	setTimeout(function(){
// 	    		doneLoading();
// 	    	},300);
// 	    }
      
//     }
//     function doneLoading(){
    		
//         //enableScroll();
        
        
//         TweenMax.to(
//           ovrl,1.5, 
//           {width:0, ease:Expo.easeInOut, delay: .5}
//         );
//         TweenMax.to(
//           pvrl,1.5, 
//           {width:0, ease:Expo.easeInOut, delay: .6}
//         );
//         TweenMax.to(
//           cvrl,1.5, 
//           {alpha:0, ease:Power3.easeInOut, delay: .6}
//         );
//         TweenMax.to(
//           itms,1.3, 
//           {alpha:0,ease:Expo.easeInOut, delay: .5}
//         );
//         setTimeout(function(){ 
//           ovrl.style.display = "none";
//           cvrl.style.display = "none";
//         }, 2200);
        
//         setTimeout(function(){ 
//         	triggerResize();
//           headerAnimate();
//           resizeImg();
//         }, 600);

//         setTimeout(function(){ 
//         	triggerResize();
//         },1200);

        
      
//     }
//     for(var i=0; i<tot; i++) {
//       var tImg     = new Image();
//       tImg.onload  = imgLoaded;
//       tImg.onerror = imgLoaded;
//       tImg.src     = img[i].src;
//     }    
//   }
  //document.addEventListener('DOMContentLoaded', loadbar, false);
}());

function triggerResize(){
  var ev = document.createEvent('HTMLEvents');
  ev.initEvent('resize', true, false);
  window.dispatchEvent(ev);
};



// page header

// function headerAnimate(){

// 	var pageHeader = document.getElementById('page-top-banner');
// 	if (pageHeader) {
// 		var title = pageHeader.querySelector('.q_splitText');
// 		var text = pageHeader.querySelector('p');
// 		var btn = pageHeader.querySelector('.link');

// 		q_animate(title, 'splitLeft', 100);
// 		q_animate(text, 'slideTop', 1);
// 		if (btn){
// 			q_animate(btn, 'slideTop', 1);
// 		}

// 	}
// }






// var magnets = document.querySelectorAll('.q_magnet');
//var q_slide = document.getElementById('q_slide');
// var reveals = document.querySelectorAll('.reveal');

//if (q_slide){qSlide(q_slide)};

// document.addEventListener("DOMContentLoaded", function() { 
//   if (magnets.length > 0){qMagnet(magnets)}
// });

// window.addEventListener('scroll', function() {
//   if (reveals){qReveal(reveals)};
// });

// ScrollTo Link

// function qScroll(e) {
//   e.preventDefault();
  
//   const targetAnchor = window.innerHeight;
//   window.scroll(0,targetAnchor);
// }

// var qScrolls = document.querySelectorAll('.q_scroll');
// if (qScrolls.length > 0){ 
//   qScrolls.forEach(each => (each.onclick = qScroll));
// }





// pages slider
var pageSlider = document.querySelector('.pages-top-banner-slider .slider');
if (pageSlider){
	var flkty = new Flickity( pageSlider, {
		// options
		pageDots: true,
		prevNextButtons: false,       
		contain: true,
		wrapAround: true,
		autoPlay: 6000,
		selectedAttraction: 0.02,
		friction: 0.3,
	});
}



// Testimonials Slider

// var testiSliderTwo = document.getElementById('testiTwo');
// if (testiSliderTwo){


// 	var testiSlideTwo = new Flickity( testiSliderTwo, {
// 		// options
// 		pageDots: true,
// 		prevNextButtons: false,       
// 		contain: true,
// 		wrapAround: true,
// 		autoPlay: true,
// 		draggable: true
// 	});


// }



/**
 * add value button quality
 */

// function increment(incrementor, target){
// 	var value = parseInt(document.getElementById(target).value);
// 	value += incrementor;

// 	if (value > 0){
// 		// document.getElementById(target).value = value;
		
// 		if (target == 'increment_adult' || target == 'increment_adult_popup'){
// 			document.getElementById('increment_adult').value = value;
// 			document.getElementById('increment_adult_popup').value = value;
// 		}

// 		if (target == 'increment_child' || target == 'increment_child_popup'){
// 			document.getElementById('increment_child').value = value;
// 			document.getElementById('increment_child_popup').value = value;
// 		}
// 	}
// }


// /**
//  * Push form reservation value to booking system
//  */

// function fServePush(){
// 	var checkin = document.getElementById('checkin').value,
// 		checkout = document.getElementById('checkout').value,
// 		adult = document.getElementById('increment_adult').value,
// 		children = document.getElementById('increment_child').value,
// 		url = 'https://app-apac.thebookingbutton.com/properties',
// 		site = 'JANNATARESORTDIRECT';
	
// 	window.open(url + '/' + site + '?check_in_date=' + checkin + '&check_out_date=' + checkout + '&number_adults=' + adult + '&number_children=' + children);
// 	return false;
// }


/**
 * Open popup exclusive deals
 */

/**
 * Popup exclusive deal carousel
 */
// var popExDeals = document.querySelector('.exclusive-deal-popup .carousel')
// if (popExDeals){
// 	var flktyDeals = new Flickity( popExDeals, {
// 		// options
// 		pageDots: false,
// 		prevNextButtons: true,       
// 		contain: true,
// 		wrapAround: true,
// 		imagesLoaded: true,
//         draggable: false,
// 		arrowShape: {
// 			x0: 10,
// 			x1: 60, y1: 50,
// 			x2: 65, y2: 45,
// 			x3: 20
// 		}, 
// 	})

	
// }

// function openExclusiveDeal(index){
// 	document.querySelector('.exclusive-deal-popup').classList.add('open');
// 	document.querySelector('body').style.overflow = 'hidden';

// 	// go to selected index
// 	this.flktyDeals.next()
// 	this.flktyDeals.select(index)
// }

// close popup exclusive deal
// var elClose = document.querySelectorAll('.exclusive-deal-popup .content-item .close');
// elClose.forEach(function(el, i){
// 	el.addEventListener('click', function(){
// 		document.querySelector('.exclusive-deal-popup').classList.remove('open');
// 		document.querySelector('body').style.overflow = 'visible';
		
// 	})
// });


/**
 * close popup homepage
 */
// var btnClosePopupHome = document.querySelector('.popup-homepage .close');
// if (btnClosePopupHome){
// 	btnClosePopupHome.addEventListener('click', function(){
// 		document.querySelector('.popup-homepage').classList.remove('open');
// 	});
// }


/**
 * hover menu dropdown
 */
var liMenu = document.querySelectorAll('.main-navigation li');

liMenu.forEach(function(el, i){
	if (el.querySelector('ul')){
		el.querySelector('ul').classList.add('sub-menu')
		el.querySelector('ul').parentElement.classList.add('parent-menu')
	}
});


/**
 * years
 */
// var copyrightYear = document.getElementById('year_copy');
// if (copyrightYear){
// 	var d = new Date();
// 	copyrightYear.innerHTML = d.getFullYear();
// }

/**
 * get clock on footer
 */
// var fClock = document.getElementById('time__');
// if (fClock){
	
// 	let x = setInterval(function(){
// 		var time = new moment().format('hh:mm'),
// 			format = new moment().format('A');

// 		fClock.innerHTML = time;
// 		document.getElementById('time__format').innerHTML = format;
// 	}, 1000);
// }


/**
 * Accommodation Hover
 */



(function($){
	// if ($('#accommodations').length) {
	// 	$("#accommodations .accommodation-type").each(function (i) {

	// 		var _this = $(this);
	// 		var _allVillaBackground = $('.accommodation-bg-change');
	// 		var _villaBackground = _this.find('.accommodation-bg-change');

	// 		/*
	// 		** On resize window handle
	// 		*/
	// 		$(window).resize(function () {

	// 			if ($(window).width() < 900) {

	// 				_villaBackground.css({
	// 					'background-image': "url(" + _villaBackground.attr('data-src') + ")"
	// 				});

	// 			}
	// 		});


	// 		_this.hover(function () {
	// 			console.log('HOVERR')
	// 			if ($(window).width() > 900) {
	// 				_allVillaBackground.css({'background-image': "url(" + _villaBackground.attr('data-src') + ")"});
	// 			} else {
	// 				_villaBackground.css({'background-image': "url(" + _villaBackground.attr('data-src') + ")"});
	// 			}
	// 			return false;
	// 		});

	// 	});
	// }


	/**
	 * get weather
	 */
	// let apiKey = '4d64ee966ea03fd197abf2ec155bb799',
	// 	corLat = '-8.4406',
	// 	corLong = '115.258202';

	// function getWeather(){
	// 	$.ajax({
	// 		url: 'https://api.openweathermap.org/data/2.5/weather',
	// 		data: {
	// 			lat: corLat,
	// 			lon: corLong,
	// 			units: 'metric',
	// 			APPID: apiKey
	// 		},

	// 		success: data => {
	// 			$('.temperature .cc').append((Math.round(data["main"]["temp"])));
	// 		}
	// 	})
	// }
	// getWeather();

}(jQuery));


