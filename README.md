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
	title: 'Marketing Summary',
	columns: [
		{ width: 20, title: 'Campaign', dataIndex: 'campaign' },
		{ width: 10, title: 'Install', dataIndex: 'install', align: 'right' },
		{ width: 12, title: 'Cost', dataIndex: 'cost', align: 'right' },
	],
	dataSource: [
		'-',
		{ campaign: 'Google CPC', install: '12', cost: '$ 400' },
		{ campaign: 'Facebook CPC', install: '3', cost: '$ 60' },
		{ campaign: 'Youtube Video', install: '131', cost: '$ 1,230' },
	],
});
```

When I build a slack slash command, I wanted to format the command results look like table. However, I could not find a simple way to do that, and decided to build a table-like view using code. Use the result string in slack markdown text, and you can get the following view.

Warning: CJK characters will break the table layout

![slack-table](https://user-images.githubusercontent.com/445464/86891098-3eda1e00-c139-11ea-8a99-96cecf0da15d.png)
