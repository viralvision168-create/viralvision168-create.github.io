const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const chalisa = [
  ["श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।\nबरनऊं रघुबर बिमल जसु, जो दायकु फल चारि॥", "With the dust of the Guru's lotus feet, I cleanse my mind and sing the pure glory of Shri Ram, giver of the four fruits of life.", "Пылью лотосных стоп гуру очищаю ум и воспеваю чистую славу Шри Рамы, дарующего четыре цели жизни."],
  ["बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।\nबल बुधि विद्या देहु मोहिं, हरहु कलेस विकार॥", "Knowing myself to be limited in wisdom, I remember the son of the Wind. Give me strength, wisdom and knowledge, and remove sorrow and flaws.", "Сознавая свою малую мудрость, вспоминаю сына Ветра. Дай мне силу, разум и знание, устрани печаль и недостатки."],
  ["जय हनुमान ज्ञान गुन सागर।\nजय कपीस तिहुं लोक उजागर॥", "Victory to Hanuman, ocean of wisdom and virtue. Victory to the lord of vanaras, known through the three worlds.", "Слава Хануману, океану мудрости и добродетели. Слава владыке ванаров, прославленному в трех мирах."],
  ["राम दूत अतुलित बल धामा।\nअंजनि पुत्र पवनसुत नामा॥", "Messenger of Rama, abode of unmatched strength, son of Anjani, known as Pavanputra.", "Посланник Рамы, обитель несравненной силы, сын Анджани, известный как Паванпутра."],
  ["महाबीर बिक्रम बजरंगी।\nकुमति निवार सुमति के संगी॥", "Great hero, brave and thunderbolt-strong, remover of wrong thinking and companion of good sense.", "Великий герой, храбрый и крепкий как молния, устраняющий дурные мысли и поддерживающий мудрость."],
  ["कंचन बरन बिराज सुबेसा।\nकानन कुण्डल कुंचित केसा॥", "Golden in complexion, beautifully dressed, with earrings and curly hair.", "Золотого сияния, прекрасно украшенный, с серьгами и вьющимися волосами."],
  ["हाथ बज्र औ ध्वजा बिराजै।\nकांधे मूंज जनेऊ साजै॥", "In your hands shine the thunderbolt and flag; the sacred thread rests upon your shoulder.", "В руках сияют молния и знамя; священная нить лежит на плече."],
  ["शंकर सुवन केसरी नंदन।\nतेज प्रताप महा जग बंदन॥", "Form of Shiva and son of Kesari, your radiance and glory are revered by the world.", "Образ Шивы и сын Кесари, твое сияние и слава почитаются миром."],
  ["विद्यावान गुनी अति चातुर।\nराम काज करिबे को आतुर॥", "Learned, virtuous and very wise, ever eager to carry out Rama's work.", "Ученый, добродетельный и мудрый, всегда готов исполнять дело Рамы."],
  ["प्रभु चरित्र सुनिबे को रसिया।\nराम लखन सीता मन बसिया॥", "You delight in hearing the Lord's deeds; Rama, Lakshman and Sita dwell in your heart.", "Ты любишь слушать деяния Господа; Рама, Лакшман и Сита пребывают в твоем сердце."],
  ["सूक्ष्म रूप धरि सियहिं दिखावा।\nबिकट रूप धरि लंक जरावा॥", "Taking a subtle form, you appeared before Sita; taking a fierce form, you burned Lanka.", "Приняв тонкий облик, ты явился Сите; приняв грозный облик, сжег Ланку."],
  ["भीम रूप धरि असुर संहारे।\nरामचन्द्र के काज संवारे॥", "In mighty form you destroyed demons and completed the work of Shri Ram.", "В могучем облике ты уничтожил демонов и исполнил дело Шри Рамы."],
  ["लाय सजीवन लखन जियाये।\nश्री रघुबीर हरषि उर लाये॥", "You brought Sanjivani and revived Lakshman; Shri Ram joyfully embraced you.", "Ты принес Сандживани и оживил Лакшмана; Шри Рама радостно обнял тебя."],
  ["रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई॥", "Raghupati praised you greatly, saying you are as dear to him as brother Bharat.", "Рагхупати высоко восхвалил тебя, сказав, что ты дорог ему как брат Бхарат."],
  ["सहस बदन तुम्हरो जस गावैं।\nअस कहि श्रीपति कंठ लगावैं॥", "May thousands of mouths sing your glory, said the Lord, drawing you to his heart.", "Пусть тысячи уст поют твою славу, сказал Господь, прижимая тебя к сердцу."],
  ["सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा॥", "Sanaka and sages, Brahma, Narada, Saraswati and Shesh all praise you.", "Санака и мудрецы, Брахма, Нарада, Сарасвати и Шеша восхваляют тебя."],
  ["जम कुबेर दिगपाल जहां ते।\nकबि कोबिद कहि सके कहां ते॥", "Yama, Kubera and guardians of directions cannot fully describe your glory, nor can poets and scholars.", "Яма, Кубера и хранители сторон не могут полностью описать твою славу, как и поэты с учеными."],
  ["तुम उपकार सुग्रीवहिं कीन्हा।\nराम मिलाय राज पद दीन्हा॥", "You helped Sugriva by uniting him with Rama and restoring his kingdom.", "Ты помог Сугриве, соединив его с Рамой и вернув ему царство."],
  ["तुम्हरो मंत्र बिभीषण माना।\nलंकेश्वर भए सब जग जाना॥", "Vibhishan followed your counsel and became king of Lanka, as the world knows.", "Вибхишана последовал твоему совету и стал царем Ланки, что известно всему миру."],
  ["जुग सहस्र जोजन पर भानू।\nलील्यो ताहि मधुर फल जानू॥", "The sun, thousands of yojanas away, you once mistook for a sweet fruit and leapt toward it.", "Солнце, далекое на тысячи йоджан, ты принял за сладкий плод и устремился к нему."],
  ["प्रभु मुद्रिका मेलि मुख माहीं।\nजलधि लांघि गये अचरज नाहीं॥", "With the Lord's ring in your mouth, you crossed the ocean; no wonder for one like you.", "С кольцом Господа во рту ты пересек океан; для тебя это неудивительно."],
  ["दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हरे तेते॥", "All difficult tasks in the world become easy by your grace.", "Все трудные дела в мире становятся легкими по твоей милости."],
  ["राम दुआरे तुम रखवारे।\nहोत न आज्ञा बिनु पैसारे॥", "You guard Rama's doorway; no one enters without your permission.", "Ты страж у дверей Рамы; никто не входит без твоего разрешения."],
  ["सब सुख लहै तुम्हारी सरना।\nतुम रक्षक काहू को डरना॥", "All happiness comes to those who take your refuge; with you as protector there is no fear.", "Все счастье приходит к тем, кто ищет у тебя защиты; с тобой нет страха."],
  ["आपन तेज सम्हारो आपै।\nतीनों लोक हांक तें कांपै॥", "Only you can contain your own power; the three worlds tremble at your roar.", "Только ты можешь сдержать свою силу; три мира дрожат от твоего зова."],
  ["भूत पिशाच निकट नहिं आवै।\nमहाबीर जब नाम सुनावै॥", "Spirits and negativity do not come near when the name of Mahavir is heard.", "Духи и темные силы не приближаются, когда звучит имя Махавира."],
  ["नासै रोग हरै सब पीरा।\nजपत निरंतर हनुमत बीरा॥", "Diseases and pains are removed when brave Hanuman is remembered constantly.", "Болезни и страдания уходят, когда постоянно вспоминают храброго Ханумана."],
  ["संकट तें हनुमान छुड़ावै।\nमन क्रम बचन ध्यान जो लावै॥", "Hanuman frees from trouble those who meditate on him in mind, deed and word.", "Хануман освобождает от бед тех, кто помнит его умом, делом и словом."],
  ["सब पर राम तपस्वी राजा।\nतिन के काज सकल तुम साजा॥", "Rama, the ascetic king, is supreme; you fulfill all his works.", "Рама, царь-подвижник, превыше всех; ты исполняешь все его дела."],
  ["और मनोरथ जो कोई लावै।\nसोई अमित जीवन फल पावै॥", "Whoever brings sincere wishes to you receives abundant fruits in life.", "Кто приносит тебе искренние желания, получает великие плоды жизни."],
  ["चारों जुग परताप तुम्हारा।\nहै परसिद्ध जगत उजियारा॥", "Your glory shines through all four ages and illumines the world.", "Твоя слава сияет во все четыре юги и озаряет мир."],
  ["साधु संत के तुम रखवारे।\nअसुर निकंदन राम दुलारे॥", "Protector of sages and saints, destroyer of demons, beloved of Rama.", "Защитник мудрецов и святых, разрушитель демонов, любимец Рамы."],
  ["अष्ट सिद्धि नौ निधि के दाता।\nअस बर दीन जानकी माता॥", "Mother Janaki granted you the boon to bestow eight siddhis and nine treasures.", "Мать Джанаки дала тебе дар даровать восемь сиддхи и девять сокровищ."],
  ["राम रसायन तुम्हरे पासा।\nसदा रहो रघुपति के दासा॥", "You hold the nectar of Rama's devotion and remain forever the servant of Raghupati.", "Ты хранишь нектар преданности Раме и вечно остаешься слугой Рагхупати."],
  ["तुम्हरे भजन राम को पावै।\nजनम जनम के दुख बिसरावै॥", "Through devotion to you, one reaches Rama and forgets sorrows of many births.", "Через преданность тебе человек достигает Рамы и забывает печали многих рождений."],
  ["अंत काल रघुबर पुर जाई।\nजहां जन्म हरि भक्त कहाई॥", "At life's end one reaches Rama's abode and is born again as a devotee of Hari.", "В конце жизни человек достигает обители Рамы и рождается как преданный Хари."],
  ["और देवता चित्त न धरई।\nहनुमत सेइ सर्व सुख करई॥", "With the mind fixed on Hanuman, all happiness is obtained.", "Сосредоточив ум на Ханумане, человек обретает всякое благо."],
  ["संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा॥", "Troubles end and pain disappears for one who remembers mighty Hanuman.", "Беды уходят и боль исчезает у того, кто помнит могучего Ханумана."],
  ["जय जय जय हनुमान गोसाईं।\nकृपा करहु गुरुदेव की नाईं॥", "Victory, victory, victory to Lord Hanuman. Bless us like a compassionate Guru.", "Слава, слава, слава Господу Хануману. Благослови нас, как милостивый гуру."],
  ["जो सत बार पाठ कर कोई।\nछूटहि बंदि महा सुख होई॥", "One who recites this a hundred times is freed from bondage and gains great joy.", "Тот, кто читает это сто раз, освобождается от уз и обретает великую радость."],
  ["जो यह पढ़ै हनुमान चालीसा।\nहोय सिद्धि साखी गौरीसा॥", "Whoever reads Hanuman Chalisa attains success; Lord Shiva is witness.", "Кто читает Хануман Чалису, достигает успеха; Господь Шива тому свидетель."],
  ["तुलसीदास सदा हरि चेरा।\nकीजै नाथ हृदय महं डेरा॥", "Tulsidas, ever servant of Hari, prays: O Lord, dwell in my heart.", "Тулсидас, вечный слуга Хари, молится: Господь, пребывай в моем сердце."]
];

