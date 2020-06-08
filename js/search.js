/*
 * search.js
 *
 * 検索機能
 *
 */

// 言語ボタン、列ボタン、行ボタン、変化イベント
$('#langType,#colNum,#rowNum,#createSearchPanel').change('click', function () {

    let colNum = $('#colNum').val();
    let rowNum = $('#rowNum').val();
    let langNo = $('#langType').val();

    //言語設定とトピックポット作成
    createToPickPot(langNo, colNum, rowNum);
});

// 検索ボタン押下イベント
$('#createSearchPanel').on('click', function () {

    let colNum = $('#colNum').val();
    let rowNum = $('#rowNum').val();
    let langNo = $('#langType').val();

    //言語設定とトピックポット作成
    createToPickPot(langNo, colNum, rowNum);
});


//トピックリンク クリックイベント
$('#searchPanelBox').on('click', 'a[name="topicLink"]', function () {

    let topic = $(this).text();
    let langNo = $('#langType').val();

    //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    let tmp = {
        topic: topic,
        lang: langNo,
    }
    localData.his.ary.unshift(tmp);

    localData.his.cnt++;

    jsonData = JSON.stringify(localData)
    localStorage.setItem('localDataJson', jsonData);

    //検索履歴作成
    createHis();

});