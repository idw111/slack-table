# slack-table

> generates slack markdown text which looks like table

## install

```bash
npm install slack-table
```

## usage

```javascript
import slackTable from 'slack-table';

const table = slackTable({
	title: 'Table',
	columns: [
		{ width: 20, title: 'title1', dataIndex: 'first' },
		{ width: 10, title: 'title2', dataIndex: 'second', align: 'right' },
		{ width: 10, title: 'title3', dataIndex: 'third', align: 'right' },
	],
	dataSource: [
		'-',
		{ first: 'first item', second: 'second item', third: 'third item' },
		{ first: 'first item', second: 'second item', third: 'third item' },
		{ first: 'first item', second: 'second item', third: 'third item' },
	],
});
```

When I build a slack slash command, I wanted to format the command results look like table. However, I could not find a simple way to do that, and decided to build a table-like view using code. Use the result string in slack markdown text, and you can get the following view.

Warning: CJK characters will break the table layout

![slack-table](https://user-images.githubusercontent.com/445464/86876965-d2ebbb80-c120-11ea-87ea-fe98f01c77c7.png)
