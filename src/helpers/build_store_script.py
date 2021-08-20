import os, sys

#**************************************** FUNCTION DEFINITIONS ****************************************#
def get_album_title(path):
    return os.path.basename(path)

def get_artist_name(filename):
    name = filename.split(" ")[1].replace("-"," ")
    name += ","
    return name

def get_artwork(filename, root):
    if os.path.splitext(filename)[1] == ".jpeg" or os.path.splitext(filename)[1] == ".png":
        return f'{os.path.basename(root)}_cover'

def get_audio(filename):
    audio_src = filename.split(" ")[0].replace("-","_")
    audio_src = audio_src.replace("(","").replace(")","")
    return audio_src

def get_song_title(filename):
    title = filename.split(" ")[0].replace("-"," ")
    return title

def get_featured_artists(filename):
    contributors = []
    artists = filename.split(".")[0]
    artists = artists.split(" ")[1:]

    if len(artists) > 1:
        names = artists[1:]
        for index, name in enumerate(names):
            name = name.replace("-", " ")
            if index != len(names) - 1:
                name += ","
            contributors.append(name)
    
    return contributors

def write_import_statement(alias, filename, root):
    return f'import {alias} from "{os.path.join("database",os.path.basename(root), filename)}";\n'

def write_js_file(import_statements, songs):
    with open( "../database/" + sys.argv[1], "w" ) as f:
        f.write(f'\n\
{import_statements}\n\
import {{ v4 as uuidv4 }} from "uuid";\n\n\
function musicStore() {{\n\
\n\
\treturn [\n\
{songs}\n\
\t]\n\
}}\n\
export default musicStore;\
'
        )


def get_data():
    import_lines = ""
    songs = ""

    for root, dir, files in os.walk("../database/"):

        if len(dir) == 0 :
            files.sort(reverse=True)

            import_line = ""
            for file in files:
                ext = os.path.splitext(file)[1] 

                if ext == ".jpeg" or ext == ".png":
                    artwork = get_artwork(file, root)

                    import_line += write_import_statement(alias=artwork, filename=file, root=root)
                    continue
                else:
                    audio = get_audio(file)
                    album = get_album_title(root)
                    artist = get_artist_name(file)
                    title = get_song_title(file)
                    artists = get_featured_artists(file)

                    import_line += write_import_statement(alias=audio, filename=file, root=root)

                songs += \
f'\n\
        {{\n\
            "album": "{album}",\n\
            "artist": "{artist}",\n\
            "artwork": {artwork},\n\
            "audio": {audio},\n\
            "title": "{title}",\n\
            "featured": {artists},\n\
            "id": uuidv4(),\n\
            "active": false,\n\
        }},'
            import_line += "\n"
            import_lines += import_line

    return import_lines, songs
#**************************************** END OF FUNCTION DEFINITIONS ****************************************#

#************************ MAIN ************************#
def main():
    imports, songs = get_data()
    write_js_file(imports, songs)

if __name__=="__main__":
    main()