import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<any>(
        { time: "January", id: 1, name: "Rad Sidedrawer Issues", nav: "item", role: "Goalkeeper" },
        { time: "January February", id: 3, name: "Piqué", role: "Defender" },
        { time: "January March", id: 4, name: "I. Rakitic", role: "Midfielder" },
        { time: "January April", id: 5, name: "Sergio Denis Suáre Sergio Denis Sergio Denis Sergio Denis Sergio DenisSergio Denis", role: "Midfielder" },
        { time: "January May", id: 6, name: "Denis Suárez", role: "Midfielder" },
        { time: "January June June June", id: 7, name: "Arda", role: "Midfielder" },
        { time: "January ", id: 8, name: "A. Iniesta", role: "Midfielder" },
        { time: "January ", id: 9, name: "Suárez", role: "Forward" },
        { time: "January ", id: 10, name: "Messi", role: "Forward" },
        { time: "January ", id: 11, name: "Neymar", role: "Forward" },
        { time: "January ", id: 12, name: "Rafinha", role: "Midfielder" },
        { time: "January ", id: 13, name: "Cillessen", role: "Goalkeeper" },
        { time: "January ", id: 14, name: "Mascherano", role: "Defender" },
        { time: "January ", id: 17, name: "Paco Alcácer", role: "Forward" },
        { time: "January ", id: 18, name: "Jordi Alba", role: "Defender" },
        { time: "January ", id: 19, name: "Digne", role: "Defender" },
        { time: "January ", id: 20, name: "Sergi Roberto", role: "Midfielder" },
        { time: "January ", id: 21, name: "André Gomes", role: "Midfielder" },
        { time: "January ", id: 22, name: "Aleix Vidal", role: "Midfielder" },
        { time: "January ", id: 23, name: "Umtiti", role: "Defender" },
        { time: "January ", id: 24, name: "Mathieu", role: "Defender" },
        { time: "January ", id: 25, name: "Masip", role: "Goalkeeper" },
        { footer: true },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
