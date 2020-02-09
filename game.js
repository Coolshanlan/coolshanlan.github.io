
//魚的圖層
//增加魚叉碰撞點
//緩衝
//沒抓到魚漁船開很久
//於上漁船位置
//------------game---------------------------------
//var fs = require('fs');
//console.log();
var music_text;
var soundcontrol = {'BGM':null,'CATCH':null,'key3':null}; 
var muted = false;
var BGmsound;
var reach;
var reach_conrainer;
var loading_text;
var reach_close=true;
var rule_close=true;
var game_id="";
var rank_user_list;
var rank_background;
var rank_container;
var user;
var rank_name_text ;
var rank_score_text ;
var question_data;
var dolphin_container;
var dolphin_list;
var leave_container;
var question_end_container;
var now = 0;
var correct_fish;
var sound_shape;
var game_time_image;
var sound;
var stop = false;
var question_time_count = 0;
var soundbutton;
var labbybutton_container;
var leavebutton_source = new Array();
var question_container;
var back_container;
var question_num = [0, 0, 0];
var generate_bird;
var rule_container;
var option = new Array();
var question_index_list = new Array();
var question;
var question_time_stop = true;
var question_text;
var generate_fish;
var generate_bubble;
var stage;
var questionboard;
var background;
var board_index;
var sea;
var question_time_text;
var question_time;
var question_timer;
var bucket;
var user_score;
var now_score;
var score_update_timer;
var score_board;
var game_time = 45;
var catch_animal_container;
var harpoon_text;
var question_list = new Array();
var catch_animal_text;
var score_catch_animal_container;
var score_catch_animal_text;
var catch_animal_num = [0, 0, 0, 0, 0];
var score_catch_animal_num = [0, 0, 0, 0, 0];
var player_control = false;
var start_time_text;
var countdown_time;
var countdown_text;
var countdown_timer;
var fisherman;
var t_boatmove_left;
var t_boatmove_right;
var b_left = false;
var b_right = false;
var fisherman_harpoon;
var times = 0;
var catch_fish = new Array();
var font_family = "微軟正黑體";
var harpoon_list = new Array();
var animal_list = new Array();
var bubble_list = new Array();
var loader;
var background_source = {};
var animalsource = new Array();
var canvas_width = 800;
var canvas_height = 500;
var canvas_seaheight = 150;
var gamestart = false;
var fishman_walk;
var generate_fish_ad;
var fish_ad;
var score_board_text;
var game_score_text;
createjs.Bitmap.prototype.getwidth = function () {
  return this.image.width * this.scaleX;
}
createjs.Bitmap.prototype.getheight = function () {
  return this.image.height * this.scaleY;
}
function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });

}

//Labby



//------------game---------------------------------
class Score_Text extends createjs.Text {
  constructor(context, font, color, x, y) {
    super(context, font, color);
    this.regX = this.getMeasuredWidth() / 2;
    this.regY = this.getMeasuredHeight() / 2;
    this.x = x;
    this.y = y;
    this.alpha = 1;
    stage.addChild(this);
    createjs.Tween.get(this).to({ y: y - 40, alpha: 0 }, 550).call(() => {
      stage.removeChild(this)
    });
  }
}
class Question {
  constructor(t,q, o,a) {
    this.question = q;
    this.answer = a;
    this.option = o;
    this.type = t;
  }
}
class Button_Text_Orginal extends createjs.Container {
  constructor(t, f, c, x, y) {
    super();
    this.x = x;
    this.y = y;
    this.text = new createjs.Text(t, f, c);
    this.havermask = new createjs.Shape();
    this.havermask.graphics.beginFill("#34AEC7").drawRect(50, 0, 80, 30);
    this.havermask.alpha = 0.01;
    var w = this.text.getMeasuredWidth();
    this.underline = new createjs.Shape();
    this.haver = new createjs.Bitmap(loader.getResult("haver"));
    this.haver.x = -5;
    this.haver.y = -2;
    this.haver.scale = 0.48;
    this.text.x = 50;
    this.text.y = 0;

    this.underline.graphics.s("#000000").mt(this.text.x, this.text.y + 25).lt(this.text.x + w, this.text.y + 25);
    this.havermask.addEventListener("mouseover", function (event) {
      event.target.parent.havermask.cursor = "pointer";
      event.target.parent.haver.visible = true;
      event.target.parent.underline.visible = true;
    });
    this.havermask.addEventListener("mouseout", function (event) {
      event.target.parent.havermask.cursor = "defult";
      event.target.parent.haver.visible = false;
      event.target.parent.underline.visible = false;
    });
    this.underline.visible = false;
    this.haver.visible = false;
    this.addChild(this.text);
    this.addChild(this.underline);
    this.addChild(this.havermask);
    this.addChild(this.haver);
  }
}
class Button_Text extends createjs.Container {
  constructor(t, f, c, x, y) {
    super();
    this.x = x;
    this.y = y;
    this.text = new createjs.Text(t, f, c);
    this.havermask = new createjs.Shape();
    this.havermask.graphics.beginFill("#34AEC7").drawRoundRect(37, -6, this.text.text.length*20+24, 34,10);
    this.havermask.alpha = 0.01;
    var w = this.text.getMeasuredWidth();
    this.underline = new createjs.Shape();
    this.haver = new createjs.Bitmap(loader.getResult("haver"));
    this.haver_background = new createjs.Shape();
    //this.haver_background.graphics.beginFill("#68A8C3").drawRoundRect(37, -6, this.text.text.length*20+24, 34,10);
    //this.haver_background.graphics.beginFill("#2CB7BB").drawRoundRect(37, -6, this.text.text.length*20+24, 34,10);
    this.haver_background.graphics.beginFill("#FFFFFF").drawRoundRect(37, -6, this.text.text.length*20+24, 34,10);
    this.haver_background.alpha =0.5;
    this.haver.x = -12;
    this.haver.y = -2;
    this.haver.scale = 0.48;
    this.text.x = 50;
    this.text.y = 0;

    this.underline.graphics.s("#000000").mt(this.text.x, this.text.y + 25).lt(this.text.x + w, this.text.y + 25);
    this.havermask.addEventListener("mouseover", function (event) {
      if(!rule_close)return;
      event.target.parent.havermask.cursor = "pointer";
      event.target.parent.haver.visible = true;
      //event.target.parent.underline.visible = true;
      event.target.parent.haver_background.alpha=0.9;
    });
    this.havermask.addEventListener("mouseout", function (event) {
      if(!rule_close)return;
      event.target.parent.havermask.cursor = "defult";
      event.target.parent.haver.visible = false;
      event.target.parent.haver_background.alpha=0.4;
      //event.target.parent.underline.visible = false;
    });
    this.underline.visible = false;
    this.haver.visible = false;
    this.addChild(this.haver_background);
    this.addChild(this.text);
    this.addChild(this.underline);
    this.addChild(this.havermask);
    this.addChild(this.haver);
  }
}
class Option extends createjs.Container {
  constructor() {
    super();
    this.x = 210;
    this.y = 250;
    this.background = new createjs.Shape();
    this.havermask = new createjs.Shape();
    this.text = new createjs.Text("", "Bold 17px " + font_family, "#000000");
    this.addChild(this.background);
    this.addChild(this.text);
    this.addChild(this.havermask);
    this.text.y = 8;
    this.text.x = 12.5;
    this.background.visible = false;
    this.background.alpha = 0.4;
    this.done = false;
    this.havermask.alpha = 0.01;
    this.ans = false;
    this.havermask.addEventListener("mousedown", function (event) {
      if (!event.target.parent.done && !question_time_stop) {
        if (event.target.parent.ans) {
          event.target.parent.correct();
        }
        else event.target.parent.wrong();
      }
    });
    this.havermask.addEventListener("mouseover", function (event) {
      event.target.parent.havermask.cursor = "pointer";
      if (!event.target.parent.done && !question_time_stop)
        event.target.parent.background.visible = true;

    });
    this.havermask.addEventListener("mouseout", function (event) {
      if (!event.target.parent.done && !question_time_stop)
        event.target.parent.background.visible = false;
    });
  }
  correct() {
    this.background.visible = true;
    this.done = true;
    this.background.graphics.clear().beginFill("green").drawRoundRect(0, 0, 9 * 18, 33, 10);
    ans_num--;
    if (ans_num == 0) {
      back_container.visible=false;
      if(!muted)
      createjs.Sound.play("correct");
      correct_fish = new fish(board_index, false);
      correct_fish.scale = 0.5;
      correct_fish.x = 550;
      correct_fish.y = 350;
      correct_fish.gotoAndStop("normal_die");
      stage.addChild(correct_fish);
      createjs.Tween.get(correct_fish).to({ y: bucket.y + 10, x: bucket.x + bucket.getwidth() / 2, scale: 0.18 }, 500).call(() => {
        stage.removeChild(correct_fish);
        user_score += animalsource[board_index].score;
      });
      question_time_stop = true;
      questionboard.gotoAndStop("correct");
      new Score_Text("+" + animalsource[board_index].score, "bold 40px 微軟正黑體", "#000000", canvas_width / 2, canvas_height / 2);
      createjs.Tween.get(questionboard).wait(1000).call(() => {
        questionboard.gotoAndStop("normal");
        next_question();
      })
    }
  }
  wrong() {
    if(!muted)
    createjs.Sound.play("wrong");
    this.background.visible = true;
    this.done = true;
    this.background.graphics.clear().beginFill("red").drawRoundRect(0, 0, 9 * 18, 33, 10);
    show_correct();
  }
  setText(t, ans) {
    this.text.text = t;
    this.done = false;
    this.visible = true;
    this.background.visible = false;
    this.background.graphics.clear();
    this.havermask.graphics.clear();
    this.havermask.graphics.beginFill("#696969").drawRoundRect(0, 0, 9 * 18, 33, 10);
    this.background.graphics.beginFill("#696969").drawRoundRect(0, 0, 9 * 18, 33, 10);
    this.ans = ans;
  }
}
class Animal extends createjs.Sprite {
  constructor(type, special) {
    if (special) {
      super(animalsource[type].spritesheet, "special");
      this.score = animalsource[type].score * 2;
    }
    else {
      super(animalsource[type].spritesheet, "normal");
      this.score = animalsource[type].score;
    }
    this.special = special;
    this.animaltype = type;
    //stage.addChildAt(this,stage.numChildren-2);
    stage.addChildAt(this, 3);
  }
  move() {
    if (getrandom(1000) < 5) {
      this.dic *= -1;
      this.scaleX *= -1;
    };
    if (this.dic == 1) this.x += this.speed;
    else this.x -= this.speed;
  }
  catch() {
    clearInterval(this.t_move);
    catch_fish.push(this);
    animal_list = arrayRemove(animal_list, this);
    this.gotoAndStop(this.special == true ? "special_die" : "normal_die");
    if(gamestart)
    catch_animal_num[this.animaltype] += 1;
    if (this.animaltype != 0 && this.animaltype != 6) {
      if(!muted)
      createjs.Sound.play("catchfish0"+this.animaltype);
      new Score_Text("+" + this.score, "bold 20px 微軟正黑體", "#000000", this.x, this.y);
      user_score += this.score;
    }
    else if(this.animaltype == 0){
      if(!muted)
      createjs.Sound.play("catchbird");
    }
    if(this.animaltype == 6){
      if(!muted)
      createjs.Sound.play("catchdolphin");
    }
    catech_animal_update();
  }
}
function show_correct() {
  question_time_stop = true;
  back_container.visible=false;
  for (i = 0; i < 5; i++) {
    if (option[i].ans && !option[i].done) {
      option[i].background.visible = true;
      option[i].done = true;
      option[i].background.graphics.clear().beginFill("green").drawRoundRect(0, 0, 9 * 18, 33, 10);
    }
  }
  createjs.Tween.get(questionboard).wait(1000).call(() => {
    next_question();
  })
}
class harpoon extends createjs.Bitmap {
  constructor() {
    super(loader.getResult("harpoon"));
    this.moveable = false;
    this.regX = this.getwidth() / 2;
    this.regY = this.getheight() / 2;
    this.scale = 0.16;
    this.revise_position();
    stage.addChildAt(this, 4);
  }
  revise_position() {
    this.x = fisherman.x + 25 * (fisherman.scaleX < 0 ? 1 : -1);
    this.y = fisherman.y - 5;
  }
  move(x, y, c, v) {
    this.moveable = true;
    this.mx = x;
    this.my = y;
    this.mc = c;
    this.mv = v;
  }
  checkboom() {
    var i = 0;
    for (i = 0; i < bubble_list.length; i++) {
      var pt = bubble_list[i].localToLocal(bubble_list[i].image.width / 2, bubble_list[i].image.height / 2, this); // 传递的是红色小球圆心位置
      if (this.hitTest(pt.x, pt.y)) {
        stage.removeChild(bubble_list[i]);
        this.moveable = false;
        bubble_list = arrayRemove(bubble_list, bubble_list[i]);
        createjs.Tween.get(this).to({ y: canvas_seaheight, rotation: (getrandom(2) == 0 ? 90 : -90) }, 2000);
        new Score_Text("-1", "bold 25px 微軟正黑體", "#000000", this.x + this.getwidth() / 2, this.y + 10);
        return true;
      }
    }
    for (i = 0; i < animal_list.length; i++) {
      var pt = this.localToLocal(this.image.width / 2, this.image.height, animal_list[i]); // 传递的是红色小球圆心位置
      if (gamestart && animal_list[i].hitTest(pt.x, pt.y)) {
        this.moveable = false;
        harpoon_list = arrayRemove(harpoon_list, this);
        harpoon_update();
        stage.removeChild(this);
        var diefish = animal_list[i];
        //createjs.Tween.get(harpoon).to({y:canvas_seaheight,rotation:(getrandom(2)==0?90:-90)},animal_list[i].animaltype == 0?500:2000);
        createjs.Tween.get(diefish).to({ y: canvas_seaheight, rotation: diefish.dic == 1 ? 180 : -180 }, diefish.animaltype == 0 ? 500 : 2000);
        animal_list[i].catch();
        return true;
      }
    }
    return false;
  }
}
class fish extends Animal {
  constructor(type, special) {
    super(type, special);
    this.scale = 0.12;
    if(type ==6)this.scale=0.25;
    this.speed = 2;
    this.alpha = 1;
    this.dic = 1;
    if (getrandom(2) == 1) {
      this.x = -100;
      this.dic = 1;
    }
    else {
      this.x = canvas_width + 100;
      this.dic = -1;
      this.scaleX *= -1;
    }
    this.width = animalsource[type].spritesheet.getFrame(animalsource[type].spritesheet.getAnimation(special == true ? "special" : "normal").frames[0]).rect.width;
    this.height = animalsource[type].spritesheet.getFrame(animalsource[type].spritesheet.getAnimation(special == true ? "special" : "normal").frames[0]).rect.height;
    this.y = getrandom(275) + canvas_seaheight + 50;
  }
}
class bird extends Animal {
  constructor(type, special) {
    super(type, special);
    this.scale = 0.16;
    this.speed = 4;
    this.alpha = 0.85;
    if (getrandom(2) == 1) {
      this.x = -90;
      this.dic = 1;
      this.scaleX *= -1;
    }
    else {
      this.x = canvas_width + 90;
      this.dic = -1;
    }
    this.y = getrandom(50) + 25;
  }
}
function mousemove(event) {
  var x = stage.mouseX - (fisherman_harpoon.x);
  var y = stage.mouseY - (fisherman_harpoon.y);
  var r_x = -1;
  var r_y = 0;
  if (x < 0) r_x = 1;
  var c = Math.pow(x * x + y * y, 0.5);
  var r = Math.acos(y / c);
  fisherman_harpoon.rotation = r_x * (r * 180 / Math.PI);
}
function mousedown(event) {
  if (harpoon_list.length >= 10) return;
  var shoot_harpoon = new harpoon();
  if(!muted)
  createjs.Sound.play("shoot");
  var x = stage.mouseX - (shoot_harpoon.x);
  var y = stage.mouseY - (shoot_harpoon.y);
  var r_x = -1;
  if (x < 0) r_x = 1;
  var c = Math.pow(x * x + y * y, 0.5);
  var r = Math.acos(y / c);
  shoot_harpoon.rotation = r_x * (r * 180 / Math.PI);
  shoot_harpoon.move(x, y, c, 10);
  harpoon_list.push(shoot_harpoon);
  harpoon_update();
}
function harpoon_update() {
  harpoon_text.text = "Harpoon:" + (10 - harpoon_list.length) + "";
}
function boatmove_left() {
  if (fisherman.x - fisherman.getwidth() / 2 < 0) return;
  fisherman.x -= 2;
  fisherman_harpoon.x = fisherman.x - 25;
  fisherman.scaleX *= fisherman.scaleX < 0 ? -1 : 1;
  mousemove();
}

