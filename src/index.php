<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Новый каталог");
$asset->addCss('/new-card2/css/index.css');
$asset->addJs('/new-card2/js/index.js');

$asset->addCss('/local/templates/new_header_v2/css/ui.css');

$asset->addCss('/new-card2/libs/swiper/swiper-bundle.min.css');
$asset->addCss('/new-card2/libs/rangeSlider/ion.rangeSlider.min.css');
$asset->addCss('/new-card2/css/style.css');

$asset->addJs('/new-card2/libs/jquery-3.6.0.min.js');

$asset->addJs('/local/lib/frontend/cart.js');

$asset->addJs('/new-card2/libs/swiper/swiper-bundle.min.js');
$asset->addJs('/new-card2/libs/sticky.min.js');
$asset->addJs('/new-card2/libs/rangeSlider/ion.rangeSlider.min.js');
$asset->addJs('/new-card2/js/main.js');
?>

<body id="root">

<!-- section "card" start -->
<section class="card-item">
    <!-- card-item__beadcrumb start -->
    <div class="card-item__breadcrumb breadcrumb">
      <div class="breadcrumb__item">
        <a href="/catalog/" class="breadcrumb__link">
          <span>Каталог</span>
        </a>
      </div>
  
      <div class="breadcrumb__item">
        <a href="/catalog/koltsa/" class="breadcrumb__link">
          <span>Кольца</span>
        </a>
      </div>
  
      <div class="breadcrumb__item">
        <a href="/catalog/koltsa/koltsa-iz-zolota/beloe-zoloto/" class="breadcrumb__link">
          <span>Кольца из белого золота</span>
        </a>
      </div>
    </div>
  
    <!-- card-item__beadcrumb end -->
  
    <!-- product-detail start -->
    <div class="card-item__product-detail product-detail">
      <div class="product-detail__article">Артикул: 65319207160</div>
  
      <!-- gallery start -->
      <div class="product-detail__gallery gallery">
        <div class="gallery__wrapper">
          <div class="gallery__preview-list">
            <div class="gallery__preview-slide">
              <img class="gallery__preview-picture" src="new-card2/img/slide1.jpg" alt="Slide1" />
            </div>
  
            <div class="gallery__preview-slide">
              <img class="gallery__preview-picture" src="new-card2/img/slide2.jpg" alt="Slide2" />
            </div>
  
            <div class="gallery__preview-slide">
              <img class="gallery__preview-picture" src="new-card2/img/slide3.jpg" alt="Slide3" />
            </div>
            <div class="gallery__preview-slide">
              <img class="gallery__preview-picture" src="new-card2/img/slide4.jpg" alt="Slide3" />
            </div>
            <div class="gallery__preview-slide">
              <img class="gallery__preview-picture" src="new-card2/img/slide5.jpg" alt="Slide2" />
            </div>
          </div>
          <div class="gallery__big-list-wrapper">
            <div class="gallery__big-list">
              <div class="gallery__big-slide">
                <img src="new-card2/img/slide1.jpg" alt="Photo" />
              </div>
              <div class="gallery__big-slide">
                <img src="new-card2/img/slide2.jpg" alt="Photo" />
              </div>
              <div class="gallery__big-slide">
                <img src="new-card2/img/slide3.jpg" alt="Photo" />
              </div>
              <div class="gallery__big-slide">
                <img src="new-card2/img/slide4.jpg" alt="Photo" />
              </div>
              <div class="gallery__big-slide">
                <img src="new-card2/img/slide5.jpg" alt="Photo" />
              </div>
            </div>
            <div class="gallery__big-counter">
              <span class="gallery__big-counter--quantity"> 1 </span>
              <span class="gallery__big-counter--divider"> / </span>
  
              <span class="gallery__big-counter--count"> 5 </span>
            </div>
          </div>
        </div>
      </div>
  
      <div class="product-detail__column">
        <h1 class="product-detail__name">
          Кольцо из белого золота <br />
          с дорожкой из бриллиантов
        </h1>
  
        <div class="product-detail__price-wrapper">
          <span class="product-detail__price">363 890</span>
          <svg class="product-detail__icon-rub">
            <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
          </svg>
        </div>
  
        <p class="product-detail__installment">Рассрочка от 15 162<svg class="smallRubble" width="10" height="0.5rem" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.375 0.875V14H0.625V15.875H4.375V17.75H0.625V19.625H4.375V25.25H6.25V19.625H11.875V17.75H6.25V15.875H11.875C16.0059 15.875 19.375 12.5059 19.375 8.375C19.375 4.24414 16.0059 0.875 11.875 0.875H4.375ZM6.25 2.75H11.875C14.9951 2.75 17.5 5.25488 17.5 8.375C17.5 11.4951 14.9951 14 11.875 14H6.25V2.75Z" fill="rgba(0,0,0,0.65)"/>
            </svg>
           в месяц</p>
  
        <p class="product-detail__size-title">Выберите размер</p>
        <div class="product-detail__sizes-wrapper">
          <!-- <button class="product-detail__sizes-list">
                          Ваш размер
                      </button> -->
          <div class="selectboxss product-detail__modal-option">
            <div class="selectboxssvalue">
              <span>Ваш размер</span><img src="new-card2/img/arrow.png" class="arrowselect" />
            </div>
            <ul class="selectboxssmenu">
              <li class="selectoption"><span class="flag-ru"></span> 15</li>
              <li class="selectoption"><span class="flag-en"></span> 16</li>
              <li class="selectoption"><span class="flag-fr"></span> 17</li>
              <li class="selectoption"><span class="flag-fr"></span> 18</li>
              <li class="selectoption"><span class="flag-fr"></span> 19</li>
              <li class="selectoption"><span class="flag-fr"></span> 19</li>
            </ul>
          </div>
          <button class="product-detail__no-size">Нет моего размера</button>
  
          <div class="product-detail__modal-window">
            <div class="product-detail__modal-size-wrapper">
              <div class="product-detail__modal-col">
                <span class="product-detail__modal-size-caption">Выберите размер</span>
  
                <div class="custom-option">
                  <div class="selectboxss product-detail__modal-option">
                    <div class="selectboxssvalue">
                      <span>Ваш размер</span><img src="new-card2/img/arrow.png" class="arrowselect" />
                    </div>
                    <ul class="selectboxssmenu">
                      <li class="selectoption"><span class="flag-ru"></span> 15</li>
                      <li class="selectoption"><span class="flag-en"></span> 16</li>
                      <li class="selectoption"><span class="flag-fr"></span> 17</li>
                      <li class="selectoption"><span class="flag-fr"></span> 18</li>
                      <li class="selectoption"><span class="flag-fr"></span> 19</li>
                    </ul>
                  </div>
                </div>
              </div>
  
              <div class="product-detail__modal-col">
                <button class="product-detail__no-size product-detail__no-size--modal">
                  Нет моего размера
                </button>
              </div>
            </div>
          </div>
  
          <a class="product-detail__size-guide" href="#"> Гид по размерам </a>
        </div>
  
        <div class="product-detail__row">
          <a href="#" class="product-detail__buy-btn">Купить</a>
  
          <a href="#" class="product-detail__wishlist">
            <!-- <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink">
                          <rect width="25" height="25" fill="url(#pattern0)" />
                          <defs>
                              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use xlink:href="#image0_2049_263" transform="scale(0.02)" />
                              </pattern>
                              <image id="image0_2049_263" width="50" height="50"
                                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADqklEQVRoge3ZTYhWVRzH8c84M6A0OSlEZZaLjMFeyByL3qhFiBvNIqXcRIswjKJdLSsscFtMr1RQCW3SghZlVtAmekGKQo0WlWlBlC9l6hTOPC3OOd1bTDP33rnPfZ7g+cLlzJznf/7n97/nnHvP+V969OjRo0cH6CthO4KbsQrn4jwM4DD24AO8hq8K+luG9bgeF2MhTuEADmIX3sDXJTROy0q8h1aBaxJvY/k0/i6PNpMFfb6L0dkEMIixXIeH8DxuEkbnNMwVRmYtnhZGpyXc2UfQn/PXj0fjb8nfU1gTfcyNPkewDi9Em3SDnhBmQCkW4P3o5Di2YH6BdqfjYYzHti/HAPqxLdaN46FoOxPzheBPyEbnjKJBDOaC+F6YCmVZjv3RxzZZEN/hsgr+RoW1k4IpNDJjsiAWVeg0sST6SHN9P86fhb9FsmAen8l4pTAfj6s2Ev9mVJhK41hRg78VwjSbmMlfejptqaHTxAPxqovHBI27/stgRPY0KbKwi5IWe10My56OF6bKOTmDW2L5On6rseOJeNXFr8KLkvCCxj8DuTGWb9bYabtIGlelinwgS2K5pzE51dkbyymfgseEeTfUmJzqDAlaj6WK/IikBXmqSUUVmYzl3/rzgRyJ5cLG5FQnaTycKvKB/BLLcxqTU52k8VCqyAfyRSyvaExOda6M5eepIh/Ix7G8ujE51bkqlp9M9eMy4UlwRDgbdCvzhJdiS9iNTMnuaLChIVFVuF3QOOVoJO6LRruVO883RR8+EzRuns5wHn6Mhre2X1dp1gvaDiow/e+NxgeEnWa3MCwE0MI9RRoM4NPY4MX26SrNS4Kmj5Q4FlwqSyDc3R5dpdgsaDmJi8o2vis2/kNuu9wBVkcNLdxZ1UlKRPyOa+rRVYrrhPxBoYTDdPTjVVkwTY7MDcJJtSWkYmd9XB4UjpZpjm6crcMCbIx9tbA9aqiFfiGFmXJUz6qQvizYz1ZZmvaVdvTTJ6RDJ2Inbwmp1bpYgJ3R94SQVm3r7mItjsYOv1HPbvlafCvbtK6pwWchluJLWeZ9q2rzeAAP4s/oa5+wC2+UITwnWzcf4oIS7ZfGNumzwTPCZ4WOsRo/REEnhDs8Zxr7PmySZW1+Er65dAVnYodsdHZi8RR2i/FOzm57bNt1bMDPgsijuC332zohwZEW9KbG1ZXkbCF/nO76GJ7M/b8DZ3VMXQXuELY1KYCTuL+jimbBJUKedm/8+3/NsO46afZohL8AQdD5tJ4fnIQAAAAASUVORK5CYII=" />
                          </defs>
                      </svg> -->
          </a>
  
          <a href="#" class="product-detail__watch-live">
            <span>Посмотреть вживую</span>
          </a>
  
          <div class="product-detail__share-wrapper">
            <a href="#" class="product-detail__share">
              <span>Поделиться</span>
            </a>
            <div class="product-detail__modal-share">
              <a
                href="#"
                class="product-detail__modal-share-icon product-detail__modal-share-icon--vk"
              ></a>
              <a
                href="#"
                class="product-detail__modal-share-icon product-detail__modal-share-icon--fb"
              ></a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- product-detail__column end -->
      <div class="product-detail__modal-card modal-card modal-card--close">
        <div class="modal-card__window">
          <button class="modal-card__close-btn"></button>
  
          <h3 class="modal-card__caption">Выберите желаемый размер</h3>
          <img src="new-card2/img/item.jpg" alt="" class="modal-card__image" />
          <span class="modal-card__name">Кольцо из белого золота с дорожкой из бриллиантов</span>
  
          <div class="selectboxss product-detail__modal-card-option">
            <div class="selectboxssvalue">
              <span>Необходимый размер</span><img src="new-card2/img/arrow.png" class="arrowselect" />
            </div>
            <ul class="selectboxssmenu">
              <li class="selectoption"><span class="flag-ru"></span> 15</li>
              <li class="selectoption"><span class="flag-en"></span> 16</li>
              <li class="selectoption"><span class="flag-fr"></span> 17</li>
              <li class="selectoption"><span class="flag-fr"></span> 18</li>
              <li class="selectoption"><span class="flag-fr"></span> 19</li>
              <li class="selectoption"><span class="flag-fr"></span> 19</li>
            </ul>
          </div>
  
          <form action="">
            <input
              type="text"
              class="modal-card__input mobile-card__input--form"
              name="name"
              placeholder="Ваше имя"
            />
            <input
              type="text"
              class="modal-card__input mobile-card__input--form"
              name="phone"
              placeholder="Телефон"
            />
            <input type="button" class="modal-card__send-button" value="Отправить" />
          </form>
          <a class="modal-card__offerta">
            Нажимая на кнопку «Отправить»,
  
            <span href="#" class="modal-card__offerta--link">
              я даю согласие на обработку персональных данных
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- section "card" end -->
<!-- section "about" start -->
<section class="about">
    <input type="radio" id="about__property" class="about__radio--property" name="about__radio" checked>
    <input type="radio" id="about__description" class="about__radio--description" name="about__radio">
    <input type="radio" id="about__info" class="about__radio--info" name="about__radio">

    <div class="about__list">


        <div class="about__item about__item--property">
            <button type="button" class="about__item-btn about__item-btn--property"></button>
            <label for="about__property" class="about__button about__button--property">Характеристики</label>
        </div>
        <div class="about__item about__item--description">
            <button type="button" class="about__item-btn about__item-btn--description"></button>
            <label for="about__description" class="about__button about__button--description">Описание</label>
        </div>
        <div class="about__item about__item--info">
            <button type="button" class="about__item-btn about__item-btn--info"></button>
            <label for="about__info" class="about__button about__button--info">Информация</label>
        </div>

         <!-- about__property start -->
         <div class="about__property">

            <div class="about__property-column">
                <div class="about__property-row">
                    <span class="about__property-name">
                        Металл:
                    </span>
                    <span class="about__property-value">
                        Золото Au 585
                    </span>
                </div>
                <div class="about__property-row">
                    <span class="about__property-name">
                        Цвет металла:
                    </span>
                    <span class="about__property-value">
                        Белый
                    </span>
                </div>
                <div class="about__property-row">
                    <span class="about__property-name">
                        Средний вес:
                    </span>
                    <span class="about__property-value">
                        2.1 г.
                    </span>
                </div>
                <div class="about__property-row">
                    <span class="about__property-name">
                        Коллекция:
                    </span>
                    <span class="about__property-value">
                        New York
                    </span>
                </div>
                <div class="about__property-row">
                    <span class="about__property-name">
                        Бренд:
                    </span>
                    <span class="about__property-value">
                        Бронницкий ювелир
                    </span>
                </div>


                <div class="about__property-row about__property-row--mobile">
                    <span class="about__property-name">
                        Вставка:
                    </span>
                    <span class="about__property-value">
                        Бриллиант
                    </span>
                    <button type="button" class="about__item-btn about__item-btn--additional">
                        
                    </button>
                </div>
            </div>

        

            <div class="about__property-column about__property-column--additional">
                <span class="about__property-caption ">
                    Вставка:
                </span>

                <div class="about__additional-property">

                    <div class="about__property-row--additional">
                        <span class="about__property-info">
                            Бриллиант
                        </span>
                        <span class="about__property-value">
                            20 шт.
                        </span>
                    </div>

                    <div class="about__property-row--additional">
                        <span class="about__property-info">
                            Карат
                        </span>
                        <span class="about__property-value">
                            1.92
                        </span>
                    </div>

                    <div class="about__property-row--additional">
                        <span class="about__property-info">
                            Группа цвета
                        </span>
                        <span class="about__property-value">
                            3
                        </span>
                    </div>

                    <div class="about__property-row--additional">
                        <span class="about__property-info">
                            Чистота
                        </span>
                        <span class="about__property-value">
                            6
                        </span>
                    </div>

                    <div class="about__property-row--additional">
                        <span class="about__property-info">
                            Кол-во граней
                        </span>
                        <span class="about__property-value">
                            57
                        </span>
                    </div>

                    <div class="about__property-row--additional">
                        <span class="about__property-info">
                            Огранка
                        </span>
                        <span class="about__property-value">
                            Круглая
                        </span>
                    </div>

                </div>

            </div>

        </div>
        <!-- about__property end -->

        <!-- about__description start -->
        <div class="about__description">
            <div class="about__description-column">
                <p class="about__description-text">
                    Роскошное кольцо из белого золота с дорожкой из сияющих бриллиантов станет прекрасным
                    подарком любимой женщине. Классический дизайн украшения универсален – его можно сочетать с
                    любым образом. Утонченная форма кольца и мерцающий свет бриллиантов будут приковывать
                    восхищенные взгляды к своей неотразимой владелице!
                </p>
                <p class="about__description-text">
                    В интернет-магазине «Бронницкий ювелир» Вы можете купить украшения для себя, друзей и
                    близких. В нашем каталоге находятся качественные фотографии ювелирных изделий и их детальные
                    характеристики.
                </p>
            </div>
            <div class="about__description-column">
                <p class="about__description-text">
                    Нужна помощь с выбором? Наши менеджеры Вам с удовольствием помогут! Позвонить в
                    интернет-магазин можно по номеру 8 800 555 25 65.Наша компания продает готовые украшения,
                    поэтому цены на изделия зависят не только от веса золота, но и других факторов, таких как:
                    наличие камней-вставок, их характеристики, общий размер изделия, каким типом производства
                    украшения были изготовлены - ручным или автоматным.
                </p>
                <p class="about__description-text">
                    По действующему постановлению Правительства РФ от 19.01.98 №55 обмен и возврат ювелирных
                    изделий надлежащего качества не производится.
                </p>
            </div>
        </div>
        <!-- about__description end -->

        <!-- about__info start -->
        <div class="about__info">
            <div class="about__info-column">
                <a class="about__info-link about__info-link--delivery" href="#">Доставка</a>
                <a class="about__info-link about__info-link--payment" href="#">Информация по оплате</a>
                <a class="about__info-link about__info-link--take" href="#">Забрать в салоне</a>
            </div>
            <div class="about__info-column">
                <a class="about__info-link about__info-link--callback" href="#">заказать звонок</a>
                <a class="about__info-link about__info-link--phone" href="#">8 800 555 25 65</a>
            </div>
        </div>
        <!-- about__info end -->
    </div>

    <div class="about__wrapper">

       

    </div>

