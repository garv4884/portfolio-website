export default class ProjectData {
    id: string;
    name: string;
    htmlDescription: string;
    iconUrl: string; // used as thumbnail
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    accentColor: string; // color of title bar
    demoUrl: string;    // optional live web demo link
    youtubeUrl: string; // optional YouTube demo video link
    storeUrl: string;   // optional app store / download link

    constructor(
        id: string,
        name: string,
        iconUrl: string,
        html: string,
        accentColor = "#000000",
        isHigh = false,
        isWide = false,
        demoUrl = "",
        youtubeUrl = "",
        storeUrl = ""
    ) {
        this.id = id;
        this.name = name;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = accentColor;
        this.demoUrl = demoUrl;
        this.youtubeUrl = youtubeUrl;
        this.storeUrl = storeUrl;
    }
}
