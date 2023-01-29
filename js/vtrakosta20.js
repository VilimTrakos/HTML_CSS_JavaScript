
const odabir = document.querySelector(".grid-kontenjer2");
const test = document.querySelector(".spremiste");
var title= document.getElementsByTagName("title")[0].innerHTML;

//console.log(title);
window.addEventListener("load",function(){
    //if(title=="Kreativna"){
        //ZA kreativnu
        //console.log("Na krativnoj!");

    //  document.addEventListener("click", function(event){
    //  
    //  
    //      if(event.target.closest(".container")){
    //          if(confirm("Želite li napustiti stranicu?")){
    //              return
    //          }
    //          else{
    //              alert("Ostajemo na stranici: "+  title);
    //              event.preventDefault();
    //              
    //          }
    //      };
    //  
    //  });
        

   // }
    //Za sve sotale:
   // else{
        /* NAPOMENA :
            stranica multimedije se ponekad duže učitava zbog dohvaćanja videa s 
            youtuba te ako se ne učitaju do kraja funkcija neće raditi 

        */
    

    document.addEventListener("click", function(event){


        if(event.target.closest(".grid-kontenjer2")){
            if(confirm("Želite li napustiti stranicu?")){
                return
            }
            else{
                alert("Ostajemo na stranici: "+  title);
                event.preventDefault();
                
            }
        };

    });
    
    //};
});
/*
    // 3a) poziv funkcije za prijelaz preko slike i otaranje tamplate canvas
if(title=="Početna"){
    window.addEventListener("load",function(){
        
        

        var krug =document.getElementById("krug");
        var template = this.document.querySelector("#template")

        var postoji = false;

        krug.addEventListener("mouseover", function(){



            var clone = template.content.cloneNode(true);
            if(postoji == false){ // ako canvas postoji da se ne stvara vise
                document.getElementById("main").appendChild(clone)
                postoji = true;
                
                
            }


            var canvas = document.getElementById("myCanvas");
            var cxt=canvas.getContext("2d");

            cxt.clearRect(0,0, canvas.width, canvas.height);//ciscenje kavasa

            //  KRUG
            cxt.font="15px Arial";
            cxt.fillText("Krug:  X_1=62, Y_1=55, ",5, 15);
            cxt.fillText(" R=30 ",5, 32);

        });

        var pravokutnik =document.getElementById("pravokutnik");
        pravokutnik.addEventListener("mouseover", function(){

            var clone = template.content.cloneNode(true);
            if(postoji == false){ // ako canvas postoji da se ne stvara vise
                document.getElementById("main").appendChild(clone)
                postoji = true;
                
                
            }


            var canvas = document.getElementById("myCanvas");
            var cxt=canvas.getContext("2d");

            cxt.clearRect(0,0, canvas.width, canvas.height);//ciscenje kavasa
            //  KRUG
            cxt.font="15px Arial";
            cxt.fillText("Pravokutnik X_1=584, ",5, 15);
            cxt.fillText("Y_1=266, X_2=681, Y_2=291",3, 32);
            

        });

        var mnogokut =document.getElementById("mnogokut");
        mnogokut.addEventListener("mouseover", function(){

            var clone = template.content.cloneNode(true);
            if(postoji == false){ // ako canvas postoji da se ne stvara vise
                document.getElementById("main").appendChild(clone)
                postoji = true;
                
                
            }


            var canvas = document.getElementById("myCanvas");
            var cxt=canvas.getContext("2d");


            cxt.clearRect(0,0, canvas.width, canvas.height);//ciscenje kavasa
            //  KRUG
            cxt.font="15px Arial";
            cxt.fillText("Mnogokut X_1=230, ",5, 15);
            cxt.fillText("Y_1=303, X_2=272, Y_2=330, ",1, 32);
            cxt.fillText("X_3=254, Y_3=381, X_4=202,",1, 47);
            cxt.fillText("Y_4=376, X_5=186, Y_5=331",1, 62);

        });

        var slika = this.document.getElementById("slika");
        slika.addEventListener("mouseover",function(){
        // brisanje elementa ako nije na njemu
            if(postoji){
                var brisi = document.getElementById("myCanvas");
                brisi.remove();
                postoji = false;
            }
            

    });
    });
}
*/
//obrazac:





