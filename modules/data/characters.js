import { CHARACTER_SET, Character } from "../models/character";

//All of the characters required for the application
//Will be used to populate the local storage when the data is loaded for the first time
const characters = [

    // HIRAGANA //

    // a, i, u, e, o
    new Character('あ','a',CHARACTER_SET.HIRAGANA),
    new Character('い','i',CHARACTER_SET.HIRAGANA),
    new Character('う','u',CHARACTER_SET.HIRAGANA),
    new Character('え','e',CHARACTER_SET.HIRAGANA),
    new Character('お','o',CHARACTER_SET.HIRAGANA),
    // K
    new Character('か','ka',CHARACTER_SET.HIRAGANA),
    new Character('き','ki',CHARACTER_SET.HIRAGANA),
    new Character('く','ku',CHARACTER_SET.HIRAGANA),
    new Character('け','ke',CHARACTER_SET.HIRAGANA),
    new Character('こ','ko',CHARACTER_SET.HIRAGANA),
    // G
    new Character('が','ga',CHARACTER_SET.HIRAGANA),
    new Character('ぎ','gi',CHARACTER_SET.HIRAGANA),
    new Character('ぐ','gu',CHARACTER_SET.HIRAGANA),
    new Character('げ','ge',CHARACTER_SET.HIRAGANA),
    new Character('ご','go',CHARACTER_SET.HIRAGANA),
    // S
    new Character('さ','sa',CHARACTER_SET.HIRAGANA),
    new Character('し','shi',CHARACTER_SET.HIRAGANA),
    new Character('す','su',CHARACTER_SET.HIRAGANA),
    new Character('せ','se',CHARACTER_SET.HIRAGANA),
    new Character('そ','so',CHARACTER_SET.HIRAGANA),
    // Z
    new Character('ざ','za',CHARACTER_SET.HIRAGANA),
    new Character('じ','ji',CHARACTER_SET.HIRAGANA),
    new Character('ず','zu',CHARACTER_SET.HIRAGANA),
    new Character('ぜ','ze',CHARACTER_SET.HIRAGANA),
    new Character('ぞ','zo',CHARACTER_SET.HIRAGANA),
    // T
    new Character('た','ta',CHARACTER_SET.HIRAGANA),
    new Character('ち','chi',CHARACTER_SET.HIRAGANA),
    new Character('つ','tsu',CHARACTER_SET.HIRAGANA),
    new Character('て','te',CHARACTER_SET.HIRAGANA),
    new Character('と','to',CHARACTER_SET.HIRAGANA),
    // D
    new Character('だ','da',CHARACTER_SET.HIRAGANA),
    new Character('ぢ','dji',CHARACTER_SET.HIRAGANA),
    new Character('づ','dzu',CHARACTER_SET.HIRAGANA),
    new Character('で','de',CHARACTER_SET.HIRAGANA),
    new Character('ど','do',CHARACTER_SET.HIRAGANA),
    // N
    new Character('な','na',CHARACTER_SET.HIRAGANA),
    new Character('に','ni',CHARACTER_SET.HIRAGANA),
    new Character('ぬ','nu',CHARACTER_SET.HIRAGANA),
    new Character('ね','ne',CHARACTER_SET.HIRAGANA),
    new Character('の','no',CHARACTER_SET.HIRAGANA),
    // H
    new Character('は','ha',CHARACTER_SET.HIRAGANA),
    new Character('ひ','hi',CHARACTER_SET.HIRAGANA),
    new Character('ふ','fu',CHARACTER_SET.HIRAGANA),
    new Character('へ','he',CHARACTER_SET.HIRAGANA),
    new Character('ほ','ho',CHARACTER_SET.HIRAGANA),
    // B
    new Character('ば','ba',CHARACTER_SET.HIRAGANA),
    new Character('び','bi',CHARACTER_SET.HIRAGANA),
    new Character('ぶ','bu',CHARACTER_SET.HIRAGANA),
    new Character('べ','be',CHARACTER_SET.HIRAGANA),
    new Character('ぼ','bo',CHARACTER_SET.HIRAGANA),
    // P
    new Character('ぱ','pa',CHARACTER_SET.HIRAGANA),
    new Character('ぴ','pi',CHARACTER_SET.HIRAGANA),
    new Character('ぷ','pu',CHARACTER_SET.HIRAGANA),
    new Character('ぺ','pe',CHARACTER_SET.HIRAGANA),
    new Character('ぽ','po',CHARACTER_SET.HIRAGANA),
    // M
    new Character('ま','ma',CHARACTER_SET.HIRAGANA),
    new Character('み','mi',CHARACTER_SET.HIRAGANA),
    new Character('む','mu',CHARACTER_SET.HIRAGANA),
    new Character('め','me',CHARACTER_SET.HIRAGANA),
    new Character('も','mo',CHARACTER_SET.HIRAGANA),
    // Y
    new Character('や','ya',CHARACTER_SET.HIRAGANA),
    new Character('ゆ','yu',CHARACTER_SET.HIRAGANA),
    new Character('よ','yo',CHARACTER_SET.HIRAGANA),
    // R
    new Character('ら','ra',CHARACTER_SET.HIRAGANA),
    new Character('り','ri',CHARACTER_SET.HIRAGANA),
    new Character('る','ru',CHARACTER_SET.HIRAGANA),
    new Character('れ','re',CHARACTER_SET.HIRAGANA),
    new Character('ろ','ro',CHARACTER_SET.HIRAGANA),
    // W
    new Character('わ','wa',CHARACTER_SET.HIRAGANA),
    new Character('を','wo',CHARACTER_SET.HIRAGANA),
    // N
    new Character('ん','n',CHARACTER_SET.HIRAGANA),
    //K
    new Character('きゃ','kya',CHARACTER_SET.HIRAGANA),
    new Character('きゅ','kyu',CHARACTER_SET.HIRAGANA),
    new Character('きょ','kyo',CHARACTER_SET.HIRAGANA),
    //S
    new Character('しゃ','sha',CHARACTER_SET.HIRAGANA),
    new Character('しゅ','shu',CHARACTER_SET.HIRAGANA),
    new Character('しょ','sho',CHARACTER_SET.HIRAGANA),
    //C
    new Character('ちゃ','cha',CHARACTER_SET.HIRAGANA),
    new Character('ちゅ','chu',CHARACTER_SET.HIRAGANA),
    new Character('ちょ','cho',CHARACTER_SET.HIRAGANA),
    //N
    new Character('にゃ','nya',CHARACTER_SET.HIRAGANA),
    new Character('にゅ','nyu',CHARACTER_SET.HIRAGANA),
    new Character('にょ','nyo',CHARACTER_SET.HIRAGANA),
    //H
    new Character('ひゃ','hya',CHARACTER_SET.HIRAGANA),
    new Character('ひゅ','hyu',CHARACTER_SET.HIRAGANA),
    new Character('ひょ','hyo',CHARACTER_SET.HIRAGANA),
    //M
    new Character('みゃ','mya',CHARACTER_SET.HIRAGANA),
    new Character('みゅ','myu',CHARACTER_SET.HIRAGANA),
    new Character('みょ','myo',CHARACTER_SET.HIRAGANA),
    //R
    new Character('りゃ','rya',CHARACTER_SET.HIRAGANA),
    new Character('りゅ','ryu',CHARACTER_SET.HIRAGANA),
    new Character('りょ','ryo',CHARACTER_SET.HIRAGANA),
    //G
    new Character('ぎゃ','gya',CHARACTER_SET.HIRAGANA),
    new Character('ぎゅ','gyう',CHARACTER_SET.HIRAGANA),
    new Character('ぎょ','gyo',CHARACTER_SET.HIRAGANA),
    //J
    new Character('じゃ','ja',CHARACTER_SET.HIRAGANA),
    new Character('じゅ','ju',CHARACTER_SET.HIRAGANA),
    new Character('じょ','jo',CHARACTER_SET.HIRAGANA),
    //B
    new Character('びゃ','bya',CHARACTER_SET.HIRAGANA),
    new Character('びゅ','byu',CHARACTER_SET.HIRAGANA),
    new Character('びょ','byo',CHARACTER_SET.HIRAGANA),
    //P
    new Character('ぴゃ','pya',CHARACTER_SET.HIRAGANA),
    new Character('ぴゅ','pyu',CHARACTER_SET.HIRAGANA),
    new Character('ぴょ','pyo',CHARACTER_SET.HIRAGANA),

    // KATAKANA //

    // a, i, u, e, o
    new Character('ア','a',CHARACTER_SET.KATAKANA),
    new Character('イ','i',CHARACTER_SET.KATAKANA),
    new Character('ウ','u',CHARACTER_SET.KATAKANA),
    new Character('エ','e',CHARACTER_SET.KATAKANA),
    new Character('オ','o',CHARACTER_SET.KATAKANA),
    // K
    new Character('カ','ka',CHARACTER_SET.KATAKANA),
    new Character('キ','ki',CHARACTER_SET.KATAKANA),
    new Character('ク','ku',CHARACTER_SET.KATAKANA),
    new Character('ケ','ke',CHARACTER_SET.KATAKANA),
    new Character('コ','ko',CHARACTER_SET.KATAKANA),
    // G
    new Character('ガ','ga',CHARACTER_SET.KATAKANA),
    new Character('ギ','gi',CHARACTER_SET.KATAKANA),
    new Character('グ','gu',CHARACTER_SET.KATAKANA),
    new Character('ゲ','ge',CHARACTER_SET.KATAKANA),
    new Character('ゴ','go',CHARACTER_SET.KATAKANA),
    // S
    new Character('サ','sa',CHARACTER_SET.KATAKANA),
    new Character('シ','shi',CHARACTER_SET.KATAKANA),
    new Character('ス','su',CHARACTER_SET.KATAKANA),
    new Character('セ','se',CHARACTER_SET.KATAKANA),
    new Character('ソ','so',CHARACTER_SET.KATAKANA),
    // Z
    new Character('ザ','za',CHARACTER_SET.KATAKANA),
    new Character('ジ','ji',CHARACTER_SET.KATAKANA),
    new Character('ズ','zu',CHARACTER_SET.KATAKANA),
    new Character('ゼ','ze',CHARACTER_SET.KATAKANA),
    new Character('ゾ','zo',CHARACTER_SET.KATAKANA),
    // T
    new Character('タ','ta',CHARACTER_SET.KATAKANA),
    new Character('チ','chi',CHARACTER_SET.KATAKANA),
    new Character('ツ','tsu',CHARACTER_SET.KATAKANA),
    new Character('テ','te',CHARACTER_SET.KATAKANA),
    new Character('ト','to',CHARACTER_SET.KATAKANA),
    // D
    new Character('ダ','da',CHARACTER_SET.KATAKANA),
    new Character('ヂ','dji',CHARACTER_SET.KATAKANA),
    new Character('ヅ','dzu',CHARACTER_SET.KATAKANA),
    new Character('デ','de',CHARACTER_SET.KATAKANA),
    new Character('ド','do',CHARACTER_SET.KATAKANA),
    // N
    new Character('ナ','na',CHARACTER_SET.KATAKANA),
    new Character('ニ','ni',CHARACTER_SET.KATAKANA),
    new Character('ヌ','nu',CHARACTER_SET.KATAKANA),
    new Character('ネ','ne',CHARACTER_SET.KATAKANA),
    new Character('ノ','no',CHARACTER_SET.KATAKANA),
    // H
    new Character('ハ','ha',CHARACTER_SET.KATAKANA),
    new Character('ヒ','hi',CHARACTER_SET.KATAKANA),
    new Character('フ','fu',CHARACTER_SET.KATAKANA),
    new Character('ヘ','he',CHARACTER_SET.KATAKANA),
    new Character('ホ','ho',CHARACTER_SET.KATAKANA),
    // B
    new Character('バ','ba',CHARACTER_SET.KATAKANA),
    new Character('ビ','bi',CHARACTER_SET.KATAKANA),
    new Character('ブ','bu',CHARACTER_SET.KATAKANA),
    new Character('ベ','be',CHARACTER_SET.KATAKANA),
    new Character('ボ','bo',CHARACTER_SET.KATAKANA),
    // P
    new Character('パ','pa',CHARACTER_SET.KATAKANA),
    new Character('ピ','pi',CHARACTER_SET.KATAKANA),
    new Character('プ','pu',CHARACTER_SET.KATAKANA),
    new Character('ペ','pe',CHARACTER_SET.KATAKANA),
    new Character('ポ','po',CHARACTER_SET.KATAKANA),
    // M
    new Character('マ','ma',CHARACTER_SET.KATAKANA),
    new Character('ミ','mi',CHARACTER_SET.KATAKANA),
    new Character('ム','mu',CHARACTER_SET.KATAKANA),
    new Character('メ','me',CHARACTER_SET.KATAKANA),
    new Character('モ','mo',CHARACTER_SET.KATAKANA),
    // Y
    new Character('ヤ','ya',CHARACTER_SET.KATAKANA),
    new Character('ユ','yu',CHARACTER_SET.KATAKANA),
    new Character('ヨ','yo',CHARACTER_SET.KATAKANA),
    // R
    new Character('ラ','ra',CHARACTER_SET.KATAKANA),
    new Character('リ','ri',CHARACTER_SET.KATAKANA),
    new Character('ル','ru',CHARACTER_SET.KATAKANA),
    new Character('レ','re',CHARACTER_SET.KATAKANA),
    new Character('ロ','ro',CHARACTER_SET.KATAKANA),
    // W
    new Character('ワ','wa',CHARACTER_SET.KATAKANA),
    new Character('ヲ','wo',CHARACTER_SET.KATAKANA),
    // N
    new Character('ン','n',CHARACTER_SET.KATAKANA),
    //K
    new Character('キャ','kya',CHARACTER_SET.KATAKANA),
    new Character('キュ','kyu',CHARACTER_SET.KATAKANA),
    new Character('キョ','kyo',CHARACTER_SET.KATAKANA),
    //S
    new Character('シャ','sha',CHARACTER_SET.KATAKANA),
    new Character('シュ','shu',CHARACTER_SET.KATAKANA),
    new Character('ショ','sho',CHARACTER_SET.KATAKANA),
    //C
    new Character('チャ','cha',CHARACTER_SET.KATAKANA),
    new Character('チュ','chu',CHARACTER_SET.KATAKANA),
    new Character('チョ','cho',CHARACTER_SET.KATAKANA),
    //N
    new Character('ニャ','nya',CHARACTER_SET.KATAKANA),
    new Character('ニュ','nyu',CHARACTER_SET.KATAKANA),
    new Character('ニョ','nyo',CHARACTER_SET.KATAKANA),
    //H
    new Character('ヒャ','hya',CHARACTER_SET.KATAKANA),
    new Character('ヒュ','hyu',CHARACTER_SET.KATAKANA),
    new Character('ヒョ','hyo',CHARACTER_SET.KATAKANA),
    //M
    new Character('ミャ','mya',CHARACTER_SET.KATAKANA),
    new Character('ミュ','myu',CHARACTER_SET.KATAKANA),
    new Character('ミョ','myo',CHARACTER_SET.KATAKANA),
    //R
    new Character('リャ','rya',CHARACTER_SET.KATAKANA),
    new Character('リュ','ryu',CHARACTER_SET.KATAKANA),
    new Character('リョ','ryo',CHARACTER_SET.KATAKANA),
    //G
    new Character('ギャ','gya',CHARACTER_SET.KATAKANA),
    new Character('ギュ','gyう',CHARACTER_SET.KATAKANA),
    new Character('ギョ','gyo',CHARACTER_SET.KATAKANA),
    //J
    new Character('ジャ','ja',CHARACTER_SET.KATAKANA),
    new Character('ジュ','ju',CHARACTER_SET.KATAKANA),
    new Character('ジョ','jo',CHARACTER_SET.KATAKANA),
    //B
    new Character('ビャ','bya',CHARACTER_SET.KATAKANA),
    new Character('ビュ','byu',CHARACTER_SET.KATAKANA),
    new Character('ビョ','byo',CHARACTER_SET.KATAKANA),
    //P
    new Character('ピャ','pya',CHARACTER_SET.KATAKANA),
    new Character('ピュ','pyu',CHARACTER_SET.KATAKANA),
    new Character('ピョ','pyo',CHARACTER_SET.KATAKANA)
];

export {characters};