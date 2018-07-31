
//     function toggleClass(elem, c) {
//         var fn = hasClass(elem, c) ? removeClass : addClass;
//         fn(elem, c)
//     }
//     var hasClass, addClass, removeClass;
//     "classList" in document.documentElement ? (hasClass = function(elem, c) {
//         return elem.classList.contains(c)
//     }, addClass = function(elem, c) {
//         elem.classList.add(c)
//     }, removeClass = function(elem, c) {
//         elem.classList.remove(c)
//     }) : (hasClass = function(elem, c) {
//         return classReg(c).test(elem.className)
//     }, addClass = function(elem, c) {
//         hasClass(elem, c) || (elem.className = elem.className + " " + c)
//     }, removeClass = function(elem, c) {
//         elem.className = elem.className.replace(classReg(c), " ")
//     });
//     var classie = {
//         hasClass: hasClass,
//         addClass: addClass,
//         removeClass: removeClass,
//         toggleClass: toggleClass,
//         has: hasClass,
//         add: addClass,
//         remove: removeClass,
//         toggle: toggleClass
//     };
//     "function" == typeof define && define.amd ? define(classie) : window.classie = classie
// ,
// function() {
//     function init() {
//         initEvents()
//     }

//     function initEvents() {
//         return 0 !== $(openbtn).length && (openbtn.addEventListener("click", toggleMenu), closebtn && closebtn.addEventListener("click", toggleMenu), void content.addEventListener("click", function(ev) {
//             var target = ev.target;
//             isOpen && target !== openbtn && toggleMenu()
//         }))
//     }

//     function toggleMenu() {
//         isOpen ? classie.remove(bodyEl, "show-menu") : classie.add(bodyEl, "show-menu"), isOpen = !isOpen
//     }
//     var bodyEl = document.body,
//         content = document.querySelector("header"),
//         openbtn = document.getElementById("open-button"),
//         closebtn = document.getElementById("close-button"),
//         isOpen = !1;
//     init()
// }(),

// language text setter

$("#testul").on("click", "li", function (event) {
    console.log(event);
    event.preventDefault();
    var clickedSubMenu = $(this);
    $('#testa').text(clickedSubMenu.text()); // <-- removes the caret icon
});

var removeClass = true;

$(".menu-button").click(function () {
    $("header").toggleClass('show-menu');
    removeClass = false;
});

$("header").click(function() {
    removeClass = false;
});

$("html").click(function () {
    if (removeClass) {
        $("header").removeClass('show-menu');
    }
    removeClass = true;
});

// KNOCKOUT TRANSLATION

