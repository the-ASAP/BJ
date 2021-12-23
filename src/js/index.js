import * as $ from 'jquery';
import './../vendors/ez-zoom.js';
import '../scss/index.scss';
import header from '../components/header.html';
import card from '../components/card.html';
import about from '../components/about.html';
import offer from '../components/offer.html';
import include from '../components/include.html';
import similar from '../components/similar.html';
import recent from '../components/recent.html';
import modal from '../components/modal.html';
import footer from '../components/footer.html';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import 'slick-slider/slick/slick-theme.css';
import 'slick-slider/slick/slick.css';
import 'slick-slider/slick/slick.min.js';



// import footer from '../components/footer.html';


$(() => {
    // $('#root').prepend(header);
    $('#root').append(modal);
    $('#root').append(card);
    $('#root').append(about);
    // $('#root').append(offer);
    // $('#root').append(include);
    $('#root').append(similar);
    $('#root').append(recent);
    //   $('#root').append(footer);

    $('.selectboxss').selectbox();


    $('#big-img').ezPlus({
        zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200,
    scrollZoom: true,
    gallery: 'gal1',
    galleryActiveClass: 'active'
    });

    $('.gallery__preview-list').slick({
        vertical: true,
        slidesToShow: 3,
        verticalSwiping: true,
        arrows: false
    });
    

    $('.owl-carousel-rec').owlCarousel({
     
        items: 4,
        responsive:{
            0:{
              items:1
            },
            578:{
              items:2
            },
            1180:{
              items:3
            }
          }
    });
   
    $('.owl-carousel').owlCarousel({
   
        items: 4,
        responsive:{
            0:{
              items:1
            },
            578:{
              items:2
            },
            1180:{
              items:3
            }
          },
    });

    $('.owl-carousel-gallery').owlCarousel({
      
        items: 3,
         loop: false,
         mouseDrag: false,
         touchDrag: false,
         pullDrag: false,
         rewind: true,
         autoplay: true,
         margin: 0,
         nav: true
    });

    let owl = $('.owl-carousel');

    $('.similar__button--next').click(function() {
        owl.trigger('next.owl.carousel');
    })
   
    $('.similar__button--prev').click(function() {
      
        owl.trigger('prev.owl.carousel');
    })


    let count = document.querySelectorAll('.similar__item').length;
    galleryMax.innerHTML = count;



    


    let noSizeButton = document.querySelector('.product-detail__no-size--modal');
    let modelCard = document.querySelector('.modal-card');
    let modalCartCloseBtn = document.querySelector('.modal-card__close-btn');
    let modelCardMobile = document.querySelector('.product-detail__no-size');
    let btnBuy = document.querySelector('.product-detail__buy-btn');
    let modalSalon = document.querySelector('.salon');
    let modalWrapper = document.querySelector('.modal__wrapper');

    let modalBtnClose = document.querySelector('.salon__close');

    modalBtnClose.addEventListener('click', (e) => {

        modalSalon.classList.remove('salon--show');
        modalSalon.classList.add('salon--hide');
        modalWrapper.classList.remove('active')
    })

    modalWrapper.addEventListener('click', (e) => {
        
        modalSalon.classList.remove('salon--show');
        modalSalon.classList.add('salon--hide');
        modalWrapper.classList.remove('active')
    })


    noSizeButton.addEventListener('click', (e) => {
        modelCard.classList.remove('modal-card--close');
        modelCard.classList.add('modal-card--open');
    })


    modelCardMobile.addEventListener('click', (e) => {

        modelCard.classList.remove('modal-card--close');
        modelCard.classList.add('modal-card--open');
    })


    modalCartCloseBtn.addEventListener('click', (e) => {
        modelCard.classList.remove('modal-card--open');
        modelCard.classList.add('modal-card--close');
    })

    btnBuy.addEventListener('click', (e) => {
        modalSalon.classList.remove('salon--hide');
        modalSalon.classList.add('salon--show');
        modalWrapper.classList.add('active')
    })

    let additionalButton = document.querySelector('.about__item-btn--additional');


    let additionalColumn = document.querySelector('.about__property-column--additional');
    let additionalMobileRow = document.querySelector('.about__property-row--mobile');

    let radioProperty = document.querySelector('.about__radio--property');
    let buttonProperty = document.querySelector('.about__item-btn--property');

    let radioDescription = document.querySelector('.about__radio--description');
    let buttonDescription = document.querySelector('.about__item-btn--description');

    let radioInfo = document.querySelector('.about__radio--info');
    let buttonInfo = document.querySelector('.about__item-btn--info');

    buttonProperty.addEventListener('click', ()=> {
        radioProperty.checked = !radioProperty.checked
    })
    
    buttonDescription.addEventListener('click', ()=> {
        radioDescription.checked = !radioDescription.checked
    })
    
    buttonInfo.addEventListener('click', ()=> {
        radioInfo.checked = !radioInfo.checked
    })
    
    
    additionalButton.addEventListener('click', ()=> {
      
        additionalMobileRow.classList.toggle('about__additional-open');
        additionalColumn.classList.toggle('open');
    })


});


// ----------------section about scripts


// let additionalButton = document.querySelector('.about__item-btn--additional');


// let additionalColumn = document.querySelector('.about__property-column--additional');
// let additionalMobileRow = document.querySelector('.about__property-row--mobile');

// let radioProperty = document.querySelector('.about__radio--property');
// let buttonProperty = document.querySelector('.about__item-btn--property');

// let radioDescription = document.querySelector('.about__radio--description');
// let buttonDescription = document.querySelector('.about__item-btn--description');

// let radioInfo = document.querySelector('.about__radio--info');
// let buttonInfo = document.querySelector('.about__item-btn--info');





$.fn.selectbox = function () {
    var selectDefaultHeight = $('.selectboxss').height();
    $('.selectboxss .selectboxssvalue').click(function () {
        var currentHeight = $(this).closest(".selectboxss").height();
        if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
            $(this).closest(".selectboxss").height("250px");
            $(this).find('.arrowselect').attr("style", "border-radius: 1000px;transition: 0.2s;transform: rotate(180deg);padding: 0px 0px 0px 10px;");
        }
        if (currentHeight >= 250) {
            $(this).closest(".selectboxss").height(selectDefaultHeight);
            $(this).find('.arrowselect').attr("style", "rotate(0deg);padding: 0px 10px 0px 0px;");
        }
    });
    $('li.selectoption').click(function () {
        $(this).closest(".selectboxss").height(selectDefaultHeight);
        $(this).closest(".selectboxss").find('.arrowselect').attr("style", "rotate(0deg);padding: 0px 10px 0px 0px;");
        $(this).closest(".selectboxss").find('.selectboxssvalue span').text($(this).text());
    });
};


