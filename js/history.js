/**
 * history.js
 * 履歴機能
 */


/**
 * 履歴 履歴リスト 全削除ボタン 押下イベント
 */
$('#deleteHistory').on('click', function () {

    //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    //履歴全削除
    localData.his.ary = [];
    localData.his.cnt = 0;

    //ローカルストレージに書き込み
    jsonData = JSON.stringify(localData)
    localStorage.setItem('localDataJson', jsonData);

    //履歴DOM表示
    createHis();
});

$('#deleteHistory').on('touchstart', function () {

    //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    //履歴全削除
    localData.his.ary = [];
    localData.his.cnt = 0;

    //ローカルストレージに書き込み
    jsonData = JSON.stringify(localData)
    localStorage.setItem('localDataJson', jsonData);

    //履歴DOM表示
    createHis();
});

/**
 * 履歴 履歴リスト 個別削除ボタン 押下イベント
 */
$('#resentList').on('click', 'button[name="deleteOneBtn"]', function () {

    //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    //押されたボタンの履歴削除
    let delHisIndex = this.value;
    localData.his.ary.splice(delHisIndex, 1);
    localData.his.cnt--;

    //ローカルストレージに書き込み
    jsonData = JSON.stringify(localData)
    localStorage.setItem('localDataJson', jsonData);

    //履歴DOM表示
    createHis();
});

/**
 * 履歴 履歴リスト お気に入りボタン 押下イベント
 */
$('#resentList').on('click', 'button[name="favoliteOneBtn"]', function () {

    // //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    //押されたボタンの履歴情報をお気に入りにコピー
    let hisIndex = this.value;
    let tmp = {
        topic: localData.his.ary[hisIndex].topic,
        lang: localData.his.ary[hisIndex].langNo,
    }
    localData.fav.ary.unshift(tmp);
    localData.fav.cnt++;

    //ローカルストレージに書き込み
    jsonData = JSON.stringify(localData)
    localStorage.setItem('localDataJson', jsonData);

    //お気に入りDOM表示
    createFav();
});

/**
 * 履歴 お気に入りリスト 全削除ボタン 押下イベント
 */
$('#deleteFavorite').on('click', function () {

    //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    //お気に入り全削除
    localData.fav.ary = [];
    localData.fav.cnt = 0;

    //ローカルストレージに書き込み
    jsonData = JSON.stringify(localData)
    localStorage.setItem('localDataJson', jsonData);

    //お気に入りDOM表示
    createFav();
});

/**
 * 履歴 お気に入りリスト 個別削除ボタン 押下イベント
 */
$('#favoriteList').on('click', 'button[name="delBtn"]', function () {

    // //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    //押されたボタンのお気に入り削除
    let delFavIndex = this.value;
    localData.fav.ary.splice(delFavIndex, 1);
    localData.fav.cnt--;

    //ローカルストレージに書き込み
    jsonData = JSON.stringify(localData)
    localStorage.setItem('localDataJson', jsonData);

    //お気に入りDOM表示
    createFav();
});

/**
 * 履歴 初期化ボタン 押下イベント
 */
$('#init').on('click', function () {

    //ローカルストレージ削除
    localStorage.removeItem('localDataJson');

    //リロード
    location.reload();
});

