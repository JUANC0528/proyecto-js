$(document).ready(function(){


    //funcion de slider
    if(window.location.href.indexOf('index')>-1){ //solo utilizar en el index y no en los acordeones
      $('.galeria').bxSlider({
          mode: 'fade', 
          captions: true,
          slideWidth: 1200
        });
    }
      //https://bxslider.com/options/

      //Post de tipo json
      if(window.location.href.indexOf('index')>-1){ //solo utilizar en el index
        var Post = [
          {
              title:'Prueba de titulo 1',
              date: 'Publicado el día '+moment().date() + " de "+moment().format("MMMM")+" del año "+moment().format("YYYY"),//viene de la libreria momentjs el cual se puso en el head
              content:'El nieto que no tiene estudios universitarios ni pareja, conversando que su próximo amor será una muñeca de Silicona textura real de casi un millón de pesos'
          },
          {
              title:'Prueba de titulo 2',
              date: 'Publicado el día '+moment().date() + " de "+moment().format("MMMM")+" del año "+moment().format("YYYY"),//viene de la libreria momentjs el cual se puso en el head
              content:'El nieto que no tiene estudios universitarios ni pareja, conversando que su próximo amor será una muñeca de Silicona textura real de casi un millón de pesos'
          },
          { 
              title:'Prueba de titulo 3',
              date: 'Publicado el día '+moment().date() + " de "+moment().format("MMMM")+" del año "+moment().format("YYYY"),//viene de la libreria momentjs el cual se puso en el head
              content:'El nieto que no tiene estudios universitarios ni pareja, conversando que su próximo amor será una muñeca de Silicona textura real de casi un millón de pesos'
          },
          {
              title:'Prueba de titulo 4',
              date: 'Publicado el día '+moment().date() + " de "+moment().format("MMMM")+" del año "+moment().format("YYYY"),//viene de la libreria momentjs el cual se puso en el head
              content:'El nieto que no tiene estudios universitarios ni pareja, conversando que su próximo amor será una muñeca de Silicona textura real de casi un millón de pesos'
          },
          {
              title:'Prueba de titulo 5',
              date: 'Publicado el día '+moment().date() + " de "+moment().format("MMMM")+" del año "+moment().format("YYYY"),//viene de la libreria momentjs el cual se puso en el head
              content:'El nieto que no tiene estudios universitarios ni pareja, conversando que su próximo amor será una muñeca de Silicona textura real de casi un millón de pesos'
          }
        ];
        Post.forEach((item,index)=>{ //foreach que recorre el json de antes
          var post =`
          <article class="post">
          <h2>${item.title}</h2> 
          <span class="date">${item.date}</span>
          <p>${item.content}</p>
          <a href="#" class="button-more">Leer más</a>
      </article>`;  //plantilla html
          $("#posts").append(post);//ya que es un archivo html, lo uno al #posts que es un div en el html
        });
    }




      //Selector de tema
      var theme = $("#theme");
      //storage
      if(sessionStorage.length > 0 && typeof(sessionStorage.tema) != "undefined"){//si la secion es mayor a 0 y ademas sesion.tema es diferente a undefined, href es seion  tema
        theme.attr('href', sessionStorage.tema);
    }
    //entonces al momento de implementarlo sesion.tema es verde, rojo o azul
    var green = "css/green.css";
    var red = "css/red.css";
    var blue = "css/blue.css";

      //cambia a verde
      $("#to-green").click(function(){
        theme.attr("href","css/green.css"); //cambia el atributo
        sessionStorage.tema = green; 
      });

      //cambia a rojo
      $("#to-red").click(function(){
        theme.attr("href","css/red.css");
        sessionStorage.tema = red; 
      });

      //cambia a azul
      $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
        sessionStorage.tema = blue; 
      });

      //scroll arriba de la web
      $(".subir").click(function(e){
        e.preventDefault();//para que el link no haga que nos lleve a otro sitio
        $('html,body').animate({
          scrollTop: 0 // sube hasta el pixel 0
        },500);
        return false; //no haga la funcion link
      });

      //login falso
      $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name",form_name); //valor en el local storage

      });

      //guardar nombre en local storage

      var form_name = localStorage.getItem("form_name"); //obtengo el local storage

      if(form_name != null && form_name!= "undefined"){
        var about_parrafo = $("#about p");
        
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        
        about_parrafo.append("<br><a href='#' id='logout'>cerrar sesion</a>");//agregar boton para cerrar sesion
        
        $("#login").hide(); //una vez presiono lo quito

        $("#logout").click(function(e){
          e.preventDefault();//al ser link debe ponerse para que no intente hacer cambio de pagina
         //$("#login").show();//muestro el formulario no es necesario ya qeu al momento de recargar vuelve a ver qeu hay un null
          localStorage.removeItem("form_name"); //remuevo el localstorage tambien puede ser clear()
          location.reload(); //para hacer f5 en la pantalla
        });

      }

      /* Archivo about*/
      if(window.location.href.indexOf('about')>-1){ //solo utilizar en el about
        $("#acordeon").accordion();
      }


      /*archivo reljo*/
      if(window.location.href.indexOf('reloj')>-1){ //solo utilizar en el reloj
        
        setInterval(function(){ //cada 1 segundo ejecutame esta instruccion
          var reloj = moment().format("h:mm:ss");
          $("#reloj").html(reloj); //imprimir eso
        },1000);
        
      }
      
      
      //------------VALIDACIÓN-------------------
      if(window.location.href.indexOf('contact')>-1){
        //plugin de la validación

        $("form input[name='date']").datepicker({
          dateFormat: 'dd-mm-yy' //para cambiar formato a dia mes año
        });//muestra el calendario

        $.validate({
          lang: 'es',
          errorMessagePosition:'top', //mensaje arriba  
          scrollToTopOnError: true //y se va arriba
        });
      }
      //-------------TERMINO-DE-VALIDACIÓN-------------------
    });


 