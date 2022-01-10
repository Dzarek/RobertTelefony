import ładowarka1 from "./images/accessories/ładowarka1.jpg";
import ładowarka2 from "./images/accessories/ładowarka2.jpg";
import ładowarka3 from "./images/accessories/ładowarka3.jpg";
import szybka1 from "./images/accessories/szybka1.jpg";
import szybka2 from "./images/accessories/szybka2.jpg";
import powerbank1 from "./images/accessories/powerbank1.png";
import powerbank2 from "./images/accessories/powerbank2.jpg";
import powerbank3 from "./images/accessories/powerbank3.jpg";
import głośnik1 from "./images/accessories/głośnik1.jpg";
import głośnik2 from "./images/accessories/głośnik2.jpg";
import głośnik3 from "./images/accessories/głośnik3.jpg";
import memory1 from "./images/accessories/memory1.jpg";
import memory2 from "./images/accessories/memory2.jpg";
import memory3 from "./images/accessories/memory3.jpg";
import słuchawki1 from "./images/accessories/słuchawki1.jpg";
import słuchawki2 from "./images/accessories/słuchawki2.jpg";

import samsungGalaxyS20_1 from "./images/smartphones/samsungGalaxyS20-1.jpg";
import samsungGalaxyS20_2 from "./images/smartphones/samsungGalaxyS20-2.jpg";
import samsungGalaxyS20_3 from "./images/smartphones/samsungGalaxyS20-3.jpg";
import iPhone12Pro_1 from "./images/smartphones/iPhone12Pro-1.jpg";
import iPhone12Pro_2 from "./images/smartphones/iPhone12Pro-2.jpg";
import iPhone12Pro_3 from "./images/smartphones/iPhone12Pro-3.jpg";
import motorolaMotoG60s_1 from "./images/smartphones/motorolaMotoG60s-1.jpg";
import motorolaMotoG60s_2 from "./images/smartphones/motorolaMotoG60s-2.jpg";
import motorolaMotoG60s_3 from "./images/smartphones/motorolaMotoG60s-3.jpg";
import oppoReno6Pro_1 from "./images/smartphones/oppoReno6Pro-1.jpg";
import oppoReno6Pro_2 from "./images/smartphones/oppoReno6Pro-2.jpg";
import oppoReno6Pro_3 from "./images/smartphones/oppoReno6Pro-3.jpg";
import smartfonXIAOMI11Lite_1 from "./images/smartphones/smartfonXIAOMI11Lite-1.jpg";
import smartfonXIAOMI11Lite_2 from "./images/smartphones/smartfonXIAOMI11Lite-2.jpg";
import smartfonXIAOMI11Lite_3 from "./images/smartphones/smartfonXIAOMI11Lite-3.jpg";

export const questionsData = [
  {
    id: 1,
    title: "Czy można płacić kartą?",
    info: "Niestety nie posiadam terminala w swoim sklepie. Ale spokojnie, bankomat znajduje się 100m od sklepu.",
  },
  {
    id: 2,
    title: "Czy dostanę telefon zastępczy na czas naprawy?",
    info: "Nie, nie daję telefonu zastępczego. Dobrze byś przygotował/przygotowała sobie jakiś stary telefon na okres naprawy.",
  },
  {
    id: 3,
    title: "Czy moje pliki w telefonie zostaną utracone w trakcie naprawy?",
    info: "Bardzo możliwe, ale zależy to od typu naprawy. W wielu przypadkach wiąże się to z aktualizowaniem oprogramowania i Twoje dane mogą zostać utracone. Przed oddaniem urządzenia do naprawy postaraj się zrobić sobie kopię zapasową swoich zdjęć i innych danych.",
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
    info: "To zależy od modelu telefonu i stopnia uszkodzenia. W większości przypadków jest to możliwe jednak że, nie we szystkich jest to opłacalne. Czasami lepiej zapłacić ciut więcej i wymienić cały wyświetlacz.",
  },
];

