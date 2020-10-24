/*
DOGE.JS V1.1
Documentation:



Copyright (c) 2020 ch1ck3n (Landon fox)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

var doge = {
    sound: function(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
        this.sound.play();
        }
        this.stop = function(){
            this.sound.pause();
        }
    }
    getElement : function(identifier) {
        return document.querySelector(identifier);
    },
    addElement : function(element) {
        document.body.innerHTML = `${document.body.innerHTML}\n${element}`;
    },
    addHeadElement : function(element) {
        document.head.innerHTML = `${document.head.innerHTML}\n${element}`;
    },
  
    setElementDisplay : function(id, display){
        document.getElementById(id).style.display = display;
    },
    
    getElement : function(id){
        return document.getElementById(id);
    },
    
    setElementVisibility : function(id, bool){
        if(bool) document.getElementById(id).style.visibility = "visible";
        else document.getElementById(id).style.visibility = "hidden";
    },
    
    isElementVisible : function(id){
        if(document.getElementById(id).style.visibility == "hidden") return false;
        return true;
    },
    
    setInnerHtml : function(id, value){
        document.getElementById(id).innerHTML = value;
    },
    
    disableButton : function(id){
        this.getElement(id).disabled = "disabled";
    },
    
    disableButtonClass : function(id){
        var arr = document.getElementsByClassName(id);
        for(var i = 0; i < arr.length; i++){
            arr[i].disabled = "disabled";
        }
    },
    
    enableButton : function(id){
        this.getElement(id).disabled = "";
    },
    
    enableButtonClass : function(id){
        var arr = document.getElementsByClassName(id);
        for(var i = 0; i < arr.length; i++){
            arr[i].disabled = "";
        }
    },
    
    showButton : function(id){
        htmlInteraction.setElementVisibility(id, true);
    },
    
    showButtonClass : function(id){
        var arr = document.getElementsByClassName(id);
        for(var i = 0; i < arr.length; i++){
            arr[i].style.visibility = "visible";
        }
    },
    
    hideButton : function(id){
        htmlInteraction.setElementVisibility(id, false);
    },
    
    hideButtonClass : function(id){
        var arr = document.getElementsByClassName(id);
        for(var i = 0; i < arr.length; i++){
            arr[i].style.visibility = "hidden";
        }
    },
    
    setButtonOnclick : function(id, value){
        this.getElement(id).onclick = value;
    },
    
    focusElement : function(id){
        this.getElement(id).focus();
    }

}