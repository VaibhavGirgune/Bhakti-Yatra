/**
 * सर्व धार्मिक ठिकाणांची माहिती — एकच फाइलमध्ये
 * किंमत किंवा दर येथे नाहीत
 */

export const tourRegions = [
  {
    id: 'mp',
    name: 'मध्यप्रदेश',
    places: [
      { id: 'omkareshwar', name: 'ओंकारेश्वर' },
      { id: 'ujjain', name: 'उज्जैन' },
      { id: 'maher', name: 'मैहर' },
    ],
  },
  {
    id: 'up',
    name: 'उत्तरप्रदेश',
    places: [
      { id: 'prayagraj', name: 'प्रयागराज' },
      { id: 'kashi', name: 'काशी' },
      { id: 'ayodhya', name: 'अयोध्या' },
      { id: 'gorakhpur', name: 'गोरखपूर' },
    ],
  },
  {
    id: 'nepal',
    name: 'नेपाळ',
    places: [
      { id: 'pashupatinath', name: 'पशुपतिनाथ' },
      { id: 'janakpur', name: 'जनकपूर' },
      { id: 'manokamana', name: 'मनोकामना देवी' },
    ],
  },
  {
    id: 'bihar',
    name: 'बिहार',
    places: [
      { id: 'gaya', name: 'गया' },
      { id: 'bodhgaya', name: 'बोधगया' },
    ],
  },
  {
    id: 'mh',
    name: 'महाराष्ट्र',
    places: [
      { id: 'ramtek', name: 'रामटेक' },
      { id: 'shegaon', name: 'शेगाव' },
      { id: 'muktainagar', name: 'मुक्ताईनगर' },
      { id: 'bhadra-maroti', name: 'भद्रा मारोती' },
      { id: 'grishneshwar', name: 'घृष्णेश्वर' },
    ],
  },
];

