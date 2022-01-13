import ładowarka1 from "./images/accessories/ładowarki/ładowarkaUSBC.jpg";
import ładowarka2 from "./images/accessories/ładowarki/ładowarkaMicro.jpg";
import ładowarka3 from "./images/accessories/ładowarki/ładowarkaIphone.jpg";
import szybka1 from "./images/accessories/szkła/szkło.jpg";
import szybka2 from "./images/accessories/szkła/hydrożel.jpg";
import szybka3 from "./images/accessories/szkła/folia.jpg";
import powerbank1 from "./images/accessories/powerbanki/10000mAh.jpg";
import powerbank2 from "./images/accessories/powerbanki/20000mAh.jpg";
import powerbank3 from "./images/accessories/powerbanki/30000mAh.jpg";
import głośnik1 from "./images/accessories/głośniki&słuchawki/głośnik.jpg";
import głośnik2 from "./images/accessories/głośniki&słuchawki/douszne.jpg";
import głośnik3 from "./images/accessories/głośniki&słuchawki/nauszne.jpg";
import memory1 from "./images/accessories/memory/micro.jpg";
import memory2 from "./images/accessories/memory/sdxc.jpg";
import inne1 from "./images/accessories/inne/uchwyt.jpg";
import inne2 from "./images/accessories/inne/selfieSick.jpg";
import inne3 from "./images/accessories/inne/ładowarkaSamochodowa.jpg";

// import samsungGalaxyS20_1 from "./images/smartphones/samsungGalaxyS20-1.jpg";
// import samsungGalaxyS20_2 from "./images/smartphones/samsungGalaxyS20-2.jpg";
// import samsungGalaxyS20_3 from "./images/smartphones/samsungGalaxyS20-3.jpg";
// import iPhone12Pro_1 from "./images/smartphones/iPhone12Pro-1.jpg";
// import iPhone12Pro_2 from "./images/smartphones/iPhone12Pro-2.jpg";
// import iPhone12Pro_3 from "./images/smartphones/iPhone12Pro-3.jpg";
// import motorolaMotoG60s_1 from "./images/smartphones/motorolaMotoG60s-1.jpg";
// import motorolaMotoG60s_2 from "./images/smartphones/motorolaMotoG60s-2.jpg";
// import motorolaMotoG60s_3 from "./images/smartphones/motorolaMotoG60s-3.jpg";
// import oppoReno6Pro_1 from "./images/smartphones/oppoReno6Pro-1.jpg";
// import oppoReno6Pro_2 from "./images/smartphones/oppoReno6Pro-2.jpg";
// import oppoReno6Pro_3 from "./images/smartphones/oppoReno6Pro-3.jpg";
// import smartfonXIAOMI11Lite_1 from "./images/smartphones/smartfonXIAOMI11Lite-1.jpg";
// import smartfonXIAOMI11Lite_2 from "./images/smartphones/smartfonXIAOMI11Lite-2.jpg";
// import smartfonXIAOMI11Lite_3 from "./images/smartphones/smartfonXIAOMI11Lite-3.jpg";

export const questionsData = [
  {
    id: 1,
    title: "Czy można płacić kartą?",
    info: "Niestety nie posiadamy terminala w naszym sklepie. Ale spokojnie, bankomat znajduje się 100m od nas.",
  },
  {
    id: 2,
    title: "Czy dostanę telefon zastępczy na czas naprawy?",
    info: "Nie, nie dajemy telefonu zastępczego. Dobrze byś przygotował/przygotowała sobie jakiś stary telefon na okres naprawy.",
  },
  {
    id: 3,
    title: "Czy moje pliki w telefonie zostaną utracone w trakcie naprawy?",
    info: "Bardzo możliwe, ale zależy to od typu naprawy. W wielu przypadkach wiąże się to z aktualizowaniem oprogramowania i Twoje dane mogą zostać utracone. Przed oddaniem urządzenia do naprawy postaraj się zrobić kopię zapasową swoich zdjęć i innych danych.",
  },
  {
    id: 4,
    title: "Czy należy formatować baterię w nowym telefonie?",
    info: "Kiedyś tak się robiło ale był wtedy inny typ baterii. Dzisiaj stosuje się baterie typu  Li-Ion (litowo-jonowe), które działają inaczej. W tego rodzaju bateriach nie zaleca się rozładowywania ich całkowicie gdyż skutkuje to skróceniem ich żywotności.",
  },
  {
    id: 5,
    title:
      "Czy można wymienić tylko pękniętą szybkę w telefonie bez wymiany całego wyświetlacza?",
    info: "To zależy od modelu telefonu i stopnia uszkodzenia. W większości przypadków jest to możliwe jednak że, nie we wszystkich jest to opłacalne. Czasami lepiej zapłacić ciut więcej i wymienić cały wyświetlacz.",
  },
  {
    id: 6,
    title: "Czy znajdę tutaj jakiś telefon odpowiedni dla seniora?",
    info: "Tak, w naszej ofercie są również telefony dla seniorów! Wiele starszych osób ma problemy z obsługą nowych smartfonów i czują się niekomfortowo używając ich. W naszym sklepie pomożemy dobrać odpowiedni telefon, który będzie funkcjonalny i jednocześnie łatwy w obsłudze.",
  },
];

