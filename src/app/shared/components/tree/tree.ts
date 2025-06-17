import { ChangeDetectionStrategy, Component, inject, input, TemplateRef } from '@angular/core';
import { TreeNode } from '../../models/tree-model';
import { NgTemplateOutlet } from '@angular/common';
import { TreeStateService } from './services/tree-state-service';

@Component({
  selector: 'app-tree',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './tree.html',
  styleUrl: './tree.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tree {
  protected treeStateService = inject(TreeStateService);

  public nodes = input<TreeNode[]>();
  public nodeTemplate = input<TemplateRef<any>>();
}
