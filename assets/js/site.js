/**
 * Menu
 */
 $("a.menu-icon").on("click", function(event) {
   var w = $(".menu");

   w.css({
     display: w.css("display") === "none"
      ? "block"
      : "none"
   });
 });

// e-mail reveal
 $("#email-link").on("mouseenter mouseover touchstart", function(event) {
   var w = $("#email-link");
   w.attr("href",
     w.attr("href")
     .replace("firstname", "laurent")
     .replace("lastname", "dinh"));
   w.html(
     w.html()
     .replace("firstname", "laurent")
     .replace("lastname", "dinh"));
 })

 $("#email-link").on("mouseleave mouseout touchend", function(event) {
   var w = $("#email-link");
   w.attr("href",
     w.attr("href")
     .replace("laurent", "firstname")
     .replace("dinh", "lastname"));
   w.html(
     w.html()
     .replace("laurent", "firstname")
     .replace("dinh", "lastname"));
 })

// first/third person
 $("#pronouns").on("click", function(event) {
   var third_person = (/third/i).test($("#pronouns").attr("value"));
   $(".change-person").each(function() {
     $(this).text(
       third_person
       ? $(this).attr("i-content")
       : $(this).attr("he-content")
     );
   });
   $("#pronouns").attr("value",
     third_person
     ? "first"
     : "third")
 });
 $("#pronouns").css({cursor: "pointer"})

// night mode
 function getDarkVariable() {
   try {
     return localStorage.getItem("dark");
   }
   catch(e) {
     return false;
   }
 }
 function setDarkVariable(value_) {
   try {
     localStorage.setItem("dark", value_);
   }
   finally {
     0;
   }
 }
 function SetToLightMode() {
   $("#light-switch").attr(
     "class",
     (/true/i).test(getDarkVariable())
     ? "fas fa-sun"
     : "fas fa-moon");
   $("#main-style").attr("href",
     (/true/i).test(getDarkVariable())
     ? "/assets/css/night.css"
     : "/assets/css/main.css");
 }
 try {
   if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
     console.log("no preference.");
     if (getDarkVariable() == null) {
       console.log("no local storage.");
     }
     var hours = new Date().getHours();
     setDarkVariable(
       (getDarkVariable() == null)
       ? !(hours > 6 && hours < 20)
       : getDarkVariable());
   }
   else {
     console.log("preference.");
     if (getDarkVariable() == null) {
       console.log("no local storage.");
     }
     setDarkVariable(
       (getDarkVariable() == null)
       ? window.matchMedia && window.matchMedia(
         '(prefers-color-scheme: dark)').matches
       : getDarkVariable());
   }
   SetToLightMode();
   $("#light-switch").on("click", function(event) {
     setDarkVariable(
       !(/true/i).test(getDarkVariable()));
     SetToLightMode();
   });
   $("#light-switch").css({cursor: "pointer"})
 }
 catch(e) {
   SetToLightMode();
   $("#light-switch").attr("class", "");
 }

 function removeNonASCII(input_str) {
   input_str = input_str.toString();
   return input_str.replace(/[^\x00-\x7F]/g,"");
 }

// change tooltip content
 function modifyTooltip(tooltipped_elem, new_text, duration = 1000) {
   try {
     var tooltip_div = document.getElementById(
      tooltipped_elem.getAttribute('aria-describedby')).children[1];
     var old_text = tooltip_div.textContent;
     tooltip_div.textContent = new_text;
     setTimeout(() => {
       tooltip_div.textContent = old_text }, duration);
   }
   catch(e) {0;}
   finally {0;}
 }

// delete popovers when clicking outside
 $('body').on('click', function (e) {
     $('[data-toggle="popover"]').each(function () {
         //the 'is' for buttons that trigger popups
         //the 'has' for icons within a button that triggers a popup
         if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
             $(this).popover('hide');
         }
     });
 });

