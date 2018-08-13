// LANGUAGE TEXT SETTER

$("#testul").on("click", "li", function (event) {
    console.log(event);
    event.preventDefault();
    var clickedSubMenu = $(this);
    $('#testa').text(clickedSubMenu.text()); // <-- removes the caret icon
});

// RESPONSIVE NAVBAR MENU

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
        passion_text: 'Autos sind unsere Leidenschaft',
        experience_title: 'Erfahrung',
        experience_text: 'Über 20 Jahre Berufserfahrung',
        films_title: 'Auswahl',
        films_text: 'Mehr als 100 verschiedene Folienarten',
        guarantee_title: 'Garantie',
        guarantee_text: 'Bis zu 10 Jahre Garantie vom Hersteller',
        partners_title: 'Zertifizierungspartner',
        contact_title_1: 'Wir sind für sie da',
        contact_title_2: 'Ihre Anfrage',
        contact_button: 'Sprich mit uns!',
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
        competence_title: 'Unsere Kompetenz',
        passion_title: 'Passion',
        passion_text: 'Cars are our passion',
        experience_title: 'Experience',
        experience_text: 'Over 20 years of professional experience',
        films_title: 'Selection',
        films_text: 'More than 100 different types of foils',
        guarantee_title: 'Guarantee',
        guarantee_text: 'Up to 10 years warranty from the manufacturer',
        partners_title: 'Certification partners',
        contact_title_1: 'We are here for you',
        contact_title_2: 'Your request',
        contact_button: 'Talk to us!',
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
        vehicles_title: 'Zatamnjavamo vaše prozore automobila pojedinačno za merenje.',
        buildings_title: 'Lorem ipsum dolor sitam est magnatus semper.',
        slider_button: 'Saznajte više',
        content_title: '100% Kvalitet u Savršenstvu.',
        content_text_blue: 'Moja Folija bietet Ihnen ein breites Spektrum an Leistungen rund um das Thema Folierung an. Egal ob Autofolierungen, Scheibentönungen oder Gebäudefolierung für Außen- und Innenfolien.',
        content_text_left: 'Mangatus Landebitat occum, te et, ut dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut fugitatem denihic ienturi tisque voluptae lations ecerciento imolest dolore eum doloria sperum faccullam quis inimus. Sque voluptae.',
        content_text_right: 'Dandebitat occum, te et, ut dollore, excesequi ulparum fugitiunt adis estoresectat am et dolut fugitatem denihic ienturi tisque voluptae lations ecerciento imolest dolore eum doloria sperum faccullam quis inimus.',
        competence_title: 'Naša Kompetencija',
        passion_title: 'Strast',
        passion_text: 'Automobili su naša strast',
        experience_title: 'Iskustvo',
        experience_text: 'Preko 20 godina profesionalnog iskustva',
        films_title: 'Izbor',
        films_text: 'Više od 100 različitih vrsta folija',
        guarantee_title: 'Garancija',
        guarantee_text: 'Do 10 godina garancije od proizvođača',
        partners_title: 'Zertifizierungspartner',
        contact_title_1: 'Tu smo za vas',
        contact_title_2: 'Vaš zahtev',
        contact_button: 'Pričaj sa nama!',
        lang_selector: 'Izbor jezika:',
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
        vs_family_title: 'Porodica',
        vs_family_text: 'LLumar folije filtriraju čak 99,9% štetne UV zrake, čime se u znatnoj meri umanjuje bleđenje unutrašnjosti Vašeg automobila, kao što se bitno smanjuje i mogućnost oboljenja kože čoveka usled štetnog dejstva UV zraka.',
        vs_safety_title: 'Sigurnost',
        vs_safety_text: 'Sigurnosna folija montirana na stakla, u slučaju nezgode – lomljenja i mogućeg rasprskavanja, – staklo zadržava u jednom komadu čime pruža zaštitu od mogućih povreda, kao i protiv provala.',
        vs_comfort_title: 'Komfor',
        vs_comfort_text: 'LLumar folije umanjuju zaslepljujuće i toplotno dejstvo sunčeve energije. Obezbeđuju ravnomeran stepen svetlosti, i doprinose Vašem ugodnom raspoloženju. Poseduju odgovarajući zaštitni sloj protiv ogrebotina.',
        vs_quality_title: 'Ocena kvaliteta',
        vs_quality_text: 'Sve LLumar folije filtriraju sadrže sloj protiv ogrebotina, štiteći foliju tokom pomeranja prozora. Jedinstven stabilizator boje i posebna UV-zaštitna konstrukcija osiguravaju neizmenjenost izgleda i osobina folije.',
        vs_gallery_title: 'Galerija',
    }
};

function AppViewModel() {
    var self = this;
    var language = localStorage.getItem('translation');
    if (language){
        this.translation = ko.observable(translation[language]);
    } else {
        this.translation = ko.observable(translation["De"]);
    }

//? kod ispod ne radi
    var clickedSubMenu = localStorage.getItem('language');

    // if (clickedSubMenu == "English"){
    //     this.language = ko.observable(language["En"]);
    // } else if (clickedSubMenu == "Srpski"){
    //     this.language = ko.observable(language["Sr"]);
    // } else {
    //     this.language = ko.observable(language["De"]);
    // }

    // if (language) this.clickedSubMenu = ko.observable(clickedSubMenu[language]);
    // else if (language == "Sr") 
    //     this.clickedSubMenu = ko.observable(clickedSubMenu["Srpski"]);
    // else if (language == "En")
    //     this.clickedSubMenu = ko.observable(clickedSubMenu [ "English"]);
    // else 
    //     this.clickedSubMenu = ko.observable(clickedSubMenu["Deutsch"]);

       if (language) this.clickedSubMenu = ko.observable(clickedSubMenu[language]);
    else (language == "De")
        this.clickedSubMenu = ko.observable(clickedSubMenu["Deutsch"]);


    // if (clickedSubMenu == "Srpski") {
    //     this.translation = ko.observable(translation["Sr"]);
    // } else if (clickedSubMenu == "English"){
    //         this.translation = ko.observable(translation["En"]);
    // } else {
    //     this.translation = ko.observable(translation["De"]);
    // }

    this.change = function(language){
        self.translation(translation[language]);
        localStorage.setItem('translation', language);
        console.log(self.translation());
        var clickedSubMenu = "Srpski";
        if (language == "De") clickedSubMenu = "Deutsch";
        else if (language == "En") clickedSubMenu = "English";
        $('#testa').text(clickedSubMenu);
         // localStorage.setItem('language', clickedSubMenu); //?
    }
}

ko.applyBindings(new AppViewModel());

// Back to Top Button

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#btt-link').fadeIn(); 
        } else { 
            $('#btt-link').fadeOut(); 
        } 
    }); 
    $('#btt-link').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});