</section>
<!-- section "about" end -->

<div class="offer">
    
</div>
<section class="include">
    <p class="include__title">Купить в комплекте</p>
    <div class="include__list">
      <div class="include__item item-card__item carousel-item">
        <div class="include__item-image-wrapper item-card__item-image-wrapper carousel-3">
          <img
            class="include__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="include__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="include__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-3"></div>
          <div class="control-arrow control-next control-next-3"></div>
        </div>
  
        <a class="include__buy-btn item-card__buy-btn" href="">
          <div class="include__price-wrap item-card__price-wrap">
            <div class="include__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="include__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="include__price item-card__price">
              <span class="price">165 290</span>
              <svg class="include__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="include__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="include__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="include__item-info item-card__item-info">
          <span class="include__info-name item-card__info-name">Белое золото</span>
          <span class="include__info-name item-card__info-name">Au 585</span>
          <span class="include__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="include__item-row item-card__item-row">
          <span class="include__item-sale item-card__item-sale">-50%</span>
          <span class="include__item-new item-card__item-new">Новинка</span>
          <div class="include__item-icons item-card__item-icons">
            <div class="include__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="include__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div>
      <div class="include__item item-card__item carousel-item">
        <div class="include__item-image-wrapper item-card__item-image-wrapper carousel-4">
          <img
            class="include__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="include__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="include__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-4"></div>
          <div class="control-arrow control-next control-next-4"></div>
        </div>
  
        <a class="include__buy-btn item-card__buy-btn" href="">
          <div class="include__price-wrap item-card__price-wrap">
            <div class="include__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="include__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="include__price item-card__price">
              <span class="price">165 290</span>
              <svg class="include__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="include__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="include__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="include__item-info item-card__item-info">
          <span class="include__info-name item-card__info-name">Белое золото</span>
          <span class="include__info-name item-card__info-name">Au 585</span>
          <span class="include__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="include__item-row item-card__item-row">
          <span class="include__item-sale item-card__item-sale">-50%</span>
          <span class="include__item-new item-card__item-new">Новинка</span>
          <div class="include__item-icons item-card__item-icons">
            <div class="include__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="include__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div>
      <!-- <div class="include__item item-card__item carousel-item">
        <div class="include__item-image-wrapper item-card__item-image-wrapper carousel-5">
          <img
            class="include__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="include__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="include__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-5"></div>
          <div class="control-arrow control-next control-next-5"></div>
        </div>
  
        <a class="include__buy-btn item-card__buy-btn" href="">
          <div class="include__price-wrap item-card__price-wrap">
            <div class="include__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="include__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="include__price item-card__price">
              <span class="price">165 290</span>
              <svg class="include__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="include__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="include__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="include__item-info item-card__item-info">
          <span class="include__info-name item-card__info-name">Белое золото</span>
          <span class="include__info-name item-card__info-name">Au 585</span>
          <span class="include__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="include__item-row item-card__item-row">
          <span class="include__item-sale item-card__item-sale">-50%</span>
          <span class="include__item-new item-card__item-new">Новинка</span>
          <div class="include__item-icons item-card__item-icons">
            <div class="include__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="include__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
  <section class="similar">
    <p class="similar__title">Похожие украшения</p>
    <div class="similar__list owl-carousel">
      <div class="similar__item item-card__item carousel-item">
        <div
          class="similar__item-image-wrapper item-card__item-image-wrapper carousel-1 carousel"
        >
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-1"></div>
          <div class="control-arrow control-next control-next-1"></div>
        </div>
  
        <a class="similar__buy-btn item-card__buy-btn" href="#">
          <div class="similar__price-wrap item-card__price-wrap">
            <div class="similar__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="similar__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="similar__price item-card__price">
              <span class="price">165 290</span>
              <svg class="similar__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="similar__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="similar__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="similar__item-info item-card__item-info">
          <span class="similar__info-name item-card__info-name">Белое золото</span>
          <span class="similar__info-name item-card__info-name">Au 585</span>
          <span class="similar__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="similar__item-row item-card__item-row">
          <span class="similar__item-sale item-card__item-sale">-50%</span>
          <span class="similar__item-new item-card__item-new">Новинка</span>
          <div class="similar__item-icons item-card__item-icons">
            <div class="similar__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="similar__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div>
      <div class="similar__item item-card__item carousel-item">
        <div
          class="similar__item-image-wrapper item-card__item-image-wrapper carousel-2 carousel"
        >
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-2"></div>
          <div class="control-arrow control-next control-next-2"></div>
        </div>
  
        <a class="similar__buy-btn item-card__buy-btn" href="#">
          <div class="similar__price-wrap item-card__price-wrap">
            <div class="similar__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="similar__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="similar__price item-card__price">
              <span class="price">165 290</span>
              <svg class="similar__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="similar__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="similar__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="similar__item-info item-card__item-info">
          <span class="similar__info-name item-card__info-name">Белое золото</span>
          <span class="similar__info-name item-card__info-name">Au 585</span>
          <span class="similar__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="similar__item-row item-card__item-row">
          <span class="similar__item-sale item-card__item-sale">-50%</span>
          <span class="similar__item-new item-card__item-new">Новинка</span>
          <div class="similar__item-icons item-card__item-icons">
            <div class="similar__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="similar__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div>
      <div class="similar__item item-card__item carousel-item">
        <div
          class="similar__item-image-wrapper item-card__item-image-wrapper carousel-10 carousel"
        >
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-10"></div>
          <div class="control-arrow control-next control-next-10"></div>
        </div>
  
        <a class="similar__buy-btn item-card__buy-btn" href="#">
          <div class="similar__price-wrap item-card__price-wrap">
            <div class="similar__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="similar__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="similar__price item-card__price">
              <span class="price">165 290</span>
              <svg class="similar__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="similar__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="similar__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="similar__item-info item-card__item-info">
          <span class="similar__info-name item-card__info-name">Белое золото</span>
          <span class="similar__info-name item-card__info-name">Au 585</span>
          <span class="similar__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="similar__item-row item-card__item-row">
          <span class="similar__item-sale item-card__item-sale">-50%</span>
          <span class="similar__item-new item-card__item-new">Новинка</span>
          <div class="similar__item-icons item-card__item-icons">
            <div class="similar__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="similar__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div>
      <div class="similar__item item-card__item carousel-item">
        <div
          class="similar__item-image-wrapper item-card__item-image-wrapper carousel-11 carousel"
        >
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-11"></div>
          <div class="control-arrow control-next control-next-11"></div>
        </div>
  
        <a class="similar__buy-btn item-card__buy-btn" href="#">
          <div class="similar__price-wrap item-card__price-wrap">
            <div class="similar__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="similar__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="similar__price item-card__price">
              <span class="price">165 290</span>
              <svg class="similar__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="similar__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="similar__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="similar__item-info item-card__item-info">
          <span class="similar__info-name item-card__info-name">Белое золото</span>
          <span class="similar__info-name item-card__info-name">Au 585</span>
          <span class="similar__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="similar__item-row item-card__item-row">
          <span class="similar__item-sale item-card__item-sale">-50%</span>
          <span class="similar__item-new item-card__item-new">Новинка</span>
          <div class="similar__item-icons item-card__item-icons">
            <div class="similar__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="similar__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div>
      <div class="similar__item item-card__item carousel-item">
        <div
          class="similar__item-image-wrapper item-card__item-image-wrapper carousel-12 carousel"
        >
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="similar__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-12"></div>
          <div class="control-arrow control-next control-next-12"></div>
        </div>
  
        <a class="similar__buy-btn item-card__buy-btn" href="#">
          <div class="similar__price-wrap item-card__price-wrap">
            <div class="similar__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="similar__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="similar__price item-card__price">
              <span class="price">165 290</span>
              <svg class="similar__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="similar__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="similar__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="similar__item-info item-card__item-info">
          <span class="similar__info-name item-card__info-name">Белое золото</span>
          <span class="similar__info-name item-card__info-name">Au 585</span>
          <span class="similar__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="similar__item-row item-card__item-row">
          <span class="similar__item-sale item-card__item-sale">-50%</span>
          <span class="similar__item-new item-card__item-new">Новинка</span>
          <div class="similar__item-icons item-card__item-icons">
            <div class="similar__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="similar__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="similar__buttons">
      <button type="button" class="similar__button similar__button--prev"></button>
      <div class="similar__counter">
        <span class="similar__counter--current">1</span>
        <span class="similar__counter--divider">/</span>
        <span class="similar__counter--max">5</span>
      </div>
      <button type="button" class="similar__button similar__button--next"></button>
    </div>
  </section>
  <section class="recent">
    <p class="recent__title">Недавно просмотренные</p>
    <div class="recent__list">
      <div class="recent__item item-card__item carousel-item">
        <div class="recent__item-image-wrapper item-card__item-image-wrapper carousel-6">
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-6"></div>
          <div class="control-arrow control-next control-next-6"></div>
        </div>
  
        <a class="recent__buy-btn item-card__buy-btn" href="#">
          <div class="recent__price-wrap item-card__price-wrap">
            <div class="recent__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="recent__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="recent__price item-card__price">
              <span class="price">165 290</span>
              <svg class="recent__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="recent__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="recent__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="recent__item-info item-card__item-info">
          <span class="recent__info-name item-card__info-name">Белое золото</span>
          <span class="recent__info-name item-card__info-name">Au 585</span>
          <span class="recent__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="recent__item-row item-card__item-row">
          <span class="recent__item-sale item-card__item-sale">-50%</span>
          <span class="recent__item-new item-card__item-new">Новинка</span>
          <div class="recent__item-icons item-card__item-icons">
            <div class="recent__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="recent__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div>
      <div class="recent__item item-card__item carousel-item">
        <div class="recent__item-image-wrapper item-card__item-image-wrapper carousel-7">
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-7"></div>
          <div class="control-arrow control-next control-next-7"></div>
        </div>
  
        <a class="recent__buy-btn item-card__buy-btn" href="#">
          <div class="recent__price-wrap item-card__price-wrap">
            <div class="recent__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="recent__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="recent__price item-card__price">
              <span class="price">165 290</span>
              <svg class="recent__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="recent__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="recent__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="recent__item-info item-card__item-info">
          <span class="recent__info-name item-card__info-name">Белое золото</span>
          <span class="recent__info-name item-card__info-name">Au 585</span>
          <span class="recent__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="recent__item-row item-card__item-row">
          <span class="recent__item-sale item-card__item-sale">-50%</span>
          <span class="recent__item-new item-card__item-new">Новинка</span>
          <div class="recent__item-icons item-card__item-icons">
            <div class="recent__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="recent__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div>
      <div class="recent__item item-card__item carousel-item">
        <div class="recent__item-image-wrapper item-card__item-image-wrapper carousel-8">
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-8"></div>
          <div class="control-arrow control-next control-next-8"></div>
        </div>
  
        <a class="recent__buy-btn item-card__buy-btn" href="#">
          <div class="recent__price-wrap item-card__price-wrap">
            <div class="recent__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="recent__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="recent__price item-card__price">
              <span class="price">165 290</span>
              <svg class="recent__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="recent__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="recent__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="recent__item-info item-card__item-info">
          <span class="recent__info-name item-card__info-name">Белое золото</span>
          <span class="recent__info-name item-card__info-name">Au 585</span>
          <span class="recent__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="recent__item-row item-card__item-row">
          <span class="recent__item-sale item-card__item-sale">-50%</span>
          <span class="recent__item-new item-card__item-new">Новинка</span>
          <div class="recent__item-icons item-card__item-icons">
            <div class="recent__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="recent__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div>
      <div class="recent__item item-card__item carousel-item">
        <div class="recent__item-image-wrapper item-card__item-image-wrapper carousel-9">
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
          <img
            class="recent__item-picture item-card__item-picture"
            src="new-card2/img/item.jpg"
            alt="Фото"
          />
        </div>
  
        <div class="include__controls controls">
          <div class="control-arrow control-prev control-prev-9"></div>
          <div class="control-arrow control-next control-next-9"></div>
        </div>
  
        <a class="recent__buy-btn item-card__buy-btn" href="#">
          <div class="recent__price-wrap item-card__price-wrap">
            <div class="recent__price old-price item-card__price">
              <span class="price">165 290</span>
              <svg class="recent__icon icon-rub item-card__icon">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
            <div class="recent__price item-card__price">
              <span class="price">165 290</span>
              <svg class="recent__icon item-card__icon icon-rub">
                <use xlink:href="new-card2/img/svg/sprite.svg#rub"></use>
              </svg>
            </div>
          </div>
          <div class="recent__price-btn-text item-card__price-btn-text">Купить</div>
        </a>
        <span class="recent__item-title item-card__item-title">Кольцо с бриллиантами</span>
        <div class="recent__item-info item-card__item-info">
          <span class="recent__info-name item-card__info-name">Белое золото</span>
          <span class="recent__info-name item-card__info-name">Au 585</span>
          <span class="recent__info-name item-card__info-name">Бриллиант 2,15 г.</span>
        </div>
  
        <div class="recent__item-row item-card__item-row">
          <span class="recent__item-sale item-card__item-sale">-50%</span>
          <span class="recent__item-new item-card__item-new">Новинка</span>
          <div class="recent__item-icons item-card__item-icons">
            <div class="recent__item-icon-watch item-card__item-icon-watch">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5001 0.599609C3.50049 0.599609 0.375098 4.30273 0.375098 4.30273C0.27666 4.41523 0.27666 4.58398 0.375098 4.69648C0.375098 4.69648 3.50049 8.39961 7.5001 8.39961C11.4997 8.39961 14.6251 4.69648 14.6251 4.69648C14.7235 4.58398 14.7235 4.41523 14.6251 4.30273C14.6251 4.30273 11.4997 0.599609 7.5001 0.599609ZM7.5001 1.19961C8.28877 1.19961 9.04228 1.3625 9.74072 1.61211C10.2095 2.1418 10.5001 2.83437 10.5001 3.59961C10.5001 5.26016 9.16064 6.59961 7.5001 6.59961C5.83955 6.59961 4.5001 5.26016 4.5001 3.59961C4.5001 2.83437 4.78135 2.1418 5.2501 1.61211C5.95088 1.36133 6.70908 1.19961 7.5001 1.19961ZM4.25635 2.05273C4.03135 2.52148 3.9001 3.04648 3.9001 3.59961C3.9001 5.58477 5.51494 7.19961 7.5001 7.19961C9.48525 7.19961 11.1001 5.58477 11.1001 3.59961C11.1001 3.04883 10.9747 2.52148 10.7532 2.05273C12.4478 2.91406 13.6665 4.16328 13.9782 4.49961C13.4907 5.02695 10.7919 7.79961 7.5001 7.79961C4.2083 7.79961 1.50947 5.02695 1.02197 4.49961C1.33369 4.16211 2.5583 2.91406 4.25635 2.05273ZM7.5001 2.09961C6.67158 2.09961 6.0001 2.77109 6.0001 3.59961C6.0001 4.42812 6.67158 5.09961 7.5001 5.09961C8.32861 5.09961 9.0001 4.42812 9.0001 3.59961C9.0001 2.77109 8.32861 2.09961 7.5001 2.09961Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="recent__item-icon-wishlist item-card__item-icon-wishlist"></div>
          </div>
        </div>
      </div>
  
   
    </div>
  </section>
  <section class="modal">
    <div class="modal__wrapper">

    </div>
    <div class="salon__modal">
        <div class="salon">
            <!-- <button type="button" class="salon__close"> </button> -->
            <input type="radio" id="salon-location" class="salon__radio salon__radio--location" name="salon" checked>
            <input type="radio" id="salon-map" class="salon__radio salon__radio--map" name="salon">
    
            <label class="salon__label salon__label--location" for="salon-location">
                <button  type="button" class="salon__btn salon__btn--location"></button>
                <span>Выбрать из списка</span> </label>
            <label class="salon__label salon__label--map" for="salon-map">
                <button  type="button" class="salon__btn salon__btn--map"></button>
                <span>Выбрать на карте</span>  </label>
    
            
            <div class="salon__col--mobile salon__col--location salon__col--location--mobile">
    
    
                <ul class="salon__list">
                    <li class="salon__item">
                        <p class="salon__title">ТРЦ РИО Коломна</p>
                        <span class="salon__address">Московская область, ул. Октябрьской революции, д.362 </span>
                        <span class="salon__time">Ежедневно с 10:00 до 20:00</span>
                    </li>
                    <li class="salon__item">
                        <p class="salon__title">Outlet Village Белая Дача</p>
                        <ul class="salon__address-list">
                            <li class="salon__address-list--item">Кузьминки</li>
                            <li class="salon__address-list--item">Котельники</li>
                            <li class="salon__address-list--item">Братиславская</li>
                        </ul>
                        <span class="salon__address">Московская область, ул. Октябрьской революции, д.362</span>
                    </li>
                    <li class="salon__item">
                        <p class="salon__title">Outlet Village Белая Дача</p>
                        <ul class="salon__address-list">
                            <li class="salon__address-list--item">Кузьминки</li>
                            <li class="salon__address-list--item">Котельники</li>
                            <li class="salon__address-list--item">Братиславская</li>
                        </ul>
                        <span class="salon__address">Московская область, ул. Октябрьской революции, д.362</span>
                    </li>
                    <li class="salon__item">
                        <p class="salon__title">Outlet Village Белая Дача</p>
                        <ul class="salon__address-list">
                            <li class="salon__address-list--item">Кузьминки</li>
                            <li class="salon__address-list--item">Котельники</li>
                            <li class="salon__address-list--item">Братиславская</li>
    
                        </ul>
                        <span class="salon__address">Московская область, ул. Октябрьской революции, д.362</span>
                    </li>
                    <li class="salon__item">
                        <p class="salon__title">Outlet Village Белая Дача</p>
                        <ul class="salon__address-list">
                            <li class="salon__address-list--item">Кузьминки</li>
                            <li class="salon__address-list--item">Котельники</li>
                            <li class="salon__address-list--item">Братиславская</li>
                        </ul>
                        <span class="salon__address">Московская область, ул. Октябрьской революции, д.362</span>
                    </li>
                </ul>
            </div>
    
            <div class="salon__col--mobile salon__col--location-map salon__col--map--mobile">
                <span class="salon__metro salon__metro--line">
                    Линия метро
                </span>
    
                <div class="selectboxss salon__metro__option">
                    <div class="selectboxssvalue"><span>Выбрать</span><img src="new-card2/img/arrow.png" class="arrowselect" />
                    </div>
                    <ul class="selectboxssmenu">
                        <li class="selectoption selectoption__line"><span class="flag-ru"></span>Любая</li>
                        <li class="selectoption selectoption__line"><span class="flag-ru"></span>Замоскворецкая</li>
                        <li class="selectoption selectoption__line"><span class="flag-en"></span>Люблинско-Дмитровская</li>
                        <li class="selectoption selectoption__line"><span class="flag-fr"></span>Калининско-Солнцевская</li>
                    </ul>
                </div>
    
                <span class="salon__metro salon__metro--station">
                    Станция метро
                </span>
    
                <div class="selectboxss salon__metro__option">
                    <div class="selectboxssvalue"><span>Выбрать</span><img src="new-card2/img/arrow.png" class="arrowselect" />
                    </div>
                    <ul class="selectboxssmenu">
                        <li class="selectoption selectoption__station"><span class="flag-ru"></span>Любая</li>
                        <li class="selectoption selectoption__station"><span class="flag-ru"></span>Беляево</li>
                        <li class="selectoption selectoption__station"><span class="flag-en"></span>Медведково</li>
                        <li class="selectoption selectoption__station"><span class="flag-fr"></span>Юго-западная</li>
                        <li class="selectoption selectoption__station"><span class="flag-en"></span>Красногвардейская</li>
                        <li class="selectoption selectoption__station"><span class="flag-en"></span>Марьина роща</li>
                        <li class="selectoption selectoption__station"><span class="flag-en"></span>Люблино</li>
                    </ul>
                </div>
    
                <!-- option -->
    
                <a href="#" class="salon__auto">Определить салон автоматически</a>
                <div id="yandexMap-mobile" class="yandexMap-mobile"></div>
              
            </div>
    
            <div class="salon__col salon__col--location">
                <div>
                    <span class="salon__metro">
                        Линия метро
                    </span>
        
                    <!-- option start -->
                    <div class="selectboxss salon__metro__option">
                        <div class="selectboxssvalue"><span>Выбрать</span><img src="new-card2/img/arrow.png" class="arrowselect" />
                        </div>
                        <ul class="selectboxssmenu">
                            <li class="selectoption selectoption__line">Любая</li>
                            <li class="selectoption selectoption__line">Замоскворецкая</li>
                            <li class="selectoption selectoption__line">Люблинско-Дмитровская</li>
                            <li class="selectoption selectoption__line">Калининско-Солнцевская</li>
                        </ul>
                    </div>
                    <!-- option end -->
        
                    <span class="salon__metro">
                        Станция метро
                    </span>
        
                    <!-- option start -->
                    <div class="selectboxss salon__metro__option">
                        <div class="selectboxssvalue"><span>Выбрать</span><img src="new-card2/img/arrow.png" class="arrowselect" />
                        </div>
                        <ul class="selectboxssmenu">
                            <li class="selectoption selectoption__station">Любая</li>
                            <li class="selectoption selectoption__station">Беляево</li>
                            <li class="selectoption selectoption__station">Медведково</li>
                            <li class="selectoption selectoption__station">Юго-западная</li>
                            <li class="selectoption selectoption__station">Красногвардейская</li>
                            <li class="selectoption selectoption__station">Марьина роща</li>
                            <li class="selectoption selectoption__station">Люблино</li>
                        </ul>
                    </div>
                </div>
      
    
    
                <!-- option end -->
    
                <a href="#" class="salon__auto">Определить салон автоматически</a>
    
                <span class="salon__list--title">Выберите из списка</span>
    
                <ul class="salon__list">
                    <li class="salon__item">
                        <p class="salon__title">Бронницкий ювелир» в ТРК «Облака</p>
                        <ul class="salon__address-list">
                            <li class="salon__address-list--item">Замоскворецкая</li>        
                        </ul>
                        <span class="salon__time">Бронницкий ювелир» в ТРК «Облака</span>
                        <span class="salon__time"></span>
                    </li>
                    <li class="salon__item">
                        <p class="salon__title">Бронницкий ювелир» в ТРЦ «Райкин плаза</p>
                        <ul class="salon__address-list">
                            <li class="salon__address-list--item">Люблинско-Дмитровская</li>        
                        </ul>
                        <span class="salon__time">Москва, Шереметьевская ул., 6, к.1, 1 этаж</span>
                        <span class="salon__time"></span>
                    </li>
                    <li class="salon__item">
                        <p class="salon__title">Бронницкий ювелир» в ТРЦ «МЕГА Белая Дача</p>
                        <ul class="salon__address-list">
                            <li class="salon__address-list--item">Люблинско-Дмитровская</li>        
                        </ul>
                        <span class="salon__time">Московская обл., г. Котельники, 1-ый Покровский проезд, д. 5 ("Ашан" и "Икеа")</span>
                        <span class="salon__time"></span>
                    </li>
                    <li class="salon__item">
                        <p class="salon__title">Бронницкий ювелир» в ТРЦ «Фестиваль</p>
                        <ul class="salon__address-list">
                            <li class="salon__address-list--item">Калининско-Солнцевская</li>        
                        </ul>
                        <span class="salon__time">Москва, Мичуринский пр-т, Олимпийская деревня, д. 3, корп. 1</span>
                        <span class="salon__time"></span>
                    </li>
                    <li class="salon__item">
                        <p class="salon__title">Бронницкий ювелир» в ТЦ «Июнь</p>
                        <ul class="salon__address-list">
                            <li class="salon__address-list--item">Калининско-Солнцевская</li>        
                        </ul>
                        <span class="salon__time">Московская обл., Мытищинский район, Мытищи, улица Мира, стр. 51</span>
                        <span class="salon__time"></span>
                    </li>
                    <li class="salon__item">
                        <p class="salon__title">Бронницкий ювелир» в ТЦ «Капитолий-Беляево</p>
                        <ul class="salon__address-list">
                            <li class="salon__address-list--item">Калининско-Солнцевская</li>        
                        </ul>
                        <span class="salon__time">Москва, Миклухо-Маклая ул., 32а, 1 этаж</span>
                        <span class="salon__time"></span>
                    </li>
                </ul>
            </div>
    
            <div class="salon__col salon__col--location-map">
                <div id="yandexMap" class="yandexMap"></div>
               
    
            </div>
    
        </div>
    
    </div>
  


    <div class="modal modal__delivery">
        <div class="modal__window">
            <button class="modal__close modal__close--delivery"></button>
            <p class="modal__title">Информация о доставке</p>

            <div class="modal__text">
                <p class="modal__paragraph">
                    Доставка БЕСПЛАТНАЯ (в пределах МКАД и КАД), при сумме заказа от 4000 рублей.
                </p>
                <p class="modal__paragraph">
                    При сумме заказа до 4 000 рублей стоимость доставки в пределах МКАД и КАД составляет 250 рублей.
                </p>
                <p class="modal__paragraph">
                    Стоимость доставки за МКАД и КАД в пределах 10 км составляет 290 рублей.
                </p>
                <p class="modal__paragraph">
                    Доставка за МКАД и КАД дальше 10 км, а также в регионы России осуществляется курьерской службой
                    «Pony Express».
                    (Сроки и стоимость доставки уточняйте у наших менеджеров.)
                </p>
                <p class="modal__paragraph">
                    Заказы курьерской службой Pony Express доставляются только при 100% предоплате.
                </p>
                <p class="modal__paragraph">
                    Вы можете получить свой заказ в любом франчайзинговом салоне. Услуга БЕСПЛАТНАЯ при заказе от 4000
                    рублей.
                </p>
                <p class="modal__paragraph">
                    Вы можете получить свой заказ в любом франчайзинговом салоне. Услуга БЕСПЛАТНАЯ при заказе от 4000
                    рублей.
                </p>
                <p class="modal__paragraph">
                    Вы можете получить свой заказ в любом франчайзинговом салоне. Услуга БЕСПЛАТНАЯ при заказе от 4000
                    рублей.
                </p>
                <p class="modal__paragraph">
                    Если его сумма менее 4000 рублей, перемещение заказа в салон - 250 рублей.
                </p>
                <p class="modal__paragraph">
                    Вы можете заказать не более трех изделий на выбор при доставке по Москве и Санкт-Петербургу.
                </p>
            </div>
        </div>
    </div>


    <div class="modal modal__payment">
        <div class="modal__window">
            <button class="modal__close modal__close--payment"></button>
            <span class="modal__title">Информация по оплате</span>

            <div class="modal__text">
                <p class="modal__paragraph">
                    При сумме заказа до 4 000 рублей стоимость доставки в пределах МКАД и КАД составляет 250 рублей.
                </p>
                <p class="modal__paragraph">
                    Стоимость доставки за МКАД и КАД в пределах 10 км составляет 290 рублей.
                </p>
                <p class="modal__paragraph">
                    Доставка за МКАД и КАД дальше 10 км, а также в регионы России осуществляется курьерской службой
                    «Pony Express».
                    (Сроки и стоимость доставки уточняйте у наших менеджеров.)
                </p>
                <p class="modal__paragraph">
                    Заказы курьерской службой Pony Express доставляются только при 100% предоплате.
                </p>
                <p class="modal__paragraph">
                    Вы можете получить свой заказ в любом франчайзинговом салоне. Услуга БЕСПЛАТНАЯ при заказе от 4000
                    рублей.
                </p>
                <p class="modal__paragraph">
                    Вы можете получить свой заказ в любом франчайзинговом салоне. Услуга БЕСПЛАТНАЯ при заказе от 4000
                    рублей.
                </p>
                <p class="modal__paragraph">
                    Если его сумма менее 4000 рублей, перемещение заказа в салон - 250 рублей.
                </p>
                <p class="modal__paragraph">
                    Вы можете заказать не более трех изделий на выбор при доставке по Москве и Санкт-Петербургу.
                </p>
            </div>
        </div>
    </div>

    <div class="modal__callback">
        <div class="modal__callback-window">
            <span class="modal__callback-title">Заказать обратный звонок</span>
            <button class="modal__close modal__close--callback"></button>
    
    
            <form action="">
                <input type="text" class="modal-card__input modal-card__input--callback" name="name" placeholder="Ваше имя">
                <input type="text" class="modal-card__input modal-card__input--callback" name="phone" placeholder="Телефон">
                <input type="button" class="modal-card__send-button" value="Перезвонить мне">
            </form>
            <a href="#" class="modal-card__offerta">
                Нажимая на кнопку «Перезвонить мне», 
                <span class="modal-card__offerta--link">я даю согласие на обработку персональных данных</span> 
            </a>
            </form>
        </div>
       
    </div>


</section>      
</body>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>