const aartis = [
  {
    deity: "शिव",
    icon: "🕉",
    text: "ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।\nब्रह्मा विष्णु सदाशिव, अर्द्धांगी धारा॥\n\nएकानन चतुरानन पंचानन राजे।\nहंसासन गरुड़ासन वृषवाहन साजे॥\n\nदो भुज चार चतुर्भुज दशभुज अति सोहे।\nतीनों रूप निरखते त्रिभुवन जन मोहे॥\n\nअक्षमाला वनमाला मुंडमाला धारी।\nचंदन मृगमद सोहै, भाले शशिधारी॥\n\nश्वेतांबर पीतांबर बाघंबर अंगे।\nसनकादिक गरुड़ादिक भूतादिक संगे॥\n\nकर के मध्य कमंडल चक्र त्रिशूल धारी।\nसुखकारी दुखहारी जगपालनकारी॥\n\nब्रह्मा विष्णु सदाशिव जानत अविवेका।\nप्रणवाक्षर मध्ये ये तीनों एका॥\n\nत्रिगुण शिवजी की आरती जो कोई नर गावे।\nकहत शिवानंद स्वामी सुख संपत्ति पावे॥"
  },
  {
    deity: "गणेश",
    icon: "🐚",
    text: "जय गणेश जय गणेश, जय गणेश देवा।\nमाता जाकी पार्वती, पिता महादेवा॥\n\nएकदंत दयावंत, चार भुजाधारी।\nमाथे सिंदूर सोहे, मूसे की सवारी॥\n\nपान चढ़े फूल चढ़े और चढ़े मेवा।\nलड्डुअन का भोग लगे, संत करें सेवा॥\n\nअंधन को आंख देत, कोढ़िन को काया।\nबांझन को पुत्र देत, निर्धन को माया॥\n\nसूर श्याम शरण आए, सफल कीजे सेवा।\nमाता जाकी पार्वती, पिता महादेवा॥\n\nदीनन की लाज राखो, शंभु सुतकारी।\nकामना को पूर्ण करो, जय मंगलकारी॥\n\nजय गणेश जय गणेश, जय गणेश देवा।\nमाता जाकी पार्वती, पिता महादेवा॥"
  },
  {
    deity: "दुर्गा",
    icon: "🔱",
    text: "जय अम्बे गौरी, मैया जय श्यामा गौरी।\nतुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी॥\n\nमांग सिंदूर विराजत, टीको मृगमद को।\nउज्ज्वल से दोउ नैना, चंद्रवदन नीको॥\n\nकनक समान कलेवर, रक्तांबर राजै।\nरक्त पुष्प गलमाला, कंठन पर साजै॥\n\nकेहरि वाहन राजत, खड्ग खप्पर धारी।\nसुर नर मुनिजन सेवत, तिनके दुख हारी॥\n\nकानन कुंडल शोभित, नासाग्रे मोती।\nकोटिक चंद्र दिवाकर, राजत सम ज्योति॥\n\nशुंभ निशुंभ विदारे, महिषासुर घाती।\nधूम्र विलोचन नैना, निशदिन मदमाती॥\n\nचौंसठ योगिनी गावत, नृत्य करत भैरूं।\nबाजत ताल मृदंगा, अरु बाजत डमरू॥\n\nभुजा चार अति शोभित, वरमुद्रा धारी।\nमनवांछित फल पावत, सेवत नर नारी॥\n\nकंचन थाल विराजत, अगर कपूर बाती।\nश्रीमालकेतु में राजत, कोटि रतन ज्योति॥\n\nश्री अम्बे जी की आरती, जो कोई नर गावे।\nकहत शिवानंद स्वामी, सुख संपत्ति पावे॥"
  },
  {
    deity: "लक्ष्मी",
    icon: "🪔",
    text: "ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।\nतुमको निशदिन सेवत, हरि विष्णु विधाता॥\n\nउमा रमा ब्रह्माणी, तुम ही जग माता।\nसूर्य चंद्रमा ध्यावत, नारद ऋषि गाता॥\n\nदुर्गा रूप निरंजनि, सुख संपत्ति दाता।\nजो कोई तुमको ध्यावत, ऋद्धि सिद्धि धन पाता॥\n\nतुम पाताल निवासिनी, तुम ही शुभदाता।\nकर्म प्रभाव प्रकाशिनी, भवनिधि की त्राता॥\n\nजिस घर तुम रहती तहं सब सद्गुण आता।\nसब संभव हो जाता, मन नहीं घबराता॥\n\nतुम बिन यज्ञ न होते, वस्त्र न कोई पाता।\nखान-पान का वैभव, सब तुमसे आता॥\n\nशुभ गुण मंदिर सुंदर, क्षीरोदधि जाता।\nरत्न चतुर्दश तुम बिन, कोई नहीं पाता॥\n\nमहालक्ष्मी जी की आरती, जो कोई नर गाता।\nउर आनंद समाता, पाप उतर जाता॥\n\nस्थिर चर जगत बचावे, शुभ मंगल करता।\nभक्तों के दुख हरती, जय जय जग माता॥"
  },
  {
    deity: "कृष्ण",
    icon: "🪈",
    text: "आरती कुंज बिहारी की, श्री गिरिधर कृष्ण मुरारी की॥\n\nगले में बैजंती माला, बजावै मुरली मधुर बाला।\nश्रवण में कुंडल झलकाला, नंद के आनंद नंदलाला॥\n\nगगन सम अंग कांति काली, राधिका चमक रही आली।\nलतन में ठाढ़े बनमाली, भ्रमर सी अलक कस्तूरी तिलक॥\n\nचंद्र सी झलक ललित छवि श्यामा, श्री गिरिधर कृष्ण मुरारी की॥\n\nकनकमय मोर मुकुट बिलसै, देवता दरसन को तरसैं।\nगगन सों सुमन रासि बरसै, बजे मुरचंग मधुर मृदंग॥\n\nग्वालिन संग अतुल रति गोपी, श्री गिरिधर कृष्ण मुरारी की॥\n\nजहां से प्रगट भई गंगा, कलुष कलि हारिणि श्री गंगा।\nस्मरण से होत मोह भंगा, बसी शिव शीश जटा के बीच॥\n\nहै हरि चरणों की यह छाया, श्री गिरिधर कृष्ण मुरारी की॥\n\nचमकती उज्ज्वल तट रेनू, बज रही वृंदावन वेणू।\nचहुं दिसि गोपि ग्वाल धेनू, हंसत मृदु मंद चांदनी चंद॥\n\nकटत भव फंद टेर सुन दीन दुखारी की।\nआरती कुंज बिहारी की, श्री गिरिधर कृष्ण मुरारी की॥"
  },
  {
    deity: "राम",
    icon: "🏹",
    text: "श्री रामचंद्र कृपालु भजु मन, हरण भव भय दारुणं।\nनवकंज लोचन कंज मुख, कर कंज पद कंजारुणं॥\n\nकंदर्प अगणित अमित छवि, नवनील नीरद सुंदरं।\nपटपीत मानहु तड़ित रुचि, शुचि नौमि जनक सुतावरं॥\n\nभजु दीनबंधु दिनेश दानव, दैत्यवंश निकंदनं।\nरघुनंद आनंदकंद कोशलचंद दशरथ नंदनं॥\n\nसिर मुकुट कुंडल तिलक चारु, उदारु अंग विभूषणं।\nआजानुभुज शर चाप धर, संग्राम जित खरदूषणं॥\n\nइति वदति तुलसीदास शंकर, शेष मुनि मन रंजनं।\nमम हृदय कंज निवास कुरु, कामादि खल दल गंजनं॥\n\nमनु जाहि राचेउ मिलिहि सो बरु सहज सुंदर सांवरो।\nकरुणा निधान सुजान शीलु सनेहु जानत रावरो॥\n\nएहि भांति गौरी असीस सुनि, सिय सहित हिय हरषीं अली।\nतुलसी भवानिहि पूजि पुनि-पुनि, मुदित मन मंदिर चली॥"
  },
  {
    deity: "हनुमान",
    icon: "🚩",
    text: "आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥\n\nजाके बल से गिरिवर कांपे।\nरोग दोष जाके निकट न झांके॥\n\nअंजनि पुत्र महाबलदाई।\nसंतन के प्रभु सदा सहाई॥\n\nदे बीरा रघुनाथ पठाए।\nलंका जारि सिया सुधि लाए॥\n\nलंका सो कोट समुद्र सी खाई।\nजात पवनसुत बार न लाई॥\n\nलंका जारि असुर संहारे।\nसियाराम जी के काज संवारे॥\n\nलक्ष्मण मूर्छित पड़े सकारे।\nआनि संजीवन प्राण उबारे॥\n\nपैठि पाताल तोरि जमकारे।\nअहिरावण की भुजा उखारे॥\n\nबाएं भुजा असुर दल मारे।\nदाहिने भुजा संतजन तारे॥\n\nसुर नर मुनि आरती उतारें।\nजय जय जय हनुमान उचारें॥\n\nकंचन थार कपूर लौ छाई।\nआरती करत अंजना माई॥\n\nजो हनुमान जी की आरती गावे।\nबसि बैकुंठ परम पद पावे॥"
  },
  {
    deity: "सरस्वती",
    icon: "📿",
    text: "जय सरस्वती माता, मैया जय सरस्वती माता।\nसद्गुण वैभव शालिनी, त्रिभुवन विख्याता॥\n\nचंद्रवदनि पद्मासिनि, द्युति मंगलकारी।\nसोहे शुभ हंस सवारी, अतुल तेजधारी॥\n\nबाएं कर में वीणा, दाएं कर माला।\nशीश मुकुट मणि सोहे, गले मोतियन माला॥\n\nदेवी शरण जो आए, उनका उद्धार किया।\nपैठी मंथरा दासी, रावण संहार किया॥\n\nविद्या ज्ञान प्रदायिनी, ज्ञान प्रकाश भरो।\nमोह अज्ञान और तिमिर का, जग से नाश करो॥\n\nधूप दीप फल मेवा, मां स्वीकार करो।\nज्ञानचक्षु दे माता, जग निस्तार करो॥\n\nमां सरस्वती की आरती, जो कोई जन गावे।\nहितकारी सुखकारी, ज्ञान भक्ति पावे॥"
  },
  {
    deity: "विष्णु",
    icon: "🌊",
    text: "ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।\nभक्त जनों के संकट, दास जनों के संकट, क्षण में दूर करे॥\n\nजो ध्यावे फल पावे, दुख बिनसे मन का।\nसुख संपत्ति घर आवे, कष्ट मिटे तन का॥\n\nमात पिता तुम मेरे, शरण गहूं किसकी।\nतुम बिन और न दूजा, आस करूं जिसकी॥\n\nतुम पूरण परमात्मा, तुम अंतर्यामी।\nपारब्रह्म परमेश्वर, तुम सबके स्वामी॥\n\nतुम करुणा के सागर, तुम पालनकर्ता।\nमैं मूरख खल कामी, कृपा करो भर्ता॥\n\nतुम हो एक अगोचर, सबके प्राणपति।\nकिस विधि मिलूं दयामय, तुमको मैं कुमति॥\n\nदीनबंधु दुखहर्ता, तुम ठाकुर मेरे।\nअपने हाथ उठाओ, द्वार पड़ा तेरे॥\n\nविषय विकार मिटाओ, पाप हरो देवा।\nश्रद्धा भक्ति बढ़ाओ, संतन की सेवा॥\n\nतन मन धन सब है तेरा, स्वामी सब कुछ है तेरा।\nतेरा तुझको अर्पण, क्या लागे मेरा॥\n\nॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।\nभक्त जनों के संकट, क्षण में दूर करे॥"
  },
  {
    deity: "साईं",
    icon: "🌼",
    text: "आरती श्री साईं गुरुवर की।\nपरमानंद सदा सुरवर की॥\n\nजा की कृपा विपुल सुखकारी।\nदुख शोक संकट भय हारी॥\n\nशिरडी में अवतार रचाया।\nचमत्कार से तत्व दिखाया॥\n\nकितने भक्त चरण पर आए।\nवे सुख शांति चिरंतन पाए॥\n\nभाव धरै जो मन में जैसा।\nपावत अनुभव वो ही वैसा॥\n\nगुरु की उदी लगावे तन को।\nसमाधान लाभत उस मन को॥\n\nसाईं नाम सदा जो गावे।\nसो फल जग में दुर्लभ पावे॥\n\nगुरुवार कर पूजा सेवा।\nमिटे पाप दुख संताप अनेवा॥\n\nसाईं बाबा की आरती, जो कोई नर गावे।\nभक्ति मुक्ति सुख संपत्ति, सब कुछ घर लावे॥"
  }
];

