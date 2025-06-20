import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TreeNodes } from '../../../shared/models/tree-mock';
import { TreeNode } from '../../../shared/models/tree-model';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  private data: TreeNode[] = TreeNodes;

  getTreeNodes(): Observable<TreeNode[]> {
    return of<TreeNode[]>(this.data);
  }
}
