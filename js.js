/* ©CopyRight 萌 */
$(function(){
    $('.mbmn').each(function(k,v){
      $id=(k+1);
      $url=`newimg/${$id}/`;
      $ua=['l','t','t'];
      $hi=`<obj><div futan='left'><div></div><div></div><div></div></div>
    <div futan='top'><div></div><div></div><div></div></div>
    <div futan='top'><div></div><div></div><div></div></div>
    <div futan='top'><div></div><div></div><div></div></div></obj>`;
      $hi=$($hi).children('div').each(function(dk,dv){
        if(dk==0)
          $(this).children('div').css('background-image',`url(${$url}3.png)`);
        else
          $(this).children('div').each(function(ddk,ddv){
            $dkid=ddk+1;
            $new_url=`${$url}${$ua[ddk]}${(dk)}.png`;
            $(this).css('background-image',`url(${$new_url})`);
          })
      })
      $(this).append($hi);
    })
    /*copyright FutLife*/
    $FutLife={an:{
      left:{x:-50,y:0},
      right:{x:50,y:0},
      top:{x:0,y:50},
      bottom:{x:0,y:-50},
      small:{val:0.7}
    },anlist:[]}
    $('[futan]').each(function(){
      $mode=$(this).attr('futan');
      $set=$(this).offset();
      
      if($mode=='small')
        TweenMax.set($(this), { transform: 'scale('+$FutLife.an[$mode].val+')', opacity: 0 });
      else
      TweenMax.set($(this), { transform: 'translate3d('+$FutLife.an[$mode].x+'px, '+$FutLife.an[$mode].y+'px, 0)', opacity: 0 });
      /*TweenMax.set($(this), { transform: 'translate3d('+$FutLife.an[$mode].x+', '+$FutLife.an[$mode].y+', 0)', opacity: 0 });*/
      //console.log($(this).closest('[tofutmb]')??)
      
      /*switch($mode){
        case 'left':
          TweenMax.set($(this), { transform: 'translate3d(-50px, 0, 0)', opacity: 0 });
          
          TweenMax.to($(this), 0.6, { transform: 'translate3d(0, 0, 0)', opacity: 1, repeat: 0, delay: 0.4, ease: Power4.easeOut });
          break;
      }*/
    })
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
    var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
    var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");
    $ckY_tofuymb=[];
  $ckY_obj=null;
  $pyo=window.pageYOffset;
  wh=window.innerHeight*0.8;
  $('[tofutmb]').each(function(){
    if(wh+$pyo>=(this.offsetTop+(this.offsetHeight>wh?wh:this.offsetHeight)*0.6)){
      $(this).removeClass('hide');
      $(this).find('[futan]').each(function(){
        TweenMax.to(this, 0, { transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1, repeat: 0, delay: parseInt($(this).attr('futandy')??0.4), ease: Power4.easeOut });
      })
    }else{
      $ckY_tofuymb.push(this)
    }
  })
    if(isiPhone+isiPad+isiPod>-3){
      $ckY_obj=setInterval(()=>{
        $pyo=window.pageYOffset;
        $ckY_tofuymb.forEach(function(v,k){
          wh=window.innerHeight*0.8;
          if(wh+$pyo>=(v.offsetTop+(v.offsetHeight>wh?wh:v.offsetHeight)*0.6)){
            $(v).removeClass('hide');
            $(v).find('[futan]').each(function(){
              TweenMax.to(this, 0.6, { transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1, repeat: 0, delay: parseInt($(this).attr('futandy')??0.4), ease: Power4.easeOut });
            })
            $ckY_tofuymb.splice(k, 1);
          }
        })
      },500)
    }else{
      $('[tofutmb]').each(function(){
        $FutLife.anlist.push(
          new Waypoint({
            element: this,
            handler: function(dir) {
              $(this.element).removeClass('hide');
              //console.log(dir,this); $(this.element)

              $(this.element).find('[futan]').each(function(){
                //console.log($(this).attr('futandy')??0.4);
                TweenMax.to(this, 0.6, { transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1, repeat: 0, delay: parseInt($(this).attr('futandy')??0.4), ease: Power4.easeOut });
              })

            },
            offset: "60%"
          })
        );
      })
    }
  $('.snow_box').append(new Array(203).join('<div class="snow"></div>'));
  })
Hi=(()=>{console.log('%cHi %cFutLife\n%cSay:%c萌','color:blue;font-weight:bold;','font-weight:bold;color:springgreen;','font-weight:bold;color:red;','font-weight:bold;color:hotpink;');})()