if(title=="Obrazac za dodavanje novog sadržaja"){
    window.addEventListener("load",function(){
        
        var div_obrazac2 = document.getElementById("div_obrazac2");
        div_obrazac2.style.display= "none"; /*skirvanje obrasca 2*/
        
        window.addEventListener('beforeprint', (event) => {
            div_obrazac2.style.display= "block"; /*kad se pokrene pritanje pokaže se da se oba printaju*/ 
          });
          window.onafterprint = (event) => {
            div_obrazac2.style.display= "none";
          };

        var div_obrazac1 = document.getElementById("div_obrazac1");
        div_obrazac1.style.display= "block";
        /*
        this.document.addEventListener("keydown",(event)=>{
            if (event.ctrlKey && event.key == 'p') {
                div_obrazac.style.display= "block";
            }
            else{
                div_obrazac.style.display= "none";
            }
        });
            */


        // provjera je li prvi ili drugi
        var prvi = true;
        // navodenje elemenata za provjeru
        var ima = this.document.forms["forma"]["Odabir_macaka"].value;
        var veliki = this.document.forms["forma"]["Nešto vaše"].value;
        var Srtan_sto_vidi_macku = this.document.forms["forma"]["Srtan_sto_vidi_macku"].value;
        var padajuci = this.document.forms["forma"]["Padajuci[]"].value;
        var datumi = this.document.forms["forma"]["Datumi"].value;
        
        

        forma.addEventListener("submit", (e)=>{
            var messeges =[]

            
            if(prvi == true){

                e.preventDefault();
                div_obrazac1.style.display= "none";
                div_obrazac2.style.display= "block";
                prvi = false;
                
            }

            if(prvi==false){
                forma.addEventListener("reset", (e)=>{
                    prvi = true;
                    div_obrazac1.style.display= "block";
                            div_obrazac2.style.display= "none";
                });
            }
        });      



});
}


if(title=="Multimedija"){
    window.addEventListener("load",function(){

        var FigSlike= this.document.querySelectorAll(".fig_slike");
        var samoSlika= this.document.querySelectorAll(".slike_multi");
        
        FigSlike.forEach(figslika=>{
            figslika.addEventListener("mouseenter",function(){
                figslika.style.height='400px';
                figslika.style.width="400px";
                
            })
        });//scail figure up


        samoSlika.forEach(samoslika=>{
            samoslika.addEventListener("mouseenter",function(){
                samoslika.style.height='400px';
                samoslika.style.width="400px";
                
            })
        });//scail img up

        FigSlike.forEach(figslika=>{
            figslika.addEventListener("mouseleave",function(){
                figslika.style.height='200px';
                figslika.style.width="200px";
                
            })
        });//scail figure down
        samoSlika.forEach(samoslika=>{
            samoslika.addEventListener("mouseleave",function(){
                samoslika.style.height='200px';
                samoslika.style.width="200px";
                
                
            })
        });//scail img down

});
}



window.addEventListener("load",function(){
    var rotacija = 0;
    
            var logo= this.document.getElementById("logo");
            logo.addEventListener("mouseenter", function(){
                if(rotacija%4==0){
                logo.style.transform="rotate(90deg)";
                
            }
                if(rotacija%4==1){
                logo.style.transform="rotate(180deg)";
                
            }
                if(rotacija%4==2){
                logo.style.transform="rotate(270deg)";
                
            }
                if(rotacija%4==3){
                logo.style.transform="rotate(360deg)";
            
            }
            });
            logo.addEventListener("mouseleave", function(){
                rotacija++;

            });

            var naslov= this.document.getElementById("naslov");
            
            const naslovscale = [
                { transform: 'rotate(0) scale(1)' },
                { transform: 'rotate(0deg) scale(0)' }
            ];
            
            const naslovTimer = {
                duration: 2000,
                iterations: 1,
            }

            naslov.addEventListener("click", ()=>{
                naslov.animate(naslovscale,naslovTimer)});
});



