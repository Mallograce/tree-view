import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TreeNode } from '../../models/tree-model';

@Component({
  selector: 'app-tree',
  imports: [],
  templateUrl: './tree.html',
  styleUrl: './tree.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tree {
  protected nodes = input<TreeNode[]>();

}
