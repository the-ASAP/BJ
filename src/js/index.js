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
    $('#root').append(offer);
    $('#root').append(include);
    $('#root').append(similar);
    $('#root').append(recent);
    //   $('#root').append(footer);

    $('.selectboxss').selectbox();


    // *************************Slick

    const preview = '.gallery__preview-list';
    const slide = '.gallery__big-slide';

    $('.gallery__big-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

        asNavFor: '.gallery__preview-list',

    });


    const $slideshow = $('.gallery__preview-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery__big-list',
        centerMode: true,
        vertical: true,
        arrows: false,
        verticalSwiping: true,

        responsive: [
            {
                breakpoint: 1025,
                settings: {

                    slidesToShow: 3,


                }
            },
            {
                breakpoint: 514,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    verticalSwiping: false,
                    centerMode: true,
                   
                }
            }
        ]

    });

    $('.slick-slide').each((index, item) => {
        $(item).on('click', () => {
            if($(item).hasClass('slick-center')) return 
            if($(item).next().hasClass('slick-center')) return $slideshow.slick('slickGoTo', parseInt($slideshow.slick('slickCurrentSlide')-1))
            if($(item).prev().hasClass('slick-center')) return $slideshow.slick('slickGoTo', parseInt($slideshow.slick('slickCurrentSlide')+1))
        })
    })

    let sliderCount = document.querySelector('.gallery__big-counter--count');
    let sliderNumber = document.querySelector('.gallery__big-counter--quantity');

    $('.gallery__preview-list').on('init reInit afterChange', function (event, slick) {

        sliderCount.innerHTML = slick.slideCount;
    });

    $('.gallery__preview-list').on("afterChange", function (event, slick, currentSlide, nextSlide) {

        sliderNumber.innerHTML = ++currentSlide;

    });



    //   $(big).slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 0,
    //     asNavFor:preview,
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    //   });


    // $('.owl-carousel-rec').owlCarousel({

    //     items: 4,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         766: {
    //             items: 2
    //         },
    //         1180: {
    //             items: 3
    //         },
    //         1200: {
    //             items: 4
    //         }
    //     }
    // });

    // $('.owl-carousel-gallery').owlCarousel({

    //     items: 3,
    //     loop: false,
    //     mouseDrag: false,
    //     touchDrag: false,
    //     pullDrag: false,
    //     rewind: true,
    //     autoplay: true,
    //     margin: 0,
    //     nav: true
    // });


    // *****************************OWL

    let similarGalleryPageCounter = document.querySelector('.similar__counter--current');
    let similarGalleryPageSize = document.querySelector('.similar__counter--max');

    $('.owl-carousel').owlCarousel({

        items: 4,
        loop: true,
        onInitialized: function (e) {
            similarGalleryPageSize.innerHTML = Math.ceil(this.items().length / e.page.size)


        },
        responsive: {
            0: {
                items: 2,

            },
            766: {
                items: 3,

            },
            963: {
                items: 4,

            },
            1440: {
                items: 4

            }
        },
    });


    let owl = $('.owl-carousel');

    $('.similar__button--next').click(function () {
        owl.trigger('next.owl.carousel');
    })

    $('.similar__button--prev').click(function () {
        owl.trigger('prev.owl.carousel');
    })


    owl.on('initialized.owl.carousel', function (e) {
        console.log('1');
        
        similarGalleryPageSize.innerHTML = --e.page.count;
    });

    owl.on('changed.owl.carousel', function (e) {
        // let curPos = e.property.value - owl.prevCloned + 1;
        // curPos = curPos > 0 ? curPos : e.page.count;
    
        similarGalleryPageCounter.innerHTML = ++e.page.index;
        similarGalleryPageSize.innerHTML = e.page.count;
    });





    let noSizeButton = document.querySelector('.product-detail__no-size');

    let modelCard = document.querySelector('.modal-card');
    let modalCartCloseBtn = document.querySelector('.modal-card__close-btn');
    let modalCardMobile = document.querySelector('.product-detail__no-size');
    let takeBtn = document.querySelector('.about__info-link--take');

    let modalSalon = document.querySelector('.salon__modal');
    let modalSalonWindow = document.querySelector('.salon');
    let modalBtnClose = document.querySelector('.salon__close');

    let modalWrapper = document.querySelector('.modal__wrapper');


    let modalBtnDelivery = document.querySelector('.about__info-link--delivery');

    let modalWindowDelivery = document.querySelector('.modal__delivery');
    let modalBtnDeliveryClose = document.querySelector('.modal__close--delivery');


    let modalBtnPayment = document.querySelector('.about__info-link--payment');
    let modalBtnPaymentClose = document.querySelector('.modal__close--payment');
    let modalWindowPayment = document.querySelector('.modal__payment');

    let modalBtnCallback = document.querySelector('.about__info-link--callback');
    let modalBtnCallbackClose = document.querySelector('.modal__close--callback');
    let modalWindowCallback = document.querySelector('.modal__callback');


    let modalSizesBtn = document.querySelector('.product-detail__sizes-list');
    let modalSizesWindow = document.querySelector('.product-detail__modal-window');

    // modalSizesBtn.addEventListener('click', e => {
    //     modalSizesWindow.classList.add('product-detail__modal-window--open')
    // })


    // modalSizesBtn.addEventListener('click', e => {
    //     modalSizesWindow.classList.remove('product-detail__modal-window--open')
    // })




    modalBtnDelivery.addEventListener('click', e => {
        e.preventDefault();
        modalWindowDelivery.classList.add('modal--show')
    })

    modalBtnPayment.addEventListener('click', e => {
        e.preventDefault();
        modalWindowPayment.classList.add('modal--show')
    })

    modalBtnDeliveryClose.addEventListener('click', e => {
        e.preventDefault();
        modalWindowDelivery.classList.remove('modal--show')
    })

    modalWindowDelivery.addEventListener('click', e => {

        e.preventDefault();

        if (e.target.classList.contains('modal__delivery')) {
            modalWindowDelivery.classList.remove('modal--show');
        }
    })


    //**************** */
    modalWindowPayment.addEventListener('click', e => {

        e.preventDefault();
        console.log(e.target);
        if (e.target.classList.contains('modal__payment')) {
            modalWindowPayment.classList.remove('modal--show');
        }
    })

    modalWindowDelivery.addEventListener('click', e => {

        e.preventDefault();

        if (e.target.classList.contains('modal__delivery')) {
            modalWindowDelivery.classList.remove('modal--show');
        }
    })



    modalBtnPaymentClose.addEventListener('click', e => {
        e.preventDefault();
        modalWindowPayment.classList.remove('modal--show')
    })



    modalBtnCallbackClose.addEventListener('click', e => {
        e.preventDefault();
        modalWindowCallback.classList.remove('modal--show')
    })

    modalWindowCallback.addEventListener('click', e => {
        console.log(e.target)
        if (e.target.classList.contains('modal__callback')) {
            modalWindowCallback.classList.remove('modal--show');
        }
      
    })

    modalBtnCallback.addEventListener('click', e => {
        e.preventDefault();
        modalWindowCallback.classList.add('modal--show')
    })


 

    takeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalSalon.classList.add('salon__modal--show');

    })

    modalSalon.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.classList.contains('salon__modal')) {
            modalSalon.classList.remove('salon__modal--show');
        }
    })

    modalWrapper.addEventListener('click', (e) => {
        e.preventDefault();
        modalSalon.classList.remove('salon--show');
        modalSalon.classList.add('salon--hide');
        modalWrapper.classList.remove('active')
    })




    noSizeButton.addEventListener('click', (e) => {
        e.preventDefault();

        modelCard.classList.add('modal-card--open');
    })


    modalCardMobile.addEventListener('click', (e) => {
        e.preventDefault();
        modelCard.classList.remove('modal-card--close');
        modelCard.classList.add('modal-card--open');
    })


    modalCartCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modelCard.classList.remove('modal-card--open');
    })

    modelCard.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('modal-card')) {
            modelCard.classList.remove('modal-card--open');
        }
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

    buttonProperty.addEventListener('click', () => {
        radioProperty.checked = !radioProperty.checked
    })

    buttonDescription.addEventListener('click', () => {
        radioDescription.checked = !radioDescription.checked
    })

    buttonInfo.addEventListener('click', () => {
        radioInfo.checked = !radioInfo.checked
    })


    additionalButton.addEventListener('click', () => {

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
            $(this).closest(".selectboxss").height("150px");
            $(this).find('.arrowselect').attr("style", "border-radius: 1000px;transition: 0.2s;transform: rotate(180deg);padding: 0px 0px 0px 10px;");
        }
        if (currentHeight >= 150) {
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



