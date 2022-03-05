$(function(){ //jQuery開始

	// console.log("Hello JavaScript from JS file");

	// var value = 1;
	// console.log(value);

	// value = 5;
	// console.log(value);

	// var result = 1 + 1;
	// console.log(result);
	// result = "1" + "1";
	// console.log(result);

	// console.log(1+2);
	// console.log(3-1);
	// console.log(2*3);
	// console.log(3/2);
	// console.log(3%2);

	// var count = 0;
	// count = 1;
	// console.log(count);
	// count += 1;
	// console.log(count);
	// count -= 1;
	// console.log(count);
	// count *= 6;
	// console.log(count);
	// count /= 2;
	// console.log(count);
	// count %= 2;
	// console.log(count);

	// console.log("---インクリメント・ディクリメント---")
	// count = 1;
	// console.log(++count); //2
	// console.log(count++); //2
	// console.log(--count); //2
	// console.log(count--); //2
	// console.log(count); //1


	// console.log("---文字列の分割---")
	// var moji = "沖縄,北海道,東京,香川,福岡,熊本";
	// moji = moji.split(",");
	// console.log(moji)

	// console.log("-----配列-----");

	// var regions = ["KOZA", "EBETSU", "TAKAMATSU"];
	// console.log(regions);
	// console.log(regions[1]);


	// console.log("-----連想配列-----");
	// // { キー: バリュー}
	// // {key: value}

	// var regions = {
	// 	koza: "沖縄県",
	// 	takamatsu: "香川県",
	// 	ebetsu: "北海道",
	// }
	// console.log(regions);
	// console.log(regions['koza']);

	// console.log("---真偽値---")
	// console.log(1 == "1");
	// console.log(1 === "1"); //型も合わせて確認
	// console.log(1 != 2); //true
	// console.log(!true); //false

	// console.log("---真偽値---")

	// console.log("1 > 1", 1 > 1); //左辺は右辺より大きい
	// console.log(1 >= 1); //左辺は右辺より大きいか等しい
	// console.log(1 < 1); //左辺は右辺より小さい
	// console.log(1 <= 1); //左辺は右辺より小さいか等しい

	// console.log("---条件文---")
	// //licence_flag
	// var licence_flag = 0;
	// var time_at = 23;
	// if (licence_flag === 1 ) {
	// 	 console.log("車を運転する")
	// }else if (time_at < 24) {
	// 	console.log("バスに乗る")
	// }else {
	// 	console.log("タクシーに乗る")
	// }

	// console.log("---条件問題---")

	// var limit = 10;
	// var getup =8;

	// if(limit < getup) {
	// 	console.log("遅刻です");
	// }else if (limit === getup) {
	// 	console.log("ぎりぎりセーフ！");
	// }else {
	// 	console.log("よくがんばりました");
	// }

	// console.log("---繰り返し文---")

	// // for (初期値; 条件式; 増減式){
	// // 	処理
	// // }

	// var data = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
	// for (var i=0; i<10; i++) {
	// 	console.log(i, data[i]);
	// 	// console.log(data[i]);
	// }

	// for (var i=0; i<5; i++) {
	// 	window.alert("!!!!!!")
	// }

	// console.log("---関数---")
	// function 関数名() {
	// 	処理内容
	// }

	// function greet () {
	// 	console.log("こんにちは")
	// }
	// greet();

	//引数
	// function greet (name, status) {
	// 	message = {
	// 		"朝": "おはようございます",
	// 		"昼": "こんにちは",
	// 		"夜": "こんばんは"
	// 	}
	// 	console.log(name + "さん、"+message[status])
	// }
	// greet("いとむら", "朝")
	// greet("いぐお", "昼")
	// greet("すずか", "夜")


	// 戻り値
	// function greet1() {
	//     console.log("こんにちは");
	// }
	// function greet2() {
	//     console.log("こんにちは");
	//     return "こんにちは";
	// }
	// // 戻り値無し
	// var result1;
	// result1 = greet1();
	// // 戻り値有り
	// var result2;
	// result2 = greet2();

	// console.log("greet1()戻り値無し", result1);
	// console.log("greet2()戻り値有り", result2);

	// DOM
	// var h1_node = document.getElementById("h1_node");
	// console.log(h1_node);
	// h1_node.textContent = "ノードを更新";

	// var btn_node = document.getElementById("btn");
	// btn_node.addEventListener("click", changeText);

	// function changeText () {
	// 	h1_node.textContent = "---押したな!!!---";
	// }

	//ここからjQueryの講義

	// $("#h1_node").text("jQueryで変更");
//$("どこの")。何を("どうする");
//どこの === CSS セレクタ
// header ul li
// section h1
// #h1_node
// .container h1

//イベント
// $("#btnJquery").on("click", function(){
// 	$("#h1_node").text("jQueryで文字変");
// });


//drawer
  $('.drawer').drawer();

}); //jQuery終了