const descriptions = {
  omkareshwar:
    'ओंकारेश्वर हे नर्मदा नदीवर वसलेले भारतातील अत्यंत पवित्र आणि प्रसिद्ध बारा ज्योतिर्लिंगांपैकी एक आहे. विशेष म्हणजे हे बेट \'ॐ\' (ओम) या पवित्र आकारात निसर्गतः तयार झालेले आहे. हिंदू मान्यतेनुसार, विंध्य पर्वताने शिवाची कठोर तपश्चर्या केली होती, त्याच्या भक्तीवर प्रसन्न होऊन भगवान शिवाने येथे कायमचे वास्तव्य केले. येथे दोन मुख्य मंदिरे आहेत: एक ओंकारेश्वर (बेटावर) आणि दुसरे ममलेश्वर (नदीच्या दक्षिण किनाऱ्यावर), ज्याला अमलेश्वर असेही म्हणतात. नर्मदा नदीत पवित्र स्नान करणे आणि ओंकारेश्वरची पायी परिक्रमा करणे हे भाविकांसाठी अत्यंत पुण्यप्राप्तीचे मानले जाते. या ठिकाणी अद्वितीय अशी आध्यात्मिक ऊर्जा आणि अप्रतिम नैसर्गिक सौंदर्य आहे.',
  ujjain:
    'उज्जैन हे प्राचीन आणि अत्यंत पवित्र शहर असून, येथे शिप्रा नदीच्या काठी दर १२ वर्षांनी सिंहस्थ कुंभमेळा भरतो. येथील महाकालेश्वर हे एकमेव दक्षिणमुखी ज्योतिर्लिंग असून, पहाटे होणारी \'भस्म आरती\' जगभरात प्रसिद्ध आहे.',
  maher:
    'विंध्य पर्वतरांगांमधील हे एक अत्यंत जागृत शक्तिपीठ आहे. भाविक १०६३ पायऱ्या चढून देवीचे दर्शन घेतात. देवीच्या कृपेने येथे अमरत्व प्राप्त केलेले आल्हा आणि उदल दररोज सर्वप्रथम गुप्तपणे देवीची पूजा करतात, अशी आख्यायिका आहे.',
  prayagraj:
    'प्रयागराज हे हिंदू धर्मातील सर्वात पवित्र शहरांपैकी एक आहे. जिथे गंगा, यमुना आणि पौराणिक सरस्वती नद्यांचा संगम होतो, त्या ठिकाणी स्नान केल्याने सर्व पापे नष्ट होतात अशी श्रद्धा आहे. येथे भरणारा कुंभमेळा जगातील सर्वात मोठा धार्मिक मेळावा आहे.',
  kashi:
    'जगातील सर्वात प्राचीन जिवंत शहरांपैकी एक असलेली काशी, भगवान शिवाची नगरी म्हणून ओळखली जाते. येथील काशी विश्वनाथ मंदिराचे सुवर्णकलश, मणिकर्णिका घाटावरील मोक्षप्राप्तीची श्रद्धा आणि संध्याकाळची नयनरम्य गंगा आरती आयुष्यात एकदा तरी अनुभवावीच.',
  ayodhya:
    'अयोध्येला हिंदूंच्या सप्तपुऱ्यांपैकी एक मानले जाते. अलीकडेच बांधण्यात आलेले भव्य राम मंदिर हे जगभरातील भाविकांचे श्रद्धास्थान बनले आहे. येथे हनुमान गढीचे दर्शन घेतल्याशिवाय रामलल्लाचे दर्शन पूर्ण मानले जात नाही.',
  gorakhpur:
    'हे शहर गुरु गोरखनाथ यांच्या नावाने ओळखले जाते आणि हे नाथ संप्रदायाचे मुख्य पीठ आहे. मकर संक्रांतीच्या दिवशी येथे \'खिचडी मेळा\' भरतो जो भक्तांमध्ये अतिशय लोकप्रिय आहे. येथील मंदिराचा परिसर अत्यंत शांत आणि पवित्र आहे.',
  pashupatinath:
    'काठमांडूमध्ये बागमती नदीच्या काठी वसलेले भगवान शिवाचे हे प्रमुख आणि अतिप्राचीन मंदिर आहे. भारत व नेपाळमधील भाविकांचे हे अत्यंत महत्त्वाचे श्रद्धास्थान असून, येथील लाकडी कोरीव काम आणि वास्तुकला अद्वितीय आहे.',
  janakpur:
    'माता सीतेचे जन्मस्थान आणि राजा जनकाची प्राचीन राजधानी. येथील जानकी मंदिर वास्तुकलेचा एक उत्कृष्ट व नयनरम्य नमुना आहे. या ठिकाणी प्रभू श्रीराम आणि सीता यांचा विवाह झाला होता, अशी दृढ श्रद्धा आहे.',
  manokamana:
    'नेपाळमधील एका उंच डोंगरावर स्थित मनकामना देवीचे हे अतिशय प्रसिद्ध मंदिर आहे. भक्तांच्या सर्व मनोकामना पूर्ण करणारी ही देवी म्हणून हिची ख्याती आहे. येथे पोहोचण्यासाठी केबल कारने जावे लागते, जो एक अत्यंत नयनरम्य अनुभव असतो.',
  gaya:
    'संपूर्ण जगभरात पितृपक्षामध्ये पिंडदानासाठी हे अत्यंत महत्त्वाचे व पवित्र ठिकाण मानले जाते. येथे साक्षात भगवान विष्णूंच्या पदचिन्हांवर बांधलेले विष्णुपद मंदिर आहे, जिथे भाविक आपल्या पूर्वजांना श्रद्धांजली वाहतात.',
  bodhgaya:
    'भगवान गौतम बुद्धांना जिथे ज्ञान प्राप्त झाले ते हे जगप्रसिद्ध शांततेचे ठिकाण आहे. येथील महाबोधी मंदिर आणि मूळ बोधी वृक्षाचे दर्शन घेण्यासाठी जगभरातून बौद्ध भिक्खू आणि पर्यटक मोठ्या संख्येने येतात.',
  ramtek:
    'वनवासात असताना प्रभू श्रीराम, सीता आणि लक्ष्मण येथे काही काळ राहिले होते असे मानले जाते. याच ठिकाणी महान कवी कालिदासांनी \'मेघदूत\' या अद्भुत महाकाव्याची रचना केली होती. येथील निसर्गरम्य वातावरण मनाला भुरळ घालते.',
  shegaon:
    'महाराष्ट्रातील हे एक प्रख्यात आणि अतिशय शिस्तबद्ध असे तीर्थक्षेत्र आहे. संत गजानन महाराज यांच्या भव्य समाधी स्थळी येणाऱ्या लाखो भाविकांचे हे पवित्र श्रद्धास्थान आहे. येथील \'आनंद सागर\' हा प्रकल्पही पाहण्यासारखा आहे.',
  muktainagar:
    'संत ज्ञानेश्वरांची धाकटी बहीण संत मुक्ताबाई यांचे हे मूळ गाव आणि तपश्चर्येचे ठिकाण. तापी नदीच्या खोऱ्यातील विदर्भाचे हे एक शांत, निसर्गरम्य व पवित्र तीर्थक्षेत्र आहे, जिथे वारकरी संप्रदायाची मोठी श्रद्धा आहे.',
  'bhadra-maroti':
    'खुलताबाद येथे भद्रावती राजाच्या भक्तीवर प्रसन्न होऊन भगवान हनुमान जेथे विश्रांतीसाठी झोपले होते, अशी आख्यायिका आहे. म्हणूनच भारतातील दोन पैकी हे एक विलोभनीय मंदिर आहे जिथे मारुती झोपलेल्या अवस्थेत आहे.',
  grishneshwar:
    'छत्रपती संभाजीनगर (औरंगाबाद) जवळ वेरुळ लेण्यांच्या सानिध्यात असलेले भारतातील बारावे आणि शेवटचे ज्योतिर्लिंग. अत्यंत सुबक लाल दगडांनी बांधलेले हे मंदीर महान शिवभक्त अहिल्याबाई होळकर यांनी पुनरुज्जीवित केले होते.',
};

