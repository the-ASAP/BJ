import * as $ from 'jquery';
import '../scss/index.scss';
import header from '../components/header.html';
import card from '../components/card.html';
import about from '../components/about.html';
import offer from '../components/offer.html';
import include from '../components/include.html';


$(() => {
  $('#root').prepend(header);
  $('#root').append(card);
  $('#root').append(about);
  $('#root').append(offer);
  $('#root').append(include);
});