var logiran = false;
window.addEventListener("load",function(){

    
    
   
    //username,password, error, vrijeme
    var user = this.document.getElementById("user");
    var err =  this.document.getElementById("error");
    var vrijeme  = this.document.getElementById("trajanje")
    var pass = this.document.getElementById("pass");
    //odjava i prijava elementi
    var odjav= this.document.getElementById("odjava");
    var prija =this.document.getElementById("prijava");
    var diz =  this.document.getElementById("dizajn");
 
    document.addEventListener("click", function(event){
        
        
        if(event.target.closest("#btnLogin")){
            val();
            
        };
        if(event.target.closest("#odjava")){
            event.preventDefault();
            brisiSVE();
            
            reload();
        }

    });
    
    function brisiSVE(){

            brisiCookie("username");
            brisiCookie("password");
            brisiCookie("Logiran");
            brisiCookie("Traje");
            brisiCookie("VrijemeCookie");
            brisiCookie("BojaPozadine");
            brisiCookie("VrstaFonta");
            brisiCookie("BojaSlova");
            brisiCookie("BojaNavigacije");
            brisiCookie("VelicinaFonta");
           

            odjav.style.display="none";
            prija.style.display="flex";
            diz.style.display="none";
            upisiKorIme.innerHTML="";
            upisivrijeme.innerHTML="";

    }

    function val(){
        if(user.value ==="test" && pass.value ==="test" && !isNaN(vrijeme.value))
        {
              
            stvoriCookie("username",user.value, vrijeme.value);
            stvoriCookie("password",pass.value,vrijeme.value);
            stvoriCookie("Logiran",true, vrijeme.value);
            stvoriCookie("Traje", odredivrijeme(vrijeme.value), vrijeme.value);
            stvoriCookie("VrijemeCookie",vrijeme.value,vrijeme.value);
            
            window.location.href = "index.html";
        }
        else{ 
            err.innerHTML="Podaci za prijavu su pogrešno uneseni";   
        }
    }
    function odredivrijeme(exprDate){
        const date = new Date();
        date.setTime(date.getTime()+(exprDate*1000));
        let expir = "expires="+date.toUTCString();
        return expir;
    }
   
    
    function stvoriCookie(name,value,exprDate){
        const date = new Date();
        date.setTime(date.getTime()+(exprDate*1000));
        let expir = "expires="+date.toUTCString();
        document.cookie=`${name}=${value}; ${expir};path=/`
    }
    function brisiCookie(name){
        stvoriCookie(name,null,null);
    }
    function citajCookie(name){
        const cDekodiran = decodeURIComponent(document.cookie);
        const cArray=cDekodiran.split("; ");
        var result =null;

        cArray.forEach(element=>{
            if(element.indexOf(name)==0){
                result = element.substring(name.lenght+1);//https://www.youtube.com/watch?v=i7oL_K_FmM8
            }
        });
        return result;
    }
    upisiKorIme = this.document.getElementById("ispis_kor_ime");
    upisivrijeme = this.document.getElementById("ispis_datum");
    function reload(){
        location.reload();
    }
    
    var test =citajCookie("Logiran");
    
 //  var BojaPozadine = citajCookie("BojaPozadine").substring(13);
 //  var VrstaFonta = citajCookie("VrstaFonta").substring(11);
 //  
 //  var BojaSlova = citajCookie("BojaSlova").substring(10);
 //  
 //  var BojaNavigacije = citajCookie("BojaNavigacije").substring(15);
 //  var VelicinaFonta = citajCookie("VelicinaFonta").substring(14);
  
    if(test =="Logiran=true"){ // korisnik je logiran, tj kolačić nije istekao
        odjav.style.display="flex";
        prija.style.display="none";
        diz.style.display="flex";
        
        upisiKorIme.innerHTML="Korisničko ime: "+citajCookie("username").substring(9);
        upisivrijeme.innerHTML="Kolačić traje do: "+citajCookie("Traje").substring(14);

        var vrCookie =parseInt(citajCookie("VrijemeCookie").substring(14));
        setTimeout(brisiSVE, vrCookie*1000);
        setTimeout(reload, vrCookie*1000);

        function postaviSve(){
            var pozadina = citajCookie("BojaPozadine").substring(13);
            var font = citajCookie("VrstaFonta").substring(11);
            var BojaSlova = citajCookie("BojaSlova").substring(10);
            var BojaNavigacije = citajCookie("BojaNavigacije").substring(15);
            var VelicinaFonta=citajCookie("VelicinaFonta").substring(14);
            if(VelicinaFonta == "normal"){
                VelicinaFonta ="";
            }
            
            
            localStorage.removeItem("primjeni");
            

            var allElements_pozadina = document.getElementsByTagName("*");
            for (var i = 0, len = allElements_pozadina.length; i < len; i++) {
            var element = allElements_pozadina[i];
            element.style.backgroundColor = pozadina;  
            }
            var allElements_slova = document.getElementsByTagName("*");
            for (var i = 0, len = allElements_slova.length; i < len; i++) {
            var element = allElements_slova[i];
            element.style.color = BojaSlova;
            }
            var allElements_navigacija = document.getElementsByClassName("classtest");
            for (var i = 0, len = allElements_navigacija.length; i < len; i++) {
            var element = allElements_navigacija[i];
            element.style.backgroundColor = BojaNavigacije; 
            }
            var allElements_font = document.getElementsByTagName("*");
            for (var i = 0, len = allElements_font.length; i < len; i++) {
            var element = allElements_font[i];
            element.style.fontFamily  = font;
            }
            var allElements_font_Velicina = document.getElementsByTagName("*");
            for (var i = 0, len = allElements_font_Velicina.length; i < len; i++) {
            var element = allElements_font_Velicina[i];
            element.style.fontSize = VelicinaFonta;
            }

        }

        var odlazak = false;
        this.window.addEventListener("storage",e=>{
            postaviSve();
            odlazak =true;
        });

        this.window.onload = postaviSve();

      // window.addEventListener("storage",function(){
      //     this.alert("Window Storage");
      //     reload();
      //     postaviSve();
      //     location.reload();
      //     localStorage.removeItem("primjeni");
      // });
        

        


    }
    else{
        
        brisiSVE();
        document.addEventListener("click", function(event){
           
            if(event.target.closest(".grid-kontenjer2") || event.target.closest(".odlazak_link")){
                
                alert("Niste prijavljeni!");
                event.preventDefault();
                if(window.location == "https://spider.foi.hr/OWT/2022/zadaca_03/vtrakosta20/index.html" || window.location == "https://spider.foi.hr/OWT/2022/zadaca_03/vtrakosta20/obrazac.html" || window.location == "https://spider.foi.hr/OWT/2022/zadaca_03/vtrakosta20/ostalo/kreativna.html" || window.location == "https://spider.foi.hr/OWT/2022/zadaca_03/vtrakosta20/ostalo/multimedija.html" || window.location == "https://spider.foi.hr/OWT/2022/zadaca_03/vtrakosta20/ostalo/o_autoru.html" || window.location == "https://spider.foi.hr/OWT/2022/zadaca_03/vtrakosta20/podaci/popis.html")
                {
                    window.location.href = "https://spider.foi.hr/OWT/2022/zadaca_03/vtrakosta20/prijava.html";
                }
                else{
                    
                    window.location.href = "prijava.html";
                    
                }
                localStorage.removeItem("primjeni");     
            }
        });
    }
    

    

});



