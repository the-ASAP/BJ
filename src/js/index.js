import * as $ from 'jquery';
import './../vendors/ez-zoom.js';
import '../scss/index.scss';
// import header from '../components/header.html';
import card from '../components/card.html';
import about from '../components/about.html';
import offer from '../components/offer.html';
import include from '../components/include.html';
import similar from '../components/similar.html';
import recent from '../components/recent.html';
import modal from '../components/modal.html';
// import footer from '../components/footer.html';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import ymaps from 'ymaps';

import 'slick-slider/slick/slick-theme.css';
import 'slick-slider/slick/slick.css';
import 'slick-slider/slick/slick.min.js';



// import footer from '../components/footer.html';

// MyIconLayout = ymaps.templateLayoutFactory.createClass([
//     '<svg width="46" height="46" style="position: absolute; top: -23px; left: -23px;">',
//         '<use href="#sym01"/>',
//     '</svg>'
// ].join('')),

const addresses = [
    {
        title: 'ТРЦ РИО КОЛОМНА',
        address: 'Московская область, ул. Октябрьской революции, д.362',
        coors: [55.084059, 38.800483],
        lines: ["Коломна"],
        stations: ["Коломна"],
    },
    {
        title: 'Бронницкий ювелир» в ТРК «Облака',
        address: 'Москва, Ореховый бульвар, 22а, 1 этаж, остров',
        coors: [55.612045, 37.732718],
        lines: ['Братиславская'],
        stations: ["Братиславская"],
    }
]




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

    const mapsId = ['yandexMap', 'yandexMap-mobile']
    function returnMaps() {
        mapsId.map(id => {
            ymaps
            .load('https://api-maps.yandex.ru/2.1/?apikey=2b543523-54f1-4a9f-af8a-8333795718cd&lang=ru_RU')
            .then((maps) => {
                function createHint(maps, address, object, coorArr, link) {
                    let myPlacemark = new maps.Placemark(
                      [coorArr[0], coorArr[1]],
                      {
                        address,
                        object,
                        link,
                        balloonContentHeader: object,
                        balloonContentBody: address,
                        balloonContentFooter: link
                          ? `<a href=${link} class="yandexMap__hint">` + 'Перейти' + '</a>'
                          : ''
                      },
                      {
                        iconImageHref: '../img/svg/mark.svg',
                        iconColor: '#000'
                      }
                    );
                  
                    return myPlacemark;
                }

                const Map = new maps.Map(id, {
                    center: [55.76, 37.64],
                    zoom: 10,
                    controls: ["zoomControl"],
                });
                Map.behaviors.disable("scrollZoom");
                addresses.map(store => Map.geoObjects.add(
                    createHint(
                        maps,
                        store.address,
                        store.title,
                        store.coors
                    )
                ))

                $('.selectoption__line').on('click', function() {
                    let newAddresses = addresses.filter(store => store.lines.includes($(this).text()))
                    Map.geoObjects.removeAll()
                    newAddresses.map(store => Map.geoObjects.add(
                        createHint(
                            maps,
                            store.address,
                            store.title,
                            store.coors
                        )
                    ))
                })
                $('.selectoption__station').on('click', function() {
                    let newAddresses = addresses.filter(store => store.stations.includes($(this).text()))
                    Map.geoObjects.removeAll()
                    newAddresses.map(store => Map.geoObjects.add(
                        createHint(
                            maps,
                            store.address,
                            store.title,
                            store.coors
                        )
                    ))
                }) 
            
            })
            .catch((error) => console.log('Failed to load Yandex Maps', error));
        })    
    }
    returnMaps()


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
        centerPadding: 0,

        responsive: [
       
            {
                breakpoint: 517,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    verticalSwiping: false,
                    centerPadding: 0,
                    adaptiveHeight: true,   
                    adaptiveWidth: true
                   
                }
            },
            {
              
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
        similarGalleryPageSize.innerHTML = --e.page.count;
    });

    owl.on('changed.owl.carousel', function (e) {
      
        similarGalleryPageCounter.innerHTML = ++e.page.index;
        similarGalleryPageSize.innerHTML = e.page.count;
    });





    let noSizeButton = document.querySelector('.product-detail__no-size');

    let modalCard = document.querySelector('.modal-card');
    let modalCardCloseBtn = document.querySelector('.modal-card__close-btn');
    let modalCardMobile = document.querySelector('.product-detail__no-size');


    let takeBtn = document.querySelector('.about__info-link--take');

    let mapBtn = document.querySelector('.salon__btn--map'); 
    let locationBtn = document.querySelector('.salon__btn--location'); 

    let inputLocation = document.querySelector('.salon__radio--location');
    let inputMap = document.querySelector('.salon__radio--map');

    locationBtn.addEventListener('click', (e) => {
      
        inputLocation.checked = !inputLocation.checked
    })

    mapBtn.addEventListener('click', (e) => {
      
        inputMap.checked = !inputMap.checked
    })


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

    // Функция изменения z-indexа wrappera модалки
    
    

    function setWrapperToTop(toTop) {
        const wrapper = document.querySelector('.wrapper');
        if(wrapper) {
            toTop ? wrapper.classList.add('bringModalToTop') 
            : wrapper.classList.remove('bringModalToTop')
        }
    }

    modalBtnDelivery.addEventListener('click', e => {
        e.preventDefault();
        setWrapperToTop(true)
        modalWindowDelivery.classList.add('modal--show')
    })

    modalBtnPayment.addEventListener('click', e => {
        e.preventDefault();
        setWrapperToTop(true)
        modalWindowPayment.classList.add('modal--show')
    })

    modalBtnDeliveryClose.addEventListener('click', e => {
        e.preventDefault();
        setWrapperToTop(false)
        modalWindowDelivery.classList.remove('modal--show')
    })

    modalWindowDelivery.addEventListener('click', e => {
        e.preventDefault();
        setWrapperToTop(false)
        if (e.target.classList.contains('modal__delivery')) {
            modalWindowDelivery.classList.remove('modal--show');
        }
    })


    //**************** */
    modalWindowPayment.addEventListener('click', e => {

        e.preventDefault();
        if (e.target.classList.contains('modal__payment')) {
            setWrapperToTop(false)
            modalWindowPayment.classList.remove('modal--show');
        }
    })

    modalWindowDelivery.addEventListener('click', e => {

        e.preventDefault();
        if (e.target.classList.contains('modal__delivery')) {
            setWrapperToTop(false)
            modalWindowDelivery.classList.remove('modal--show');
        }
    })


    modalBtnPaymentClose.addEventListener('click', e => {
        e.preventDefault();
        setWrapperToTop(false)
        modalWindowPayment.classList.remove('modal--show')
    })



    modalBtnCallbackClose.addEventListener('click', e => {
        e.preventDefault();
        setWrapperToTop(false)
        modalWindowCallback.classList.remove('modal--show')
    })

    modalWindowCallback.addEventListener('click', e => {
        if (e.target.classList.contains('modal__callback')) {
            setWrapperToTop(false)
            modalWindowCallback.classList.remove('modal--show');
        }
      
    })

    modalBtnCallback.addEventListener('click', e => {
        e.preventDefault();
        setWrapperToTop(true)
        modalWindowCallback.classList.add('modal--show')
    })
 

    takeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalSalon.classList.add('salon__modal--show');
        setWrapperToTop(true)

    })

    modalSalon.addEventListener('click', (e) => {
   
        if (e.target.classList.contains('salon__modal')) {
            modalSalon.classList.remove('salon__modal--show');
            setWrapperToTop(false)
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
        setWrapperToTop(true)
        modalCard.classList.add('modal-card--open');
    })


    modalCardMobile.addEventListener('click', (e) => {
        e.preventDefault();
        modalCard.classList.remove('modal-card--close');
        modalCard.classList.add('modal-card--open');
    })


    modalCardCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setWrapperToTop(false)
        modalCard.classList.remove('modal-card--open');
    })

    modalCard.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('modal-card')) {
            setWrapperToTop(false)
            modalCard.classList.remove('modal-card--open');
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

    // $('.about__description-column--hidden')
    $('.about__more').on('click', function() {
        if($('.about__description-column--hidden').hasClass('about__description-column--active')) {
            $('.about__description-column--hidden').toggleClass('about__description-column--active')
            $(this).text('Посмотреть все')
        }
        else {
            $('.about__description-column--hidden').toggleClass('about__description-column--active')
            $(this).text('Скрыть')
        }
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
            $(this).closest(".selectboxss").height("340px");
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





  
