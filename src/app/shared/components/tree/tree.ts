import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  Optional,
  SkipSelf,
  TemplateRef,
} from '@angular/core';
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
  providers: [{
    provide: TreeStateService,
    /**
     * Если у родителя уже есть сервис => берём его,
     * если нет, то создаем новый
     */
    deps: [
      [
        new Optional(),
        new SkipSelf(),
        TreeStateService
      ]
    ],
    useFactory: (parent?: TreeStateService) =>
      parent ?? new TreeStateService()
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tree {
  private treeStateService = inject(TreeStateService);

  public readonly nodes = input.required<TreeNode[]>();
  public readonly nodeTemplate = input.required<TemplateRef<unknown>>();
  public readonly idLogging = input<boolean>(false);
  public readonly expandListAll = input<boolean>(false);

  protected logNodeId(nodeId: number) {
    console.info(`Нажали на узел ID <${nodeId}>`);
  }

  protected toggleState(nodeId: number): void {
    this.treeStateService.expanded(nodeId).update(v => !v);
  }

  protected expandAll(node: TreeNode): void {
    this.treeStateService.expanded(node.id).set(true);
    node.children.forEach(c => this.expandAll(c));
  }

  protected getExpanded(nodeId: number) {
    return this.treeStateService.expanded(nodeId)();
  }
}