window.addEventListener("load",function(){
    if(title=="Dizajn"){
       var colorPickPozadina = document.getElementById("colorWellPozadina");
       var font = document.getElementById("VrstaFonta_select");
       var VelicinaFonta =  document.getElementById("VelicinaFonta_select");
       var colorPickSlova = document.getElementById("colorWellSlova");
       var colorPickNav =  document.getElementById("colorWellnav");

       
       
    function stvoriCookie(name,value){
        const date = new Date(citajCookie("Traje").substring(19));
        
        let expir = "expires="+date.toUTCString();
        document.cookie=`${name}=${value}; ${expir};path=/`
    }

    function citajCookie(name){
        const cDekodiran = decodeURIComponent(document.cookie);
        const cArray=cDekodiran.split("; ");
        var result =null;

        cArray.forEach(element=>{
            if(element.indexOf(name)==0){
                result = element.substring(name.lenght+1);
            }
        });
        return result;
    }

    function gotovDizajn(){
    stvoriCookie("BojaPozadine",colorPickPozadina.value);
    stvoriCookie("VrstaFonta",font.value);
    stvoriCookie("BojaSlova",colorPickSlova.value);
    stvoriCookie("BojaNavigacije",colorPickNav.value);
    stvoriCookie("VelicinaFonta",VelicinaFonta.value);
    }
    document.addEventListener("click", function(event){
           
        if(event.target.closest("#primjeni")){
            gotovDizajn();
            localStorage.setItem("primjeni", true);
            
            localStorage.removeItem("primjeni");
            
        }
    });

    
    }
else{
    return
}

});