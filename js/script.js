var enableKeys = false;
$(function()
{
	$(document).keydown(function(objEvent) 
	{
		if (objEvent.ctrlKey && !enableKeys) 
		{
			if (objEvent.shiftKey) 
			{
			        if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
			} 
			else 
			{
				if (objEvent.keyCode == 65 || objEvent.keyCode == 85) return false;// Disable CTRL + A / U
			}
        }
	});
});
var root = 0;
var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
var pMusic = document.getElementById("music");
pMusic.volume = 0.5;
pMusic.load();
var pMusicPlaying = 0;
var sMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
const commands = {
	skids:
	{
		cmd: 'skids',
		res: ':<span class="red"></span><br>#<span class="red"> korea</span><br># <span class="red"> faith</span><br></span>'
	},
	links: 
	{
		cmd: 'links',
		res: 'Links:<br># <span class="red"><a href="https://discord.gg/badge" target="_blank"><u>Discord</u></a></span> - My Discord Account.<br># <span class="red"><a href="https://github.com/82n" target="_blank"><u>Github</u></a></span> - Where i post my code<br># <span class="red"><a href="https://steamcommunity.com/id/Discordlnc" target="_blank"><u>Steam</u></a></span> - You can find me there <span class="green">Online</span> most of the time.<br># <span class="red"><u></u></a></span>'
	},
	visitors: 
	{
		cmd: 'visitors',
		res: 'Total Visits: <span class="red">' + visits + '</span>'
	},
	help: 
	{
		cmd: 'help',
		res: 'Available commands:<br><br><span class="red"># <span class="red">clear</span> - Really, it just clear. <br># <span class="red">screenfetch</span> - Fetches system information in the terminal.<br># <span class="red">links</span> - Links for others sites.<br># <span class="red">music [play/stop/link]</span> - Just BG Music.<br># <span class="red">visitors</span> - How many times people visited this site.<br></span>'
	}
}

var prephraseRoot = '<span class="red">root@skids.codes</span>:<span class="blue">~</span># ';
var prephrase = '<span class="red">guest@skids.codes</span>:<span class="blue">~</span># ';

var form = $('<div style="width: 100%;display: table"><div style="display: table-cell; width: 1%">' + prephrase + '</div>&nbsp<form id="form" style="display: table-cell; width :100%"><input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="tCommand" type="text" maxlength="48" class="nostyle" autofocus /></form></div>').appendTo('#content');

function OnlyRoot(command) {
	var res = '';
	res = '[ <span class="red">ERROR</span> ] This command can be run only as root!'
	$('<div>' + prephrase + command + '<p>' + res + '</p></div>').insertBefore(form)
}

function launchCommandAsRoot(command) 
{
	var res = '';
	if (command === './welcome.sh') res = 'wlc to <span class="red">skids.codes</span>!<br></span><br>Made By:</span><span class="red"> korea</span><br>Total Visits: <span class="red">actually idk but heres my number of logged ips: 420</span><br>Terminal Updated: <span class="red">never.</span><br><a href="" target="_blank"><u></u></a>:<span class="red"></span><br><br><b>Type \'help\' for more details on the commands</b>'
	else
	{
		window.alert("Nice try to changing \'root\' variable to 1");
		window.location = "https://youtu.be/LDU_Txk06tM?t=75";
		res = "Nice try to changing \'root\' variable to 1.";
		command = command.cmd;
	}
	$('<div>' + prephraseRoot + command + '<p>' + res + '</p></div>').insertBefore(form)
}

function launchCommandAsVisitor(command) 
{
	$('<div>' + prephrase + command.cmd + '<p>' + command.res + '</p></div>').insertBefore(form)
}

launchCommandAsRoot('./welcome.sh');

$('#content').niceScroll({
	cursorcolor: '#303030',
	cursorborder: '0px none',
	autohidemode: false,
	cursorwidth: "8px",
	cursorborderradius: "4px",
	railpadding: { top: 0, left: 0, right: 0, bottom: 10 }
});

//var mCommand = document.getElementById("tCommand");

function GetAge(dateString) 
{
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}

/*function AddFriend(Name, Description)
{
	var mReturn = '# <span class="red"><a href="#" onclick="mCommand.value = \'friend ' + Name.toLowerCase() + '\'"><u>' + Name + '</u></a></span> - ' + Description + '.<br>';
	return mReturn;
}*/