export const accessoriesData = {
  ładowarki: {
    items: [
      {
        id: 1,
        name: "usb",
        img: ładowarka1,
      },
      {
        id: 2,
        name: "usb-C",
        img: ładowarka2,
      },
      {
        id: 3,
        name: "usb-iOS",
        img: ładowarka3,
      },
    ],
    info: "Ładowarki... lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sed illum quos, quo, adipisci nostrum, cupiditate dolore commodi nisi magni labore odit tempore ullam autem tenetur. ",
  },
  szkła: {
    items: [
      {
        id: 1,
        name: "h7",
        img: szybka1,
      },
      {
        id: 2,
        name: "h9",
        img: szybka2,
      },
    ],
    info: "Szkła... lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sed illum quos, quo, adipisci nostrum, cupiditate dolore commodi nisi magni labore odit tempore ullam autem tenetur. ",
  },
  powerbanki: {
    items: [
      {
        id: 1,
        name: "XA",
        img: powerbank1,
      },
      {
        id: 2,
        name: "XB",
        img: powerbank2,
      },
      {
        id: 3,
        name: "XC",
        img: powerbank3,
      },
    ],
    info: "Powerbanki... lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sed illum quos, quo, adipisci nostrum, cupiditate dolore commodi nisi magni labore odit tempore ullam autem tenetur. ",
  },
  głośniki: {
    items: [
      {
        id: 1,
        name: "XA",
        img: głośnik1,
      },
      {
        id: 2,
        name: "XB",
        img: głośnik2,
      },
      {
        id: 3,
        name: "XC",
        img: głośnik3,
      },
    ],
    info: "Głośniki... lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sed illum quos, quo, adipisci nostrum, cupiditate dolore commodi nisi magni labore odit tempore ullam autem tenetur. ",
  },
  memoriesCard: {
    items: [
      {
        id: 1,
        name: "XA",
        img: memory1,
      },
      {
        id: 2,
        name: "XB",
        img: memory2,
      },
      {
        id: 3,
        name: "XC",
        img: memory3,
      },
    ],
    info: "Karty pamięci... lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sed illum quos, quo, adipisci nostrum, cupiditate dolore commodi nisi magni labore odit tempore ullam autem tenetur. ",
  },
  słuchawki: {
    items: [
      {
        id: 1,
        name: "XA",
        img: słuchawki1,
      },
      {
        id: 2,
        name: "XB",
        img: słuchawki2,
      },
    ],
    info: "Słuchawki... lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sed illum quos, quo, adipisci nostrum, cupiditate dolore commodi nisi magni labore odit tempore ullam autem tenetur. ",
  },
};

export const smartphonesData = [
  {
    id: 1,
    name: "Samsung Galaxy S20",
    img: [samsungGalaxyS20_1, samsungGalaxyS20_2, samsungGalaxyS20_3],
    screen: '6.5", 2400 x 1080px, Super AMOLED',
    proccessor: "Qualcomm Snapdragon 865, Ośmiordzeniowy",
    system: "Android 10",
    ram: "6 GB",
    memory: "128 GB",
    price: "2900,00 zł",
  },
  {
    id: 2,
    name: "XIAOMI 11 Lite",
    img: [
      smartfonXIAOMI11Lite_1,
      smartfonXIAOMI11Lite_2,
      smartfonXIAOMI11Lite_3,
    ],
    screen: '6.5", 2400 x 1080px, AMOLED',
    proccessor: "Qualcomm Snapdragon 778G 5G, Ośmiordzeniowy",
    system: "Android 11",
    ram: "6 GB",
    memory: "128 GB",
    price: "1649,00 zł",
  },
  {
    id: 3,
    name: "Oppo Reno 6 Pro",
    img: [oppoReno6Pro_1, oppoReno6Pro_2, oppoReno6Pro_3],
    screen: '6.55", 2400 x 1080px, AMOLED',
    proccessor: "Snapdragon 870, Ośmiordzeniowy",
    system: "Android 11",
    ram: "12 GB",
    memory: "256 GB",
    price: "3699,00 zł",
  },
  {
    id: 4,
    name: "iPhone 12 Pro",
    img: [iPhone12Pro_1, iPhone12Pro_2, iPhone12Pro_3],
    screen: '6.1", 2532 x 1170px, OLED Super Retina XDR',
    proccessor: "Apple A14 Bionic, Sześciordzeniowy",
    system: "iOS 14",
    ram: "6 GB",
    memory: "128 GB",
    price: "4699,99 zł",
  },
  {
    id: 5,
    name: "Motorola Moto G60s",
    img: [motorolaMotoG60s_1, motorolaMotoG60s_2, motorolaMotoG60s_3],
    screen: '6.8", 2460 x 1080px, TFT',
    proccessor: "MediaTek Helio G95, Ośmiordzeniowy",
    system: "Android 11",
    ram: "6 GB",
    memory: "128 GB",
    price: "1199,00 zł",
  },
];
