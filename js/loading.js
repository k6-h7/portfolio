

$(function () {
	var webStorage = function () {
		if (sessionStorage.getItem('access')) {
			/*
			  2回目以降アクセス時の処理
			*/
			$(".loader").addClass('is-active');
			$(".loader-wrap").addClass('is-active');
		} else {
			/*
			  初回アクセス時の処理
			*/
			sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
			$(".loader:before").addClass('is-active'); // loadingアニメーションを表示
			setTimeout(function () {
				//読み込みが完了したら実行する
				$(window).on('load', function () {
					//ローディングアニメーションをフェードアウト
					$('.loader').delay(600).fadeOut(600);
					//背景色をフェードアウト
					$('.loader-wrap').delay(900).fadeOut(800);
				});

				//ページの読み込みが完了してなくても4秒後にアニメーションを非表示にする
				setTimeout(function () {
					$('.loader-wrap').fadeOut(600);
				}, 4000);
			});
		}
	}
	webStorage();
});
