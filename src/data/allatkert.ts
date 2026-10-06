import type { Listak, Tablazat, Allat } from '../types/allatkert.ts'

export const listak: Listak[] = [
    {
        cim: "Élőhelyek",
        elem: ["Afrikai szavanna",
            "Ázsiai esőerdő",
            "Dél-amerikai őserdő",
            "Sarki vidék",
            "Ausztráliai területek"],
        szamozott: false
    },
    {
        cim: "Népszerű állatok",
        elem: ["Orsozlán",
            "Elefánt",
            "Zsiráf",
            "Panda",
            "Pingvin"],
        szamozott: true

    },
    {
        cim: "Táplálkozás",
        elem: ["Húsevők",
            "Növényevők",
            "MIndenevők",
            "GYümölcsevők",
            "Rovarevők"],
        szamozott: true
    }
]


export const tablazat: Tablazat[] = [

    {
        elsoSor: "Név",
        harmadikSor: "Életkor",
        masodikSor: "Súly",
        negyedikSor: "Veszélyeztetett?",
        otodikSor: "Kedvenc étele",
    },
    {
        elsoSor: "Szimba",
        harmadikSor: "8 év",
        masodikSor: "190 kg",
        negyedikSor: "Igen",
        otodikSor: "Marhahús, csirkehús",
    },
    {
        elsoSor: "Lili",
        harmadikSor: "12 év",
        masodikSor: "3200 kg",
        negyedikSor: "Nem",
        otodikSor: "Fű, levelek, gyümölcsök",
    },
    {
        elsoSor: "Beni",
        harmadikSor: "6 év",
        masodikSor: "850 kg",
        negyedikSor: "Igen",
        otodikSor: "Levelek, ágak",
    }, {
        elsoSor: "Pötyi",
        harmadikSor: "5 év",
        masodikSor: "95 kg",
        negyedikSor: "Igen",
        otodikSor: "Bambusz, sárgarépa",
    },
    {
        elsoSor: "Csőrike",
        harmadikSor: "4 év",
        masodikSor: "28 kg",
        negyedikSor: "Nem",
        otodikSor: "Hal, krill",
    }

]


export const allatok: Allat[] = [
    {
        faj: "Oroszlán",
        nev: "Szimba",
        leiras: "Szimba egy 8 éves hím oroszlán. Súlya körülbelül 190 kg",
        veszelyeztetett: "Igen",
        etel: "Marhahús, csirkehús"
    },
    {
        faj: "Elefánt",
        nev: "Lili",
        leiras: "Lili egy 12 éves elefánt. Súlya körülbelül 3200 kg",
        veszelyeztetett: "Nem",
        etel: "Fű, levelek, gyümölcsök"

    },
    {
        faj: "Zsiráf",
        nev: "Beni",
        leiras: "Beni egy 6 éves zsiráf. Súlya körülbelül 850 kg",
        veszelyeztetett: "Igen",
        etel: "Levelek, ágak"
    },
    {

        faj: "Panda",
        nev: "Pötyi",
        leiras: "Pötyi egy 5 éves panda. Súlya körülbelül 95 kg",
        veszelyeztetett: "Igen",
        etel: "Bambusz, sárgarépa"
    }
]


export const Fontos: string[] = [
    " Minden állatfajnak sajátos táplálkozási igényei vannak.",
    "Az állatok életkora és testsúlya fajonként, illetve egyedenként eltérhet.",
    "A veszélyeztetett fajok védelme fontos természetvédelmi feladat.",
    "Az állatkertekben az állatok gondozása mellett az ismeretterjesztés is fontos szerepet kap.",
    "Egy állat adatai többféle adattípust tartalmazhatnak: szöveget, számot, logikai értéket és tömböt."

]