const mantras = [
  { title: "हनुमान मंत्र", text: "ॐ श्री हनुमते नमः" },
  { title: "शिव मंत्र", text: "ॐ नमः शिवाय" },
  { title: "गणेश मंत्र", text: "ॐ गं गणपतये नमः" },
  { title: "लक्ष्मी मंत्र", text: "ॐ श्रीं महालक्ष्म्यै नमः" },
  { title: "दुर्गा मंत्र", text: "ॐ दुं दुर्गायै नमः" },
  { title: "कृष्ण मंत्र", text: "हरे कृष्ण हरे कृष्ण" }
];

const statusGroups = {
  days: [
    { title: "सोमवार - शिव जी", text: "हर हर महादेव। सोमवार की शुभकामनाएं।" },
    { title: "मंगलवार - हनुमान जी", text: "जय बजरंगबली। संकट कटे, मंगल हो।" },
    { title: "बुधवार - गणेश जी", text: "वक्रतुंड महाकाय, आपके सभी कार्य सिद्ध हों।" },
    { title: "गुरुवार - विष्णु जी", text: "श्री हरि कृपा से जीवन में शांति और समृद्धि आए।" },
    { title: "शुक्रवार - लक्ष्मी माता", text: "मां लक्ष्मी आपके घर सुख-समृद्धि बरसाएं।" },
    { title: "शनिवार - शनि देव", text: "शनि देव की कृपा से न्याय और धैर्य मिले।" },
    { title: "रविवार - सूर्य देव", text: "ॐ सूर्याय नमः। ऊर्जा और प्रकाश से दिन शुभ हो।" }
  ],
  festivals: [
    { title: "Diwali WhatsApp Status", text: "दीपों का पर्व आपके जीवन में खुशियां और उजाला लाए। शुभ दीपावली!" },
    { title: "Holi WhatsApp Status", text: "रंगों की तरह आपका जीवन प्रेम, आनंद और मुस्कान से भर जाए।" },
    { title: "Navratri Status", text: "मां दुर्गा की कृपा से शक्ति, भक्ति और विजय प्राप्त हो।" },
    { title: "Janmashtami Status", text: "नंद के आनंद भयो, जय कन्हैया लाल की।" },
    { title: "Raksha Bandhan Status", text: "रिश्तों की डोर प्रेम, विश्वास और रक्षा से मजबूत रहे।" },
    { title: "Makar Sankranti Status", text: "तिल गुड़ की मिठास और सूर्य की ऊर्जा से जीवन मंगलमय हो।" }
  ]
};

