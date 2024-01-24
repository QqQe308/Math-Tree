let modInfo = {
	name: "七年级数学树",
	id: "Math",
	author: "QqQe308",
	pointsName: "题目",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.15",
	name: "分式",
}


// Maths Never Ends.
function isEndgame() {
	return false
}

let changelog = `<h1>更新日志</h1><br>
<h2>v0.15 分式 2024/1/2~2024/1/6<br>
<h3>- 添加第十章——分式
<br>- 添加第九章——整式(进阶模式)
<br>- 添加10.3通分
<br>- 完成至8个成就<br><br>
<h2>v0.1 整式 2023/12/24~2023/12/31<br>
<h3>- 添加第九章——整式
<br>- 添加9.3代数式的值，9.10多项式乘多项式，9.15十字相乘法
<br>- 完成至6个成就`

let winText = `数学之路，仍待开发…`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return false
}

// Calculate points/sec!
function getPointGen() {
		return new Decimal(0)
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
 hypoints:new Decimal(0)//进阶模式题目
}}

// Display extra things at the top of the page
var displayThings = [
  "你在进阶模式中做了"+(player.hypoints)+"题目！",
]




// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

function gbs(num1,num2)
{ var num3=gys(num1,num2)
 return num1*num2/num3
}
function gys(num1,num2) {
if ((num1-num2) < 0) {
var k = num1;
num1 = num2;
num2 = k;
}
while (num2 !=0) {
var remainder = num1%num2;
num1 = num2;
num2 = remainder;
}
return num1;
}//求最大公约数，网上抄的