export const days = document.getElementById("days") as HTMLInputElement;
export const growthrate = document.getElementById("growthrate") as HTMLInputElement;
export const start = document.getElementById("start") as HTMLInputElement;
export const result = document.getElementById("result") as HTMLElement;
const daysView = document.getElementById("daysView") as HTMLInputElement;
export const chartCanvas = document.getElementById('chart') as HTMLCanvasElement;
export function updateDaysView() {
    daysView.innerHTML = days.value; // Tage-Input dynamisieren
}
