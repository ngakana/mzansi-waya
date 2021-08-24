import InfiniteTextScroll from "./InfiniteTextScroll";

function SongCard({artwork, title, artist, featured, scrollThres}) {
    let name = [];
    name[0] = title;

    let artists = [];
    artists.unshift(artist, ...featured);

    return(
        <div className="song-card">
            <img src={artwork} alt="" />
            <div className="song-details">
                <InfiniteTextScroll items={name} maxLen={scrollThres} />
                <InfiniteTextScroll items={ artists } maxLen={scrollThres} />
            </div>
        </div>
    );
}

export default SongCard;