const festivals = [
  { name: "गंगा दशहरा", date: "2026-05-25", note: "Ganga Dussehra" },
  { name: "निर्जला एकादशी", date: "2026-05-26", note: "Nirjala Ekadashi" },
  { name: "जगन्नाथ रथ यात्रा", date: "2026-07-16", note: "Rath Yatra" },
  { name: "रक्षा बंधन", date: "2026-08-28", note: "Raksha Bandhan" },
  { name: "जन्माष्टमी", date: "2026-09-04", note: "Krishna Janmashtami" },
  { name: "नवरात्रि प्रारंभ", date: "2026-10-11", note: "Shardiya Navratri" },
  { name: "दशहरा", date: "2026-10-20", note: "Vijayadashami" },
  { name: "दिवाली", date: "2026-11-08", note: "Diwali WhatsApp Status" }
];

const ADSENSE_CLIENT = "ca-pub-7789321762913243";
let currentLang = new URLSearchParams(location.search).get("lang") || "hi";
if (!["hi", "en", "ru"].includes(currentLang)) currentLang = "hi";

function createAdMarkup(position, label) {
  return `
    <span>${label}</span>
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="${ADSENSE_CLIENT}"
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-ad-position="${position}"></ins>
  `;
}

function initializeAds(root = document) {
  root.querySelectorAll(".adsbygoogle:not([data-ads-initialized])").forEach((ad) => {
    ad.dataset.adsInitialized = "true";
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      ad.dataset.adsError = "true";
    }
  });
}

