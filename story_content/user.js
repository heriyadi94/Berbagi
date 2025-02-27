function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ug163Ff6jk":
        Script1();
        break;
      case "5zJowsqM6Kp":
        Script2();
        break;
      case "6AjXDNUswJi":
        Script3();
        break;
      case "5m1K3tOPj1G":
        Script4();
        break;
      case "6TaMQAInbXb":
        Script5();
        break;
      case "6cKh53tjNxU":
        Script6();
        break;
      case "5Uqdc7zdJGw":
        Script7();
        break;
      case "6ey2madaJhD":
        Script8();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();

}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;

}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

