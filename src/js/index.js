import * as $ from 'jquery';
import '../scss/style.scss';
import header from '../components/header.html';

$(() => {
  $('#root').prepend(header);
});