function renderChalisa() {
  const grid = $("[data-chalisa]");
  grid.innerHTML = "";
  const langIndex = { hi: 0, en: 1, ru: 2 }[currentLang];
  chalisa.forEach((row, index) => {
    if (index === 10 || index === 20) {
      const ad = document.createElement("aside");
      ad.className = "ad-slot verse-ad";
      ad.setAttribute("aria-label", "Advertisement");
      ad.dataset.adPosition = index === 10 ? "chalisa-after-10" : "chalisa-after-20";
      ad.innerHTML = createAdMarkup(ad.dataset.adPosition, `AdSense Position ${index === 10 ? "2" : "3"}`);
      grid.append(ad);
    }
    const card = document.createElement("article");
    card.className = "verse-card";
    card.innerHTML = `<span>${index + 1}</span><p>${row[langIndex].replace(/\n/g, "<br>")}</p>`;
    grid.append(card);
  });
  initializeAds(grid);
}

function renderAarti() {
  const grid = $("[data-aarti]");
  grid.innerHTML = aartis
    .map((item, index) => {
      const preview = item.text.split("\n").filter(Boolean).slice(0, 4).join("\n");
      return `
        <article class="aarti-card" id="aarti-${index + 1}">
          <span class="deity">${item.icon}</span>
          <h3>${item.deity} आरती</h3>
          <p class="aarti-preview">${preview}</p>
          <details>
            <summary>पूरी आरती पढ़ें</summary>
            <p>${item.text}</p>
          </details>
          <button type="button" data-copy-aarti="${index}">Copy पूरी आरती</button>
        </article>
      `;
    })
    .join("");
}

