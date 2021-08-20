
import yano_cover from "database/yano/artwork.png";
import Yano_Lofi_Mix from "database/yano/Yano-Lofi-Mix Issa-Da-Deejay Chill-Gang.mp3";

import mirage_cover from "database/mirage/artwork.jpeg";
import Train_Ride from "database/mirage/Train-Ride Nymano Philanthrope.mp3";
import The_Ride_Home_interlude from "database/mirage/The-Ride-Home-(interlude) Nymano.mp3";
import Sunday_Mornings from "database/mirage/Sunday-Mornings Nymano JK-the-Sage.mp3";
import Sleepover from "database/mirage/Sleepover Nymano JK-the-Sage.mp3";
import Perfume from "database/mirage/Perfume Nymano sadtoi.mp3";
import One_Last_Call from "database/mirage/One-Last-Call Nymano Kanisan Mau.mp3";
import New_Horizons from "database/mirage/New-Horizons Nymano Epektase.mp3";
import Mirage from "database/mirage/Mirage Nymano j'san.mp3";
import False_Hope from "database/mirage/False-Hope Nymano Pandrezz.mp3";
import Distance from "database/mirage/Distance Nymano Ouska Anetta-Morozova.mp3";
import Cold_Outside from "database/mirage/Cold-Outside Nymano.mp3";
import Blurry from "database/mirage/Blurry Nymano Hyume.mp3";

import viatecture from "database/wanderlust/viatecture makzo leavv.mp3";
import wanderlust_cover from "database/wanderlust/artwork.jpeg";
import Wayfare from "database/wanderlust/Wayfare Makzo The-Kount.mp3";
import Trainspotting from "database/wanderlust/Trainspotting makzo Aarigod.mp3";
import Tether from "database/wanderlust/Tether Makzo Bcalm.mp3";
import Safe_Haven from "database/wanderlust/Safe-Haven makzo Oatmello.mp3";
import Magnitude from "database/wanderlust/Magnitude Makzo Hoffy-Beats.mp3";
import Layover from "database/wanderlust/Layover Makzo brillion.mp3";
import Caravan from "database/wanderlust/Caravan makzo goosetaf The-Field-Tapes.mp3";
import Badlands from "database/wanderlust/Badlands Makzo Hanz.mp3";
import Airplane_Mode from "database/wanderlust/Airplane-Mode Makzo Axian falcxne.mp3";


import { v4 as uuidv4 } from "uuid";

function musicStore() {

	return [

        {
            "album": "yano",
            "artist": "Issa Da Deejay,",
            "artwork": yano_cover,
            "audio": Yano_Lofi_Mix,
            "title": "Yano Lofi Mix",
            "featured": ['Chill Gang'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano,",
            "artwork": mirage_cover,
            "audio": Train_Ride,
            "title": "Train Ride",
            "featured": ['Philanthrope'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano.mp3,",
            "artwork": mirage_cover,
            "audio": The_Ride_Home_interlude,
            "title": "The Ride Home (interlude)",
            "featured": [],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano,",
            "artwork": mirage_cover,
            "audio": Sunday_Mornings,
            "title": "Sunday Mornings",
            "featured": ['JK the Sage'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano,",
            "artwork": mirage_cover,
            "audio": Sleepover,
            "title": "Sleepover",
            "featured": ['JK the Sage'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano,",
            "artwork": mirage_cover,
            "audio": Perfume,
            "title": "Perfume",
            "featured": ['sadtoi'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano,",
            "artwork": mirage_cover,
            "audio": One_Last_Call,
            "title": "One Last Call",
            "featured": ['Kanisan,', 'Mau'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano,",
            "artwork": mirage_cover,
            "audio": New_Horizons,
            "title": "New Horizons",
            "featured": ['Epektase'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano,",
            "artwork": mirage_cover,
            "audio": Mirage,
            "title": "Mirage",
            "featured": ["j'san"],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano,",
            "artwork": mirage_cover,
            "audio": False_Hope,
            "title": "False Hope",
            "featured": ['Pandrezz'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano,",
            "artwork": mirage_cover,
            "audio": Distance,
            "title": "Distance",
            "featured": ['Ouska,', 'Anetta Morozova'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano.mp3,",
            "artwork": mirage_cover,
            "audio": Cold_Outside,
            "title": "Cold Outside",
            "featured": [],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "mirage",
            "artist": "Nymano,",
            "artwork": mirage_cover,
            "audio": Blurry,
            "title": "Blurry",
            "featured": ['Hyume'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "wanderlust",
            "artist": "makzo,",
            "artwork": mirage_cover,
            "audio": viatecture,
            "title": "viatecture",
            "featured": ['leavv'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "wanderlust",
            "artist": "Makzo,",
            "artwork": wanderlust_cover,
            "audio": Wayfare,
            "title": "Wayfare",
            "featured": ['The Kount'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "wanderlust",
            "artist": "makzo,",
            "artwork": wanderlust_cover,
            "audio": Trainspotting,
            "title": "Trainspotting",
            "featured": ['Aarigod'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "wanderlust",
            "artist": "Makzo,",
            "artwork": wanderlust_cover,
            "audio": Tether,
            "title": "Tether",
            "featured": ['Bcalm'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "wanderlust",
            "artist": "makzo,",
            "artwork": wanderlust_cover,
            "audio": Safe_Haven,
            "title": "Safe Haven",
            "featured": ['Oatmello'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "wanderlust",
            "artist": "Makzo,",
            "artwork": wanderlust_cover,
            "audio": Magnitude,
            "title": "Magnitude",
            "featured": ['Hoffy Beats'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "wanderlust",
            "artist": "Makzo,",
            "artwork": wanderlust_cover,
            "audio": Layover,
            "title": "Layover",
            "featured": ['brillion'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "wanderlust",
            "artist": "makzo,",
            "artwork": wanderlust_cover,
            "audio": Caravan,
            "title": "Caravan",
            "featured": ['goosetaf,', 'The Field Tapes'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "wanderlust",
            "artist": "Makzo,",
            "artwork": wanderlust_cover,
            "audio": Badlands,
            "title": "Badlands",
            "featured": ['Hanz'],
            "id": uuidv4(),
            "active": false,
        },
        {
            "album": "wanderlust",
            "artist": "Makzo,",
            "artwork": wanderlust_cover,
            "audio": Airplane_Mode,
            "title": "Airplane Mode",
            "featured": ['Axian,', 'falcxne'],
            "id": uuidv4(),
            "active": false,
        },
	]
}
export default musicStore;