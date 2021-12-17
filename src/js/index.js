import * as $ from 'jquery';
import '../scss/index.scss';
import header from '../components/header.html';

$(() => {
  
  $('#root').prepend(header);
});
