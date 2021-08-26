    /* global $, alert, console*/
    $(function () {
    
    'use strict';
    ////////////////////////////////////////////
    $('html').niceScroll();
    ////////////////////////////////////////////
    $('.header').height($(window).height());
    ////////////////////////////////////////////
    $('.mybutton button').click(function(){
        
        $('html , body').animate({ 
            scrollTop: $('.section1').offset().top
        },1000);
    });
    ///////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////MainNavbar&subs////////////////////
     $('.languages').click(function(){
        
        $('.navbar1').fadeToggle();
        $('.navbar2').hide();
        $('.navbar3').hide();
        $('.navbar4').hide();
        $('.navbar5').hide();
        $('.navbar6').hide();
         
    });
    ////////////////////////////////////////////
    $('.programming').click(function(){

        $('.navbar2').fadeToggle();
        $('.navbar1').hide();
        $('.navbar3').hide();
        $('.navbar4').hide();
        $('.navbar5').hide();
        $('.navbar6').hide();
        
    });
    ///////////////////////////////////////////
    $('.music').click(function(){

        $('.navbar3').fadeToggle();
        $('.navbar1').hide();
        $('.navbar2').hide();
        $('.navbar4').hide();
        $('.navbar5').hide();
        $('.navbar6').hide();
    });
    ///////////////////////////////////////////
    $('.sports').click(function(){

        $('.navbar4').fadeToggle();
        $('.navbar1').hide();
        $('.navbar2').hide();
        $('.navbar3').hide();
        $('.navbar5').hide();
        $('.navbar6').hide();
    });
    ///////////////////////////////////////////
     $('.engineering').click(function(){

        $('.navbar5').fadeToggle();
        $('.navbar1').hide();
        $('.navbar2').hide();
        $('.navbar3').hide();
        $('.navbar4').hide();
        $('.navbar6').hide();
    });
    /////////////////////////////////////////
    $('.game').click(function(){

        $('.navbar6').fadeToggle();
        $('.navbar1').hide();
        $('.navbar2').hide();
        $('.navbar3').hide();
        $('.navbar4').hide();
        $('.navbar5').hide();
    });
    //////////////////////////////////////////
    $('.drawing').click(function(){

        $('.navbar1').hide();
        $('.navbar2').hide();
        $('.navbar3').hide();
        $('.navbar4').hide();
        $('.navbar5').hide();
        $('.navbar6').hide();  
    });
    //////////////////////////////////////////////////////////START/////////////////////////////////
    /////////////////////////////////////////////////////////language///////////////////////////////
    $('.english').click(function(){
        
         $('.language').show();
         $('.englis').show();
         $('.italia').hide();$('.spanis').hide();$('.germa').hide();$('.frenc').hide();$('.russia').hide();
         $('.drawin').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////
     $('.italian').click(function(){
         
         $('.language').show();
         $('.italia').show();
         $('.englis').hide();$('.spanis').hide();$('.germa').hide();$('.frenc').hide();$('.russia').hide();
         $('.drawin').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
         
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////
     $('.spanish').click(function(){
         
         $('.language').show();
         $('.spanis').show();
         $('.englis').hide();$('.italia').hide();$('.germa').hide();$('.frenc').hide();$('.russia').hide();
         $('.drawin').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
         
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////
     $('.german').click(function(){
         
         $('.language').show();
         $('.germa').show();
         $('.englis').hide();$('.italia').hide();$('.spanis').hide();$('.frenc').hide();$('.russia').hide();
         $('.drawin').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
         
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////
     $('.french').click(function(){
         
         $('.language').show();
         $('.frenc').show();
         $('.englis').hide();$('.italia').hide();$('.spanis').hide();$('.germa').hide();$('.russia').hide();
         $('.drawin').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
         
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////
    $('.russian').click(function(){
        
         $('.language').show();
         $('.russia').show();
         $('.englis').hide();$('.italia').hide();$('.spanis').hide();$('.germa').hide();$('.frenc').hide();
         $('.drawin').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////drawin///////////////////////////////////
     $('.drawing').click(function(){
         
         $('.drawin').show();
         $('.drawi').show();
         $('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
         
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////musi/////////////////////////////////////
    $('.piano').click(function(){
        
         $('.musi').show();
         $('.pian').show();
         $('.violi').hide();$('.guita').hide();$('.saxophon').hide();$('.cell').hide();$('.ou').hide();
         $('.drawin').hide();$('.language').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ////////////////////////////////////////////////////////
    $('.violin').click(function(){
        
         $('.musi').show();
         $('.violi').show();
         $('.pian').hide();$('.guita').hide();$('.saxophon').hide();$('.cell').hide();$('.ou').hide();
         $('.drawin').hide();$('.language').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////////////////
     $('.guitar').click(function(){
        
         $('.musi').show();
         $('.guita').show();
         $('.pian').hide();$('.violi').hide();$('.saxophon').hide();$('.cell').hide();$('.ou').hide();
         $('.drawin').hide();$('.language').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    //////////////////////////////////////////////////////
    $('.saxophone').click(function(){
        
         $('.musi').show();
         $('.saxophon').show();
         $('.pian').hide();$('.violi').hide();$('.guita').hide();$('.cell').hide();$('.ou').hide();
         $('.drawin').hide();$('.language').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    //////////////////////////////////////////////////////
    $('.cello').click(function(){
        
         $('.musi').show();
         $('.cell').show();
         $('.pian').hide();$('.violi').hide();$('.guita').hide();$('.saxophon').hide();$('.ou').hide();
         $('.drawin').hide();$('.language').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    }); 
    ///////////////////////////////////////////////////////
    $('.oud').click(function(){
        
         $('.musi').show();
         $('.ou').show();
         $('.pian').hide();$('.violi').hide();$('.guita').hide();$('.saxophon').hide();$('.cell').hide();
         $('.drawin').hide();$('.language').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////sport//////////////////////////////////////////////////
    $('.football').click(function(){
        
         $('.sport').show();
         $('.footbal').show();
         $('.basketbal').hide();$('.volleybal').hide();$('.rugb').hide();$('.squas').hide();$('.cricke').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////////////
    $('.basketball').click(function(){
        
         $('.sport').show();
         $('.basketbal').show();
         $('.footbal').hide();$('.volleybal').hide();$('.rugb').hide();$('.squas').hide();$('.cricke').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////////////
    $('.volleyball').click(function(){
        
         $('.sport').show();
         $('.volleybal').show();
         $('.basketbal').hide();$('.footbal').hide();$('.rugb').hide();$('.squas').hide();$('.cricke').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////////////
    $('.rugby').click(function(){
        
         $('.sport').show();
         $('.rugb').show();
         $('.basketbal').hide();$('.volleybal').hide();$('.footbal').hide();$('.squas').hide();$('.cricke').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////////////
    $('.squash').click(function(){
        
         $('.sport').show();
         $('.squas').show();
         $('.basketbal').hide();$('.volleybal').hide();$('.rugb').hide();$('.footbal').hide();$('.cricke').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////////////
    $('.cricket').click(function(){
        
         $('.sport').show();
         $('.cricke').show();
         $('.basketbal').hide();$('.volleybal').hide();$('.rugb').hide();$('.squas').hide();$('.footbal').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.engineerin').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////engineerin///////////////////////////////////////////////
    $('.electrical').click(function(){
        
         $('.engineerin').show();
         $('.electrica').show();
         $('.mechanica').hide();$('.architectura').hide();$('.communicatio').hide();$('.electronic').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////////////  
    $('.mechanical').click(function(){
        
         $('.engineerin').show();
         $('.mechanica').show();
         $('.electrica').hide();$('.architectura').hide();$('.communicatio').hide();$('.electronic').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////////////    
    $('.architectural').click(function(){
        
         $('.engineerin').show();
         $('.architectura').show();
         $('.mechanica').hide();$('.electrica').hide();$('.communicatio').hide();$('.electronic').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////////////    
    $('.communication').click(function(){
        
         $('.engineerin').show();
         $('.communicatio').show();
         $('.mechanica').hide();$('.architectura').hide();$('.electrica').hide();$('.electronic').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ///////////////////////////////////////////////////    
    $('.electronics').click(function(){
        
         $('.engineerin').show();
         $('.electronic').show();
         $('.mechanica').hide();$('.architectura').hide();$('.communicatio').hide();$('.electrica').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.gamemakin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////gamemakin///////////////////////////////////////////////////
    $('.photoshop').click(function(){
        
         $('.gamemakin').show();
         $('.photosho').show();
         $('.unit').hide();$('.html').hide();$('.maya3').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    }); 
    //////////////////////////////////////////////////////
    $('.unity').click(function(){
        
         $('.gamemakin').show();
         $('.unit').show();
         $('.photosho').hide();$('.html').hide();$('.maya3').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    }); 
    //////////////////////////////////////////////////////
    $('.html5').click(function(){
        
         $('.gamemakin').show();
         $('.html').show();
         $('.unit').hide();$('.photosho').hide();$('.maya3').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    }); 
    //////////////////////////////////////////////////////
    $('.maya').click(function(){
        
         $('.gamemakin').show();
         $('.maya3').show();
         $('.unit').hide();$('.html').hide();$('.photosho').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.programmin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    }); 
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////programmin////////////////////////////////////////////////
    $('.c').click(function(){
        
         $('.programmin').show();
         $('.cc').show();
         $('.c+').hide();$('.jav').hide();$('.androi').hide();$('.xm').hide();$('.ph').hide();$('.javascrip').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    //////////////////////////////////////////////////////
     $('.c++').click(function(){
        
         $('.programmin').show();
         $('.c+').show();
         $('.cc').hide();$('.jav').hide();$('.androi').hide();$('.xm').hide();$('.ph').hide();$('.javascrip').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    //////////////////////////////////////////////////////
    $('.java').click(function(){
        
         $('.programmin').show();
         $('.jav').show();
         $('.c+').hide();$('.cc').hide();$('.androi').hide();$('.xm').hide();$('.ph').hide();$('.javascrip').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    //////////////////////////////////////////////////////
    $('.android').click(function(){
        
         $('.programmin').show();
         $('.androi').show();
         $('.c+').hide();$('.jav').hide();$('.cc').hide();$('.xm').hide();$('.ph').hide();$('.javascrip').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    //////////////////////////////////////////////////////
    $('.xml').click(function(){
        
         $('.programmin').show();
         $('.xm').show();
         $('.c+').hide();$('.jav').hide();$('.androi').hide();$('.cc').hide();$('.ph').hide();$('.javascrip').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    //////////////////////////////////////////////////////
    $('.php').click(function(){
        
         $('.programmin').show();
         $('.ph').show();
         $('.c+').hide();$('.jav').hide();$('.androi').hide();$('.xm').hide();$('.cc').hide();$('.javascrip').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    //////////////////////////////////////////////////////
    $('.javascript').click(function(){
        
         $('.programmin').show();
         $('.javascrip').show();
         $('.c+').hide();$('.jav').hide();$('.androi').hide();$('.xm').hide();$('.ph').hide();$('.cc').hide();
         $('.drawin').hide();$('.language').hide();$('.musi').hide();$('.sport').hide();$('.engineerin').hide();$('.gamemakin').hide();
        
         $('html , body').animate({ 
            scrollTop: $('.section12').offset().top
        },500);
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////end////////////////////////////////////////////////////
        
});