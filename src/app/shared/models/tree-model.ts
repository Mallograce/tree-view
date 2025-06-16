export type TreeNode = {
	id: number,
	title: string,
	is_deleted: boolean,
	deleted_at?: unknown,
	children: TreeNode[],
}