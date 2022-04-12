import React, { useEffect } from "react"
import "./Share.scss"
import Logo from "../../asstes/logo.png"
import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

function Share(props){

   const close = ()=>{
       console.log("close", props)
       props.unselect()
   }
   const logout = ()=>{
       localStorage.removeItem("token")
       window.location.reload()
   }

    const $=(el)=>{
        return document.getElementById(el);
    }
    const tzdragg =function(){
        return {
            move : function(divid,xpos,ypos){
               console.log('1');
                var a = $(divid);
                $(divid).style.left = xpos + 'px';
                $(divid).style.top = ypos + 'px';
            },
            startMoving : function(evt){   
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    a = $('elem'),
                divTop = a.style.top,
                divLeft = a.style.left;
                
                divTop = divTop.replace('px','');
                divLeft = divLeft.replace('px','');
                var diffX = posX - divLeft,
                    diffY = posY - divTop;

                document.touchmove =function(evt){
                    evt = evt || window.event;
                    var posX = evt.clientX,
                        posY = evt.clientY,
                        aX = posX - diffX,
                        aY = posY - diffY;
               var boun=document.getElementById("previwimg").offsetWidth-document.getElementById("elem").offsetWidth;
                   
                    if((aX>0)&&(aX<boun)&&(aY>0)&&(aY<boun))
                    tzdragg.move('elem',aX,aY);
                }  

                document.onmousemove = function(evt){
                    evt = evt || window.event;
                    var posX = evt.clientX,
                        posY = evt.clientY,
                        aX = posX - diffX,
                        aY = posY - diffY;
               var boun=document.getElementById("previwimg").offsetWidth-document.getElementById("elem").offsetWidth;
                   
                    if((aX>0)&&(aX<boun)&&(aY>0)&&(aY<boun))
                    tzdragg.move('elem',aX,aY);
                }
            },
            stopMoving : function(){
                var a = document.createElement('script');
                document.onmousemove = function(){}
            },
        }
    }();
    const shareshot=async()=>{
        var node = document.getElementById('previwimg');
        // let res=await fetch("https://benkaiser.github.io/web-share-images/nacho.jpg")
        // const blob = await res.blob();
        // console.log("web blob is:",blob)

        htmlToImage.toBlob(node)
        .then(function (dataUrl) {
            console.log("blob is:",dataUrl)
        //   document.getElementById("output").src=dataUrl;
        const filesArray= [new File([dataUrl], 'meme.png', { type: "image/jpeg", lastModified: new Date().getTime() })];
        const shareData = {
          files: filesArray,
        };
        console.log("file array:",filesArray)
        navigator.share(shareData).then(() => {
          console.log('Shared successfully');
        })
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
    }

    return(

        <div className="Share">
            {/* <div id="output"></div> */}
            {/* <WhatsappShareButton size={32} url={props.images[0].url} /> */}
            <div className="Preview" id="previwimg" >
            <img src={props.images[0].url}/>
            <div  id='elem' className="superimpose" ondragstart={tzdragg.startMoving} ondragover={tzdragg.stopMoving} onMouseDown={tzdragg.startMoving} onMouseUp={tzdragg.stopMoving}>
            <img src={Logo}/>

            </div>

            </div>

            <div className="actions">
            <button style={{backgroundColor:'#d596a4'}} onClick={shareshot}>Share</button>
            <button onClick={close}>Close</button>
            <button onClick={logout}>Logout</button>

            </div>

        </div>
    )
}

export default Share