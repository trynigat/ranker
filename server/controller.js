import axios from "axios";

const CLIENT_ID = 'rspre5v055nw9mz2t27uk4b8b6aq8d';
const CLIENT_SECRET = 'bsc6xdiyr7jlxlsf37hugmq6zqtzhh';

export async function searchIGDB(gameTitle) {


    try {
        // 1. Pobieranie tokena dostępu z Twitcha
        const authResponse = await axios.post(
            `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`
        );

        const accessToken = authResponse.data.access_token;

        // 2. Zapytanie do IGDB o konkretną grę
        const response = await axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${accessToken}`,
            },
            // Składnia Apicalypse: wyszukujemy nazwę i pobieramy wybrane pola
            data: `
                search "${gameTitle}"; 
                fields name, cover.url;
                limit 3;
            `
        });
        console.log(response.data);

        return response.data;


    } catch (error) {
        console.error('Błąd podczas komunikacji z API:', error.response ? error.response.data : error.message);
    }
}


export const searchGames = async (req, res) => {
    const phrase = req.query.title;
    const data = await searchIGDB(phrase);
    const games = data.map((game) => ({ id:game.id, name: game.name, cover: game.cover.url}));
    return res.status(200).json({games});
}