const imageFor = (keyword) =>
  `https://images.unsplash.com/photo-${keyword}?w=800&q=80`;

export const placesById = {
  omkareshwar: {
    name: 'ओंकारेश्वर',
    image: imageFor('1547036961-45d61a8672d4'),
    description: descriptions.omkareshwar,
  },
  ujjain: {
    name: 'उज्जैन',
    image: imageFor('1561361053-72852cffe0d6'),
    description: descriptions.ujjain,
  },
  maher: {
    name: 'मैहर',
    image: imageFor('1578662996442-48f60103fc96'),
    description: descriptions.maher,
  },
  prayagraj: {
    name: 'प्रयागराज',
    image: imageFor('1524492411212-1960c19508a4'),
    description: descriptions.prayagraj,
  },
  kashi: {
    name: 'काशी',
    image: imageFor('1561361053-72852cffe0d6'),
    description: descriptions.kashi,
  },
  ayodhya: {
    name: 'अयोध्या',
    image: imageFor('1582517867036-de97caa6ed8a'),
    description: descriptions.ayodhya,
  },
  gorakhpur: {
    name: 'गोरखपूर',
    image: imageFor('1578662996442-48f60103fc96'),
    description: descriptions.gorakhpur,
  },
  pashupatinath: {
    name: 'पशुपतिनाथ',
    image: imageFor('1605649487212-47bdab064df7'),
    description: descriptions.pashupatinath,
  },
  janakpur: {
    name: 'जनकपूर',
    image: imageFor('1558618666-fcd25c85cd64'),
    description: descriptions.janakpur,
  },
  manokamana: {
    name: 'मनोकामना देवी',
    image: imageFor('1464822759023-fed6228842f7'),
    description: descriptions.manokamana,
  },
  gaya: {
    name: 'गया',
    image: imageFor('1547036961-45d61a8672d4'),
    description: descriptions.gaya,
  },
  bodhgaya: {
    name: 'बोधगया',
    image: imageFor('1507692049960-70d95c85b5ca'),
    description: descriptions.bodhgaya,
  },
  ramtek: {
    name: 'रामटेक',
    image: imageFor('1578662996442-48f60103fc96'),
    description: descriptions.ramtek,
  },
  shegaon: {
    name: 'शेगाव',
    image: imageFor('1561361053-72852cffe0d6'),
    description: descriptions.shegaon,
  },
  muktainagar: {
    name: 'मुक्ताईनगर',
    image: imageFor('1547036961-45d61a8672d4'),
    description: descriptions.muktainagar,
  },
  'bhadra-maroti': {
    name: 'भद्रा मारोती',
    image: imageFor('1582517867036-de97caa6ed8a'),
    description: descriptions['bhadra-maroti'],
  },
  grishneshwar: {
    name: 'घृष्णेश्वर',
    image: imageFor('1561361053-72852cffe0d6'),
    description: descriptions.grishneshwar,
  },
};