function renderMantras() {
  const row = $("[data-mantras]");
  row.innerHTML = mantras
    .map((item, index) => `
      <article class="reel-card">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="counter" data-counter="${index}">
          <button type="button" data-minus="${index}" aria-label="Decrease count">−</button>
          <span><b data-count="${index}">0</b>/108</span>
          <button type="button" data-plus="${index}" aria-label="Increase count">+</button>
        </div>
      </article>
    `)
    .join("");
}

function renderStatusTabs(active = "days") {
  const tabs = $("[data-status-tabs]");
  tabs.innerHTML = `
    <button class="pill ${active === "days" ? "active" : ""}" type="button" data-status-tab="days">दिन-वार</button>
    <button class="pill ${active === "festivals" ? "active" : ""}" type="button" data-status-tab="festivals">त्योहार</button>
  `;
  renderStatuses(active);
}

function renderStatuses(group) {
  const grid = $("[data-status]");
  grid.innerHTML = statusGroups[group]
    .map((item, index) => `
      <article class="status-card">
        <div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
        <button type="button" data-download-status="${group}:${index}">Download Status</button>
      </article>
    `)
    .join("");
}

function renderFestivals() {
  const list = $("[data-festivals]");
  list.innerHTML = festivals
    .map((festival) => `
      <article class="festival-item">
        <strong>${festival.name}</strong>
        <span>${formatDate(festival.date)} · ${festival.note}</span>
      </article>
    `)
    .join("");
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("hi-IN", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${dateString}T00:00:00+05:30`));
}

function updateCountdown() {
  const now = new Date();
  const next = festivals.find((festival) => new Date(`${festival.date}T00:00:00+05:30`) > now) || festivals[0];
  const target = new Date(`${next.date}T00:00:00+05:30`);
  const diff = Math.max(target - now, 0);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  $("[data-next-name]").textContent = next.name;
  $("[data-next-date]").textContent = `${formatDate(next.date)} · ${next.note}`;
  $("[data-countdown]").innerHTML = `
    <span><b>${days}</b>दिन</span>
    <span><b>${hours}</b>घंटे</span>
    <span><b>${minutes}</b>मिनट</span>
    <span><b>${seconds}</b>सेकंड</span>
  `;
}

function shareChalisa() {
  const text = "हनुमान चालीसा पढ़ें: सभी 40 चौपाई, English/Russian toggle और share option.";
  if (navigator.share) {
    navigator.share({ title: "हनुमान चालीसा", text, url: location.href }).catch(() => {});
    return;
  }
  navigator.clipboard?.writeText(`${text} ${location.href}`);
  alert("Link copied.");
}

function downloadStatus(key) {
  const [group, index] = key.split(":");
  const item = statusGroups[group][Number(index)];
  const canvas = $("#statusCanvas");
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, group === "festivals" ? "#9f1d2b" : "#14845b");
  gradient.addColorStop(0.55, group === "festivals" ? "#f47c20" : "#244f9e");
  gradient.addColorStop(1, "#23140f");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(255,255,255,.22)";
  ctx.lineWidth = 36;
  ctx.beginPath();
  ctx.arc(860, 240, 250, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.font = "700 86px Arial";
  wrapCanvasText(ctx, item.title, 540, 650, 820, 106);
  ctx.font = "500 54px Arial";
  wrapCanvasText(ctx, item.text, 540, 920, 820, 76);
  ctx.font = "700 44px Arial";
  ctx.fillText("भक्ति सागर", 540, 1660);
  ctx.font = "400 34px Arial";
  ctx.fillText("Share blessings on WhatsApp", 540, 1720);

  const link = document.createElement("a");
  link.download = `${item.title.replace(/[^\w\u0900-\u097F]+/g, "-")}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

function bindEvents() {
  $("[data-menu]").addEventListener("click", (event) => {
    const nav = $("[data-nav]");
    const open = nav.classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });

  $$("[data-nav] a").forEach((link) => {
    link.addEventListener("click", () => $("[data-nav]").classList.remove("open"));
  });

  document.addEventListener("click", (event) => {
    const langButton = event.target.closest("[data-lang]");
    if (langButton) {
      currentLang = langButton.dataset.lang;
      $$(".toolbar [data-lang]").forEach((button) => button.classList.toggle("active", button === langButton));
      renderChalisa();
    }

    if (event.target.closest("[data-share]")) shareChalisa();

    const copyButton = event.target.closest("[data-copy-aarti]");
    if (copyButton) {
      const item = aartis[Number(copyButton.dataset.copyAarti)];
      navigator.clipboard?.writeText(`${item.deity} आरती\n${item.text}`);
      copyButton.textContent = "Copied";
      setTimeout(() => (copyButton.textContent = "Copy पूरी आरती"), 1100);
    }

    const plus = event.target.closest("[data-plus]");
    const minus = event.target.closest("[data-minus]");
    if (plus || minus) {
      const index = Number((plus || minus).dataset.plus ?? (plus || minus).dataset.minus);
      const el = $(`[data-count="${index}"]`);
      const current = Number(el.textContent);
      const next = plus ? Math.min(current + 1, 108) : Math.max(current - 1, 0);
      el.textContent = next;
      if (next === 108) setTimeout(() => alert("108 जाप पूर्ण हुए. जय श्री राम!"), 80);
    }

    const tab = event.target.closest("[data-status-tab]");
    if (tab) renderStatusTabs(tab.dataset.statusTab);

    const download = event.target.closest("[data-download-status]");
    if (download) downloadStatus(download.dataset.downloadStatus);
  });
}

function initActiveNav() {
  const links = $$("[data-nav] a");
  const sections = links.map((link) => $(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
}

function init() {
  $$(".toolbar [data-lang]").forEach((button) => button.classList.toggle("active", button.dataset.lang === currentLang));
  renderChalisa();
  renderAarti();
  renderMantras();
  renderStatusTabs();
  renderFestivals();
  bindEvents();
  initActiveNav();
  updateCountdown();
  initializeAds();
  setInterval(updateCountdown, 1000);
}

init();
