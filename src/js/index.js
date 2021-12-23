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
import { doc } from 'prettier';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';



// import footer from '../components/footer.html';


$(() => {
    // $('#root').prepend(header);
    // $('#root').append(modal);
    // $('#root').append(card);
    // $('#root').append(about);
    // $('#root').append(offer);
    // $('#root').append(include);
    $('#root').append(similar);
    $('#root').append(recent);
    //   $('#root').append(footer);

    $('.selectboxss').selectbox();



    // $("#zoom_03").ezPlus({
    //     scrollZoom: true,
    //     borderSize: 2,
    //     gallery: 'gal1',
    //     galleryActiveClass: 'active'
    // });

    $('#big-img').ezPlus({
        zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200,
    scrollZoom: true,
    gallery: 'gal1',
    galleryActiveClass: 'active'
    });



    $('.owl-carousel-rec').owlCarousel({
     
        items: 3,
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
        nav: true,
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

});


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


