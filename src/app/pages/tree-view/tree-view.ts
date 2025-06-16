import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TreeService } from './services/tree-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tree-view',
  imports: [],
  templateUrl: './tree-view.html',
  styleUrl: './tree-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeView {
  private treeService = inject(TreeService);
  private treeNodes$ = this.treeService.getTreeNodes();

  protected tree = toSignal(this.treeNodes$, { initialValue: [] });
}