function boatmove_right(event) {
  if (fisherman.x - fisherman.getwidth() / 2 > canvas_width) return;
  clearInterval(event);
  fisherman.x += 2;
  fisherman_harpoon.x = fisherman.x + 25;
  fisherman.scaleX *= fisherman.scaleX < 0 ? 1 : -1;
  mousemove();
}
function keyDown(event) {
  if (player_control)
    if (event.keyCode == 37 || event.keyCode == 65) {
      if (!b_left) {
        t_boatmove_left = setInterval(boatmove_left, 20);
        b_left = true;
      }
    }
    else if (event.keyCode == 39 || event.keyCode == 68) {
      if (!b_right) {
        t_boatmove_right = setInterval(boatmove_right, 20);
        b_right = true;
      }
    }
  if (event.keyCode == 32) {
    mousedown();
  }
}
function getrandom(x) {
  return Math.floor(Math.random() * x);
}
function geth(){
  $.ajax({
    url: "gethistory",
    method:'GET',
    error:(err)=>{console.log(err)},
    success: function (result) {
      console.log(result);
    }
  });
}
function getuser(){
  $.ajax({
    url: "getuser",
    method:'GET',
    error:(err)=>{console.log(err)},
    success: function (result) {
      user=result.user;
      if(user.score_sum <77777)reach=false;
      else reach=true;
    }
  });
}
function load_question_data() {
  $.ajax({
    url: "getquestion",
    method:'GET',
    dataType:'JSON',
    error:(err)=>{console.log(err)},
    success: function (result) {
      question_data=result.result;
      load_question();
    }
  });
}
function create_bubble() {
  //var bubble = new createjs.Bitmap(loader.getResult("bubble"+(getrandom(100)<=5?7:((getrandom(6)+1)))));
  var bubble = new createjs.Bitmap(loader.getResult("bubble" + (getrandom(6) + 1)));
  bubble_list.push(bubble);
  bubble.regX = bubble.image.width / 2;
  bubble.regY = bubble.image.height / 2
  bubble.scaleX = bubble.scaleY = 0.1;
  bubble.y = 500;
  bubble.x = now_x = getrandom(750) + 25;
  stage.addChildAt(bubble, stage.numChildren - 2);
  bubble.onload = () => {
    stage.update();
  }
  var s = getrandom(3) / 10.0 + 0.13;
  createjs.Tween.get(bubble).to({ y: canvas_seaheight, scaleX: s, scaleY: s }, getrandom(1500) + 3500).call(() => {
    stage.removeChild(bubble);
    bubble_list = arrayRemove(bubble_list, bubble);
  });
  createjs.Tween.get(bubble).wait(getrandom(canvas_seaheight)).to({ x: now_x - getrandom(30) - 15 }, getrandom(200) + 300).call(() => { now_x = bubble.x }).wait(getrandom(canvas_seaheight)).to({ x: now_x - getrandom(30) - 15 }, getrandom(200) + 300).call(() => { now_x = bubble.x }).wait(getrandom(canvas_seaheight)).to({ x: now_x - getrandom(30) - 15 }, getrandom(200) + 300).call(() => { now_x = bubble.x }).wait(getrandom(canvas_seaheight)).to({ x: now_x - getrandom(30) - 15 }, getrandom(200) + 300).call(() => { now_x = bubble.x }).wait(getrandom(canvas_seaheight)).to({ x: now_x - getrandom(30) - 15 }, getrandom(200) + 300).call(() => { now_x = bubble.x }).wait(getrandom(canvas_seaheight)).to({ x: now_x - getrandom(30) - 15 }, getrandom(200) + 300).call(() => { now_x = bubble.x }).wait(getrandom(canvas_seaheight)).to({ x: now_x - getrandom(30) - 15 }, getrandom(200) + 300).call(() => { now_x = bubble.x }).wait(getrandom(canvas_seaheight)).to({ x: now_x - getrandom(30) - 15 }, getrandom(200) + 300).call(() => { now_x = bubble.x }).wait(getrandom(canvas_seaheight)).to({ x: now_x - getrandom(30) - 15 }, getrandom(200) + 300).call(() => { now_x = bubble.x }).wait(getrandom(canvas_seaheight)).to({ x: now_x - getrandom(30) - 15 }, getrandom(200) + 300).call(() => { now_x = bubble.x }).wait(getrandom(canvas_seaheight)).to({ x: now_x - getrandom(30) - 15 }, getrandom(200) + 300).call(() => { now_x = bubble.x })
}
function open_bubble() {
  generate_bubble = setInterval(() => {
    if (!stop)
      if (getrandom(10) < 1) {
        create_bubble();
      }
  }, 200);
}
function update() {
  if (!stop) {
    harpoon_move();
    harpoon_check();
    fish_move();
  }
  stage.update();
}
function fish_move() {
  i = 0
  for (i = 0; i < animal_list.length; i++) {
    if (animal_list[i].x > (canvas_width + 100) || (animal_list[i].x < -100)) {
      stage.removeChild(animal_list[i]);
      if (gamestart)
        if (animal_list[i].animaltype != 0) {
          if (animal_list[i].animaltype > 2) {
            question_num[2]++;
          }
          else {
            question_num[animal_list[i].animaltype - 1]++;
          }
        }
      animal_list = arrayRemove(animal_list, animal_list[i]);
      return;
    }
    else {
      animal_list[i].move();
    }
  }
}
function harpoon_check() {
  times++;
  i = 0;
  for (i = 0; i < harpoon_list.length; i++) {
    if (harpoon_list[i].moveable) {
      if (times % 3 == 0 && harpoon_list[i].x + harpoon_list[i].getheight() / 2 < canvas_width && harpoon_list[i].x + harpoon_list[i].getheight() / 2 > 0) {
        if (harpoon_list[i].checkboom()) {
          return;
        }
      }
      if (harpoon_list[i].y > canvas_seaheight) {
        harpoon_list[i].mv = (500 / harpoon_list[i].y) * 1.8;
        if (harpoon_list[i].y > 400) {
          harpoon_list[i].mv = (500 / harpoon_list[i].y) * 1.4;
        }
      }
      if (harpoon_list[i].y - harpoon_list[i].image.height * harpoon_list[i].scaleY / 2 >= canvas_height || harpoon_list[i].y + harpoon_list[i].image.height * harpoon_list[i].scaleY / 2 <= 0 || harpoon_list[i].x - harpoon_list[i].image.height * harpoon_list[i].scaleX / 2 >= canvas_width || harpoon_list[i].x + harpoon_list[i].image.height * harpoon_list[i].scaleX / 2 <= 0) {
        this.moveable = false;
        stage.removeChild(harpoon_list[i]);
        harpoon_list = arrayRemove(harpoon_list, harpoon_list[i]);
        harpoon_update();
        i--;
      }
    }
  }
}
function harpoon_move() {
  for (i = 0; i < harpoon_list.length; i++) {
    if (harpoon_list[i].moveable) {
      harpoon_list[i].x += harpoon_list[i].mx * harpoon_list[i].mv / harpoon_list[i].mc;
      harpoon_list[i].y += harpoon_list[i].my * harpoon_list[i].mv / harpoon_list[i].mc;
    }
  }
  //stage.update();
}
function open_fish() {
  generate_fish = setInterval(() => {
    if (!stop)
      if (question_num[0] + question_num[1] + question_num[2] > 0) {
        rnd = getrandom(1500);//120
        if (rnd < 600) {
          var fishtype;
          var fishtype_rnd;

            do {
              fishtype_rnd = getrandom(19);
              fishtype = fishtype_rnd<3?0:fishtype_rnd<9?1:2;
            } while (question_num[fishtype] <= 0);
            if (gamestart)
              question_num[fishtype]--;
            if (rnd < 120)
              animal_list.push(new fish(fishtype == 2 ? ((fishtype + 1) + getrandom(2)) : ((fishtype) + 1), true));
            else
              animal_list.push(new fish(fishtype == 2 ? ((fishtype + 1) + getrandom(2)) : ((fishtype) + 1), false));
          }
       
        
      }
      else {
        if (catch_animal_num[1] + catch_animal_num[2] + catch_animal_num[3] + catch_animal_num[4] == question_list[0].length + question_list[1].length + question_list[2].length)
          game_end();
      }
  }, 200);
}
function open_bird() {
  generate_bird = setInterval(() => {
    if (!stop){
      var rnd =getrandom(90);
      if (rnd < 2) {
        animal_list.push(new bird(0, false));
      }
       else if(rnd<3){
        animal_list.push(new fish(6, false));
      }
    }
  }, 1000);
}
function keyUp(event) {
  if (player_control)
    if (event.keyCode == 37 || event.keyCode == 65) {
      b_left = false;
      clearInterval(t_boatmove_left);
    }
    else if (event.keyCode == 39 || event.keyCode == 68) {
      b_right = false;
      clearInterval(t_boatmove_right);
    }
}
var complete_file_num=0;
// function isMobile() {

