import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { RouterExtensions } from "nativescript-angular/router";

registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
  items: Item[];

  // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
  // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
  constructor(
    private itemService: ItemService,
    private _router: RouterExtensions
  ) { }

  ngOnInit(): void {
    setTimeout(_ => {

      this.items = this.itemService.getItems();
      alert('When the template in listview has a label where textWrap=true and one or more of the labels in the lisview wraps, the height of the border behaves unexpectedly. Reproduce by scrolling the listview a bunch, notice the 1pt high StackLayout will overlay the entire cell randomly.')
    }, 1000)
  }

  refreshList(args) {
    var pullRefresh = args.object;
    setTimeout(function () {
      pullRefresh.refreshing = false;
    }, 1000);
  }
  public articleTemplateSelector = (item, index: number, items: any) => {
    if (item.footer) {
        return 'footer';
    } else if (item.header) {
        return 'header';
    } else {
        return 'item';
    }
  }
  
  go(item) {
    console.log(item.nav);
    if (item.nav) {
      this._router.navigate(['./' + item.nav])
    }
  }
}

