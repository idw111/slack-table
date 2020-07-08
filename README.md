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
	dataSource: ['-', { first: 'first item', second: 'second item', third: 'third item' }, { first: 'first item', second: 'second item', third: 'third item' }],
});
```

![slack](https://user-images.githubusercontent.com/445464/72701147-aacbc880-3b91-11ea-81c5-d75c5c476f31.png)