/*function InfoFriend(Name, RealName, Bday, Country, Steam, Web)
{
	var mReturn = 'Information:<br># <span class="red">Nick:</span> ' + Name;
	if (RealName !== undefined)
		mReturn += '<br># <span class="red">Real Name:</span> ' + RealName;
	if (Bday !== undefined)
	{
		var bDate = new Date(Bday);
		mReturn += '<br># <span class="red">Born: </span>' + sMonth[bDate.getMonth()] + ' ' + bDate.getDate() + ' ' + bDate.getFullYear() + ' <span class="red">(Age: ' + GetAge(Bday) + ')</span>';
	}
	if (Country !== undefined)
		mReturn += '<br># <span class="red">Country:</span> ' + Country;
	mReturn += '<br><br>Links:<br>'
	if (Steam !== undefined)
		mReturn += '# <span class="red"><a href="https://steamcommunity.com/profiles/' + Steam + '" target="_blank"><u>Steam</u></a></span><br>';
	if (Web !== undefined)
		mReturn += '# <span class="red"><a href="' + Web + '" target="_blank"><u>Web</u></a></span><br>';
	return mReturn;
}*/

$('form').on('submit', function(e) {
	e.preventDefault();
	try {
		var vInput = $('input').val().toLowerCase();
		if (root > 0) {
			launchCommandAsRoot(commands[$('input').val()]);
		} else {
			if (vInput.startsWith("./")) {
				if (vInput === "./root/welcome.sh") {
					OnlyRoot(vInput);
				} else {
					launchCommandAsVisitor({
						cmd: vInput,
						res: '<div><p>skids.codes: ' + vInput + ': No such file or directory</p></div>'
					});
				}
			} else if (vInput.startsWith("cd ") || vInput === "cd" || vInput.startsWith("mkdir ") || vInput === "mkdir" || vInput.startsWith("touch ") || vInput === "touch" || vInput.startsWith("rm ") || vInput === "rm" || vInput === "ls") {
				launchCommandAsVisitor({
					cmd: vInput,
					res: '<div><p>[ <span class="red">ERROR</span> ] Visitors can\'t use this type of command!</p></div>'
				});
			} else if (vInput.startsWith("su")) {
				var loginArray = vInput.split(/(\s+)/);
				var res = '';
				if (typeof loginArray[2] !== "undefined") {
					if (loginArray[2] === "visitor") {
						res = '[ <span class="red">ERROR</span> ] You\'re already logged as Visitor!';
					} else if (loginArray[2] === "root") {
						res = 'su: Authentication failure';
						if (typeof loginArray[4] !== "undefined" && MD5(loginArray[4]) === "8db96a12f8df8fea16e4eef54d280feb") {
							root = 1;
							res = '';
						}
					} else {
						res = 'skids.codes: No passwd entry for user ' + loginArray[2] + '';
					}
					launchCommandAsVisitor({
						cmd: loginArray[0] + ' ' + loginArray[2],
						res: '<div><p>' + res + '</p></div>'
					});
					if (root > 0)
						$('#content > *').not(':last').remove();
				} else {
					launchCommandAsVisitor({
						cmd: loginArray[0],
						res: '<div><p>' + res + '</p></div>'
					});
				}
			} else if (vInput.startsWith("music")) {
				if (vInput === "music play") {
					if (pMusicPlaying == 1) {
						launchCommandAsVisitor({
							cmd: vInput,
							res: '<div><p>[ <span class="red">ERROR</span> ] Music is already playing!</p></div>'
						});
					} else {
						pMusic.play();
						pMusicPlaying = 1;
						launchCommandAsVisitor({
							cmd: vInput,
							res: '<div><p>[ <span class="green">SUCCESS</span> ] Music playing!</p></div>'
						});
					}
				} else if (vInput === "music stop") {
					if (pMusicPlaying == 0) {
						launchCommandAsVisitor({
							cmd: vInput,
							res: '<div><p>[ <span class="red">ERROR</span> ] Music is already stopped!</p></div>'
						});
					} else {
						pMusic.pause();
						pMusic.currentTime = 0;
						pMusicPlaying = 0;
						launchCommandAsVisitor({
							cmd: vInput,
							res: '<div><p>[ <span class="green">SUCCESS</span> ] Music stopped!</p></div>'
						});
					}
				} else if (vInput === "music link") {
					var win = window.open("https://soundcloud.com/alex-tomkins-12653165/nitonb-make-it-home-exclusive", "_blank");
					win.focus();
					launchCommandAsVisitor({
						cmd: vInput,
						res: ''
					});
				} else {
					launchCommandAsVisitor({
						cmd: vInput,
						res: '<div><p>[ <span class="red">skids.codes</span> ] Usage: music [play/stop/link]</p></div>'
					});
				}
			} /*else if (vInput.startsWith("friend")) {
				if (vInput === "friend joffrey") {
					launchCommandAsVisitor({
						cmd: vInput,
						res: '<div><p>' + InfoFriend("Joffrey", "George", "2001-10-11", "Slovakia", "76561198282756062") + '</p></div>'
					});
				} else if (vInput === "friend list") {
					var friends = "";
					friends += AddFriend("Joffrey", "For being funny and helpful friend");
					launchCommandAsVisitor({
						cmd: vInput,
						res: '<div><p>' + friends + '</p></div>'
					});
				} else {
					launchCommandAsVisitor({
						cmd: vInput,
						res: '<div><p>[ <span class="red">skids.codes</span> ] Usage: friend [name/list]</p></div>'
					});
				}
			}*/ else if (vInput.startsWith("insta")) {
				var vLink = $('input').val().substring(6);
				if (vLink.includes("instagram.com/p/")) {
					window.open(vLink + "media?size=l", '_blank').focus();
					launchCommandAsVisitor({
						cmd: $('input').val(),
						res: '<div><p>[ <span class="green">SUCCESS</span> ] Link has been opened in the new tab!</p></div>'
					});
				} else {
					launchCommandAsVisitor({
						cmd: vInput,
						res: '<div><p>[ <span class="red">ERROR</span> ] This is not instagram picture!</p></div>'
					});
				}
			} else if (vInput === "sdev") {
				enableKeys = true;
				launchCommandAsVisitor({
						cmd: '****',
						res: '<div><p>[ <span class="green">SUCCESS</span> ] Developer Mode: Activated!</p></div>'
					});
			} else if (vInput === "screenfetch") {
				const OSVer = 'x86_64';
				const Kernel = 'x86_64 Linux 5.8.14-amd64';
				const Shell = 'bash 5.0.18';
				const Disk = '1TB';
				launchCommandAsVisitor({
						cmd: $('input').val(),
						res: '<div><p>&#x2002&#x2002&#x2002SSSSSSSSSSSSSSS&#x2002&#x2002&#x2002&#x2002&#x2002<span class="red">guest@skids.codes</span><br>&#x2002SS:::::::::::::::S&#x2002&#x2002&#x2002&#x2002<span class="red">OS:</span> Arch Linux ' + OSVer + '<br>S:::::SSSSSS::::::S&#x2002&#x2002&#x2002&#x2002<span class="red">Kernel:</span> ' + Kernel + '<br>S:::::S&#x2002&#x2002&#x2002&#x2002&#x2002SSSSSSS&#x2002&#x2002&#x2002&#x2002<span class="red">Uptime:</span> ' + upTime + '<br>S:::::S&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002<span class="red">Shell:</span> ' + Shell + '<br>S:::::S&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002<span class="red">Disk:</span> ' + Disk + '<br>&#x2002S::::SSSS<br>&#x2002&#x2002SS::::::SSSSS<br>&#x2002&#x2002&#x2002&#x2002SSS::::::::SS<br>&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002SSSSSS::::S<br>&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002S:::::S<br>&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002&#x2002S:::::S<br>SSSSSSS&#x2002&#x2002&#x2002&#x2002&#x2002S:::::S<br>S::::::SSSSSS:::::S<br>S:::::::::::::::SS<br>&#x2002SSSSSSSSSSSSSSS</p></div>'
					});
			} else if (vInput.trim() !== "") {
				launchCommandAsVisitor(commands[vInput]);
			}
		}
	} catch(error) {
		if (root > 0) {
			launchCommandAsRoot({
				cmd: $('input').val(),
				res: '<div><p>skids.codes: ' + $('input').val() + ': command not found</p></div>'
			});
		} else {
			launchCommandAsVisitor({
				cmd: $('input').val(),
				res: '<div><p>skids.codes: ' + $('input').val() + ': command not found</p></div>'
			});
		}
		if($('input').val() === 'clear') {
			$('#content > *').not(':last').remove();
		}
	}
	$('input').val('');$('#content').getNiceScroll(0).resize().doScrollTop($('#content')[0].scrollHeight, 0);
})
