import InfiniteTextScroll from "./InfiniteTextScroll";

function SongCard({artwork, title, artist, featured}) {
    let name = [];
    name[0] = title;

    let artists = [];
    artists.unshift(artist, ...featured);
    // console.log(...artists);

    return(
        <div className="song-card">
            <img src={artwork} alt="" />
            <div className="song-details">
                <InfiniteTextScroll items={name} />
                <InfiniteTextScroll items={ artists } />
            </div>
        </div>
    );
}

export default SongCard;