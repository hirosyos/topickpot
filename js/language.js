/*
 * language.js
 *
 * 言語リソース
 *
 */

const languageResource = [
    {
        //英語
        langNo: 0,
        language: 'en',
        langText: 'English',
        aboutTopicPot: "I'm going to meet a new word.",

        resent: 'Recently chosen topic',
        schedule: 'Schedule',
        aboutLang: 'language',
        column: 'column',
        row: 'row',
        deleteHistory: 'delete history',
    },
    {
        //フランス語
        langNo: 1,
        language: 'fr',
        langText: 'français',
        aboutTopicPot: 'Je vais rencontrer un nouveau mot.',

        resent: 'Sujet récemment choisi',
        schedule: 'Programme',
        aboutLang: 'langue',
        column: 'colonne',
        row: 'ligne',
        deleteHistory: 'supprimer l\'historique',
    },
    {
        //ドイツ語
        langNo: 2,
        language: 'de',
        langText: 'Deutsch',
        aboutTopicPot: 'Ich werde ein neues Wort kennenlernen.',

        resent: 'Kürzlich gewähltes Thema',
        schedule: 'Zeitplan',
        aboutLang: 'Sprache',
        column: 'Spalte',
        row: 'Reihe',
        deleteHistory: 'Geschichte löschen',
    },
    {
        //スペイン語
        langNo: 3,
        language: 'es',
        langText: 'español',
        aboutTopicPot: 'Voy a conocer una nueva palabra.',

        resent: 'El tema elegido recientemente',
        schedule: 'Programación',
        aboutLang: 'idioma',
        column: 'columna',
        row: 'fila',
        deleteHistory: 'borrar el historial',
    },
    {
        //日本語
        langNo: 4,
        language: 'ja',
        langText: '日本語',
        aboutTopicPot: '新しい言葉に会いに行く',

        resent: '最近選んだトピック',
        schedule: 'スケジュール',
        aboutLang: '言語',
        column: '列',
        row: '行',
        deleteHistory: '履歴を削除',
    },
    {
        //ロシア語
        langNo: 5,
        language: 'ru',
        langText: 'русский',
        aboutTopicPot: 'Я собираюсь встретиться с новым словом.',

        resent: 'Недавно выбранные слова',
        schedule: 'Расписание',
        aboutLang: 'язык',
        column: 'рубрика',
        row: 'строка',
        deleteHistory: 'история удаления',
    },
    {
        //イタリア語
        langNo: 6,
        language: 'it',
        langText: 'italiano',
        aboutTopicPot: 'Incontrerò una nuova parola.',

        resent: 'Parole scelte di recente',
        schedule: 'Programmazione',
        aboutLang: 'lingua',
        column: 'rubrica',
        row: 'riga',
        deleteHistory: 'cancellare la cronologia',
    },
    {
        //中国語
        langNo: 7,
        language: 'zh',
        langText: '中文',
        aboutTopicPot: '我要去见一个新词。',

        resent: '最近选择的词语',
        schedule: '时间表',
        aboutLang: '语言',
        column: '专栏',
        row: '行',
        deleteHistory: '删除历史',
    },
    {
        //ポルトガル語
        langNo: 8,
        language: 'pt',
        langText: 'português',
        aboutTopicPot: 'Vou conhecer uma nova palavra.',

        resent: 'Tema recentemente escolhido',
        schedule: 'Horário',
        aboutLang: 'língua',
        column: 'coluna',
        row: 'linha',
        deleteHistory: 'apagar histórico',
    },
    {
        //ポーランド語
        langNo: 9,
        language: 'pl',
        langText: '	polski',
        aboutTopicPot: 'Zamierzam spotkać się z nowym słowem.',

        resent: 'Ostatnio wybrany temat',
        schedule: 'Rozkład jazdy',
        aboutLang: 'Język',
        column: 'kolumna',
        row: 'Rząd',
        deleteHistory: 'usunięcie historii',
    },
    {
        //オランダ語
        langNo: 10,
        language: 'nl',
        langText: 'Nederlands',
        aboutTopicPot: 'Ik ga een nieuw woord ontmoeten.',

        resent: 'Onlangs gekozen onderwerp',
        schedule: 'Plan',
        aboutLang: 'taal',
        column: 'kolom',
        row: 'rij',
        deleteHistory: 'verwijderingsgeschiedenis',
    },

]

/*
 * 言語変更
 * @about ページに記載されるすべての言語を変更する
 * @param 言語
 */
function languageChange(langType) {
    $('#htmlLang').attr('lang', languageResource[langType].language);
    $('#aboutTopicPot').text(languageResource[langType].aboutTopicPot);

    // $('#aboutLangType').text(languageResource[langType].aboutLang);
    // $('#aboutColmn').text(languageResource[langType].column);
    // $('#aboutRow').text(languageResource[langType].row);
    // $('#aboutResent').text(languageResource[langType].resent);
    // $('#aboutSchedule').text(languageResource[langType].schedule);
    // $('#deleteHistory').text(languageResource[langType].deleteHistory);
}