//   try{ document.createEvent("TouchEvent"); return true; }

//   catch(e){ return false;}

// }
function load_source() {
  stage = new createjs.Stage(document.getElementById("gameStage"));
  var isMobile = false; //initiate as false
  //if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
  if(!isMobile){
    window.addEventListener("click", resumeAudioContext);
    loading_text = new createjs.Text("0%","bold 30px 微軟正黑體","#000000");
    music_text = new createjs.Text("音樂：魔王魂","bold 15px 微軟正黑體","#000000");
    music_text.x = canvas_width-music_text.getMeasuredWidth() ;
    music_text.y = canvas_height-music_text.getMeasuredHeight() ;
    loading_text.x = canvas_width/2-loading_text.getMeasuredWidth() / 2 ;
    loading_text.y = canvas_height/2-loading_text.getMeasuredHeight() / 2 ;
    stage.addChild(loading_text);
    stage.addChild(music_text);
    stage.update();
    manifest = [
      { src: "images/coolgame/sea.png", id: "sea" },
      { src: "images/coolgame/fisherman.png", id: "fisherman" },
      { src: "images/coolgame/background.png", id: "game_background" },
      { src: "images/coolgame/fish1.png", id: "fish1" },
      { src: "images/coolgame/fish2.png", id: "fish2" },
      { src: "images/coolgame/fish3.png", id: "fish3" },
      { src: "images/coolgame/fish4.png", id: "fish4" },
      { src: "images/coolgame/bubble1.png", id: "bubble1" },
      { src: "images/coolgame/bubble2.png", id: "bubble2" },
      { src: "images/coolgame/bubble3.png", id: "bubble3" },
      { src: "images/coolgame/bubble4.png", id: "bubble4" },
      { src: "images/coolgame/bubble5.png", id: "bubble5" },
      { src: "images/coolgame/bubble6.png", id: "bubble6" },
      { src: "images/coolgame/bubble7.png", id: "bubble7" },
      { src: "images/coolgame/bird1.png", id: "bird1" },
      { src: "images/coolgame/fish_ad.png", id: "fish_ad" },
      { src: "images/coolgame/harpoon.png", id: "harpoon" },
      { src: "images/coolgame/score_background.png", id: "score_background" },
      { src: "images/coolgame/rank_background.png", id: "rank_background" },
      { src: "images/coolgame/sea.png", id: "score_sea" },
      { src: "images/coolgame/haver.png", id: "haver" },
      { src: "images/coolgame/questionboard1.png", id: "questionboard1" },
      { src: "images/coolgame/questionboard2.png", id: "questionboard2" },
      { src: "images/coolgame/questionboard3.png", id: "questionboard3" },
      { src: "images/coolgame/questionboard4.png", id: "questionboard4" },
      { src: "images/coolgame/time.png", id: "time" },
      { src: "images/coolgame/sound_open.png", id: "sound_open" },
      { src: "images/coolgame/sound_close.png", id: "sound_close" },
      { src: "images/coolgame/back.png", id: "back" },
      { src: "images/coolgame/back_haver.png", id: "back_haver" },
      { src: "images/coolgame/rank_single.png", id: "rank_single" },
      { src: "images/coolgame/rank_total.png", id: "rank_total" },
      { src: "images/coolgame/leave.png", id: "leave" },
      { src: "images/coolgame/bucket.png", id: "bucket" },
      { src: "images/coolgame/score_board.png", id: "score_board" },
      { src: "images/coolgame/dolphin.png", id: "dolphin" },
      { src: "images/coolgame/rule1.png", id: "rule1" },
      { src: "images/coolgame/rule2.png", id: "rule2" },
      { src: "images/coolgame/food.png", id: "food" },
      { src: "images/coolgame/close.png", id: "close" },
      { src: "images/coolgame/close_haver.png", id: "close_haver" },
      { src: "music/coolgame/LabbyBGM.mp3", id: "LabbyBGM" },
      { src: "music/coolgame/GameBGM01.mp3", id: "GameBGM01" },
      { src: "music/coolgame/GameBGM02.mp3", id: "GameBGM02" },
      { src: "music/coolgame/RankBGM.mp3", id: "RankBGM" },
      { src: "music/coolgame/catchfish01.mp3", id: "catchfish01" },
      { src: "music/coolgame/catchfish02.mp3", id: "catchfish02" },
      { src: "music/coolgame/catchfish03.mp3", id: "catchfish03" },
      { src: "music/coolgame/catchfish04.mp3", id: "catchfish04" },
      { src: "music/coolgame/catchbird.mp3", id: "catchbird" },
      { src: "music/coolgame/catchdolphin.mp3", id: "catchdolphin" },
      { src: "music/coolgame/correct.mp3", id: "correct" },
      { src: "music/coolgame/wrong.mp3", id: "wrong" },
      { src: "music/coolgame/shoot.mp3", id: "shoot" },
      { src: "music/coolgame/DolphinBGM.mp3", id: "DolphinBGM" },
      { src: "music/coolgame/QuestionBGM.mp3", id: "QuestionBGM" },
      { src: "music/coolgame/alarm.mp3", id: "alarm" },
      { src: "music/coolgame/bell.mp3", id: "bell" },
      { src: "music/coolgame/game_end.mp3", id: "game_end" },
      { src: "images/coolgame/heard1.png", id: "heard1" },
      { src: "images/coolgame/heard2.png", id: "heard2" }
    ];
    loader = new createjs.LoadQueue(true);
    loader.installPlugin(createjs.Sound);
    loader.on("fileload", handleFileLoad);
    loader.on("complete", handleComplete);
    loader.on("error", handleError);
    loader.loadManifest(manifest);
    load_question_data();
  }
  else{
    // $("#gameStage").css('display','none'); 
    alert("手機碰到水會壞掉所以不支援歐，雖然電腦碰到水也會壞掉，但是我只是想說，只能用電腦玩歐~啾咪");
    window.location = '/';
 }
}
function handleFileLoad(e) {
  if(!done_loading){
    complete_file_num++;
    loading_text.text = Math.floor((complete_file_num/manifest.length)*100)+"%";
    loading_text.x = canvas_width/2-loading_text.getMeasuredWidth() / 2 ;
    loading_text.y = canvas_height/2-loading_text.getMeasuredHeight() / 2 ;
    stage.update();
  }

}
var done_loading=false;
function handleComplete() {
  done_loading = true;
  loading_text.text = "點擊螢幕開始遊戲~";
  loading_text.x = canvas_width/2-loading_text.getMeasuredWidth() / 2 ;
  loading_text.y = canvas_height/2-loading_text.getMeasuredHeight() / 2 ;
  stage.update();
}
function handleError() {
  console.log("erreo");
}
function source_init() {
  var fish1 = {
    images: [loader.getResult("fish1")],
    frames: { width: 461, height: 368, regX: 230, regY: 189 },
    animations: {
      normal: {
        frames: [0, 1], speed: 0.1
      },
      special: {
        frames: [3, 4], speed: 0.1
      },
      special_die: {
        frames: [5], speed: 0
      },
      normal_die: {
        frames: [2], speed: 0
      }
    }
  };
  var fish2 = {
    images: [loader.getResult("fish2")],
    frames: { width: 500, height: 433, regX: 250, regY: 216 },
    animations: {
      normal: {
        frames: [0, 1], speed: 0.1
      },
      special: {
        frames: [3, 4], speed: 0.1
      },
      special_die: {
        frames: [5], speed: 0
      },
      normal_die: {
        frames: [2], speed: 0
      }
    }
  };
  var fish3 = {
    images: [loader.getResult("fish3")],
    frames: { width: 547, height: 357, regX: 273, regY: 178 },
    animations: {
      normal: {
        frames: [0, 1], speed: 0.1
      },
      special: {
        frames: [3, 4], speed: 0.1
      },
      special_die: {
        frames: [5], speed: 0
      },
      normal_die: {
        frames: [2], speed: 0
      }
    }
  };
  var fish4 = {
    images: [loader.getResult("fish4")],
    frames: { width: 550, height: 400, regX: 275, regY: 200 },
    animations: {
      normal: {
        frames: [0, 1], speed: 0.1
      },
      special: {
        frames: [3, 4], speed: 0.1
      },
      special_die: {
        frames: [5], speed: 0
      },
      normal_die: {
        frames: [2], speed: 0
      }
    }
  };
  var bird1 = {
    images: [loader.getResult("bird1")],
    frames: { width: 318, height: 273, regX: 159, regY: 136 },
    animations: {
      normal: {
        frames: [0, 1], speed: 0.1
      },
      normal_die: {
        frames: [2], speed: 0
      }
    }
  };
  var fish_ad_data = {
    images: [loader.getResult("fish_ad")],
    frames: { width: 798, height: 190, regX: 399, regY: 95 },
    animations: {
      normal: {
        frames: [0, 1], speed: 0.1
      }
    }
  };
  var dolphin_data = {
    images: [loader.getResult("dolphin")],
    frames: { width: 548, height: 220, regX: 274, regY: 110 },
    animations: {
      normal: {
        frames: [0, 1], speed: 0.1
      },
      normal_die: {
        frames: [2], speed: 0
      }
    }
  }
  animalsource.push({ type: 0, score: 1200, spritesheet: new createjs.SpriteSheet(bird1) });
  animalsource.push({ type: 1, score: 250, spritesheet: new createjs.SpriteSheet(fish1) });
  animalsource.push({ type: 2, score: 200, spritesheet: new createjs.SpriteSheet(fish2) });
  animalsource.push({ type: 3, score: 125, spritesheet: new createjs.SpriteSheet(fish3) });
  animalsource.push({ type: 4, score: 125, spritesheet: new createjs.SpriteSheet(fish4) });
  animalsource.push({ type: 5, spritesheet: new createjs.SpriteSheet(fish_ad_data) });
  animalsource.push({ type: 6, score: -10000,spritesheet: new createjs.SpriteSheet(dolphin_data) });
}
function create_back_container() {
  back_container = new createjs.Container();
  var backbutton = new createjs.Bitmap(loader.getResult("back"));
  var back_shape = new createjs.Shape();
  backbutton.scale = 0.4;
  backbutton.y = 12;
  backbutton.x = 7;
  back_container.visible = false;
  back_shape.graphics.beginFill("#FFFFFF").drawRect(7, 12, backbutton.getwidth(), backbutton.getheight());
  back_shape.alpha = 0.01;
  back_shape.addEventListener("mouseover", function () {
    backbutton.image = loader.getResult("back_haver");
    back_shape.cursor = "pointer";
  });
  back_shape.addEventListener("mouseout", function () {
    backbutton.image = loader.getResult("back");
  });
  back_shape.addEventListener("mousedown", function () {
    if (now >= 3) {
      labby_init();
    }
    else {
      soundcontrol["BGM"].paused=true;
      close_game_event();
      leave_container.visible = true;
      stop = true;
      question_time_stop=true;
    }
  });
  back_container.addChild(backbutton);
  back_container.addChild(back_shape);
  stage.addChild(back_container);
}
function create_rule_container(){
  rule_container= new createjs.Container();
  var rule_first = new createjs.Bitmap(loader.getResult("rule1"));
  var rule_second = new createjs.Bitmap(loader.getResult("rule2"));
  var next_shape = new createjs.Shape();
  var close = new createjs.Bitmap(loader.getResult("close"));
  close.x = 685;
  close.y = 32;
  close.scale=0.5;
  close.addEventListener("mouseover",function(event){
    event.target.cursor = "pointer";
    close.image = loader.getResult("close_haver");
  })
  close.addEventListener("mouseout",function(event){
    event.target.cursor = "pointer";
    close.image = loader.getResult("close");
  })
  close.addEventListener("mousedown",function(event){
    rule_close=true;
    rule_container.visible=false;
  })
  next_shape.graphics.beginFill("#000000").drawCircle(718,261,24);
  next_shape.alpha=0.01;
  next_shape.addEventListener("mouseover",function(event){
    event.target.cursor = "pointer";
  })
  next_shape.addEventListener("mousedown",function(event){
    rule_second.visible=true;
    rule_first.visible = false;
    next_shape.visible=false;
    last_shape.visible=true;
  })
  var last_shape = new createjs.Shape();
  last_shape.graphics.beginFill("#000000").drawCircle(70,255,24);
  last_shape.visible=false;
  last_shape.alpha=0.01;
  last_shape.addEventListener("mouseover",function(event){
    event.target.cursor = "pointer";
  })
  last_shape.addEventListener("mousedown",function(event){
    rule_second.visible=false;
    rule_first.visible = true;
    next_shape.visible=true;
    last_shape.visible=false;
  })
  rule_first.x = 13;
  rule_second.x=13;
  rule_first.scale=0.65;
  rule_second.scale=0.65;
  rule_second.visible=false;
  rule_container.x = 10
  rule_container.addChild(rule_first);
  rule_container.addChild(rule_second);
  rule_container.addChild(next_shape);
  rule_container.addChild(last_shape);
  rule_container.addChild(close);
  rule_container.visible=false;
  stage.addChild(rule_container);
}
function create_leave_container() {
  leave_container = new createjs.Container();
  var leave_background = new createjs.Bitmap(loader.getResult("leave"));
  var leave_title = new createjs.Text("確定要離開遊戲嗎？", "bold 24px " + font_family, "#000000");
  leave_container.visible = false;
  leave_background.scale = 0.7;
  var leave_background_mask = new createjs.Shape();
  leave_background_mask.graphics.beginFill("#000000").drawRect(0, 0, 800, 500);
  leave_background_mask.alpha = 0.3;
  leave_background.x = canvas_width / 2 - leave_background.getwidth() / 2;
  leave_background.y = canvas_height / 2 - leave_background.getheight() / 2;
  leave_title.y = leave_background.y + 40;
  leave_title.x = leave_background.x + 108;

  var Yes_shape = new createjs.Shape();
  Yes_shape.alpha = 0.01;
  var Yes = new createjs.Text("含淚離開", "Bold 20px 微軟正黑體", "#000000");
  Yes.x = leave_title.x + 50;
  Yes.y = leave_title.y + 50;
  Yes_shape.graphics.beginFill("#FFFFFF").drawRect(Yes.x, Yes.y, 80, 30);
  var w = Yes.getMeasuredWidth();
  var Yes_underline = new createjs.Shape();
  Yes_underline.graphics.s("#000000").mt(Yes.x, Yes.y + 25).lt(Yes.x + w, Yes.y + 25);
  var Yes_haver = new createjs.Bitmap(loader.getResult("haver"));
  Yes_haver.x = leave_title.x;
  Yes_haver.y = Yes.y;
  Yes_haver.scale = 0.48;

  var No_shape = new createjs.Shape();
  No_shape.alpha = 0.01;
  var No = new createjs.Text("回心轉意", "Bold 20px 微軟正黑體", "#000000");
  No.x = leave_title.x + 50;
  No.y = leave_title.y + 100;
  No_shape.graphics.beginFill("#FFFFFF").drawRect(No.x, No.y, 80, 30);
  var w = No.getMeasuredWidth();
  var No_underline = new createjs.Shape();
  No_underline.graphics.s("#000000").mt(No.x, No.y + 25).lt(No.x + w, No.y + 25);
  var No_haver = new createjs.Bitmap(loader.getResult("haver"));
  No_haver.x = leave_title.x;
  No_haver.y = No.y;
  No_haver.scale = 0.48;


  leavebutton_source.push({ text: Yes, underline: Yes_underline, haver: Yes_haver });
  leavebutton_source.push({ text: No, underline: No_underline, haver: No_haver });
  for (i = 0; i < leavebutton_source.length; i++) {
    leavebutton_source[i].haver.visible = false;
    leavebutton_source[i].underline.visible = false;
  }
  Yes_shape.addEventListener("mousedown", function () {
    leave_container.visible = false;
    stage.removeChild(question_container);
    clearInterval(question_timer);
    stage.removeChild(score_catch_animal_container);
    close_movement();
    clear_game_stage();
    for(var j =0;j<dolphin_list.length;j++){
      stage.removeChild(dolphin_list[j]);
    }
    for (var j = 0; j < catch_fish.length; j++) {
      catch_fish[j].visible = false;
    }
    labby_init();
  });
  Yes_shape.addEventListener("mouseover", function () {
    Yes_shape.cursor = "pointer";
    leavebutton_source[0].haver.visible = true;
    leavebutton_source[0].underline.visible = true;
  });
  Yes_shape.addEventListener("mouseout", function () {
    leavebutton_source[0].haver.visible = false;
    leavebutton_source[0].underline.visible = false;
  });


  No_shape.addEventListener("mousedown", function () {
    leave_container.visible = false;
    if (now == 1)
      game_event();
    soundcontrol["BGM"].paused=muted;
    stop = false;
    question_time_stop=false;
  });
  No_shape.addEventListener("mouseover", function () {
    No_shape.cursor = "pointer";
    leavebutton_source[1].haver.visible = true;
    leavebutton_source[1].underline.visible = true;
  });
  No_shape.addEventListener("mouseout", function () {
    leavebutton_source[1].haver.visible = false;
    leavebutton_source[1].underline.visible = false;
  });
  leave_container.addChild(leave_background_mask);
  leave_container.addChild(leave_background);
  leave_container.addChild(leave_title);
  leave_container.addChild(Yes);
  leave_container.addChild(Yes_shape);
  leave_container.addChild(Yes_underline);
  leave_container.addChild(Yes_haver);
  leave_container.addChild(No);
  leave_container.addChild(No_shape);
  leave_container.addChild(No_underline);
  leave_container.addChild(No_haver);
  stage.addChild(leave_container);
}
function create_stage_element() {
  // soundcontrol["BGM"]=createjs.Sound.play("BGM01");
  // soundcontrol["BGM"].stop();
  catch_animal_text = new createjs.Text(" X  0\n\n X  0\n\n X  0\n\n X  0", "12px Arial", "#000000");
  background = new createjs.Bitmap(loader.getResult("game_background"));
  fisherman = new createjs.Bitmap(loader.getResult("fisherman"));
  sea = new createjs.Bitmap(loader.getResult("sea"));
  score_board = new createjs.Bitmap(loader.getResult("score_board"));
  bucket = new createjs.Bitmap(loader.getResult("bucket"));
  harpoon_text = new createjs.Text("Harpoon:10", "18px Arial", "#000000");
  fish_ad = new createjs.Sprite(animalsource[5].spritesheet, "normal");
  game_time_image = new createjs.Bitmap(loader.getResult("time"));
  question_container = new createjs.Container();
  createjs.Ticker.framerate = 50;
  createjs.Ticker.addEventListener("tick", update);
  leavebutton_source = new Array();
  sound_shape = new createjs.Shape();
  soundbutton = new createjs.Bitmap(loader.getResult("sound_open"));
  rank_container = new createjs.Container();
  rank_container.visible=false;
  soundbutton.scale = 0.4;
  soundbutton.x = canvas_width - soundbutton.getwidth();
  soundbutton.y = canvas_height - soundbutton.getheight();
  score_board_text = new createjs.Text("0", "bold 20px 微軟正黑體", "#000000");
  score_board_text.visible = false;
  sound = true;
  bucket.scale = 0.5;
  bucket.scaleX = 0.6;
  bucket.y = 257;
  bucket.x = -0;
  bucket.visible = false;
  score_board.visible = false;
  sound_shape.graphics.beginFill("#FFFFFF").drawRect(canvas_width - soundbutton.getwidth(), canvas_height - soundbutton.getheight(), soundbutton.getwidth(), soundbutton.getheight());
  sound_shape.alpha = 0.01;
  sound_shape.addEventListener("mousedown", function (event) {
    if (sound) {
      soundbutton.image = loader.getResult("sound_close");
      soundcontrol["BGM"].paused =true;
      muted=true;
    }
    else {
      soundbutton.image = loader.getResult("sound_open");
      soundcontrol["BGM"].paused =false;
      muted=false;
    }
    sound = sound == true ? false : true;
  })
  sound_shape.addEventListener("mouseover", () => {
    sound_shape.cursor = "pointer";
  });
  stage.addChild(background);
  stage.addChild(fisherman);
  stage.addChild(sea);
  stage.addChild(score_board);
  stage.addChild(bucket);
  stage.addChild(soundbutton);
  stage.addChild(sound_shape);
  stage.addChild(fish_ad);
  stage.addChild(score_board_text);
  stage.addChild(question_end_container);
  stage.addChild(rank_container);
  create_rank_container();
  create_back_container();
  create_leave_container();
  create_labbybutton();
  create_question_end_container();
  create_dolphin_container();
  create_rule_container();
  fisherman_harpoon = new harpoon();
}
function init() {
  source_init();
  create_stage_element();
  labby_init();
}
function game_event() {
  stage.addEventListener("stagemousemove", mousemove);
  stage.addEventListener("mousedown", mousedown);
  //stage.addEventListener("pressmove",keyDown);
  //stage.onmousedown = mousedown;
  document.onkeydown = keyDown;
  document.onkeyup = keyUp;
}
function clear_animal() {
  for (i = 0; i < animal_list.length; i++) {
    if (animal_list[i].dic > 0) {
      createjs.Tween.get(animal_list[i]).to({ x: canvas_width + 110 }, 1000);
    }
    else {
      createjs.Tween.get(animal_list[i]).to({ x: -110 }, 1000);
    }
  }
  if (fish_ad.visible)
    createjs.Tween.get(fish_ad).to({ x: -450 }, 1000).call(() => {
      close_fish_ad();
    });
}
function fish_jump() {
  // stage.setChildIndex(fisherman,stage.numChildren-1);
  // stage.setChildIndex(fisherman_harpoon,stage.numChildren-1);
  // stage.setChildIndex(sea,stage.numChildren-1);
  for (i = 0; i < catch_fish.length - 1; i++) {
    createjs.Tween.get(catch_fish[i]).wait(2000).to({ y: (fisherman.y - getrandom(50) + 20), x: (fisherman.x + 50 - getrandom(50)) }, 600)
  }
  createjs.Tween.get(catch_fish[catch_fish.length - 1]).wait(2000).to({ y: (fisherman.y - getrandom(50) + 20), x: (fisherman.x + 35 - getrandom(50)) }, 600).call(() => {
    for (i = 0; i < catch_fish.length; i++) {
      stage.setChildIndex(catch_fish[i], 2);
      createjs.Tween.get(catch_fish[i]).wait(500).to({ x: -Math.abs(fisherman.getwidth()) + 30 - getrandom(50) }, 3500);
    }
  });
}
function create_question_end_container() {
  var golabby = new Button_Text("回到大廳", "bold 20px 微軟正黑體", "#000000", 0, 0);
  var goranking = new Button_Text("排行榜", "bold 20px 微軟正黑體", "#000000", 200, 0);
  question_end_container = new createjs.Container();
  question_end_container.addChild(golabby);
  question_end_container.addChild(goranking);
  question_end_container.x = 415;
  question_end_container.y = 320;
  golabby.havermask.addEventListener("mousedown", function () {
    if(!reach_close)return;
    question_end_container.visible = false;
    for(var j =0;j<dolphin_list.length;j++){
      stage.removeChild(dolphin_list[j]);
    }
    stage.removeChild(question_container);
    stage.removeChild(score_catch_animal_container);
    labby_init();
  });
  goranking.havermask.addEventListener("mousedown", function () {
    if(!reach_close)return;
    question_end_container.visible = false;
    for(var j =0;j<dolphin_list.length;j++){
      stage.removeChild(dolphin_list[j]);
    }
    stage.removeChild(question_container);
    stage.removeChild(score_catch_animal_container);
    ranking_init();
  });

  question_end_container.visible = false;
  stage.addChildAt(question_end_container, stage.numChildren - 1);
}
function usergame_init(){
  $.ajax({
    url: "usergameinit",
    method:"get",
  success:()=>{

  },
    error:(err)=>{console.log(err)}
  });
}
function update_score(){
  $.ajax({
    url: "updatescore",
    method:"POST",
    data: { 
      game_id : game_id,
      score: user_score,
  },
  success:()=>{

  },
    error:(err)=>{console.log(err)}
  });
}
function question_end() {
  if(dolphin_list.length == 0){
    stage.removeChild(question_container);
    var a = score_board_text.x - (score_board.x - 512);
    var b = score_board_text.y - (score_board.y - 169);
    createjs.Tween.get(score_board).to({ x: 512, y: 169, scale: 0.65 }, 1000).call(() => {
      question_end_container.visible = true;
    })
    createjs.Tween.get(score_board_text).to({ x: a + 19, y: b + 13, scale: 1.5 }, 1000).call(() => {
      question_end_container.visible = true;
      if(user_score + user.score_sum >= 77777 && reach==false)show_reach_animation();
    })
    clearInterval(question_timer);
    clearInterval(score_update_timer);
    update_score();
  }
  else{
    back_container.visible=false;
    question_container.visible=false;
    dolphin_container.alpha=0;
    createjs.Tween.get(dolphin_container).to({alpha:1},1500);
    dolphin_container.visible=true;
    now = -1;
    BGM_change();
  }
  now_score=user_score;
  score_board_text.text = (now == 1 ? "Score:" : "") + now_score + "";
  if (now == 2) {
    if (score_text_lenght != score_board_text.text.length)
      score_text_lenght = score_board_text.text.length;
    score_board_text.x = score_board.getwidth() / 2 - score_board_text.getMeasuredWidth() / 2 - 8 - score_board_text.text.length;
    score_board_text.y = score_board.y + 51.5 - score_board_text.getMeasuredHeight() / 2 - 3;
  }
}
function create_questionboard() {
  board_index = 0;
  if (catch_animal_num[1] > 0) board_index = 1;
  else if (catch_animal_num[2] > 0) board_index = 2;
  else if (catch_animal_num[3] > 0) board_index = 3;
  else if (catch_animal_num[4] > 0) board_index = 4;
  else {
    question_end();
    return;
  }
  if(!(board_index == 4 && score_catch_animal_num[3] !=0)){
    question_index_list = new Array();
    for (i = 0; i < question_list[board_index >= 3 ? 2 : (board_index - 1)].length; i++) {
      question_index_list.push(i);
    }
    for (i = 0; i < 5; i++) {
      option[i].visible = false;
    } 
  }
  question_text.visible = false;
  var questionboard_sheet = new createjs.SpriteSheet({
    images: [loader.getResult("questionboard" + board_index + "")],
    frames: { width: 1600, height: 1000, regX: 0, regY: 0 },
    animations: {
      normal: {
        frames: [0], speed: 0
      },
      correct: {
        frames: [1], speed: 0
      }
    }
  });
  question_container.removeChild(questionboard);
  questionboard = new createjs.Sprite(questionboard_sheet, "normal");
  questionboard.scale = 0;
  questionboard.x = score_catch_animal_container.children[board_index].x + score_catch_animal_container.x;
  questionboard.y = 130;
  question_container.addChildAt(questionboard, 1);
  createjs.Tween.get(questionboard).to({ scale: 0.5, x: 0, y: 0 }, 1000).call(() => {
    for (i = 0; i < 5; i++) {
      option[i].visible = true;
    }
    question_text.visible = true;
    next_question();
  });
}
function question_show() {
  var a = new Array();
  var q = question.question.split("");
  question_text.text = "Q：";
  for (i = 0; i < q.length; i++) {
    if ((i) % 18 == 0 && i!=0) {
      question_text.text += q[i] + "\n       ";
    }
    else {
      question_text.text += q[i];
    }
  }
  question_text.text += board_index == 1 ? "(多選題)" : "(單選題)"
  for (i = 0; i < question.answer.length + question.option.length; i++) {
    a.push(i);
  }
  for (i = 4; i > a.length - 1; i--) {
    option[i].visible = false;
    option[i].ans = false;
  }
  for (i = 0; i < question.answer.length; i++) {
    var index = getrandom(a.length);
    option[a[index]].setText(String.fromCharCode(65 + a[index]) + " " + question.answer[i], true);
    a = arrayRemove(a, a[index]);
  }
  for (i = 0; i < question.option.length; i++) {
    var index = getrandom(a.length);
    option[a[index]].setText(String.fromCharCode(65 + a[index]) + " " + question.option[i], false);
    a = arrayRemove(a, a[index]);
  }
  if(board_index == 1){
    question_time = 21;
    question_time_text.text = "20";
  }
  else{
    question_time = 11;
    question_time_text.text = "10";
  }
  question_time_count = 49;
  question_time_stop = false;
  question_time_text.visible = true;
  back_container.visible=true;
}
function next_question() {
  if (catch_animal_num[board_index] == 0) {
    question_time_text.visible = false;
    for (var j = 0; j < 5; j++) {
      option[j].visible = false;
    }
    question_text.visible = false;
    back_container.visible=false;
    createjs.Tween.get(questionboard).to({ scale: 0, x: score_catch_animal_container.children[board_index].x + score_catch_animal_container.x, y: 130 }, 1000).call(() => {
      create_questionboard();
    });
  }
  else {
    catch_animal_num[board_index]--;
    var rnd = getrandom(question_index_list.length);
    question = question_list[board_index >= 3 ? 2 : (board_index - 1)][question_index_list[rnd]];
    question_index_list = arrayRemove(question_index_list, question_index_list[rnd]);
    ans_num = question.answer.length;
    question_show();
  }
}

