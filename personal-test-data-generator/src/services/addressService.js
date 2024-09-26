import db from '../db.js';

// Function to get a random address
export async function getRandomAddress() {
    const [rows] = await db.query('SELECT * FROM postal_code ORDER BY RAND() LIMIT 1');



    const street = generateRandomStreet();
    const number = Math.floor(Math.random() * 999) + 1;
    const floor = Math.random() < 0.5 ? 'st' : Math.floor(Math.random() * 99) + 1;
    const door = generateRandomDoor();

    return {
        street,
        number,
        floor,
        door,
        townName: rows[0].cTownName,
        postal_code: rows[0].cPostalCode
    };


    function generateRandomStreet() {
        const streets = [
            'Adelgade', 'Algade', 'Amagerbrogade', 'Amaliegade', 'Asylgade', 'Axeltorv', 'Baunehøjvej', 'Blegdamsvej',
            'Borgergade', 'Bredegade', 'Brofogedvej', 'Brostræde', 'Christianshavn', 'Christiansholmsvej', 'Dag Hammarskjölds Allé',
            'Dalgas Boulevard', 'Danmarksgade', 'Dannebrogsgade', 'Dronningensgade', 'Dybensgade', 'Elmegade', 'Enghavevej',
            'Ewaldsgade', 'Falstersgade', 'Frederiksberg Allé', 'Frederiksholms Kanal', 'Frederiksgade', 'Gammel Kongevej',
            'Gothersgade', 'Grønningen', 'Haderslevgade', 'Halmtorvet', 'Hans Tavsens Gade', 'Herluf Trolles Gade', 'Hjultorv',
            'Holbergsgade', 'Holmens Kanal', 'Holsteinsgade', 'Hyskenstræde', 'Ingerslevsgade', 'Islands Brygge', 'Jagtvej',
            'Jægersborggade', 'Kastelsvej', 'Kattesundet', 'Kgs. Nytorv', 'Klosterstræde', 'Knabrostræde', 'Koldinggade',
            'Kompagnistræde', 'Kronprinsessegade', 'Krystalgade', 'Langelinie Allé', 'Larsbjørnsstræde', 'Lavendelstræde',
            'Linnésgade', 'Lundingsgade', 'Lygten', 'Læssøegade', 'Magstræde', 'Malmøgade', 'Marstalsgade', 'Møllegade', 
            'Møllegårdsvej', 'Møllehuset', 'Nansensgade', 'Nordre Frihavnsgade', 'Nørre Farimagsgade', 'Nørregade', 'Ny Adelgade',
            'Ny Kongensgade', 'Nybrogade', 'Nyhavn', 'Nyropsgade', 'Overgaden Neden Vandet', 'Palægade', 'Pilestræde',
            'Puggaardsgade', 'Rådhuspladsen', 'Rigensgade', 'Rosenørns Allé', 'Sankt Annæ Plads', 'Sankt Hans Gade', 
            'Sankt Peders Stræde', 'Sortedam Dossering', 'Sølvgade', 'Store Kongensgade', 'Strandboulevarden', 'Strandgade',
            'Strandvejen', 'Studiestræde', 'Sundbyvestervej', 'Teglholmsgade', 'Teglværksgade', 'Toldbodgade', 'Torvegade',
            'Tordenskjoldsgade', 'Tove Ditlevsens Plads', 'Tåsinge Plads', 'Vester Farimagsgade', 'Vesterbrogade', 
            'Vestergade', 'Vimmelskaftet', 'Østbanegade', 'Østerbrogade'
        ];
        
        return streets[Math.floor(Math.random() * streets.length)];
    }

    function generateRandomDoor() {
        const doors = ['tv', 'th', 'mf'];
        if (Math.random() < 0.5) {
            doors.push(String(Math.floor(Math.random() * 99) + 1));
        }else {
            return `${String.fromCharCode(97 + Math.floor(Math.random() * 26))}`;

        }
    }
}