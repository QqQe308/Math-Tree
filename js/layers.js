addLayer("i", {
  infoboxes: {
 introBox: {
  title: "介绍",
  body(){return "欢迎来到七年级数学树！！！这并不是一个游戏，而是一个实用的程序！这款七年级数学树可以帮助上海学生复习和巩固七年级的数学知识！（当然，还会出更高年级的，不过以后再说吧）"},
        },
introBox2: {
  title: "内容引导",
  body(){return "首先，你需要通过切换标签页，来到“学习”模块，接下来你可以解锁相对应的学习内容，最后，点进对应的“层级”就可以开始学习了！"},
        },
introBox3: {
  title: "学习引导",
  body(){return "点击底下的可点击模块开始学习！在这个程序里，每一章将作为一个“层级”，你可以点击层级，进行对应章的学习！注意：本程序主要作为**计算训练**，所以部分概念、应用、几何题等可能较少出现！"},
        },
},
    name: "info",
    symbol: "ℹ️",
    position: 0,
    startData() { return {
        unlocked() { return true},
		points: new Decimal(0),
    }},
    color: "#ffffff",
    row: 0, 
    layerShown(){ return true},
    branches(){return ['ix']},
    tooltip() { 
        return ("介绍")
    },
    tabFormat: {
   "介绍": {
        content: [ ["infobox","introBox"],
       ["infobox","introBox2"],
],
    },
   "学习": {
        content: [ ["infobox","introBox3"],
       "clickables",
],
    },
    },
    clickables:{
    11: {
      title() {return "第九章——整式"},
      display() {return "点此开始第九章的学习！"},
      onClick() {player.ix.un=new Decimal(1)},
      canClick() {return !player.ix.un.gte(1)},
      style: {'height':'100px','width':'180px'},
    },
    },
})//Info
addLayer("A", {
  infoboxes: {
 introBox: {
  title: "成就",
  body(){return "这里的每个成就都有一些完成方法，这不仅可以记录你的成绩与结果，更能作为刷题的见证哦！"},
        },
},
  name:"Achievements",
  symbol:"🏆",
    startData() { return {
        unlocked: true,
        ach: new Decimal(0),
    }},
    color: "#ffe125",
    resource: "成就", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("成就")
    },
    achievementPopups: true,
    achievements: {
      11: {
            name: "数学 I",
            done() {return player.points.gte(1)}, 
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "做完第一道题！", 
            textStyle: {'color': '#ffffff'},
        },
      12: {
            name: "数学 II",
            done() {return player.points.gte(10)}, 
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "做完10道题！", 
            textStyle: {'color': '#ffffff'},
        },
      13: {
            name: "数学 III",
            done() {return player.points.gte(25)}, 
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "做完25道题！", 
            textStyle: {'color': '#ffffff'},
        },
        
      21: {
            name: "代数过大",
            done() {return player.ix.aax.eq(1)&&player.ix.axxa.eq(player.ix.axx)&&player.ix.axx.gt(100)}, 
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "在“9.3代数式的值”中，正确回答一道代数式的值大于100的题目", 
            textStyle: {'color': '#ffffff'},
        },
      22: {
      name: "常数过大",
      done() {return player.ix.cx.eq(1)&&player.ix.cx1a.mul(player.ix.cx2a).eq(player.ix.c2)&&player.ix.c0.gte(50)}, 
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "在“9.10多项式乘多项式”中，正确回答一道结果中常数项大于50的题目", 
            textStyle: {'color': '#ffffff'},
        },
        23: {
            name: "“十”字相乘",
            done() {return player.ix.bax.eq(1)&&player.ix.b1.add(player.ix.b0).eq(player.ix.bx1.add(player.ix.bx0))&&player.ix.b1.mul(player.ix.b0).eq(player.ix.bx1.mul(player.ix.bx0))&&(player.ix.bx1.eq(10)||player.ix.bx0.eq(10))}, 
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "在“9.15十字相乘”中，正确回答一道含有因式(x+10)的题目", 
            textStyle: {'color': '#ffffff'},
        },
    },
    tabFormat: {
   "成就": {
        content: [ ["infobox","introBox"],
    ["display-text",
      function() {return '你有 ' + player.A.ach + ' 成就!'},
     {"color": "#ffe125", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
    ["display-text",
      function() {return '普通成就:'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     ['row',[['achievement',11],['achievement',12],['achievement',13]]],
         ["display-text",
      function() {return '特殊成就:'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     ['row',[['achievement',21],['achievement',22],['achievement',23]]],
],
  unlocked(){return true}
},
},
})//Achievements

addLayer("ix", {
  infoboxes: {
 introBox: {
  title: "第九章",
  body(){return "我们在小学阶段学习了数的运算，本章首先学习了“字母表示数”，从而奠定了本章教学内容的基础、接着又学习了整式的加减乘除运算以及多项式的因式分解，因为其算式中含有字母、所以这是关于用字母表示的数的运算及变形。<br>“字母表示数”是一种重要的基本数学思想，有了它，就可以用字母简捷地表示有关运算法则及运算律，简明地表述许多数学定理、公式等，有了它，就可以用字母巧妙地表示已知或未知数量，建立代数式，建立方程等，有了它，就有了以字母及数学符号为要素构成的符号语言。而这种语言形态丰富了数学的表述力，同时还便于更灵活地进行数学交流、更有效地形成数学理解。<br><br>在这里，你需要切换标签页，选择学习内容！"},
        },
a3Box: {
  title: "9.3代数式的值",
  body(){return "用数值代替代数式里的字母，按照代数式中的运算关系计算得出的结果叫做代数式的值。例如，100是代数式n²在n=10时的值。<br><br>在这里，每次点击“下一题”将会随机出现一个代数式和x的值，请求出代数式的值并且提交答案！"},
        },
a15Box: {
  title: "9.15因式分解——十字相乘法",
  body(){return "由多项式与多项式相乘的法则，可知(x+a)(x+b)=x²+(a+b)x+ab.反过来可得，x²+(a+b)x+ab=(x+a)(x+b).那么，如果二次三项式x²+px+q中的常数项q能分解成两个因数a,b的积，而且一次项系数p又恰好是a+b,那么x²+px+q就可以进行如下的因式分解，即x²+px+q=x²+(a+b)x+ab=(x+a)(x+b).<br><br>在这里，你需要在底下的输入框内输入分解后的结果。输入格式：例，x²-2x-8=(x+2)(x-4)，那么只需要在第一个输入框内输入2，第二个输入框输入-4即可（顺序不重要）"},
        },
},
    name: "整式",
    symbol: "9",
    position: 0,
    startData() { return {
        unlocked() {return player.ix.un.gte(1)},
        un:new Decimal(0),
		points: new Decimal(0),
		//9.3代数式的值
		ax2:new Decimal(0),//x二次项系数
		ax1:new Decimal(0),//x一次项系数
		axa:"+",//x一次项符号
		ax0:new Decimal(0),//常数项
		aa:"+",//常数项符号
		ax:new Decimal(0),//x的值
		axx:new Decimal(0),//结果
		axxa:new Decimal(0),//作答结果
		aax:new Decimal(0),//是否作答
		//9.12多项式乘多项式
		cx1a:new Decimal(0),//(ax1+b)
		cx1b:new Decimal(0),//(ax1+b)
		cx2a:new Decimal(0),//(ax2+b)
		cx2b:new Decimal(0),//(ax2+b)
		cxa:"+",//b1符号
	 cxb:"+",//b2符号
		c2:new Decimal(0),//作答x²
		c1:new Decimal(0),//作答x
	 c0:new Decimal(0),//作答常数
	 cx2:new Decimal(0),//正确x²
		cx1:new Decimal(0),//正确x
	 cx0:new Decimal(0),//正确常数
	 cx:new Decimal(0),//是否作答
		//9.15十字相乘法
		bx1:new Decimal(2),//(x+a)
		bxb:"+",//a符号
		bx0:new Decimal(1),//(x+b)
	 bxa:"+",//b符号
	 bax:new Decimal(0),//是否作答
	 b1:new Decimal(0),//作答x-a
	 b0:new Decimal(0),//作答x-b
    }},
    color: "#f99999",
    row: 1, 
    layerShown(){ return player.ix.un.gte(1)},
    tooltip() { 
        return ("第九章——整式")
    },
    tabFormat: {
   "介绍": {
        content: [ ["infobox","introBox"],
        ["infobox","a3Box"],
        ["infobox","a10Box"],
          ["infobox","a15Box"],
],
    },
   "代数式的值": {
        content: [ ["infobox","a3Box"],
     ["display-text",
      function() {return "当x="+player.ix.ax+"时，求出这个代数式的值！<br>" + player.ix.ax2 + "x²"+player.ix.axa+player.ix.ax1.abs()+"x"+player.ix.aa+player.ix.ax0.abs()},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
       ["display-text","在这个输入框内输入答案！"],
     ["text-input", "axxa"],
     "blank",
     ["display-text",
      function() {if(player.ix.aax.eq(1)) return "你的答案："+player.ix.axxa+"<br>正确答案："+player.ix.axx},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(player.ix.axxa.eq(player.ix.axx)&&player.ix.aax.eq(1)) return "恭喜，回答正确！"},
     {"color": "green", "font-size": "20px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(player.ix.axxa.neq(player.ix.axx)&&player.ix.aax.eq(1)) return "回答错误，加油！"},
     {"color": "red", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
     ['column',[['clickable',11],['clickable',12]]],
],
    },
    "多项式乘多项式": {
        content: [ ["infobox","a10Box"],
     ["display-text",
      function() {return "计算以下式子！<br>(" +player.ix.cx1a+"x"+player.ix.cxa+player.ix.cx1b.abs()+")("+player.ix.cx2a+"x"+player.ix.cxb+player.ix.cx2b.abs()+")"},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
       ["display-text","在这个输入框内输入二次项结果！"],
     ["text-input", "c2"],
      ["display-text","在这个输入框内输入一次项结果！"],
     ["text-input", "c1"],
     ["display-text","在这个输入框内输入常数项结果！"],
     ["text-input", "c0"],
     "blank",
     ["display-text",
      function() {if(player.ix.cx.eq(1)) return "你的答案："+player.ix.c2+"x²,"+player.ix.c1+"x,"+player.ix.c0+"<br>正确答案："+player.ix.cx2+"x²,"+player.ix.cx1+"x,"+player.ix.cx0},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(player.ix.cx.eq(1)&&player.ix.c2.add(player.ix.c1).add(player.ix.c0).eq(player.ix.cx2.add(player.ix.cx1).add(player.ix.cx0))) return "恭喜，回答正确！"},
     {"color": "green", "font-size": "20px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(player.ix.cx.eq(1)&&!player.ix.c2.add(player.ix.c1).add(player.ix.c0).eq(player.ix.cx2.add(player.ix.cx1).add(player.ix.cx0))) return "回答错误，加油！"},
     {"color": "red", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
     ['column',[['clickable',21],['clickable',22]]],
],
    },
   "十字相乘法": {
        content: [ ["infobox","a15Box"],
     ["display-text",
      function() {return "因式分解以下式子！<br>" + "x²"+player.ix.bxb+player.ix.bx1.add(player.ix.bx0).abs()+"x"+player.ix.bxa+player.ix.bx1.mul(player.ix.bx0).abs()},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
       ["display-text","在这个输入框内输入第一个因式！"],
     ["text-input", "b1"],
      ["display-text","在这个输入框内输入第二个因式！"],
     ["text-input", "b0"],
     "blank",
     ["display-text",
      function() {if(player.ix.bax.eq(1)) return "你的答案："+player.ix.b1+","+player.ix.b0+"<br>正确答案："+player.ix.bx1+","+player.ix.bx0},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(player.ix.bax.eq(1)&&player.ix.b1.add(player.ix.b0).eq(player.ix.bx1.add(player.ix.bx0))&&player.ix.b1.mul(player.ix.b0).eq(player.ix.bx1.mul(player.ix.bx0))) return "恭喜，回答正确！"},
     {"color": "green", "font-size": "20px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(player.ix.bax.eq(1)&&(!player.ix.b1.add(player.ix.b0).eq(player.ix.bx1.add(player.ix.bx0))||!player.ix.b1.mul(player.ix.b0).eq(player.ix.bx1.mul(player.ix.bx0)))) return "回答错误，加油！"},
     {"color": "red", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
     ['column',[['clickable',31],['clickable',32]]],
],
    },
    },
    clickables:{
     11: {
      title() {return "提交答案！"},
      display() {return "在上面的输入框内输入答案，接下来点此来检查！"},
      onClick() {
       player.ix.aax=new Decimal(1)
       if(player.ix.axxa.eq(player.ix.axx)) player.points=player.points.add(1)
      },
     canClick() {return player.ix.aax.lte(0)},
      style: {'height':'100px','width':'180px'},
    },
    12: {
      title() {return "下一题！"},
      display() {return "9.3代数式的值"},
      onClick() {
       player.ix.ax2=new Decimal(Math.random()).sub(0.5).mul(10).ceil()
       player.ix.ax1=new Decimal(Math.random()).sub(0.5).mul(10).ceil()
       if(player.ix.ax1.gte(0)) player.ix.axa="+"
       if(!player.ix.ax1.gte(0)) player.ix.axa="-"
       player.ix.ax0=new Decimal(Math.random()).sub(0.5).mul(10).ceil()
       if(player.ix.ax0.gte(0)) player.ix.aa="+"
       if(!player.ix.ax0.gte(0)) player.ix.aa="-"
       player.ix.ax=new Decimal(Math.random()).sub(0.5).mul(10).ceil()
       player.ix.aax=new Decimal(0)
       player.ix.axx=player.ix.ax2.mul(player.ix.ax.pow(2)).add(player.ix.ax1.mul(player.ix.ax)).add(player.ix.ax0).round()
      },
     canClick() {return true},
      style: {'height':'100px','width':'180px'},
    },
    21: {
      title() {return "提交答案！"},
      display() {return "输入答案，接下来点此来检查！"},
      onClick() {
       player.ix.cx=new Decimal(1)
      if(player.ix.c2.add(player.ix.c1).add(player.ix.c0).eq(player.ix.cx2.add(player.ix.cx1).add(player.ix.cx0)))  player.points=player.points.add(1)
      },
     canClick() {return player.ix.cx.lte(0)},
      style: {'height':'100px','width':'180px'},
    },
    22: {
      title() {return "下一题！"},
      display() {return "9.10多项式乘多项式"},
      onClick() {
       player.ix.cx1a=new Decimal(Math.random()).sub(0.5).mul(10).ceil()
       player.ix.cx1b=new Decimal(Math.random()).sub(0.5).mul(20).ceil()
       player.ix.cx2a=new Decimal(Math.random()).sub(0.5).mul(10).ceil()
       player.ix.cx2b=new Decimal(Math.random()).sub(0.5).mul(20).ceil()
       if(player.ix.cx1b.gte(0)) player.ix.cxa="+"
       if(!player.ix.cx1b.gte(0)) player.ix.cxa="-"
       if(player.ix.cx2b.gte(0)) player.ix.cxb="+"
       if(!player.ix.cx2b.gte(0)) player.ix.cxb="-"
       player.ix.cx2=player.ix.cx1a.mul(player.ix.cx2a).round()
       player.ix.cx1=player.ix.cx1a.mul(player.ix.cx2b).add(player.ix.cx2a.mul(player.ix.cx1b)).round()
       player.ix.cx0=player.ix.cx1b.mul(player.ix.cx2b).round()
       player.ix.cx=new Decimal(0)
      },
     canClick() {return true},
      style: {'height':'100px','width':'180px'},
    },
    31: {
      title() {return "提交答案！"},
      display() {return "输入答案，接下来点此来检查！"},
      onClick() {
       player.ix.bax=new Decimal(1)
      if(player.ix.b1.add(player.ix.b0).eq(player.ix.bx1.add(player.ix.bx0))&&player.ix.b1.mul(player.ix.b0).eq(player.ix.bx1.mul(player.ix.bx0)))  player.points=player.points.add(1)
      },
     canClick() {return player.ix.bax.lte(0)},
      style: {'height':'100px','width':'180px'},
    },
    32: {
      title() {return "下一题！"},
      display() {return "9.15十字相乘法（极小概率情况出现无法分解，请点此重置）"},
      onClick() {
       player.ix.bx1=new Decimal(Math.random()).sub(0.5).mul(20).ceil()
       player.ix.bx0=new Decimal(Math.random()).sub(0.5).mul(20).ceil()
       if(player.ix.bx1.add(player.ix.bx0).gte(0)) player.ix.bxb="+"
       if(!player.ix.bx1.add(player.ix.bx0).gte(0)) player.ix.bxb="-"
       if(player.ix.bx1.mul(player.ix.bx0).gte(0)) player.ix.bxa="+"
       if(!player.ix.bx1.mul(player.ix.bx0).gte(0)) player.ix.bxa="-"
       player.ix.bax=new Decimal(0)
      },
     canClick() {return true},
      style: {'height':'100px','width':'180px'},
    },
    },
})//9
