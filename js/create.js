/*
 * create.js
 * 
 * 動的HTML生成機能
 * 
 */

/* 
* ToPickPotの作成
* @about 列と行の数分のPotをテーブルで作成する
* @param 言語番号
* @param 列の数
* @param 行の数
*/
function createToPickPot(langNo, colNum, rowNum) {

    languageChange(langNo);
    //トピックポット作成
    createPot(colNum, rowNum);
    //トピックリンク作成
    createTopic(langNo, colNum, rowNum);

    //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    //ローカルストレージにJSON形式で保存
    localData.lang = langNo;
    localData.col = colNum;
    localData.row = rowNum;

    jsonData = JSON.stringify(localData)
    localStorage.setItem('localDataJson', jsonData);
}

/* 
 * Potの作成
 * @about 列と行の数分のPotをテーブルで作成する
 * @param 列の数
 * @param 行の数
 */
function createPot(colNum, rowNum) {
    let htmlText = '<table>';
    for (let col = 0; col < colNum; col++) {
        htmlText += '<tr>'

        for (let row = 0; row < rowNum; row++) {
            htmlText += `
            <td>
                <a id='panel_${col}-${row}' 
                name='topicLink' class='' 
                href='' target='_blank' 
                rel='noopener noreferrer'></a>
            </td> `
        }
        htmlText += '</tr>'
    }
    htmlText += '</table>';

    $('#searchPanel').html(htmlText);
}

/*
 * トピック作成
 * @about 列と行の数分作成されているPotの上にトピックを乗せる
 * @param 言語番号
 * @param 列の数
 * @param 行の数
 */
function createTopic(langNo, colNum, rowNum) {

    let langType = languageResource[langNo].language;

    //WIkipediaのAPIのURL
    let urlWikipedia = `https://${langType}.wikipedia.org/w/api.php`;
    //Google検索のURL
    let urlGoogle = `http:google.com/search?hl=${langType}&q=`;

    //WIkipediaのAPIパラメータ
    let params = {
        format: "json",              //JSON形式を指定
        action: "query",             //データ取得のアクションを指定
        generator: "random",         //記事をランダムに取得するよう指定
        list: "random",              //ランダム
        rnnamespace: "0",            //0:標準  https://ja.wikipedia.org/wiki/Help:%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93
        rnlimit: colNum * rowNum,
        prop: "categories"           //記事の基本情報を取得
    };

    urlWikipedia = urlWikipedia + "?origin=*";
    Object.keys(params).forEach(function (key) { urlWikipedia += "&" + key + "=" + params[key]; });
    console.log(urlWikipedia);

    //Wikipediaからランダムにキーワード取得
    fetch(urlWikipedia)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            let randoms = response.query.random;
            for (let r in randoms) {
                console.log(randoms[r].title);
            }
            //Google検索リンク作成
            for (let col = 0; col < colNum; col++) {
                for (let row = 0; row < rowNum; row++) {
                    //Google検索のパラメータ追加
                    console.log(`#panel_${col}-${row}`);
                    // $(`#panel_${col}-${row}`).attr('name', 'tNameLink');
                    // $(`#panel_${col}-${row}`).attr('class', 'tLink');
                    $(`#panel_${col}-${row}`).attr('href', urlGoogle + randoms[col * rowNum + row].title);
                    $(`#panel_${col}-${row}`).text(randoms[col * rowNum + row].title);
                }
            }

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
 * 列セレクトフォーム作成
 * @param 列の最大数
 */
function createColForm(colMax) {
    let htmlText;
    for (let i = 1; i <= colMax; i++) {
        htmlText += `<option value=${i}>${i}</option>`;
    }
    $('#colNum').html(htmlText);
}

/*
 * 行セレクトフォーム作成
 * @param 行の最大数
 */
function createRowForm(rowMax) {
    let htmlText;
    for (let i = 1; i <= rowMax; i++) {
        htmlText += `<option value=${i}>${i}</option>`;
    }
    $('#rowNum').html(htmlText);
}



/*
 * 検索履歴作成
 * @param 
 */
function createSearchHistory() {

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
            <td class='recentLink'>
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
function createFavolite() {

    //ローカルストレージから読み出し
    let jsonData = localStorage.getItem('localDataJson');
    let localData = JSON.parse(jsonData);

    //今までの検索トピックに値を反映
    let htmlText = '<table>';
    for (let i = 0; i < localData.fav.ary.length; i++) {
        //Google検索のURL
        let urlGoogle = `http:google.com/search?hl=${localData.fav.ary[i].lang}&q=${localData.fav.ary[i].topic}`;
        //リンク作成
        htmlText += `<tr>
                        <td>
                            <button name='delBtn' id='delete${i}' value='${i}'>&#x1F5D1;</button>
                        </td>
                        <td>
                            <a href='${urlGoogle}' target='_blank' rel='noopener noreferrer'>${localData.fav.ary[i].topic}</a>
                        </td>
                        <td>
                            <button name='tweetBtn' id='fav${i}' value='${i}'>♡</button>
                        </td>
                    <tr>`
    }
    htmlText += '</table>';
    $('#favoriteList').html(htmlText);
}