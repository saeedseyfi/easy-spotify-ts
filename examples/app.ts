import EasySpotify from "../src/EasySpotify";
import EasySpotifyConfig from "../src/EasySpotifyConfig";
import { Album } from "../src/models/Album";

const spotify = new EasySpotify(new EasySpotifyConfig("token"));
// tslint:disable-next-line:max-line-length
spotify.setToken("BQDDBMJyTfS8_fx8XbpPwPqtxn24e4RhB6ji8qX5V8cPeY6lhUpnOhmXlUE6j-tTie4JGpyKGvWqiGJFpUoNVvuaOPsYEEvK7MW1J7-iW7e7H70QLGaENC59xvRysQgZTthx6FPxYYqUIEz2LlE");

/**
 * Get albums example
 */
// spotify.getAlbums(["382ObEPsp2rxGrnsizN5TX", "1A2GTWGtFfWp7KSQTwWOyo"], {market: "ES"}).then((albums) => {
//   console.log(albums);
// }).catch((error) => {
//   console.log(error);
// });