function load_question() {
  // question_list.push(new Array());
  // question_list.push(new Array());
  // question_list.push(new Array());
  // for(var j =0;j<question_data.length;j++){
  //   var q=question_data[j];
  //   question_list[q.Type].push(new Question(q.Type,q.Q,q.Op.length == 0?new Array():q.Op.split(','),q.Ans.split(',')));
  // }
  // question_num = [0, 0, 0];
  // question_index_list = new Array();
  // for (var j = 0; j < 3; j++) {
  //   question_num[j] = question_list[j].length;
  // }
  question_list.push(new Array());
  question_list.push(new Array());
  question_list.push(new Array());

  question_num = [100, 100, 100];
  question_index_list = new Array();
}
function question_time_update() {
  if (!question_time_stop) {
    question_time_count += 1;
    if (question_time_count % 50 == 0) {
      if (question_time == 1) {
        show_correct();
      }
      question_time--;
      question_time_text.text = question_time + "";
    }
  }
}
function question_init() {
  question_container = new createjs.Container();
  var question_background = new createjs.Shape();
  question_text = new createjs.Text("", "Bold 20px " + font_family, "#000000");
  question_text.x = 190;
  question_text.y = 140;
  question_time_count = 0;
  question_time_text = new createjs.Text("10", "bold 30px Arial", "#000000");
  question_time_text.x = canvas_width / 2 - 10;
  question_time_text.y = question_text.y - 50;
  question_time_text.visible = false;
  question_timer = setInterval(question_time_update, 20);
  question_background.graphics.beginFill("#000000").drawRect(0, 0, 800, 500);
  question_background.alpha = 0.2;
  question_container.addChild(question_background);
  question_container.addChild(question_text);
  question_container.addChild(question_time_text);
  option = new Array();
  question_num = [0, 0, 0];
  question_index_list = new Array();
  for (var j = 0; j < 3; j++) {
    // for (i = 0; i < question_list[j].length; i++) {
    //   question_index_list.push(i);
    // }
    question_num[j] = question_list[j].length;
  }

  for (i = 0; i < 5; i++) {
    option.push(new Option());
    question_container.addChild(option[i]);
  }
  option[1].x = option[0].x + 185;
  option[2].y = option[0].y + 40;
  option[3].x = option[0].x + 185;
  option[3].y = option[0].y + 40;
  option[4].y = option[0].y + 80;
  BGM_change();
  create_questionboard();
  stage.addChild(question_container);
  stage.setChildIndex(back_container, stage.numChildren - 1);
  stage.setChildIndex(leave_container, stage.numChildren - 1);
}
function clear_game_stage() {
  stage.removeChild(start_time_text);
  stage.removeChild(harpoon_text);
  stage.removeChild(countdown_text);
  stage.removeChild(catch_animal_container);
  stage.removeChild(game_time_image);
  clear_harpoon();
}
function close_movement() {
  clearInterval(countdown_timer);
  gamestart = false;
  clese_bird();
  clese_fish();
  clese_bubble();
  clear_animal();
  close_game_event();
  close_fishmanwalk();

}
function create_dolphin_container(){
  dolphin_container = new createjs.Container();
  var dolphin_text = new createjs.Text("粉紅色海豚名為「中華白海豚」依《野生\r\n\r\n動物保育法》公告之保育類野生動物名錄\r\n\r\n，已將中華白海豚列入瀕臨絕種的極度危\r\n\r\n險等級(CR)，讓我們一起守護可愛海豚，\r\n\r\n所以不要用任何方式獵殺海豚歐~魚叉也\r\n\r\n算，扣你10000分作為警惕。","bold 20px 標楷體","#000000");   
  dolphin_text.x=218;
  dolphin_text.y=145;
  var dolphin_background = new createjs.Shape();
  dolphin_background.graphics.beginFill("#000000").drawRect(0, 0, 800, 500);
  dolphin_background.alpha = 0.2;
  var dolphin_shape = new createjs.Shape();
  dolphin_shape.graphics.beginFill("#FFFFFF").drawRoundRect(200, 125, 400, 250,10);
  dolphin_shape.alpha = 1;
  var dolphin_last_button = new Button_Text("海豚對不起我知道錯了","bold 20px 微軟正黑體","#000000",250,325);
  dolphin_last_button.haver_background.graphics.beginFill("#FFA1B4").drawRoundRect(37, -6, 10*20+24, 34,10);
  dolphin_last_button.havermask.graphics.beginFill("#34AEC7").drawRoundRect(37, -6, 10*20+24, 34,10);
  dolphin_container.addChild(dolphin_background);
  dolphin_container.addChild(dolphin_shape);
  dolphin_container.addChild(dolphin_text);
  dolphin_container.addChild(dolphin_last_button);
  dolphin_container.visible=false;
  dolphin_last_button.addEventListener("mousedown",function(event){
    stage.removeChild(question_container);
    user_score += animalsource[6].score;
    now_score=user_score;
    score_board_text.text = (now == 1 ? "Score:" : "") + now_score + "";
    if (now == 2) {
      if (score_text_lenght != score_board_text.text.length)
        score_text_lenght = score_board_text.text.length;
      score_board_text.x = score_board.getwidth() / 2 - score_board_text.getMeasuredWidth() / 2 - 8 - score_board_text.text.length-10;
      score_board_text.y = score_board.y + 51.5 - score_board_text.getMeasuredHeight() / 2 - 3;
    }
    var a = score_board_text.x - (score_board.x - 512);
    var b = score_board_text.y - (score_board.y - 169);
    createjs.Tween.get(score_board).to({ x: 512, y: 169, scale: 0.65 }, 1000).call(() => {
      question_end_container.visible = true;
    })
    createjs.Tween.get(score_board_text).to({ x: a + 19, y: b + 13, scale: 1.5 }, 1000).call(() => {
      question_end_container.visible = true;
      if(user_score + user.score_sum >= 77777 && reach==false)show_reach_animation();
    })
    dolphin_container.visible=false;
    clearInterval(question_timer);
    new Score_Text(""+animalsource[6].score,"bold 30px Arial","#000000",score_board.getwidth()/2+score_board.x,score_board_text.y);
    update_score();
    });
  stage.addChild(dolphin_container);
}
function game_end() {
  close_movement();
  gamestart=false;
  if (catch_fish.length != 0)
    fish_jump();
  soundcontrol["BGM"].stop();
  back_container.visible = false;
  start_time_text.text = "Time's up！";
  if(!muted)
  createjs.Sound.play("game_end");
  start_time_text.x -= 40;
  stage.addChild(start_time_text);
  fisherman_harpoon.scaleX *= fisherman_harpoon.scaleX < 0 ? -1 : 1;
  fisherman_harpoon.rotation = 35;
  fisherman.scaleX *= fisherman.scaleX < 0 ? -1 : 1;
  fisherman_harpoon.revise_position();
  createjs.Tween.get(fisherman_harpoon).wait(3100).to({ x: -Math.abs(fisherman.getwidth()) + 25 * (fisherman.scaleX < 0 ? 1 : -1) }, 3500);
  createjs.Tween.get(fisherman).wait(3100).to({ x: -Math.abs(fisherman.getwidth()) }, 3500).call(() => {
    clear_game_stage();
    clear_harpoon();
    score_init();
  });
}
function countdown() {
  if (!stop) {
    countdown_time--;
    countdown_text.text = "" + countdown_time;
    if (countdown_time == 0) {
      game_end();
    }
  }
}
function clear_harpoon() {
  for (i = 0; i < harpoon_list.length; i++) {
    stage.removeChild(harpoon_list[i]);
  }
}
var num_score_fish = 0;
function score_init() {
  now = 2;
  background.image = loader.getResult("score_background");
  num_score_fish = 0;
  sea.y = 270;
  sea.alpha = 0.45
  fisherman.y = 380
  score_board.scale = 0.5;
  score_board.y = 140;
  score_board.x = 0;
  score_catch_animal_num = [0, 0, 0, 0, 0]
  fisherman.scale = fisherman_harpoon.scale = 0.2496;
  fisherman.x = canvas_width + fisherman.getwidth();
  fisherman_harpoon.rotation = 35;
  fisherman_harpoon.revise_position();
  stage.setChildIndex(fisherman, 1);
  stage.setChildIndex(fisherman_harpoon, 2);
  stage.setChildIndex(bucket, 1);
  stage.setChildIndex(score_board, 1);
  bucket.visible = true;
  score_board.visible = true;
  score_board_text.scale = 1.4
  score_board_text.rotation = -4.5;
  score_board_text.text = user_score + "";
  score_board_text.x = score_board.getwidth() / 2 - score_board_text.getMeasuredWidth() / 2 - 8 - score_board_text.text.length;
  score_board_text.y = score_board.y + 51.5 - score_board_text.getMeasuredHeight() / 2 - 3;
  bucket.y = 257;
  bucket.x = -0;
  score_board.y = 140;
  for (i = 0; i < catch_fish.length; i++) {
    catch_fish[i].scale *= 1.56;
    catch_fish[i].alpha = 1;
    stage.setChildIndex(catch_fish[i], 3);
    catch_fish[i].y = (fisherman.y - (getrandom(50)) * 1.56 + 20 * 1.56);
    catch_fish[i].x = (fisherman.x + (35 - getrandom(50)) * 1.56)
    createjs.Tween.get(catch_fish[i]).to({ x: 255 + (50 - getrandom(50)) * 1.56 }, 3500);
  }
  var brid_num = 0;
  createjs.Tween.get(fisherman).to({ x: 255 }, 3500);
  createjs.Tween.get(fisherman_harpoon).to({ x: 255 + 40 * (fisherman.scaleX < 0 ? 1 : -1) }, 3500).call(() => {
    create_score_catch_animal_container();
    createjs.Tween.get(fisherman).wait(1000).call(() => {
      for (i = 0; i < catch_fish.length; i++) {
        if (catch_fish[i].animaltype == 0) {
          brid_num++;
          createjs.Tween.get(catch_fish[i]).wait(brid_num * 200).to({ y: 220, x: 380 }, 600).wait(600).to({ y: bucket.y + 10, x: bucket.x + bucket.getwidth() / 2 }, 600).to({ visible: false }).call(() => {
            brid_num--;
            if(!muted)
            createjs.Sound.play("bell");
            new Score_Text("+" + animalsource[0].score, "bold 20px 微軟正黑體", "#000000", bucket.x + bucket.getwidth() / 2, bucket.y + 10);
            user_score += animalsource[0].score;
            if(brid_num == 0){
              if (catch_fish.length != 0){
                var wait_time =2000/catch_fish.length;
                for (i = 0; i < catch_fish.length; i++) {
                  createjs.Tween.get(catch_fish[i]).wait(wait_time * i ).to({ visible: false, x: score_catch_animal_container.children[catch_fish[i].animaltype].x + score_catch_animal_container.x, y: score_catch_animal_container.children[catch_fish[i].animaltype].y + score_catch_animal_container.y }, 599).call(() => {
                    score_catch_animal_num[catch_fish[num_score_fish++].animaltype]++;
                    if(!muted){
                      createjs.Sound.play("alarm");
                    }
                    score_catch_animal_text_update();
                  })
                }
              }
              else {
                question_end();
              }
            }
          });
          catch_fish = arrayRemove(catch_fish, catch_fish[i]);
          i--;
          continue;
        }
        if(catch_fish[i].animaltype == 6){
          dolphin_list.push(catch_fish[i]);
          catch_fish = arrayRemove(catch_fish, catch_fish[i]);
          i--;
          continue;
        }
      }
      if(catch_animal_num[0] == 0)
        if (catch_fish.length != 0){
          var wait_time =2000/catch_fish.length;
          for (i = 0; i < catch_fish.length; i++) {
            createjs.Tween.get(catch_fish[i]).wait(wait_time * i ).to({ visible: false, x: score_catch_animal_container.children[catch_fish[i].animaltype].x + score_catch_animal_container.x, y: score_catch_animal_container.children[catch_fish[i].animaltype].y + score_catch_animal_container.y }, 599).call(() => {
              score_catch_animal_num[catch_fish[num_score_fish++].animaltype]++;
              if(!muted){
                createjs.Sound.play("alarm");
              }
              score_catch_animal_text_update();
            })
          }
        }
        else {
          question_end();
        }
      
    });
  });
}
function create_game_timer() {
  countdown_time = game_time;
  countdown_text = new createjs.Text(game_time + "", "30px Arial", "#000000");
  countdown_text.x = canvas_width / 2 - 10;
  countdown_text.y = 20;
  countdown_timer = setInterval(countdown, 1000)
  stage.addChild(countdown_text);
}
function catech_animal_update() {
  catch_animal_text.text = " X  " + catch_animal_num[1] + "\n\n X  " + catch_animal_num[2] + "\n\n X  " + catch_animal_num[3] + "\n\n X  " + catch_animal_num[4];
}
function create_catch_animal_container() {
  catch_animal_text.text = " X  0\n\n X  0\n\n X  0\n\n X  0";
  catch_animal_text.x = 25;
  catch_animal_text.y = -5;
  catch_animal_num = [0, 0, 0, 0, 0];
  catch_animal_container = new createjs.Container();
  var die_fish1 = new createjs.Sprite(animalsource[1].spritesheet, "normal_die");
  var die_fish2 = new createjs.Sprite(animalsource[2].spritesheet, "normal_die");
  var die_fish3 = new createjs.Sprite(animalsource[3].spritesheet, "normal_die");
  var die_fish4 = new createjs.Sprite(animalsource[4].spritesheet, "normal_die");
  die_fish1.scale = 0.08;
  die_fish2.scale = 0.08;
  die_fish3.scale = 0.08;
  die_fish4.scale = 0.08;
  catch_animal_container.addChild(die_fish1);
  catch_animal_container.addChild(die_fish2);
  catch_animal_container.addChild(die_fish3);
  catch_animal_container.addChild(die_fish4);
  catch_animal_container.addChild(catch_animal_text);
  stage.addChildAt(catch_animal_container, 1);
  die_fish2.y = die_fish1.y + 23;
  die_fish3.y = die_fish2.y + 23;
  die_fish4.y = die_fish3.y + 23;
  catch_animal_container.x = canvas_width - 70;
  catch_animal_container.y = 50;
}
function score_catch_animal_text_update() {
  score_catch_animal_text.text = ("  X  " + (score_catch_animal_num[1] >= 10 ? (score_catch_animal_num[1] + "") : (score_catch_animal_num[1] + "  ")) + "                       X  " + (score_catch_animal_num[2] >= 10 ? (score_catch_animal_num[2] + "") : (score_catch_animal_num[2] + "  ")) + "                           X  " + (score_catch_animal_num[3] >= 10 ? (score_catch_animal_num[3] + "") : (score_catch_animal_num[3] + "  ")) + "                        X  " + score_catch_animal_num[4] + "");
  if (num_score_fish == catch_fish.length) {
    question_init();
  }
}
function create_score_catch_animal_container() {
  score_catch_animal_text = new createjs.Text("  X  0                         X  0                             X  0                          X  0", "18px Arial", "#000000");
  score_catch_animal_text.x = 25;
  score_catch_animal_text.y = -5;
  score_catch_animal_container = new createjs.Container();
  var die_fish1 = new createjs.Sprite(animalsource[1].spritesheet, "normal_die");
  var die_fish2 = new createjs.Sprite(animalsource[2].spritesheet, "normal_die");
  var die_fish3 = new createjs.Sprite(animalsource[3].spritesheet, "normal_die");
  var die_fish4 = new createjs.Sprite(animalsource[4].spritesheet, "normal_die");
  die_fish1.scale = 0.1872;
  die_fish2.scale = 0.1872;
  die_fish3.scale = 0.1872;
  die_fish4.scale = 0.1872;
  score_catch_animal_container.addChild(score_catch_animal_text);
  score_catch_animal_container.addChild(die_fish1);
  score_catch_animal_container.addChild(die_fish2);
  score_catch_animal_container.addChild(die_fish3);
  score_catch_animal_container.addChild(die_fish4);
  stage.addChild(score_catch_animal_container);
  die_fish2.x = die_fish1.x + 150;
  die_fish3.x = die_fish2.x + 170;
  die_fish4.x = die_fish3.x + 165;
  score_catch_animal_container.x = 155;
  score_catch_animal_container.y = 100;
}
function create_harpoon_text() {
  harpoon_text.x = canvas_width - 110;
  harpoon_text.y = 20;
  stage.addChild(harpoon_text);
}
function create_game_time_image() {
  game_time_image.x = canvas_width / 2 - 48;
  game_time_image.y = 12.5;
  game_time_image.scale = 0.345;
  stage.addChild(game_time_image);
}
function create_score_board_update() {
  score_board_text.scale = 1;
  score_board_text.rotation = 0;
  score_board_text.text = "Score:0"
  score_board_text.visible = true;
  score_board_text.x = back_container.x + 50;
  score_board_text.y = harpoon_text.y;
  score_update_timer = setInterval(score_text_update, 10);
}
var score_text_lenght = 0;
function score_text_update() {
  if (user_score != now_score) {
    v =Math.floor(((user_score-now_score)/250)+(now_score > user_score?-2:2));
    if (Math.abs(now_score - user_score) < Math.abs(v)) now_score = user_score;
    else {
      now_score += v;
    }
    if (now == 2) {
      if (score_text_lenght != score_board_text.text.length)
        score_text_lenght = score_board_text.text.length;
      score_board_text.x = score_board.getwidth() / 2 - score_board_text.getMeasuredWidth() / 2 - 8 - score_board_text.text.length;
      score_board_text.y = score_board.y + 51.5 - score_board_text.getMeasuredHeight() / 2 - 3;
    }
    score_board_text.text = (now == 1 ? "Score:" : "") + now_score + "";
  }
}
function game_start() {
  gamestart = true;
  back_container.visible = true;
  harpoon_update();
  create_game_time_image();
  create_harpoon_text();
  create_catch_animal_container();
  create_game_timer();
  create_score_board_update();
  game_event();
  open_bubble();
  open_fish();
  open_bird();
  $.ajax({
    url:"startgame",
    method:'GET',
    error:(err)=>{console.log("err")},
    success: function (result) {
      game_id = result.game_id;
    }
  });
  BGM_change();
}
function game_init() {
  now = 1;
  clese_bird();
  clese_fish();
  clear_animal();
  clese_bubble();
  soundcontrol["BGM"].stop();
  dolphin_list = new Array();
  show_catch_animal_num = [0, 0, 0, 0, 0];
  catch_animal_num = [0, 0, 0, 0, 0];
  harpoon_list = new Array();
  animal_list = new Array();
  catch_fish = new Array();
  start_time_text = new createjs.Text("3", "40px Arial", "#000000");
  start_time_text.x = canvas_width / 2 - 10;
  start_time_text.y = 200;
  start_time_text.alpha = 0;
  stage.addChild(start_time_text);
  createjs.Tween.get(start_time_text).wait(1000).to({ alpha: 1 }, 1000).to({ text: "2" }).to({ alpha: 0 }).to({ alpha: 1 }, 1000).to({ text: "1" }).to({ alpha: 0 }).to({ alpha: 1 }, 1000).to({ x: 360, text: "Start！" }).wait(1000).call(() => {
    stage.removeChild(start_time_text);
    game_start();
    //score_init();
  });
}
function close_fishmanwalk() {
  clearInterval(fishman_walk);
}
function open_fishmanwalk() {
  fishman_walk = setInterval(() => {
    if (!stop) {
      if (fisherman.scaleX < 0) {
        fisherman.x += 0.5;
        fisherman_harpoon.x = fisherman.x + 25;
      }
      else {
        fisherman.x -= 0.5;
        fisherman_harpoon.x = fisherman.x - 25;
      }
      if (fisherman.x + 75 >= canvas_width || fisherman.x < 75) {
        fisherman.scaleX *= -1;
        fisherman_harpoon.rotation *= -1;
      }
    }
  }, 20);
}
function close_game_event() {
  stage.removeEventListener("stagemousemove", mousemove);
  stage.removeEventListener("mousedown", mousedown);
  document.onmousedown = null;
  document.onkeydown = null;
  document.onkeyup = null;
}
function open_fish_ad() {
  //stage.addChild(fish_ad);
  fish_ad.visible = true;
  stage.setChildIndex(fish_ad, stage.numChildren - 2);
  fish_ad.y = 400;
  fish_ad.x = canvas_width + 300;
  fish_ad.scale = 0.5;
  //stage.addChild(fish_ad);
  generate_fish_ad = setInterval(function () {
    fish_ad.x -= 2;
    if (fish_ad.x <= -300) fish_ad.x = canvas_width + 250;
  }, 20);
}
function close_fish_ad() {
  //stage.removeChild(fish_ad);
  fish_ad.visible = false;
  clearInterval(generate_fish_ad);
}
function clese_bubble() {
  clearInterval(generate_bubble);
}
function clese_fish() {
  clearInterval(generate_fish);
}
function clese_bird() {
  clearInterval(generate_bird);
}
function labbybutton_mouseover(index) {
  labbybutton_source[index].haver.visible = true;
  labbybutton_source[index].underline.visible = true;
}
function labbybutton_mouseout(index) {
  labbybutton_source[index].haver.visible = false;
  labbybutton_source[index].underline.visible = false;
}
var labbybutton_source = new Array();
function create_labbybutton() {
  labbybutton_container = new createjs.Container();//34AEC7
  var start = new Button_Text("開始遊戲", "bold 20px 微軟正黑體", "#000000", 0, 0);
  var rule = new Button_Text("規則說明", "bold 20px 微軟正黑體", "#000000", 0, 55);
  var ranking = new Button_Text("排行榜", "bold 20px 微軟正黑體", "#000000", 10, 110);
  start.havermask.addEventListener("mousedown", function (event) {
    if(!rule_close)return;
    labbybutton_container.visible = false;
    game_init();
  });
  ranking.havermask.addEventListener("mousedown", function () {
    if(!rule_close)return;
    labbybutton_container.visible = false;
    ranking_init();
  });
  rule.havermask.addEventListener("mousedown", function (event) {
    if(!rule_close)return;
    rule_close=false;
    rule_container.visible = true;
    event.target.parent.havermask.cursor = "defult";
    event.target.parent.haver.visible = false;
    event.target.parent.haver_background.alpha=0.4;
  });
  stage.enableMouseOver(100);
  labbybutton_container.addChild(start);
  labbybutton_container.addChild(rule);
  labbybutton_container.addChild(ranking);
  labbybutton_container.x = 325;
  labbybutton_container.y = 200;
  stage.addChild(labbybutton_container);
}
function get_totalrank(){
  now=4;
  $.ajax({
    url: "gettotalrank",
    method:'GET',
    error:(err)=>{console.log(err)},
    success: function (result) {
      rank_user_list = result;
      update_rank();
    }
  });
}
function get_highrank(){
  now=3;
  $.ajax({
    url: "gethighrank",
    method:'GET',
    error:(err)=>{console.log(err)},
    success: function (result) {
      rank_user_list = result;
      update_rank();
    }
  });
}
function update_rank(){
  rank_container.children[3].image =null;
  rank_container.children[4].image =null;
  rank_container.children[5].image =null;
  
  var first_image=new createjs.Bitmap(((now == 3?rank_user_list[0].score_high:rank_user_list[0].score_sum) == 0)?"":("/personal/profile-photo/"+rank_user_list[0].avatar));
  first_image.image.onload=()=>{
    rank_container.children[3].image =first_image.image;
    rank_container.children[3].scale = 1.0/(( rank_container.children[3].image.width> rank_container.children[3].image.height? rank_container.children[3].image.width: rank_container.children[3].image.height)/80.0);
    rank_container.children[3].x=205+(80-rank_container.children[3].getwidth())/2.0;
    rank_container.children[3].y=110+(80-rank_container.children[3].getheight())/2.0;
    stage.update();
  }
   var second_image=new createjs.Bitmap(((now == 3?rank_user_list[1].score_high:rank_user_list[1].score_sum) == 0)?"":("/personal/profile-photo/"+rank_user_list[1].avatar));
   second_image.image.onload=()=>{
    rank_container.children[4].image =second_image.image;
    rank_container.children[4].scale = 1.0/(( rank_container.children[4].image.width> rank_container.children[4].image.height? rank_container.children[4].image.width: rank_container.children[4].image.height)/80.0);
    rank_container.children[4].x=100+(80-rank_container.children[4].getwidth())/2.0;
    rank_container.children[4].y=170+(80-rank_container.children[4].getheight())/2.0;
    stage.update();
  }
 var third_image=new createjs.Bitmap(((now == 3?rank_user_list[2].score_high:rank_user_list[2].score_sum) == 0)?"":("/personal/profile-photo/"+rank_user_list[2].avatar));

 third_image.image.onload=()=>{
    rank_container.children[5].image =third_image.image;
    rank_container.children[5].scale = 1.0/(( rank_container.children[5].image.width> rank_container.children[5].image.height? rank_container.children[5].image.width: rank_container.children[5].image.height)/80.0);
    rank_container.children[5].x=310+(80-rank_container.children[5].getwidth())/2.0;
    rank_container.children[5].y=200+(80-rank_container.children[5].getheight())/2.0;
    stage.update();
  }
  for(var j =0;j<rank_user_list.length;j++){
    if((now == 3?rank_user_list[j].score_high:rank_user_list[j].score_sum) != 0){
      var a =rank_user_list[j].name.split("");
      rank_name_text[j].text = a.length==1?"O":a.length==2? (a[0]+"O"):a[0]+"O"+a[a.length-1];
      rank_score_text[j].text = (j>2?"分數:":"")+(now == 3?rank_user_list[j].score_high:rank_user_list[j].score_sum);
    }
    else{
      rank_name_text[j].text = "";
      rank_score_text[j].text = "";
    }
   }
  rank_name_text[0].x = 205 + 40- rank_name_text[0].getMeasuredWidth() / 2 ;
  rank_score_text[0].x = 205 + 40- rank_score_text[0].getMeasuredWidth() / 2 ;
  rank_name_text[1].x = 100+40- rank_name_text[1].getMeasuredWidth() / 2 ;
  rank_score_text[1].x = 100+40- rank_score_text[1].getMeasuredWidth() / 2 ;
  rank_name_text[2].x = 310+40- rank_name_text[2].getMeasuredWidth() / 2 ;
  rank_score_text[2].x = 310+40- rank_score_text[2].getMeasuredWidth() / 2 ;
 // rank_container.children[3].x=0;
  // rank_container.children[3].y=0;
}
function show_reach_animation(){
  reach_conrainer = new createjs.Container();
  stage.addChild(reach_conrainer);
  var reach_fish_list = new Array();
  var reach_background_one = new createjs.Shape();
  var text01 = new createjs.Text("大","Bold 20px 微軟正黑體","#FFFFFF");
  var text02 = new createjs.Text("豐","Bold 20px 微軟正黑體","#FFFFFF");
  var text03 = new createjs.Text("收","Bold 20px 微軟正黑體","#FFFFFF");
  reach_background_one.graphics.beginFill("#000000").drawRect(0,0,800,500);
  reach_background_one.alpha=0;
  var food = new createjs.Bitmap(loader.getResult("food"));
  var text_background = new createjs.Shape();
  var text = new createjs.Text("恭喜獲得生活知能時數！！！","bold 20px 微軟正黑體","#FFFFFF");
  reach_close = false;
  food.visible= false;
  reach_conrainer.addChild(reach_background_one);
  createjs.Tween.get(reach_background_one).to({alpha:0.7},800).call(function(){
    food.scale=0.47;
    food .x = (canvas_width/2 - food.getwidth()/2);
    food.y = 600;
    for(var j =0;j<150;j++){
      var reach_fish = new fish(getrandom(4)+1,false);
      reach_fish.rotation=getrandom(180)-180;
      reach_fish.gotoAndStop("normal_die");
      reach_conrainer.addChild(reach_fish);
      reach_fish.x = getrandom(740)+30;
      reach_fish.scale=0.2;
      reach_fish.y = -100;
      createjs.Tween.get(reach_fish).wait(j*30).to({y:500-(j/15)*30,scale:0.5},300-(j/15)*17)
      reach_fish_list.push(reach_fish);
    }
    text01.shadow = new createjs.Shadow("#000000", 5, 6, 1);
    text01.x=120;
    text01.y=30;
    text01.scale=0.1;
    reach_conrainer.addChild(text01);
    text02.shadow = new createjs.Shadow("#000000", 5, 5, 1);
    text02.x=text01.x+200;
    text02.y=30;
    text02.scale=0.1;
    reach_conrainer.addChild(text02);
    text03.shadow = new createjs.Shadow("#000000", 5, 5, 1);
    text03.x=text02.x+200;
    text03.y=30;
    text03.scale=0.1;
    reach_conrainer.addChild(text03);
    reach_conrainer.addChild(food);
    createjs.Tween.get(food).wait(300-(149/15)*17+149*30+500).to({visible:true}).to({y:(canvas_height/2-food.getheight()/2)-100},1000).to({y:(canvas_height/2-food.getheight()/2)+100},1000).to({y:(canvas_height/2-food.getheight()/2)+50},1000).call(function(){
      createjs.Tween.get(text01).to({scale:6},600).call(function(){
        createjs.Tween.get(text02).to({scale:6},600).call(function(){
          createjs.Tween.get(text03).to({scale:6},600).call(function(){
            text_background.graphics.beginFill("#000000").drawRoundRect(food.x+150-200+3,food.y+283,385,50,10);
            text_background.alpha=0;
            text.x = food.x+150-200+68+3;
            text.y = food.y+298;
            text.alpha=0;
            reach_conrainer.addChild(text_background);
            reach_conrainer.addChild(text);
            createjs.Tween.get(text_background).wait(300).to({alpha:0.8},1000);
            createjs.Tween.get(text).wait(300).to({alpha:1},1000).call(function(){
              food.addEventListener("mousedown",function(event){
                createjs.Tween.get(reach_conrainer).to({alpha:0},1000).call(function(){
                  stage.removeChild(reach_conrainer);
                  reach_close=true;
                });
              });
              food.addEventListener("mouseover",function(event){
                food.cursor="pointer";
              });
                createjs.Tween.get(food).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600);
            })
          });
        });
      });
    });
  });
}
function show_ting_animation(){
  reach_conrainer = new createjs.Container();
  stage.addChild(reach_conrainer);
  var reach_fish_list = new Array();
  var reach_background_one = new createjs.Shape();
  var text01 = new createjs.Text("我","Bold 20px 微軟正黑體","#FFFFFF");
  var text02 = new createjs.Text("愛","Bold 20px 微軟正黑體","#FFFFFF");
  var text03 = new createjs.Text("你","Bold 20px 微軟正黑體","#FFFFFF");
  reach_background_one.graphics.beginFill("#000000").drawRect(0,0,800,500);
  reach_background_one.alpha=0;
  var food = new createjs.Bitmap(loader.getResult("food"));
  var text_background = new createjs.Shape();
  var text = new createjs.Text("恭喜獲得生活知能時數ㄇㄨㄚ","bold 20px 微軟正黑體","#FFFFFF");
  reach_close = false;
  food.visible= false;
  reach_conrainer.addChild(reach_background_one);
  createjs.Tween.get(reach_background_one).to({alpha:0.7},800).call(function(){
    food.scale=0.47;
    food .x = (canvas_width/2 - food.getwidth()/2);
    food.y = 600;
    for(var j =0;j<300;j++){
      var reach_fish = new createjs.Bitmap(loader.getResult("heard"+(getrandom(2)+1)+""));
      reach_fish.rotation=getrandom(180)-180;
      //reach_fish.gotoAndStop("normal_die");
      reach_conrainer.addChild(reach_fish);
      reach_fish.x = getrandom(740)+30;
      reach_fish.scale=0.2;
      reach_fish.y = -100;
      createjs.Tween.get(reach_fish).wait(j*30).to({y:500-(j/30)*30,scale:0.5},300-(j/30)*17)
      reach_fish_list.push(reach_fish);
    }
    text01.shadow = new createjs.Shadow("#000000", 5, 6, 1);
    text01.x=120;
    text01.y=30;
    text01.scale=0.1;
    reach_conrainer.addChild(text01);
    text02.shadow = new createjs.Shadow("#000000", 5, 5, 1);
    text02.x=text01.x+200;
    text02.y=30;
    text02.scale=0.1;
    reach_conrainer.addChild(text02);
    text03.shadow = new createjs.Shadow("#000000", 5, 5, 1);
    text03.x=text02.x+200;
    text03.y=30;
    text03.scale=0.1;
    reach_conrainer.addChild(text03);
    reach_conrainer.addChild(food);
    createjs.Tween.get(food).wait(300-(149/15)*17+149*30+500).to({visible:true}).to({y:(canvas_height/2-food.getheight()/2)-100},1000).to({y:(canvas_height/2-food.getheight()/2)+100},1000).to({y:(canvas_height/2-food.getheight()/2)+50},1000).call(function(){
      createjs.Tween.get(text01).to({scale:6},600).call(function(){
        createjs.Tween.get(text02).to({scale:6},600).call(function(){
          createjs.Tween.get(text03).to({scale:6},600).call(function(){
            text_background.graphics.beginFill("#000000").drawRoundRect(food.x+150-200+3,food.y+283,385,50,10);
            text_background.alpha=0;
            text.x = food.x+150-200+68+3;
            text.y = food.y+298;
            text.alpha=0;
            reach_conrainer.addChild(text_background);
            reach_conrainer.addChild(text);
            createjs.Tween.get(text_background).wait(300).to({alpha:0.8},1000);
            createjs.Tween.get(text).wait(300).to({alpha:1},1000).call(function(){
              food.addEventListener("mousedown",function(event){
                createjs.Tween.get(reach_conrainer).to({alpha:0},1000).call(function(){
                  stage.removeChild(reach_conrainer);
                  reach_close=true;
                });
              });
              food.addEventListener("mouseover",function(event){
                food.cursor="pointer";
              });
                createjs.Tween.get(food).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600).to({scale:0.49},600).to({scale:0.45},600);
            })
          });
        });
      });
    });
  });
}
function create_rank_container(){
  rank_name_text = new Array();
  rank_score_text = new Array();
  rank_background = new createjs.Bitmap(loader.getResult("rank_single"));
  rank_background.scale=0.65;
  rank_background.x=30;
  rank_background.y=20;
  var single_mask = new createjs.Shape();
  single_mask.graphics.beginFill("#34AEC7").drawRoundRect(48,38, 153, 31,5,0,0,0);
  single_mask.alpha = 0.01;
  single_mask.addEventListener("mousedown",function(event){
    rank_background.image = loader.getResult("rank_single");
    now=3;
    get_highrank();
  })
  single_mask.addEventListener("mouseover",function(event){
    event.target.cursor="pointer";
  })
  var total_mask = new createjs.Shape();
  total_mask.graphics.beginFill("#000000").drawRoundRect(203,38, 153, 31,5,0,0,0);
  total_mask.alpha = 0.01;
  total_mask.addEventListener("mousedown",function(event){
    now=4;
    get_totalrank();
    rank_background.image = loader.getResult("rank_total");
  })
  total_mask.addEventListener("mouseover",function(event){
    event.target.cursor="pointer";
  })

  var first_circle = new createjs.Shape();
  first_circle.graphics.beginFill("red").drawCircle(245,150,40); 
  var first_user_image=new createjs.Bitmap("");
  first_user_image.mask=first_circle;
  first_user_image.x=205;
  first_user_image.y=110;
  var second_circle = new createjs.Shape();
  second_circle.graphics.beginFill("red").drawCircle(140,210,40);
  var second_user_image=new createjs.Bitmap("");
  second_user_image.mask=second_circle;
  second_user_image.x=100;
  second_user_image.y=170;
  var thrid_circle = new createjs.Shape();
  thrid_circle.graphics.beginFill("red").drawCircle(350 ,240,40);
  var third_user_image=new createjs.Bitmap("");
  third_user_image.mask=thrid_circle;
  third_user_image.x=310;
  third_user_image.y=200;
  rank_container.addChild(rank_background); 
  rank_container.addChild(single_mask); 
  rank_container.addChild(total_mask); 
  rank_container.addChild(first_user_image); 
  rank_container.addChild(second_user_image); 
  rank_container.addChild(third_user_image); 

  for(var j =0;j<10;j++){
    rank_score_text.push(new createjs.Text("","bold 20px 微軟正黑體","#000000"));
    rank_container.addChild(rank_score_text[j]);
  }
  for(var j =0;j<10;j++){
    rank_name_text.push(new createjs.Text("","bold 20px 微軟正黑體","#000000"));
    rank_container.addChild(rank_name_text[j]);
  }
  rank_name_text[0].x = first_user_image.x;
  rank_name_text[0].y = first_user_image.y-30;
  rank_name_text[1].x = second_user_image.x;
  rank_name_text[1].y = second_user_image.y-30;
  rank_name_text[2].x = third_user_image.x;
  rank_name_text[2].y = third_user_image.y-30;
  rank_score_text[0].x = first_user_image.x;
  rank_score_text[0].y = first_user_image.y+87;
  rank_score_text[1].x = second_user_image.x;
  rank_score_text[1].y = second_user_image.y+87;
  rank_score_text[2].x = third_user_image.x;
  rank_score_text[2].y = third_user_image.y+87;
  for(var j=3;j<10;j++){
    rank_name_text[j].x = 485;
    rank_name_text[j].y = 120+51*(j-3);
    rank_score_text[j].x = 568;
    rank_score_text[j].y = 120+51*(j-3);
  }
}
function ranking_init() {
  background.image = loader.getResult("rank_background");
  back_container.visible = true;
  fisherman.visible = false;
  fisherman_harpoon.visible = false;
  bucket.visible = false;
  score_board.visible = false;
  score_board_text.visible = false;
  sea.visible = false;
  now = 3;
  rank_background.image = loader.getResult("rank_single");
  BGM_change();
  for (var j = 0; j < animal_list.length; j++)animal_list[j].visible = false;
  close_fishmanwalk();
  close_fish_ad();
  clese_bird();
  clese_fish();
  clear_animal();
  clese_bubble();
  rank_container.visible=true;
  get_highrank();
  //close_movement();
}
var at ;
var bt;
var resumeAudioContext = function() {
	// handler for fixing suspended audio context in Chrome	
	try {
		if (createjs.WebAudioPlugin.context && createjs.WebAudioPlugin.context.state === "suspended") {
			createjs.WebAudioPlugin.context.resume();
    }
	} catch (e) {
		// SoundJS context or web audio plugin may not exist
		console.error("There was an error while trying to resume the SoundJS Web Audio context...");
		console.error(e);
  }
  if(done_loading){
    window.removeEventListener("click", resumeAudioContext);
    stage.removeChild(loading_text);
    stage.removeChild(music_text);
    init();
  }
	// Should only need to fire once
};
function BGM_change(){
  if(soundcontrol["BGM"] != null)
  soundcontrol["BGM"].stop();
  if(now == 0){
    soundcontrol["BGM"] = createjs.Sound.play("LabbyBGM",new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.7,duration:1120000}));
  }
  else if(now == 1){
    if(getrandom(2) == 1)
     soundcontrol["BGM"] = createjs.Sound.play("GameBGM"+"01",new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, volume: 0.6,startTime:6000,duration:460000}));
    else
      soundcontrol["BGM"] = createjs.Sound.play("GameBGM"+"02",new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, volume: 0.7}));
  }
  else if(now >=3){
    soundcontrol["BGM"] = createjs.Sound.play("RankBGM",new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, volume: 0.9,loop:-1}));
  }
  else if(now ==-1){
    soundcontrol["BGM"] = createjs.Sound.play("DolphinBGM",new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, volume: 0.6,loop:-1}));
  }
  else if(now ==2){
    soundcontrol["BGM"] = createjs.Sound.play("QuestionBGM",new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, volume: 0.6,loop:-1}));
  }
   soundcontrol["BGM"].paused=muted;
  
}
function labby_init() {
  //usergame_init();
  //getuser();
  now = 0;
  BGM_change();
  gamestart = false;
  close_game_event();
  clese_bird();
  clese_fish();
  clese_bubble();
  clearInterval(score_update_timer);
  stage.setChildIndex(sea,1);
  stage.setChildIndex(fisherman,1);
  user_score = 0;
  now_score = 0;
  rank_container.visible=false;
  fisherman.visible = true;
  bucket.visible = false;
  score_board.visible = false;
  score_board_text.visible = false;
  fisherman_harpoon.visible = true;
  sea.visible = true;
  stop = false;
  back_container.visible = false;
  harpoon_list = new Array();
  animal_list = new Array();
  bubble_list = new Array();
  background.image = loader.getResult("game_background");
  background.scale = 0.5;
  fisherman.scale = 0.16;
  fisherman_harpoon.scale = 0.16;
  fisherman.x = 75;
  fisherman.y = canvas_seaheight - 25;
  fisherman.regX = fisherman.image.width / 2;
  fisherman.regY = fisherman.image.height / 2;
  fisherman_harpoon.rotation = 35;
  fisherman_harpoon.x = fisherman.x + 25 * (fisherman.scaleX < 0 ? 1 : -1);
  fisherman_harpoon.y = fisherman.y - 5;
  sea.scale = 0.5;
  sea.alpha = 0.3;
  sea.x = 0;
  sea.y = 0;
  labbybutton_container.visible = true;
  dolphin_container.visible=false;;
  for (var j = 0; j < 3; j++) {
    question_num[j] = question_list[j].length;
  }
  harpoon_list = new Array();
  open_fishmanwalk();
  open_fish_ad();
  open_fish();
  open_bubble();
  open_bird();
}
