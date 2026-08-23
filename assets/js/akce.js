(() => {
  "use strict";

  const eventGroups = {
    upcoming: [
      {
        id: "siegfried-und-brunhild",
        title: "Siegfried und Brunhild",
        image: "assets/images/siegfried2026.jpeg",
        summary: "SŠ + druhý stupeň ZŠ",
        details: ["Představení proběhne ve spolupráci s brněnským divadelním souborem Domino Theater, diváky čeká ilustrované vyprávění bájného příběhu z cyklu legend o Nibelunzích. Vypravěč, který je zapojen do děje, provází diváky magickým příběhem odehrávajícím se na scéně. Produkce je určena divákům různých jazykových úrovní, představení je velmi vizuální a je koncipováno tak, aby děj pochopil i začátečník a bylo pro něj motivací k dalšímu studiu cizího jazyka. Pokročilejší studenti si budou moci otestovat své znalosti němčiny při poslechu mluveného projevu."]
      },
      {
        id: "lord-of-the-flies2",
        title: "Lord of the Flies",
        image: "assets/images/lordflies.jpg",
        summary: "SŠ + druhý stupeň ZŠ",
        details: ["Hra pojednává o trosečnících na opuštěném ostrově. Divák má šanci sledovat snahu o záchranu, komunikační krize i vliv extrémních podmínek. Příběh nepostrádá napětí a momenty dramatických zvratů."]
      },
      {
        id: "taming-of-the-shrew",
        title: "The Taming of the Shrew",
        image: "assets/images/thetaming.jpg",
        summary: "SŠ + druhý stupeň ZŠ",
        details: ["Inscenace má atmosféru 20. let 20. století s nostalgií tónů jazzu a swingu, kdy ženy usilovaly o rovnoprávnost a kdy slovo feminismus bylo pro muže noční můrou."]
      },
      {
        id: "winters-tale",
        title: "The Winter’s Tale",
        image: "assets/images/thewintertale.jpg",
        summary: "SŠ + druhý stupeň ZŠ",
        details: ["Zimní pohádka je čarovná hra o hloubce lidské lásky a nenávisti, o krutosti a oddané věrnosti, o pošetilosti mocných, odhalování tajemství kořenů minulosti a věštbách budoucnosti. Ruku v ruce zde kráčí radost a smutek, život a smrt. Poetický příběh se šťastným koncem vás naladí na tu správnou vánoční atmosféru."]
      },
      {
        id: "narnia",
        title: "Narnia",
        image: "assets/images/narnia.jpg",
        summary: "První stupeň ZŠ",
        details: ["Název napovídá, že představení je adaptací slavného románu C. S. Lewise Lev, čarodějnice a skříň. V dospělých rolích uvidíte lektory Domino Project z.s. a dětské postavy ztvární členové Domino Theater, souboru který je sestaven z dětí základních škol a osmiletých gymnázií, kteří inscenaci nacvičili pod odborným jazykovým vedením."]
      },
    ],
    past: [
      {
        id: "my-family",
        title: "My Family and Other Animals",
        image: "assets/images/my-family.jpg",
        summary: "Nové představení souboru Domino.",
        details: ["Podrobnosti k tomuto představení pro vás právě připravujeme."]
      },
      {
        id: "fighting-windmills",
        title: "Fighting Windmills",
        image: "assets/images/fighting-windmills.jpg",
        summary: "Nové představení souboru Domino.",
        details: ["Podrobnosti k tomuto představení pro vás právě připravujeme."]
      },
      {
        id: "three-times-love",
        title: "3× über die Liebe",
        image: "assets/images/uber-die-liebe.jpg",
        summary: "Nové představení souboru Domino.",
        details: ["Podrobnosti k tomuto představení pro vás právě připravujeme."]
      },
      {
        id: "around-the-world",
        title: "Around the World with Mary Poppins",
        image: "assets/images/around_the_world.jpg",
        summary: "Hravé představení volně inspirované postavou Mary Poppins.",
        details: ["Hravé představení je volně inspirováno postavou Mary Poppins. Po boku slavné chůvy se děti postupně seznamují se zeměmi, kde se mluví anglicky.", "Prvkem blízkým publiku je věk herců – kromě dospělé Mary totiž diváci na jevišti uvidí děti své věkové kategorie."]
      },
      {
        id: "midsummer",
        title: "A Midsummer Night’s Dream",
        image: "assets/images/A_Midsummer_Night's_Dream_clean_Fotor.jpg",
        summary: "Hra na motivy slavné komedie Williama Shakespeara.",
        details: [
          "Hra na motivy slavné komedie Williama Shakespeara. Sen noci svatojánské patří k divácky nejvděčnějším komediím tohoto autora.",
          "Je zde prostor pro romantiku, fantazii, humor, studentskou nadsázku a recesi. Lidský svět se propojuje se světem elfů a dochází k nečekaným zápletkám."
        ]
      },
      {
        id: "canterbury-tales",
        title: "The Canterbury Tales",
        image: "assets/images/Canterbury Tales.jpg",
        summary: "Canterburské povídky autora Geoffreyho Chaucera.",
        details: [
          "Geoffrey Chaucer zařadil Canterburské povídky svou literární úrovní mezi základní díla klasické anglické literatury.",
          "Inscenace je moderními výrazovými prostředky a svou formou divadla na divadle přiblížena současnému mladému publiku. Herci cestující vlakem na festival využívají času k divadelní zkoušce."
        ]
      },
      {
        id: "der-turm",
        title: "Der Turm",
        image: "assets/images/der_turm.jpg",
        summary: "Dva příběhy bratří Grimmů spojené motivem věže. Představení v němčině.",
        details: [
          "Představení v němčině.",
          "Dva příběhy bratří Grimmů spojuje motiv věže. Na jevišti se sejde skupina lidí, kteří pod vedením vypravěče hrají hru. Losují karty ukryté ve věži a podle nich jim vypravěč přiděluje role.",
          "Herci rozehrávají dva po sobě jdoucí příběhy z pera bratří Grimmů. Pokud věž spadne, vše končí."
        ]
      },
      {
        id: "henry-six-wives",
        title: "Henry and Six Wives",
        image: "assets/images/henry_six.jpg",
        summary: "Představení inspirované anglickými dějinami první poloviny 16. století.",
        details: [
          "Představení je inspirováno anglickými dějinami první poloviny 16. století a očima turisty je přibližuje současnému mladému publiku.",
          "Herci jako postavy Muzea voskových figurín Madame Tussaud ožívají ve svých příbězích. Historické postavy jsou pojaty se studentskou nadsázkou a diváci se humornou formou seznamují s osudem šesti žen anglického panovníka."
        ]
      },
      {
        id: "pippi",
        title: "Pippi Longstocking",
        image: "assets/images/Pippi.jpg",
        summary: "Hravé představení na motivy oblíbené dětské knihy.",
        details: [
          "Hravé představení na motivy oblíbené dětské knihy autorky Astrid Lindgrenové zavede děti mezi piráty, na ostrov kanibalů nebo do světa cirkusových umělců."
        ]
      },
      {
        id: "lord-of-the-flies",
        title: "Lord of the Flies",
        image: "assets/images/vyplndp.jpg",
        summary: "Napínavý příběh trosečníků na opuštěném ostrově.",
        details: [
          "Dne 22. 3. 2024 vyrazilo šest tříd nižšího gymnázia na představení v angličtině Lord of the Flies. Volnou adaptaci bestselleru Williama Goldinga studenti zhlédli v podání brněnských herců z dětského a studentského souboru Domino Teens.",
          "Hra pojednává o trosečnících na opuštěném ostrově. Divák sleduje jejich snahu o záchranu, komunikační krize a působení extrémních podmínek na chování jednotlivých hrdinů."
        ]
      },
      {
        id: "winnie",
        title: "Čarodějka Winnie",
        image: "assets/images/vyplndp.jpg",
        summary: "Kouzelná pohádka o nerozlučné dvojici čarodějky a kocoura.",
        details: [
          "Kouzelná pohádka o čarodějce a kocouru Wilburovi. Společně zažívají nečekaná dobrodružství, do kterých se děti aktivně zapojí jako herci a zpěváci.",
          "Na závěr produkce děti čeká tematická výtvarná dílna. Představení je plné barev, kouzel a legrace."
        ]
      },
      {
        id: "ahoj-more",
        title: "Ahoj, moře",
        image: "assets/images/vyplndp.jpg",
        summary: "Letní vzpomínání s půvabnými básničkami Jiřího Žáčka.",
        details: [
          "Když venku fičí severák a mráz maluje na okna, proč nezavzpomínat na léto s Jiřím Žáčkem a jeho půvabnými básničkami?",
          "Děti se promění v ryby, námořníky nebo třeba mořské víly. Na památku si každý vyrobí papírovou lodičku."
        ]
      }
    ]
  };

  const upcomingContainer = document.querySelector("#upcoming-events-container");
  const pastContainer = document.querySelector("#past-events-container");
  const loadMoreButton = document.querySelector("#load-more-events");
  const dialog = document.querySelector("#event-dialog");
  const dialogTitle = document.querySelector("#dialog-title");
  const dialogDescription = document.querySelector("#dialog-description");
  let visiblePastEvents = 6;

  function openEventDialog(event) {
    if (!dialog || !dialogTitle || !dialogDescription) return;
    dialogTitle.textContent = event.title;
    dialogDescription.replaceChildren();
    event.details.forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      dialogDescription.append(paragraph);
    });
    dialog.showModal();
  }

  function createEventCard(event) {
    const card = document.createElement("article");
    card.className = "event-card";
    card.dataset.eventId = event.id;

    const poster = document.createElement("div");
    poster.className = "event-card__poster";
    poster.dataset.title = event.title;
    const image = document.createElement("img");
    image.src = event.image;
    image.alt = `Plakát představení ${event.title}`;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => poster.classList.add("is-missing"), { once: true });
    poster.append(image);

    const body = document.createElement("div");
    body.className = "event-card__body";
    const title = document.createElement("h3");
    title.className = "event-card__title";
    title.textContent = event.title;
    const summary = document.createElement("p");
    summary.className = "event-card__summary";
    summary.textContent = event.summary;
    const button = document.createElement("button");
    button.className = "button button--primary";
    button.type = "button";
    button.textContent = "Více informací";
    button.setAttribute("aria-label", `Více informací: ${event.title}`);
    button.addEventListener("click", () => openEventDialog(event));
    body.append(title, summary, button);
    card.append(poster, body);
    return card;
  }

  function renderEvents(container, eventList) {
    if (!container) return;
    const fragment = document.createDocumentFragment();
    eventList.forEach((event) => fragment.append(createEventCard(event)));
    container.replaceChildren(fragment);
  }

  function renderPastEvents() {
    renderEvents(pastContainer, eventGroups.past.slice(0, visiblePastEvents));
    if (loadMoreButton) loadMoreButton.hidden = visiblePastEvents >= eventGroups.past.length;
  }

  function closeDialog() {
    if (dialog?.open) dialog.close();
  }

  renderEvents(upcomingContainer, eventGroups.upcoming);
  renderPastEvents();

  loadMoreButton?.addEventListener("click", () => {
    visiblePastEvents += 3;
    renderPastEvents();
  });

  dialog?.querySelectorAll(".event-dialog__close, .event-dialog__button")
    .forEach((button) => button.addEventListener("click", closeDialog));
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });

})();
