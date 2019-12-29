import { Component, ViewChild, AfterViewInit, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { merge, Observable, of as observableOf } from "rxjs";
import { catchError, map, startWith, switchMap, delay } from "rxjs/operators";

import { ClientsService } from "../clients.service";

@Component({
  selector: "app-clientlist",
  templateUrl: "./clientlist.component.html",
  styleUrls: ["./clientlist.component.scss"]
})
export class ClientlistComponent implements OnInit {
  constructor(private clientsService: ClientsService) {}

  data;
  isLoadingResults;
  isRateLimitReached;
  sortedData;
  resultsLength;

  getContacts(): void {
    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    // merge(this.sort.sortChange, this.paginator.page)
    merge()
      .pipe(
        startWith({}),
        delay(0),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.clientsService
            .getClients
            // this.sort.active,
            // this.sort.direction,
            // this.paginator.pageIndex
            ();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          data["forEach"](contact => {
            // contact.firstName = capitalize(contact.firstName);
            // contact.lastName = capitalize(contact.lastName);
            // contact.website = contact.website ? contact.website : "";
          });
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      )
      .subscribe(data => {
        this.data = data;
        this.sortedData = data[`slice`]();
        this.resultsLength = this.data.length;
      });
  }

  ngOnInit() {
    this.getContacts();
  }
}
