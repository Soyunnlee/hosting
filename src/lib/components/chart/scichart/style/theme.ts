import type { ISciChartLoader } from "scichart";
import type { IThemeProvider } from "scichart/Charting/Themes/IThemeProvider";
import { SciChartJsNavyTheme } from "scichart/Charting/Themes/SciChartJsNavyTheme";

export interface AppThemeBase {
	SciChartJsTheme: IThemeProvider;

	// general colors
	ForegroundColor: string;
	Background: string;

	// Series colors
	VividSkyBlue: string;
	VividPink: string;
	VividTeal: string;
	VividOrange: string;
	VividBlue: string;
	VividPurple: string;
	VividGreen: string;
	VividRed: string;

	MutedSkyBlue: string;
	MutedPink: string;
	MutedTeal: string;
	MutedOrange: string;
	MutedBlue: string;
	MutedPurple: string;
	MutedRed: string;

	PaleSkyBlue: string;
	PalePink: string;
	PaleTeal: string;
	PaleOrange: string;
	PaleBlue: string;
	PalePurple: string;
}

class SciChart2022AppTheme implements AppThemeBase {
	SciChartJsTheme = new SciChartJsNavyTheme();

	// General colors
	ForegroundColor = "#FFFFFF";
	Background = this.SciChartJsTheme.sciChartBackground;

	// Series colors
	VividSkyBlue = "#50C7E0";
	VividPink = "#EC0F6C";
	VividTeal = "#30BC9A";
	VividOrange = "#F48420";
	VividBlue = "#364BA0";
	VividPurple = "#882B91";
	VividGreen = "#67BDAF";
	VividRed = "#C52E60";

	DarkIndigo = "#14233C";
	Indigo = "#264B93";

	MutedSkyBlue = "#83D2F5";
	MutedPink = "#DF69A8";
	MutedTeal = "#7BCAAB";
	MutedOrange = "#E7C565";
	MutedBlue = "#537ABD";
	MutedPurple = "#A16DAE";
	MutedRed = "#DC7969";

	PaleSkyBlue = "#E4F5FC";
	PalePink = "#EEB3D2";
	PaleTeal = "#B9E0D4";
	PaleOrange = "#F1CFB5";
	PaleBlue = "#B5BEDF";
	PalePurple = "#CFB4D5";
}

export const scichart2022Theme = new SciChart2022AppTheme();

export class CustomChartLoader implements ISciChartLoader {
	public type: "Custom";
	public loadingText: string = "loading..";
	constructor(options?: { loadingText?: string }) {
		this.loadingText = options?.loadingText ?? this.loadingText;
	}
	public addChartLoader(domChartRoot: HTMLDivElement, theme: IThemeProvider): HTMLElement {
		const loaderContainerDiv = document.createElement("div");
		loaderContainerDiv.style.margin = "auto";
		loaderContainerDiv.style.backgroundColor = "#1E2123";
		loaderContainerDiv.style.maxHeight = "100%";
		loaderContainerDiv.style.height = "100%";
		loaderContainerDiv.style.width = "100%";
		loaderContainerDiv.style.display = "flex";
		loaderContainerDiv.style.justifyContent = "center";
		loaderContainerDiv.style.alignItems = "center";

		// image 부분
		// const loaderImage = document.createElement("img") as HTMLImageElement;
		// loaderImage.src = "https://i.giphy.com/media/2WjpfxAI5MvC9Nl8U7/giphy.webp";
		// loaderImage.style.width = "100%";
		// loaderImage.style.height = "100%";
		// loaderContainerDiv.appendChild(loaderImage);

		// text 부분
		const loaderText = document.createElement("div");
		loaderText.style.float = "left";
		loaderText.style.textAlign = "center";
		loaderText.style.position = "absolute";
		loaderText.innerHTML = this.loadingText;
		loaderText.style.color = "#FF6600";
		loaderText.style.fontFamily = "Arial";
		loaderText.style.fontSize = "8px";
		loaderContainerDiv.appendChild(loaderText);
		domChartRoot.appendChild(loaderContainerDiv);
		// if (domChartRoot.id === "AI0_0_div") {
		// domChartRoot.style.display = "flex";
		// }
		return loaderContainerDiv;
	}
	public removeChartLoader(domChartRoot: HTMLDivElement, loaderElement: HTMLElement): void {
		// Remove loader after 2000ms timeout
		// setTimeout(() => domChartRoot.removeChild(loaderElement), 200000);
		domChartRoot.removeChild(loaderElement);
		// For instant removal once scichart has loaded, just call domChartRoot.removeChild(loaderElement) without the setTimeout
		// e.g.
		// domChartRoot.removeChild(loaderElement);
	}
}
