$(document).ready(function() {

	$(document).on("click", "#fake-sizenewpopup", function(e) {
		$('#url_value').val('');
		$('#size_value').val('');
		$('input[type=text]').val('');

		$('.errortext').addClass('hide');

		$('.success-size').addClass('hide');

		$("form[name=NOT_AVAILABLE]").removeClass('hide');

		var url = $('#size-wrapper').data('ajax'),
			section_id = $(this).data('section-id'),
			product_url = "https://www.bronnitsy.com"+$(this).closest('div[itemprop=offers]').data('url');

		$.ajax({
			url: url, 
			data: {FOR_SEND_SIZE: section_id, product_url:product_url}, 
			method: "GET", 
			success: function(result){
				$('#size-wrapper').html(result);
				$('#url_value').val(product_url);
			}
		});
	});

	$(document).on("click", "#send-product", function() {
		$('.md-field').removeClass('_focus');
		$('.md-field__input').val('');
		
		$('[data-friend-name]').attr('data-friend-name', '_____').text('_____');
		$('[data-sender-name]').attr('data-sender-name', '_____').text('_____');

		$('.errortext').addClass('hide');		

		$('.friend-popup__title.success').addClass('hide');
		$("form[name='send_product']").removeClass('hide');
		$(".friend-popup__right").removeClass('hide');
		var src = $(this).data('img');
		$("#friend-img").attr("src", src);
		$("#friend-img-hidden").val(src);

		var url = "https://www.bronnitsy.com"+$(this).closest('.detail__block-inner').find('div[itemprop=offers]').data('url');
		$("#friend-path-hidden").val(url);
		$("#prodnew").val(url);

	});


	$('body').on('submit', 'form[name=SIMPLE_FORM_12]', function(e){
		var dataForm = $(this).serialize(),
			productUrl = $(this).find('.url-inp').val();

		$.ajax({
			url: "/local/templates/br/components/bitrix/form.result.new/re_call_catalog.element/ajax.php", 
			data: dataForm, 
			method: 'POST',
			success: function(result){
				$("#recallform").html(result);
				$('#recallform [data-mask-phone]').mask('+7 (999) 999-99-99');
				$("#recallform").find('.url-inp').val(productUrl);
			}
		});

		return false;
	});


        window.onpopstate = function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.location = document.referrer;
            return false;
        }

});