import { Routes } from '@angular/router';
import { TreeView } from './pages/tree-view/tree-view';

export const routes: Routes = [
	{ path: 'tree', component: TreeView },
	{ path: '', redirectTo: '/tree', pathMatch: 'full' },
	{ path: '**', loadComponent: () =>
			import('../app/pages/not-found/not-found')
				.then(component => component.NotFound)
	}
];