/** बस व गॅलरी — ऑनलाइन प्रतिमा (Unsplash) */
export const busGalleryImages = [
  {
    id: 'b1',
    src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=80',
    alt: 'प्रवासी बस',
  },
  {
    id: 'b2',
    src: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=900&q=80',
    alt: 'रात्रीची बस',
  },
  {
    id: 'b3',
    src: 'https://images.unsplash.com/photo-1557223562-6c877ef04b4d?w=900&q=80',
    alt: 'बस आतून',
  },
];

export const tourGalleryImages = [
  {
    id: 't1',
    src: 'https://images.unsplash.com/photo-1547036961-45d61a8672d4?w=600&q=80',
    alt: 'मंदिर',
  },
  {
    id: 't2',
    src: 'https://images.unsplash.com/photo-1561361053-72852cffe0d6?w=600&q=80',
    alt: 'घाट',
  },
  {
    id: 't3',
    src: 'https://images.unsplash.com/photo-1507692049960-70d95c85b5ca?w=600&q=80',
    alt: 'स्तूप',
  },
  {
    id: 't4',
    src: 'https://images.unsplash.com/photo-1582517867036-de97caa6ed8a?w=600&q=80',
    alt: 'यात्रा',
  },
  {
    id: 't5',
    src: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80',
    alt: 'देवळ',
  },
  {
    id: 't6',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    alt: 'प्रार्थना',
  },
];

export const homeBannerImage =
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80';

export const busFeatures = [
  { id: 'ac', label: 'AC Sleeper', marathi: 'एसी स्लीपर' },
  { id: 'charge', label: 'Charging Point', marathi: 'चार्जिंग पॉइंट' },
  { id: 'cctv', label: 'CCTV', marathi: 'सीसीटीव्ही' },
  { id: 'beds', label: 'Comfortable Beds', marathi: 'आरामदायी बेड' },
  { id: 'susp', label: 'Air Suspension', marathi: 'एअर सस्पेंशन' },
];

/** संपर्क — आपले खरे नंबर / लिंक येथे भरा */
export const contactInfo = {
  phoneDisplay: '+91 9922715003',
  phoneTel: '+919922715003',
  whatsappUrl: 'https://wa.me/9922715003',
};

/**
 * लाइव्ह लोकेशन मॅप (iframe). आपली Google Maps embed लिंक येथे टाका.
 * उदा. Google Maps → Share → Embed a map
 */
export const liveMapEmbedUrl =
  'https://www.openstreetmap.org/export/embed.html?bbox=72.5,18.5,78.5,22.0&layer=mapnik';
