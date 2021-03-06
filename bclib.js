//BCLIb JavaScript Library
//by pixels4tech@gmail.com

document.body.style.fontFamily = "sans-serif"
document.body.style.backgroundImage = "url('images/bg.png')"
document.body.style.backgroundRepeat = "no-repeat"
//bclibStyle.innerHTML = "*{cursor: url(\"images/cursor.cur\"), default;}"

//var desktop = document.getElementById("desktop")
//var windows = document.getElementById("windows")

var localStorage = {}

var bclib = {
      CLI: {
        createCLIWindow: function(t, state){
          createWindow(t, "<div id='clishell' style='background: black; color: white; font-family: Courier, monospace; "+ (state ? "width: 300px; height: 200px;" : "") + "'></div>")
        },
        echo: function(txt){
          clishell.innerHTML += txt+"<br>"
        },
        clear: function(){
          clishell.innerHTML = ""
        },
        input: function(todo){
          clishell.innerHTML += "<input type='text' id='inp' style='color: white; background: black; font-family: monospace;'><br><button style='color: white; background: black;' onclick='bclib.temp.inputValue = inp.value; "+todo+"'>OK</button><br>"
        }
      },
      util: {
        run: function(tr){
          try{
            return eval(tr)
          }catch(e){
            return e
          }
        },
        close: function(){
          windows.innerHTML = ""
        },
        reboot: function(){
          window.location.href="boot.html"
        },
        showMessage: function(title, text, btn, click){
          createWindow(title, text + "<br><button onclick='"+click+"'>"+btn+"</button>")
        },
        addApp: function(file, url, width, height){
          localStorage[file] = "createWindow('"+file+"', '<iframe src=\""+url+"\" width="+width+" height="+height+"></iframe>')"
        },
        openPage: function(page){
          createWindow(page+" - Flippy", "<iframe style='overflow: auto; resize: both;' src='"+page+"' width=400 height=300></iframe>")
        },
        mediaplayer: function(file, state){
          var fileJSON = JSON.parse(localStorage[file])
          if(state == "get"){
            return fileJSON
          }
          var out = "<h1>Error</h1>Incorrect mediafile."
          switch(fileJSON.type){
          case("video"):
          out = "<video width="+fileJSON.width+" height="+fileJSON.height+" src='"+fileJSON.link+"' controls></video>"
          createWindow(file + " - Mediaplayer", out)
          break
          case("audio"):
          out = "<audio width="+fileJSON.width+" height="+fileJSON.height+" src='"+fileJSON.link+"' controls></audio>"
          break
          case("image"):
          out = "<img width="+fileJSON.width+" height="+fileJSON.height+" src='"+fileJSON.link+"'>"
          createWindow(file + " - Mediaplayer", out)
          break
          case("canvas"):
          out = "<canvas id='cnv' width="+fileJSON.width+" height="+fileJSON.height+" ></canvas>"
          createWindow(file + " - Mediaplayer", out)
          bclib.temp.ctx = document.getElementById("cnv").getContext("2d")
          eval(fileJSON.code)
          break
          }

        },
        varexp: function(obj){
          createWindow("Variables Explorer", "<div id='varexp' style='color: white; background: black; font-family: monospace;'></div>")
          varexp.innerHTML += "Name&nbsp;&nbsp;&nbsp;Type&nbsp;&nbsp;&nbsp;Value<br><br>"
          var value = ""
          for(var i in window[obj]){
            switch(typeof(window[obj][i])){
            case("object"):
              value = Object.keys(window[obj][i]).join(", ")
              break
            case("function"):
              break
            default:
              value = window[obj][i]
            }
          varexp.innerHTML += (i + "&nbsp;&nbsp;&nbsp;" + typeof(window[obj][i]) + "&nbsp;&nbsp;&nbsp;" + value + "<br>")
          }
        },
        cmd: function(state){
          bclib.CLI.createCLIWindow('?????????????????? ??????????????', state); bclib.CLI.input('bclib.CLI.echo(eval(bclib.temp.inputValue))')
        },
        taskmgr: function(){
          taskmgr.click()
        },
        filemgr: function(){
          var systxt = "<details><summary><code title='?????????????????? ?????????? ?? ???????????????????? (*.dll, *.lib, *.bc)'>BlackCube</code></summary>"
        var progtxt = "<details><summary><code title='?????????????????? ?? ?????????? ???????????????? (*.js, *.json, *.func)'>??????????????????</code></summary>"
        var txt = ""
        var file = ""
        var title = ""
        var isSF = false
        for(var i in localStorage){
          var click = "bclib.util.file.edit(\""+i+"\")"
          var rclick = click
          if(i.slice(0, 7) == "hidden:"){
            continue
          }else if(i.slice(i.length-3) == ".js"){
            file = "run.png"
            title = "?????????????????? JavaScript (*.js)"
            click="try{eval(localStorage[\""+i+"\"])}catch(e){createWindow(\"Error\", e)}"
          }else if(i.slice(i.length-5) == ".prog" || i.slice(i.length-4) == ".app"){
            file = "run.png"
            title = "???????????????????? (*.prog, *.app)"
            click="try{eval(localStorage[\""+i+"\"])}catch(e){createWindow(\"Error\", e)}"
            rclick=""
          }else if(i.slice(i.length-5) == ".html" || i.slice(i.length-4) == ".htm"){
            file = "file-html.png"
            title = "HTML - ???????????????? (*.htm, *.html)"
            click="bclib.util.file.open(\""+i+"\")"
            rclick="bclib.util.file.edit(\""+i+"\", true)"
          }else if(i.slice(i.length-4) == ".sys"){
            file = "file-sys.png"
            title = "?????????????????? ???????? (*.sys)"
          }else if(i.slice(i.length-5) == ".func"){
            file = "file-js.png"
            title = "?????????????? (*.func)"
          }else if(i.slice(i.length-5) == ".json"){
            file = "file-js.png"
            title = "JSON - ???????? (*.json)"
            //click=""
            //rclick=""
          }else if(i.slice(i.length-4) == ".lib"){
            file = "file-sys.png"
            title = "???????????????????? (*.lib)"
          }else if(i.slice(i.length-4) == ".txt"){
            file = "file.png"
            title = "?????????????????? ???????? (*.txt)"
          }else if(i.slice(i.length-3) == ".bc"){
            file = "file-sys.png"
            title = "?????????????????? ?????????????????? (*.bc)"
            click="eval(localStorage[\""+i+"\"])"
            //rclick=""
          }else if(i.slice(i.length-4) == ".mlf"){
            file = "file.png"
            title = "Mediaplayer Link File"
            click="bclib.util.mediaplayer(\""+i+"\")"
          }else{
            switch(i){
              case "key":
              case "length":
              case "getItem":
              case "setItem":
              case "removeItem":
              case "clear":
                continue
                break
              default:
                file = "file.png"
                title = "???????? (*.*)"
            }
          }
          if(file == "file-sys.png"){
            systxt += "<img src='images/"+file+"' width=16 height=16><code title='"+title+"' oncontextmenu=\'"+rclick+"; return false;\' onclick=\'"+click+"\' >" + i + "</code><hr style='margin: 0px;'>"
          }else if(file == "file-js.png" || file == "run.png"){
            progtxt += "<img src='images/"+file+"' width=16 height=16><code title='"+title+"' oncontextmenu=\'"+rclick+"; return false;\' onclick=\'"+click+"\' >" + i + "</code><hr style='margin: 0px;'>"
          }else{
            txt += "<img src='images/"+file+"' width=16 height=16><code title='"+title+"' oncontextmenu=\'"+rclick+"; return false;\' onclick='"+click+"' >" + i + "</code><hr style='margin: 0px;'>"
          }
        }
      createWindow("localStorage", systxt + "</details><hr style='margin: 0px;'>" +progtxt + "</details><hr style='margin: 0px;'>" + txt + "<button onclick='window.del()'>?????????????? ????????</button> <button onclick='window.run()'>?????????????????? ????????????</button>")
        window.del = function(){
          createWindow("??????????????","<input id='todel'> <button onclick='bclib.temp.deletedFiles[todel.value] = localStorage[todel.value]; delete localStorage[todel.value]'>OK</button>")
        }
        window.run = function(){
          createWindow("??????????????????","<input id='torun'> <button onclick='bclib.temp.torun = torun.value; bclib.util.close(); try{eval(localStorage[bclib.temp.torun])}catch(e){createWindow(\"Error\", e)}; delete bclib.temp.torun'>OK</button>")
        }
        },
        gui: function(state){
          if(state){
            appPanel.style.display = "block"
            lastPanel.style.display = "block"
          }else{
            appPanel.style.display = "none"
            lastPanel.style.display = "none"
          }
        },
        edit: function(v){
          createWindow(v, "<textarea id=TA>"+eval(v)+"</textarea><br><button id=BTN>OK</button>")
          BTN.onclick = function(){eval(v + " = " + "'" + TA.value + "'")}
        },
        file: {
          write: function(filename, text){
            localStorage[filename] = text
          },
          add: function(filename, text){
            localStorage[filename] += text
          },
          read: function(filename){
            return localStorage[filename]
          },
          edit: function(filename, state){
            if(state){
              createWindow(filename, "<div id=TA contenteditable style=\"outline: none;\">" + localStorage[filename] + "</div><hr style=\"margin: 0px;\"><button id=BTN>OK</button>")
            }else{
              createWindow(filename, "<textarea id=TA>"+localStorage[filename]+"</textarea><br><button id=BTN>OK</button>")
            }
            BTN.onclick = function(){localStorage[filename] = TA.value || TA.innerHTML}
          },
          run: function(filename){
            try{
              return eval(localStorage[filename])
            }catch(e){
              return e
            }
          },
          del: function(filename){
            delete localStorage[filename]
          },
          download: function(filename, link){
            var xmlhttp = new XMLHttpRequest()
            var ret = "Downloaded from " + link + " to " + filename
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    localStorage[filename] =  xmlhttp.responseText
                }
            }
            xmlhttp.open("GET", link, true)
            xmlhttp.send()
            return ret
          },
          open: function(filename){
            createWindow(filename, "<div>" + bclib.util.file.read(filename) + "</div>")
          }
        }
      },
      temp: {
        //Windows XP style:
        /*windowStyle: "overflow: auto; resize: both; background: white; display: inline-block; border: solid 2px blue; margin: 2px; position: absolute; border-radius: 5px;",
        closeButtonStyle: "float: right; background: red; color: white; padding-left: 5px; padding-right: 5px; font-weight: bold; border-radius: 5px;",
        windowHeaderStyle: "background: blue; color: white;",*/

        //Normal style:
        windowStyle: "overflow: auto; resize: both; background: white; border: solid 1px black; width: 30%; margin: 10px;",
        closeButtonStyle: "float: right; background: white; border: solid 1px black;",
        windowHeaderStyle: "",

        deletedFiles: {}

      },
      desktop: function(){
        desktop.innerHTML += "\
        <img src='images/folder.png' width=50 height=50 onclick='bclib.util.filemgr()'><br><span style='color: white'>????????????????<br>????????????????</span><br><br>\
        <img src='images/cmd.png' width=50 height=50 onclick='bclib.util.cmd(1)'><br><span style='color: white'>??????????????????<br>????????????</span><br><br>"
      },
      json: {},
      task: {},
      version: "BCLib v4.3.5"
  }
var wnd = 0
      function createWindow(title, html){
        wnd++
        windows.innerHTML += "<span id='w"+wnd+"' style='"+bclib.temp.windowStyle+"'>" +
        title + " <button onclick='windows.removeChild(document.getElementById(\"w"+wnd+"\")); delete bclib.task[\""+title+"\"]' title=\"??????????????\" style='"+bclib.temp.closeButtonStyle+"'> X </button>" +
          "<hr style='margin: 0px;'>" + html + "</span>"
          //console.log(document.getElementById("w"+window.wnd)+" "+document.getElementById("w"+window.wnd))
        }

window.oncontextmenu = function(){return false}
window.ondragover = function(e){e.preventDefault()}
