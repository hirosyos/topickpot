/*
 * search.js
 *
 * 検索機能
 *
 */


/*
* 言語ボタン、パネル数ボタン 変化イベント
*
* 検索機能
*
*/
$('#langType,#panelNum').change(function () {

    let panelNum = $('#panelNum').val();
    let langNo = $('#langType').val();

    //言語設定と検索パネル作成
    createSearchPanel(langNo, panelNum);
});

// 検索ボタン 押下イベント
$('#reLoadBtn').on('click', function () {

    let panelNum = $('#panelNum').val();
    let langNo = $('#langType').val();

    //言語設定と検索パネル作成
    createSearchPanel(langNo, panelNum);
});


//検索パネルリンク クリックイベント
$('#searchPanelBox').on('click', 'a[name="topicLink"]', function () {

    let topic = $(this).text();
    let langNo = $('#langType').val();

    //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    //履歴に登録
    let tmp = {
        topic: topic,
        lang: langNo,
    }
    localData.his.ary.unshift(tmp);
    localData.his.cnt++;

    //ローカルストレージに書き込み
    jsonData = JSON.stringify(localData)
    localStorage.setItem('localDataJson', jsonData);

    //検索履歴作成
    createHis();

});