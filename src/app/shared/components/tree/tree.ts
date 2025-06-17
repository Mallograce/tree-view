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
  providers: [TreeStateService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tree {
  protected treeStateService = inject(TreeStateService, { self: true });

  public readonly nodes = input.required<TreeNode[]>();
  public readonly nodeTemplate = input.required<TemplateRef<any>>();
  public readonly idLogging = input<boolean>(false);
  public readonly expandListAll = input<boolean>(false);

  public logNodeId(id: number) {
    console.info(`Нажали на узел ID <${id}>`);
  }
}