export const accessoriesData = {
  ładowarki: {
    items: [
      {
        id: 1,
        name: "USB-C",
        img: ładowarka1,
      },
      {
        id: 2,
        name: "USB-MIKRO",
        img: ładowarka2,
      },
      {
        id: 3,
        name: "USB-IPHONE",
        img: ładowarka3,
      },
    ],
    info: "Ładowarki są nam niezbędne do utrzymania naszych kochanych telefonów przy życiu. Jeśli Twoja się zgubiła, zepsuła lub po prostu potrzebujesz nowej, u mnie znajdziesz wszystkie najbardziej popularne rodzaje. ",
  },
  szkła: {
    items: [
      {
        id: 1,
        name: "HARTOWANE",
        img: szybka1,
      },
      {
        id: 2,
        name: "HYDROŻELOWE",
        img: szybka2,
      },
      {
        id: 2,
        name: "FOLIE",
        img: szybka3,
      },
    ],
    info: "Każdemu z nas zdarza się upuścić telefon. Niestety nie raz kończy się to roztrzaskanym wyświetlaczem. Najlepszą ochroną w tym przypadku są szkła i folie zabezpieczające. Przy zakupie ich w moim sklepie, pomagam w ich założeniu gratis!",
  },
  powerbanki: {
    items: [
      {
        id: 1,
        name: "10000 mAh",
        img: powerbank1,
      },
      {
        id: 2,
        name: "20000 mAh",
        img: powerbank2,
      },
      {
        id: 3,
        name: "30000 mAh",
        img: powerbank3,
      },
    ],
    info: "Powerbanki są szczególnie przydatne podczas podróży i wycieczek. Gdy nie mamy bezpośrednio dostępu do prądu, a nasz sprzęt (nie tylko telefon) już prawie wyczerpał swoją baterię - powerbank może okazać się wybawieniem!",
  },
  głośniki: {
    items: [
      {
        id: 1,
        name: "GŁOŚNIKI",
        img: głośnik1,
      },
      {
        id: 2,
        name: "SŁUCHAWKI DOUSZNE",
        img: głośnik2,
      },
      {
        id: 3,
        name: "SŁUCHAWKI NAUSZNE",
        img: głośnik3,
      },
    ],
    info: "Głośniki i słuchawki to chyba ulubiony gadżet do telefonów. W moim sklepie znajdziesz głośniki bluetooth przydatne do rozkręcenia małej imprezki oraz słuchawki - nauszne,douszne, z kablem i bez. ",
  },
  memoriesCard: {
    items: [
      {
        id: 1,
        name: "microSDXC",
        img: memory1,
      },
      {
        id: 2,
        name: "SDXC",
        img: memory2,
      },
    ],
    info: "Karty pamięci są bardzo przydatne do: telefonów, głośników, aparatów, odtwarzaczy muzyki i wielu innych urządzeń. Im więcej pamięci posiadamy tym lepiej, jednakże przed zakupem należy sprawdzić do jakiej wielkości nasze urządzenie może obsłużyć kartę pamięci. ",
  },
  others: {
    items: [
      {
        id: 1,
        name: "UCHWYT NA TELEFON",
        img: inne1,
      },
      {
        id: 2,
        name: "SELFIE STICK",
        img: inne2,
      },
      {
        id: 3,
        name: "ŁADOWARKA SAMOCHODOWA",
        img: inne3,
      },
    ],
    info: "W moim sklepie znajdziesz również wiele innych przydatnych akcesorii jak np. uchwyty na telefon do auta, ładowarki samochodowe czy selfie sticki do robienia ładnych seflie. ",
  },
};

// export const smartphonesData = [
//   {
//     id: 1,
//     name: "Samsung Galaxy S20",
//     img: [samsungGalaxyS20_1, samsungGalaxyS20_2, samsungGalaxyS20_3],
//     screen: '6.5", 2400 x 1080px, Super AMOLED',
//     proccessor: "Qualcomm Snapdragon 865, Ośmiordzeniowy",
//     system: "Android 10",
//     ram: "6 GB",
//     memory: "128 GB",
//     price: "2900,00 zł",
//   },
//   {
//     id: 2,
//     name: "XIAOMI 11 Lite",
//     img: [
//       smartfonXIAOMI11Lite_1,
//       smartfonXIAOMI11Lite_2,
//       smartfonXIAOMI11Lite_3,
//     ],
//     screen: '6.5", 2400 x 1080px, AMOLED',
//     proccessor: "Qualcomm Snapdragon 778G 5G, Ośmiordzeniowy",
//     system: "Android 11",
//     ram: "6 GB",
//     memory: "128 GB",
//     price: "1649,00 zł",
//   },
//   {
//     id: 3,
//     name: "Oppo Reno 6 Pro",
//     img: [oppoReno6Pro_1, oppoReno6Pro_2, oppoReno6Pro_3],
//     screen: '6.55", 2400 x 1080px, AMOLED',
//     proccessor: "Snapdragon 870, Ośmiordzeniowy",
//     system: "Android 11",
//     ram: "12 GB",
//     memory: "256 GB",
//     price: "3699,00 zł",
//   },
//   {
//     id: 4,
//     name: "iPhone 12 Pro",
//     img: [iPhone12Pro_1, iPhone12Pro_2, iPhone12Pro_3],
//     screen: '6.1", 2532 x 1170px, OLED Super Retina XDR',
//     proccessor: "Apple A14 Bionic, Sześciordzeniowy",
//     system: "iOS 14",
//     ram: "6 GB",
//     memory: "128 GB",
//     price: "4699,99 zł",
//   },
//   {
//     id: 5,
//     name: "Motorola Moto G60s",
//     img: [motorolaMotoG60s_1, motorolaMotoG60s_2, motorolaMotoG60s_3],
//     screen: '6.8", 2460 x 1080px, TFT',
//     proccessor: "MediaTek Helio G95, Ośmiordzeniowy",
//     system: "Android 11",
//     ram: "6 GB",
//     memory: "128 GB",
//     price: "1199,00 zł",
//   },
// ];
