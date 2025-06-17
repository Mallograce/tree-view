import { Injectable, signal, WritableSignal } from '@angular/core';
import { TreeNode } from '../../../models/tree-model';

@Injectable({
  providedIn: 'root',
})
export class TreeStateService {
  private nodeStates = new Map<number, TreeNodeState>();

  public getState(nodeId: number): TreeNodeState {
    if (!this.nodeStates.has(nodeId)) {
      this.nodeStates.set(nodeId, { expanded: signal(false) });
    }
    return this.nodeStates.get(nodeId)!;
  }

  public toggleState(nodeId: number): void {
    const state = this.getState(nodeId);
    state.expanded.set(!state.expanded());
  }

  public expandAll(node: TreeNode): void {
    this.getState(node.id).expanded.set(true);
    node.children.forEach(child => this.expandAll(child));
  }
}

type TreeNodeState = {
  expanded: WritableSignal<boolean>;
}
