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
        aboutTopicPot: 'topicpot is a service that provides up to 100 topics at the same time.',
        resent: 'Recently chosen topic',
        schedule: 'Schedule',
    },
    {
        //フランス語
        langNo: 1,
        language: 'fr',
        langText: 'français',
        aboutTopicPot: 'topicpot est un service qui fournit jusqu\'à 100 sujets en même temps.',
        resent: 'Sujet récemment choisi',
        schedule: 'Programme',
    },
    {
        //ドイツ語
        langNo: 2,
        language: 'de',
        langText: 'Deutsch',
        aboutTopicPot: 'topicpot ist ein Dienst, der bis zu 100 Themen gleichzeitig anbietet.',
        resent: 'Kürzlich gewähltes Thema',
        schedule: 'Zeitplan',
    },
    {
        //スペイン語
        langNo: 3,
        language: 'es',
        langText: 'español',
        aboutTopicPot: 'topicpot es un servicio que proporciona hasta 100 temas al mismo tiempo.',
        resent: 'El tema elegido recientemente',
        schedule: 'Programación',
    },
    {
        //日本語
        langNo: 4,
        language: 'ja',
        langText: '日本語',
        aboutTopicPot: 'topicpotは、最大100個のトピックを同時に提供するサービスです。',
        resent: '最近選んだトピック',
        schedule: 'スケジュール',
    },
    {
        //ロシア語
        langNo: 5,
        language: 'ru',
        langText: 'русский',
        aboutTopicPot: 'topicpot - это услуга, которая предоставляет до 100 тем одновременно.',
        resent: 'Недавно выбранные слова',
        schedule: 'Расписание',
    },
    {
        //イタリア語
        langNo: 6,
        language: 'it',
        langText: 'italiano',
        aboutTopicPot: 'topicpot è un servizio che fornisce fino a 100 argomenti contemporaneamente.',
        resent: 'Parole scelte di recente',
        schedule: 'Programmazione',
    },
    {
        //中国語
        langNo: 7,
        language: 'zh',
        langText: '中文',
        aboutTopicPot: 'topicpot是一个可以同时提供多达100个话题的服务。',
        resent: '最近选择的词语',
        schedule: '时间表',
    },
    {
        //ポルトガル語
        langNo: 8,
        language: 'pt',
        langText: 'português',
        aboutTopicPot: 'topicpot é um serviço que oferece até 100 tópicos ao mesmo tempo',
        resent: 'Tema recentemente escolhido',
        schedule: 'Horário',
    },
    {
        //ポーランド語
        langNo: 9,
        language: 'pl',
        langText: '	polski',
        aboutTopicPot: 'topicpot to usługa, która oferuje do 100 tematów jednocześnie',
        resent: 'Ostatnio wybrany temat',
        schedule: 'Rozkład jazdy',
    },
    {
        //オランダ語
        langNo: 10,
        language: 'nl',
        langText: 'Nederlands',
        aboutTopicPot: 'topicpot is een dienst die tot 100 thema\'s tegelijk aanbiedt.',
        resent: 'Onlangs gekozen onderwerp',
        schedule: 'Plan',
    },

]

/*
 * 言語変更
 * @about ページに記載されるすべての言語を変更する
 * @param 言語
 */
function languageChange(langType) {
    $('#aboutTopicPot').text(languageResource[langType].aboutTopicPot);
    $('#aboutResent').text(languageResource[langType].resent);
    $('#aboutSchedule').text(languageResource[langType].schedule);
}
