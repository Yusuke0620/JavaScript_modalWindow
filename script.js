/*-------------------------------------------
定数宣言※HTML要素の取得
-------------------------------------------*/
const open  = document.getElementById('open');
const close = document.getElementById('close');
const model = document.getElementById('model');
const mask  = document.getElementById('mask');
/*-------------------------------------------
定数宣言※アニメーション
-------------------------------------------*/
// 要素を表示するためのキーフレーム定義
const showKeyframes = {
    opacity: [0, 1],       // 不透明度を0から1に変化させます
    visibility: 'visible', // 要素の表示を可視化します
};

// 要素を非表示にするためのキーフレーム定義
const hideKeyframes = {
    opacity: [1, 0],      // 不透明度を1から0に変化させます
    visibility: 'hidden', // 要素の表示を非可視化します
};

// アニメーションのオプション定義
const options = {
    duration: 800,    // アニメーションの時間（ミリ秒）
    easing: 'ease',   // アニメーションのイージング関数
    fill: 'forwards', // アニメーションの終了後に状態を維持します
};

/* 解説 
要素の表示と非表示を制御するためのアニメーションに関連する定数宣言されています。
showKeyframesは、要素を表示するためのアニメーションキーフレームを定義しており、opacityとvisibilityを変化させます。
hideKeyframesは、要素を非表示にするためのアニメーションキーフレームを定義しており、同様にopacityとvisibilityを変化させます。
optionsは、アニメーションのオプションを指定しており、
durationはアニメーションの時間、
easingはアニメーションの変化の速度を制御する関数、
fillはアニメーション終了後の要素の状態を指定します。
*/ 

/*-------------------------------------------
クリックイベント
-------------------------------------------*/
//①#openModelをクリックしたら
//②定数宣言したアニメーションを
//③modelとmaskに追加し
//④modelとmaskが表示される
open.addEventListener('click', () => {
    model.animate(showKeyframes, options);
    mask.animate(showKeyframes, options);
});

//①closeModelをクリックしたら
//②定数宣言したアニメーションを
//③modelとmaskに追加し
//④modelとmaskが非表示される
close.addEventListener('click', () => {
    model.animate(hideKeyframes, options);
    mask.animate(hideKeyframes, options);
});

//maskをクリックしたらcloseボタンをクリックした時と同じ挙動にする指示
mask.addEventListener('click', () => {
    close.click();
})
