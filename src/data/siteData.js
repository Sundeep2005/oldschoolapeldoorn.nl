import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {
  faBowlFood,
  faCalendarDays,
  faCow,
  faGift,
  faHouseChimney,
  faLeaf,
  faMugSaucer,
  faPeopleGroup,
  faShareNodes,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { publicPath } from '../utils/publicPath'

export const navItems = [
  { label: 'Buurthuis', path: '/buurthuis' },
  { label: 'Zorgboerderij', path: '/zorgboerderij' },
  { label: 'Huiskamer', path: '/huiskamer' },
  { label: 'Activiteiten', path: '/activiteiten' },
  { label: 'Over Old School Apeldoorn', path: '/over-old-school-apeldoorn' },
]

export const impressionImages = [
  publicPath('assets/buurthuis.jpeg'),
  publicPath('assets/zorgboerderij.jpeg'),
  publicPath('assets/huiskamer.jpeg'),
  publicPath('assets/activiteiten.jpeg'),
  publicPath('assets/kinderfeest.jpg'),
  publicPath('assets/buurtborrel.jpg'),
  publicPath('assets/moestuin.jpg'),
  publicPath('assets/feestweek.jpg'),
  publicPath('assets/film-gesprek.jpg'),
  publicPath('assets/samendelenkast.jpg'),
]

export const missionText =
  'Het organiseren van activiteiten voor inwoners (kinderen, tieners, volwassenen en kwetsbaren in de samenleving) van de wijk Apeldoorn Zuid, met als doel om mensen aan elkaar te verbinden waardoor de samenleving in de wijk wordt bevorderd, mensen elkaar beter leren kennen en voor elkaar zorgen waardoor eenzaamheid wordt bestreden, ook als de tijdelijke opvang van mensen in nood, die voor een periode niet geheel zelfstandig kunnen leven en wonen.'

export const places = [
  {
    slug: 'buurthuis',
    title: 'Buurthuis',
    teaser: 'Een plek voor en door de wijk.',
    intro:
      'Het Buurthuis is er voor iedereen. Hier worden activiteiten voor de wijk georganiseerd, waarbij de woonkeuken zoveel mogelijk wordt benut. Old School krijgt steeds meer de functie van een buurthuis, waar jij als wijkbewoner kan mee doen met tal van activiteiten. Denk bijvoorbeeld aan lekker mee-eten in ons buurtrestaurant, gezellige gesprekken voeren tijdens de buurtborrel of doorkletsen over belangrijke levensvragen bij de Alpha-cursus.',
    image: publicPath('assets/buurthuisgebouw.png'),
    icon: faHouseChimney,
    details: [
      'Activiteiten voor kinderen, tieners, volwassenen en ouderen.',
      'De woonkeuken wordt zoveel mogelijk benut voor ontmoeting en samen eten.',
      'Een laagdrempelige plek waar je altijd welkom bent om eens langs te komen.',
    ],
    gallery: [
      publicPath('assets/buurthuis1.jpg'),
      publicPath('assets/buurthuis2.jpeg'),
      publicPath('assets/buurthuis3.jpeg'),
      publicPath('assets/buurthuis4.png'),
      publicPath('assets/buurthuis5.png'),
      publicPath('assets/buurthuis6.png'),
    ],
    cta: 'Bekijk activiteiten',
    ctaPath: '/activiteiten',
  },
  {
    slug: 'zorgboerderij',
    title: 'Zorgboerderij',
    teaser: 'Dicht bij dieren en natuur.',
    intro:
      'Bij Old School leven mensen en dieren dicht bij elkaar. Je vindt er pony’s, konijnen, varkens, kippen, geitjes, een moestuin en een glazen kas waar bewoners en buurtgenoten samen werken.',
    image: publicPath('assets/zorgboerderij.jpeg'),
    icon: faCow,
    details: [
      'Verzorging van de dieren op ons erf.',
      'Samen werken aan verse groenten en fruit in de moestuin en de kas.',
      'Een fijne plek voor ontmoeting tussen bewoners en buurtgenoten.',
    ],
    gallery: [
      publicPath('assets/zorgboerderij.jpeg'),
      publicPath('assets/moestuin.jpg'),
      publicPath('assets/zorgboederij2.png'),
      publicPath('assets/zorgboederij3.png'),
      publicPath('assets/zorgboederij4.png'),
      publicPath('assets/moestuin.png'),
    ],
    cta: 'Neem contact op',
    ctaPath: 'mailto:info@oldschoolapeldoorn.nl',
  },
  {
    slug: 'huiskamer',
    title: 'Huiskamer',
    teaser: 'Warm, ruim en te huur.',
    intro:
      'De huiskamer is een gezellige woonkamer met houtkachel in het hart van de verbouwde voormalige basisschool. De ruimte is geschikt voor overleg, ontmoeting en feestelijke momenten.',
    image: publicPath('assets/huiskamer.jpeg'),
    icon: faMugSaucer,
    details: [
      'Beamer, LED-TV, snelle wifi en muziekinstallatie aanwezig.',
      'Grote woonkeuken met servies en bestek voor maximaal 25 personen.',
      'Vlak bij het Zuiderpark voor een frisse wandeling tussendoor.',
    ],
    gallery: [
      publicPath('assets/huiskamer.jpeg'),
      publicPath('assets/huiskamer2.jpeg'),
      publicPath('assets/huiskamer3.jpeg'),
      publicPath('assets/huiskamer4.jpeg'),
      publicPath('assets/huiskamer5.jpeg'),
      publicPath('assets/huiskamer6.jpeg'),
    ],
    cta: 'Huiskamer huren',
    ctaPath: 'mailto:info@oldschoolapeldoorn.nl?subject=Huiskamer%20huren',
  },
]

export const activities = [
  {
    title: 'Kinderfeesten',
    icon: faGift,
    image: publicPath('assets/kinderfeest2.png'),
    description: 'Vijf keer per jaar organiseren we een Old School Kinderfeest, om kinderen een onvergetelijke middag te bezorgen. Kinderen genieten van springkussens, waterglijbaan, knutselwerkjes nav een thema, genieten van terugkerende kinderverhalen, zingen liedjes, horen Bijbelverhalen en krijgen onderwijs in het samen spelen en voor elkaar zorgen. Er wordt veel lol gemaakt, omdat we geloven dat geluk en plezier op deze jonge leeftijd ongelooflijk belangrijk is! Ouders zijn uiteraard welkom om te blijven hangen voor een mooie ontmoeting en meebeleven van dit feest.',
  },
  {
    title: 'Zorgboerderij',
    icon: faCow,
    image: publicPath('assets/zorgboederij2.png'),
    description: 'Rondom Old School leven verschillende dieren, zoals pony’s, geiten, varkens, kippen en poezen bij elkaar. We zien dat onze ‘miniboerderij’ een aantrekkingskracht heeft op kinderen en ouders, waarbij kinderen al vroeg leren genieten en te zorgen voor mens en dier. Heteen groot deel van ons dierenteam bestaat dan ook uit tieners die graag met de dieren bezig zijn. Ook zijn er op woensdagmiddag regelmatig knuffeluurtjes waar kinderen uit de wijk met kleine dieren kunnen knuffelen en spelen.  ',
  },
  {
    title: 'Buurtrestaurant',
    icon: faBowlFood,
    image: publicPath('assets/buurtrestaurant2.png'),
    description: 'Elke maandagavond verandert de huiskamer in een buurtrestaurant. We eten dan met Old School bewoners, vrijwilligers en mensen uit de wijk. Dit is een gratis warme maaltijd in een gastvrije sfeer, waarin elke week weer andere mensen aanschuiven en mee-eten. We delen onze levens, luisteren naar elkaars verhalen, leren van elkaar en bemoedigen mensen die een schouderklopje nodig hebben. Welkom vanaf 17.30 uur in de huiskamer!',
  },
  {
    title: 'Alpha Cursus',
    icon: faPeopleGroup,
    image: publicPath('assets/alpha.png'),
    description: 'Tijdens de Alpha Cursus ga je op een laagdrempelige manier in gesprek over het christelijke geloof. Samen met anderen gelovig of niet ontdek je wat er achter een tiental christelijke thema’s zit. Deze thema’s kunnen bijv. gaan over wie Jezus is, hoe de Bijbel is ontstaan en wat bidden betekent. Tijdens een bijeenkomst wordt een thema uitgelicht en ga je vervolgens in kleine groepjes erover in gesprek. Iedereen is welkom, je mag komen zoals je bent en elke vraag mag gesteld worden. We beginnen veelal met een maaltijd, koffie of een theetje. Nieuwsgierig? Laat dan even van je hor',
  },
  {
    title: 'Feestweek',
    icon: faCalendarDays,
    image: publicPath('assets/feestweek2.jpg'),
    description: 'in de laatste week van de zomervakantie bieden we kinderen, tieners en ouderen een feestweek aan, boordevol leuke activiteiten. Op deze manier kunnen mensen die niet op vakantie kunnen in Apeldoorn zuid een week lang genieten van allerlei activiteiten, zoals een buurt-BBQ, sportdag voor tieners, een kinderfeest in de ochtenden, en een inspiratiemoment op zondagmorgen!',
  },
  {
    title: 'Film en Gespreksavond',
    icon: faVideo,
    image: publicPath('assets/film-gesprek.jpg'),
    description: 'Zin in een mooie film, een gezellige avond op de bank, en een goed gesprek? Eens per maand organiseren we een film- en gespreksavond. We kijken samen naar een film met diepere boodschap en praten daar vervolgens over door: wat vond je ervan? Wat raakte je? Hoe kijk jij ernaar? Wij zorgen voor hapjes en drankjes. Hij mag geheel vrijblijvend aansluiten en ontspannen meegenieten. Wees welkom!',
  },
  {
    title: 'Buurtborrel',
    icon: faPeopleGroup,
    image: publicPath('assets/buurtborrel.jpg'),
    description: 'Voor volwassenen organiseren we maandelijks een ontmoetingsmoment in de gezellige huiskamer van Old School op vrijdagmiddag. Gezellig in gesprek met elkaar als wijkbewoners, om zo de sociale verbinding niet te verliezen maar juist te versterken!',
  },
  {
    title: 'Moestuin',
    icon: faLeaf,
    image: publicPath('assets/moestuin.png'),
    description: 'Gedurende het jaar zijn wijkbewoners bezig met de moestuin van Old School, en wordt de oogst gedeeld met mensen die graag uit onze moestuin eten. Ook genieten we tijdens ons buurtrestaurant op maandagavond van de groenten uit onze moestuin.',
  },
  {
    title: 'Samendelenkast',
    icon: faShareNodes,
    image: publicPath('assets/samendelen.png'),
    description: 'De samendelenkast is van en voor de buurt en staat vrij toegankelijk op de oprit van Old School. Er liggen allerlei soorten producten van etenswaren en hygiëneartikelen tot kleding in die gratis mee mogen worden genomen door mensen die moeite hebben om deze producten te betalen. Heeft u zelf iets over of wilt u een steentje bijdragen? U bent van harte welkom om producten in de kast te leggen zodat een ander die weer mee kan nemen. Op deze manier dragen we samen zorg voor elkaar.',
  },
]

export const documents = [
  {
    label: 'Beleidsplan Stichting Old School Apeldoorn 2025-2027',
    href: publicPath('documents/beleidsplan-stichting-old-school-apeldoorn-2025-2027.pdf'),
  },
  {
    label: 'Jaarverslag 2023',
    href: publicPath('documents/jaarverslag-2023.pdf'),
  },
  {
    label: 'Jaarverslag 2024',
    href: publicPath('documents/jaarverslag-2024.pdf'),
  },
  {
    label: 'Jaarrekening 2023',
    href: publicPath('documents/jaarrekening-2023-stichting-old-school-apeldoorn.pdf'),
  },
  {
    label: 'Jaarrekening 2024',
    href: publicPath('documents/jaarrekening-2024-stichting-old-school-apeldoorn.pdf'),
  },
  {
    label: 'Statuten Stichting Old School',
    href: publicPath('documents/statuten-stichting-old-school-apeldoorn.pdf'),
  },
  {
    label: 'Formulier Publicatieplicht ANBI 2023',
    href: publicPath('documents/publicatieplicht-anbi-sosa-2023.pdf'),
  },
  {
    label: 'Formulier Publicatieplicht ANBI 2024',
    href: publicPath('documents/publicatieplicht-anbi-sosa-2024.pdf'),
  },
]

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/oldschoolapeldoorn/', icon: faFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/oldschoolapeldoorn/', icon: faInstagram },
]
