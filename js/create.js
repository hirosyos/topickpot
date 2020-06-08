/*
 * create.js
 * 
 * 動的HTML生成機能
 * 
 */

/* 
* 検索パネルの作成
* @about 列と行の数分のPotをテーブルで作成する
* @param 言語番号
* @param パネルの数
*/
function createSearchPanel(langNo, panelNum) {
    //言語変更
    languageChange(langNo);

    //言語設定から各種URLの雛形を作成
    let langType = languageResource[langNo].language;
    //WIkipediaのAPIのURL
    let urlWikipedia = `https://${langType}.wikipedia.org/w/api.php`;
    //Google検索のURL
    let urlGoogle = `http:google.com/search?hl=${langType}&q=`;

    //
    //WIkipediaのAPIアクセス処理
    //

    //WIkipediaのAPIパラメータ
    let params = {
        format: "json",              //JSON形式を指定
        action: "query",             //データ取得のアクションを指定
        generator: "random",         //記事をランダムに取得するよう指定
        list: "random",              //ランダム
        rnnamespace: "0",            //0:標準  https://ja.wikipedia.org/wiki/Help:%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93
        rnlimit: panelNum,
        prop: "categories"           //記事の基本情報を取得
    };

    urlWikipedia = urlWikipedia + "?origin=*";
    Object.keys(params).forEach(function (key) { urlWikipedia += "&" + key + "=" + params[key]; });
    console.log(urlWikipedia);

    //Wikipediaからランダムにキーワード取得
    let randoms
    fetch(urlWikipedia)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            randoms = response.query.random;
            for (let r in randoms) {
                console.log(randoms[r].title);
            }
            //
            //WikipediaのランダムキーワードをGoogle検索ワードとして表示
            //
            //Google検索リンク作成
            let htmlText;
            for (let panel = 0; panel < panelNum; panel++) {
                let topic = randoms[panel].title;
                htmlText += `
                    <div>
                        <a id='panel_${panelNum}' 
                        name='topicLink' class='' 
                        href='${urlGoogle}${topic}' target='_blank' 
                        rel='noopener noreferrer'>${topic}</a>
                    </div> `
            }
            $('#searchPanelBox').html(htmlText);

            //ローカルストレージから読み出し
            let jsonData = localStorage.getItem('localDataJson');
            let localData = JSON.parse(jsonData);

            //各種値を保存
            localData.lang = langNo;
            localData.panelNum = panelNum;

            //ローカルストレージに書き込み
            jsonData = JSON.stringify(localData)
            localStorage.setItem('localDataJson', jsonData);
        })
        .catch(function (error) {
            console.log(error);
        });
}

/*
 * 言語セレクトフォーム作成
 * @about 
 */
function createLangForm() {
    let htmlText;
    for (let i = 0; i < languageResource.length; i++) {
        htmlText += `<option value=${i}>${languageResource[i].langText}</option>`;
    }
    $('#langType').html(htmlText);
}

/*
 * パネル数セレクトフォーム作成
 * @param パネルの最大数
 */
function createPanelNumForm(panelMax) {
    let htmlText;
    for (let i = 1; i <= panelMax; i++) {
        htmlText += `<option value=${i}>${i}</option>`;
    }
    $('#panelNum').html(htmlText);
}

/*
 * 検索履歴作成
 * @param 
 */
function createHis() {

    //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    //今までの検索トピックに値を反映
    let htmlText = '<table>';
    for (let i = 0; i < localData.his.ary.length; i++) {
        //Google検索のURL
        let urlGoogle = `http:google.com/search?hl=${localData.his.ary[i].lang}&q=${localData.his.ary[i].topic}`;
        //リンク作成
        htmlText += `
        <tr>
            <td>
                <button name='deleteOneBtn'
                id='delete${i}' value='${i}'>&#x1F5D1;</button>
            </td>
            <td class='hisLink'>
                <a href='${urlGoogle}' target='_blank'rel='noopener noreferrer'>
                ${localData.his.ary[i].topic}</a>
            </td>
            <td>
                <button name='favoliteOneBtn'
                id='histry${i}' value='${i}'>♡</button>
            </td>
        <tr>`
    }
    htmlText += '</table>';
    $('#resentList').html(htmlText);
}

/*
 * お気に入り作成
 * @param 
 */
function createFav() {

    //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    //今までの検索トピックに値を反映
    let htmlText = '<table>';
    for (let i = 0; i < localData.fav.ary.length; i++) {
        //Google検索のURL
        let urlGoogle = `
            http:google.com/search?hl=${localData.fav.ary[i].lang}&q=${localData.fav.ary[i].topic}`;
        //リンク作成
        htmlText += `
            <tr>
                <td>
                    <button name='delBtn' id='delete${i}' value='${i}'>&#x1F5D1;</button>
                </td>
                <td class='favLink'>
                    <a href='${urlGoogle}' target='_blank' rel='noopener noreferrer'>
                        ${localData.fav.ary[i].topic}</a>
                </td>
                <td>
                    <button name='tweetBtn' id='fav${i}' value='${i}'>♡</button>
                </td>
            <tr>`;
    }
    htmlText += '</table>';
    $('#favoriteList').html(htmlText);
}