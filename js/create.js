/*
 * create.js
 * 
 * 動的HTML生成機能
 * 
 */

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
                                <a id='panel_${col}-${row}' href='' target='_blank' rel='noopener noreferrer'></a>
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
 * @param 言語
 * @param 列の数
 * @param 行の数
 */
function createTopic(langType, colNum, rowNum) {


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
                    $(`#panel_${col}-${row}`).attr('href', urlGoogle + randoms[col * rowNum + row].title);
                    $(`#panel_${col}-${row}`).text(randoms[col * rowNum + row].title);
                }
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}