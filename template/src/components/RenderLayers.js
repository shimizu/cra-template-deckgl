import { TileLayer, BitmapLayer } from "deck.gl";


export function renderLayers(props) {
    const { tileURL } = props;

    const tileLayer = new TileLayer({
        data: tileURL,

        minZoom: 0,
        maxZoom: 19,
        tileSize: 256,

        renderSubLayers: (props) => {
            const {
                bbox: { west, south, east, north }
            } = props.tile;

            return new BitmapLayer(props, {
                data: null,
                image: props.data,
                bounds: [west, south, east, north]
            });
        }
    });

    return [tileLayer];
}