var translation = {
    De : {  
        home: 'Startseite',
        vehicles: 'Fahrzeuge',
        buildings: 'Gebäude',
        about_us: 'Über uns',
        references: 'Referenz',
        vehicles_title: 'Wir tönen Ihre Fahrzeugscheiben individuell nach Maß.',
        buildings_title: 'Lorem ipsum dolor sitam est magnatus semper.',
        slider_button: 'Mehr Erfahren',
        content_title: '100% Qualität in Perfektion.',
        content_text_blue: 'Moja Folija bietet Ihnen ein breites Spektrum an Leistungen rund um das Thema Folierung an. Egal ob Autofolierungen, Scheibentönungen oder Gebäudefolierung für Außen- und Innenfolien.',
        content_text_left: 'Mangatus Landebitat occum, te et, ut dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut fugitatem denihic ienturi tisque voluptae lations ecerciento imolest dolore eum doloria sperum faccullam quis inimus. Sque voluptae.',
        content_text_right: 'Dandebitat occum, te et, ut dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut fugitatem denihic ienturi tisque voluptae lations ecerciento imolest dolore eum doloria sperum faccullam quis inimus.',
        competence_title: 'Unsere Kompetenz',
        passion_title: 'Leidenschaft',
        passion_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        experience_title: 'Erfahrung',
        experience_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        films_title: 'Auswahl',
        films_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        guarantee_title: 'Garantie',
        guarantee_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        partners_title: 'Zertifizierungspartner',
        contact_title_1: 'Wir sind für sie da',
        contact_title_2: 'Ihre Anfrage',
        contact_button: 'Lorem ipsum dolor sitam',
        lang_selector: 'Sprachauswahl:',
        german: 'Deutsch',
        english: 'Englisch',
        serbian: 'Serbisch',
        vs_title: 'Ihre Vorteile unserer Fahrzeugfolierungen',
        vs_advantages: 'Wir tönen Ihre Fahrzeugscheiben individuell nach Maß. Durch verschiedene Tönungsstufen können Sie entscheiden, wie dunkel die Scheibentönung werden soll. Unsere Scheibentönungen schützen Sie vor UV-Strahlung. Des Weiteren schützen unsere mehrlagigen Scheibentönungsfolien Ihr Auto vor Splitter und Hitze. Unsere Autoglasfolien sind ein vielseitiges und effizientes Produkt, das bereits ab dem Moment der Installation, seine volle Wirkungsweise entfaltet. Lebenslange Farbstabilität und anerkannte Zertifizierungen ausgewählter Premiumfolien, verbesserter Fahrkomfort, ausgewogeneres Raumklima, Entlastung der Klimaanlage und somit Energieeinsparung, durch die splitterbindende Wirkung kann die Sicherheit bei Unfällen erhöht werden. Nicht zuletzt ist die optische Aufwertung Ihres Fahrzeugs einer der vielen Vorzüge, die Sie von einer professionellen Autoglasfolien erwarten können.',
        vs_sun_protection: 'Hitzereduktion und UV-Schutz',
        vs_privacy_protection: 'Sicht- und Blendschutz',
        vs_splinter_protection: 'Effektiver Splitterschutz',
        vs_tinting_aesthetics: 'Individueller Tönungsgrad und Moderne Ästhetik',
        vs_services_title: 'Jeder Mensch hat andere Bedürfnisse',
        vs_family_title: 'Familie',
        vs_family_text: 'LLumar Folien filtern bis zu 99,9 % UV Licht ab, indem Sie Ihre Autoscheiben verdunkeln. Dadurch schützen Sie sich und Ihre Familie vor schädlichem UV Licht.',
        vs_safety_title: 'Sicherheit',
        vs_safety_text: 'Die LLumar Autoglas Sicherheitsfolien Ihnen dabei helfen können, Ihr Fahrzeug und seine Insassen vor Einbruch zu schützen. Egal ob Ihr Fahrzeug unbeaufsichtigt ist oder Sie z.B. an einer Ampel halten, LLumar Autoglasfolien zum Splitterschutz und Einbruchhemmung helfen.',
        vs_comfort_title: 'Komfort',
        vs_comfort_text: 'Durch die Ausfilterung von mehr als 99 % der schädlichen ultravioletten Strahlen werden Fahrgäste vor Hautschäden und die Fahrzeugausstattung vor dem Ausbleichen und vor Rissen geschützt. Und beim Fahren hilft LLumar-Fensterfolie, blendendes Licht und eine Überanstrengung der Augen zu vermeiden.',
        vs_quality_title: 'Qualität',
        vs_quality_text: 'LLumar-Folien werden fachgerecht von qualifizierten Mitarbeitern verlegt und mit einer der besten Herstellergarantien der Branche verkauft.',
        vs_gallery_title: 'Galerie',
    },
    En: {
        home: 'Home',
        vehicles: 'Vehicles',
        buildings: 'Buildings',
        about_us: 'About us',
        references: 'References',
        vehicles_title: 'We tint your vehicle windows individually to measure.',
        buildings_title: 'Lorem ipsum dolor sitam est magnatus semper.',
        slider_button: 'Learn more',
        content_title: '100% Quality in Perfection.',
        content_text_blue: 'Moja Folija bietet Ihnen ein breites Spektrum an Leistungen rund um das Thema Folierung an. Egal ob Autofolierungen, Scheibentönungen oder Gebäudefolierung für Außen- und Innenfolien.',
        content_text_left: 'Mangatus Landebitat occum, te et, ut dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut fugitatem denihic ienturi tisque voluptae lations ecerciento imolest dolore eum doloria sperum faccullam quis inimus. Sque voluptae.',
        content_text_right: 'Dandebitat occum, te et, ut dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut fugitatem denihic ienturi tisque voluptae lations ecerciento imolest dolore eum doloria sperum faccullam quis inimus.',
        competence_title_1: 'Unsere Kompetenz',
        passion_title: 'Passion',
        passion_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        experience_title: 'Experience',
        experience_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        films_title: 'Films',
        films_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        guarantee_title: 'Guarantee',
        guarantee_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        partners_title: 'Certification partners',
        contact_title_1: 'We are here for you',
        contact_title_2: 'Your request',
        contact_button: 'Lorem ipsum dolor sitam',
        lang_selector: 'Language selection:',
        german: 'German',
        english: 'English',
        serbian: 'Serbian',
        vs_title: 'Ihre Vorteile unserer Fahrzeugfolierungen',
        vs_advantages: 'Wir tönen Ihre Fahrzeugscheiben individuell nach Maß. Durch verschiedene Tönungsstufen können Sie entscheiden, wie dunkel die Scheibentönung werden soll. Unsere Scheibentönungen schützen Sie vor UV-Strahlung. Des Weiteren schützen unsere mehrlagigen Scheibentönungsfolien Ihr Auto vor Splitter und Hitze. Unsere Autoglasfolien sind ein vielseitiges und effizientes Produkt, das bereits ab dem Moment der Installation, seine volle Wirkungsweise entfaltet. Lebenslange Farbstabilität und anerkannte Zertifizierungen ausgewählter Premiumfolien, verbesserter Fahrkomfort, ausgewogeneres Raumklima, Entlastung der Klimaanlage und somit Energieeinsparung, durch die splitterbindende Wirkung kann die Sicherheit bei Unfällen erhöht werden. Nicht zuletzt ist die optische Aufwertung Ihres Fahrzeugs einer der vielen Vorzüge, die Sie von einer professionellen Autoglasfolien erwarten können.',
        vs_sun_protection: 'Heat reduction and UV protection',
        vs_privacy_protection: 'Visual and glare protection',
        vs_splinter_protection: 'Effective splinter protection',
        vs_tinting_aesthetics: 'Individual degree of tinting and modern aesthetics',
        vs_services_title: 'Jeder Mensch hat andere Bedürfnisse',
        vs_family_title: 'Family',
        vs_family_text: 'LLumar Folien filtern bis zu 99,9 % UV Licht ab, indem Sie Ihre Autoscheiben verdunkeln. Dadurch schützen Sie sich und Ihre Familie vor schädlichem UV Licht.',
        vs_safety_title: 'Safety',
        vs_safety_text: 'Die LLumar Autoglas Sicherheitsfolien Ihnen dabei helfen können, Ihr Fahrzeug und seine Insassen vor Einbruch zu schützen. Egal ob Ihr Fahrzeug unbeaufsichtigt ist oder Sie z.B. an einer Ampel halten, LLumar Autoglasfolien zum Splitterschutz und Einbruchhemmung helfen.',
        vs_comfort_title: 'Comfort',
        vs_comfort_text: 'Durch die Ausfilterung von mehr als 99 % der schädlichen ultravioletten Strahlen werden Fahrgäste vor Hautschäden und die Fahrzeugausstattung vor dem Ausbleichen und vor Rissen geschützt. Und beim Fahren hilft LLumar-Fensterfolie, blendendes Licht und eine Überanstrengung der Augen zu vermeiden.',
        vs_quality_title: 'Quality',
        vs_quality_text: 'LLumar-Folien werden fachgerecht von qualifizierten Mitarbeitern verlegt und mit einer der besten Herstellergarantien der Branche verkauft.',
        vs_gallery_title: 'Gallery',
    },
    Sr : {
        home: 'Početna',
        vehicles: 'Vozila',
        buildings: 'Zgrade',
        about_us: 'O nama',
        references: 'Reference',
        vehicles_title: 'Wir tönen Ihre Fahrzeugscheiben individuell nach Maß.',
        buildings_title: 'Lorem ipsum dolor sitam est magnatus semper.',
        slider_button: 'Saznajte više',
        content_title: '100% Kvalitet u Savršenstvu.',
        content_text_blue: 'Moja Folija bietet Ihnen ein breites Spektrum an Leistungen rund um das Thema Folierung an. Egal ob Autofolierungen, Scheibentönungen oder Gebäudefolierung für Außen- und Innenfolien.',
        content_text_left: 'Mangatus Landebitat occum, te et, ut dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut fugitatem denihic ienturi tisque voluptae lations ecerciento imolest dolore eum doloria sperum faccullam quis inimus. Sque voluptae.',
        content_text_right: 'Dandebitat occum, te et, ut dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut fugitatem denihic ienturi tisque voluptae lations ecerciento imolest dolore eum doloria sperum faccullam quis inimus.',
        competence_title: 'Unsere Kompetenz',
        passion_title: 'Leidenschaft',
        passion_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        experience_title: 'Erfahrung',
        experience_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        films_title: 'Auswahl',
        films_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        guarantee_title: 'Garantie',
        guarantee_text: 'Mangatus Landebitat occum, dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut ugitatem denihic ienturi tisque.',
        partners_title: 'Zertifizierungspartner',
        contact_title_1: 'Tu smo za vas',
        contact_title_2: 'Vaš zahtev',
        contact_button: 'Lorem ipsum dolor sitam',
        lang_selector: 'Izbor jezik:',
        german: 'Nemački',
        english: 'Engleski',
        serbian: 'Srpski',
        vs_title: 'Ihre Vorteile unserer Fahrzeugfolierungen',
        vs_advantages: 'Wir tönen Ihre Fahrzeugscheiben individuell nach Maß. Durch verschiedene Tönungsstufen können Sie entscheiden, wie dunkel die Scheibentönung werden soll. Unsere Scheibentönungen schützen Sie vor UV-Strahlung. Des Weiteren schützen unsere mehrlagigen Scheibentönungsfolien Ihr Auto vor Splitter und Hitze. Unsere Autoglasfolien sind ein vielseitiges und effizientes Produkt, das bereits ab dem Moment der Installation, seine volle Wirkungsweise entfaltet. Lebenslange Farbstabilität und anerkannte Zertifizierungen ausgewählter Premiumfolien, verbesserter Fahrkomfort, ausgewogeneres Raumklima, Entlastung der Klimaanlage und somit Energieeinsparung, durch die splitterbindende Wirkung kann die Sicherheit bei Unfällen erhöht werden. Nicht zuletzt ist die optische Aufwertung Ihres Fahrzeugs einer der vielen Vorzüge, die Sie von einer professionellen Autoglasfolien erwarten können.',
        vs_sun_protection: 'Hitzereduktion und UV-Schutz',
        vs_privacy_protection: 'Sicht- und Blendschutz',
        vs_splinter_protection: 'Effektiver Splitterschutz',
        vs_tinting_aesthetics: 'Individueller Tönungsgrad und Moderne Ästhetik',
        vs_services_title: 'Jeder Mensch hat andere Bedürfnisse',
        vs_family_title: 'Familie',
        vs_family_text: 'LLumar Folien filtern bis zu 99,9 % UV Licht ab, indem Sie Ihre Autoscheiben verdunkeln. Dadurch schützen Sie sich und Ihre Familie vor schädlichem UV Licht.',
        vs_safety_title: 'Sicherheit',
        vs_safety_text: 'Die LLumar Autoglas Sicherheitsfolien Ihnen dabei helfen können, Ihr Fahrzeug und seine Insassen vor Einbruch zu schützen. Egal ob Ihr Fahrzeug unbeaufsichtigt ist oder Sie z.B. an einer Ampel halten, LLumar Autoglasfolien zum Splitterschutz und Einbruchhemmung helfen.',
        vs_comfort_title: 'Komfort',
        vs_comfort_text: 'Durch die Ausfilterung von mehr als 99 % der schädlichen ultravioletten Strahlen werden Fahrgäste vor Hautschäden und die Fahrzeugausstattung vor dem Ausbleichen und vor Rissen geschützt. Und beim Fahren hilft LLumar-Fensterfolie, blendendes Licht und eine Überanstrengung der Augen zu vermeiden.',
        vs_quality_title: 'Qualität',
        vs_quality_text: 'LLumar-Folien werden fachgerecht von qualifizierten Mitarbeitern verlegt und mit einer der besten Herstellergarantien der Branche verkauft.',
        vs_gallery_title: 'Galerija',
    }
};
    
