import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TreeService } from './services/tree-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Tree } from '../../shared/components/tree/tree';
import { TreeStateService } from '../../shared/components/tree/services/tree-state-service';

@Component({
  selector: 'app-tree-view',
  imports: [
    Tree
  ],
  templateUrl: './tree-view.html',
  styleUrl: './tree-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeView {
  private treeService = inject(TreeService);
  private treeNodes$ = this.treeService.getTreeNodes();

  protected treeStateService = inject(TreeStateService);
  protected treeNodes = toSignal(this.treeNodes$, { initialValue: [] });

  logNodeId(id: number) {
    console.info(`Нажали на узел ID <${id}>`);
  }
}
