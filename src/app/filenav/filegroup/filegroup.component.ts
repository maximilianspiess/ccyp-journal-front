import {Component, Input} from '@angular/core';
import {FilegroupService} from "../../filegroup.service";
import {Observable} from "rxjs";
import {File} from "../file.model";
import {Group} from "../group.model";

@Component({
  selector: 'app-filegroup',
  templateUrl: './filegroup.component.html',
  styleUrls: ['./filegroup.component.sass']
})
export class FilegroupComponent {

  @Input() group;
  files: File[] = [];
  currentFile: File;

  constructor(private provider: FilegroupService) {}

  ngOnInit(): void {
    this.provider.getFilesInGroup(this.group.id).subscribe(response => {
      response.forEach(file => this.files.push(file))
    })
  }

  getFileById(fileId: string): void {
    this.provider.getFileById(fileId).subscribe(response => {
      this.currentFile = response;
    });
    console.log(this.currentFile);
  }

  addFileToGroup(groupId: string): void {
    this.provider.addFileToGroup(groupId);
  }

  deleteFileById(fileId: string): void {
    this.provider.deleteFileById(fileId);
  }

  deleteGroupById(groupId: string): void {
    this.provider.deleteGroupById(groupId);
  }

}