// var json = (function () {
//     var json = null;
//     $.ajax({
//         'async': false,
//         'global': false,
//         'url': assets/js/languageText.json,
//         'dataType': "json",
//         'success': function (data) {
//             json = data;
//         }
//     });
//     return json;
// })(); 

// var translation = null;
// $.getJSON("languageText.json", function(data) {
//   itens = data;
//   itens.forEach(function(item) {
//     console.log(item);
//   });
// });
// console.log(itens);

// var translation;
// $.getJSON("assets/js/languageText.json", function(json){
//     translation = json;
// });

// ko.bindingHandlers.placeholder = {
//     init: function (element, valueAccessor) {
//         var placeholderValue = valueAccessor();
//         ko.applyBindingsToNode(element, { attr: { placeholder: placeholderValue} } );
//     },
//     update: function(element, valueAccessor){
//         $.placeholder.shim();
//     }
// };

// ko.bindingHandlers.hintText= {
//     init: function (element, valueAccessor) {
//         element.focus(function () {
//             if ($(this).val() === defaultText) {
//                 $(this).attr("value", "");
//             }
//         });
//         element.blur(function () {
//             if ($(this).val() === '') {
//                 $(this).val(valueAccessor());
//             }
//         });
//     }
// }

// localStorage.translation = "En";
// localStorage.translation = "De";
// localStorage.translation = "Sr";
// localStorage.setItem('translation', language);
// localStorage.setItem('De', 'En', 'Sr');
// var De = localStorage.getItem('De');
// var En = localStorage.getItem('En');
// var Sr = localStorage.getItem('Sr');
// localStorage.removeItem('De', 'En', 'Sr');
// localStorage.clear();

function AppViewModel() {
    var self = this;
    this.translation = ko.observable(translation["De"]);
    this.change = function(lang){
        self.translation(translation[lang]);
        console.log(self.translation());
    }
}

ko.applyBindings(new AppViewModel());

