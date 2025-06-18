import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable()
export class TreeStateService {
  private nodeStates = new Map<number, WritableSignal<boolean>>();

  expanded(nodeId: number): WritableSignal<boolean> {
    if (!this.nodeStates.has(nodeId)) {
      this.nodeStates.set(nodeId, signal(false));
    }
    return this.nodeStates.get(nodeId)!;
  }
}
