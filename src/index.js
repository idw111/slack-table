const padLeft = (text = '', maxLength = 13) => (text.length < maxLength ? new Array(maxLength - text.length).fill(' ').join('') + text : text.substr(0, maxLength));

const padRight = (text = '', maxLength = 13) => (text.length < maxLength ? text + new Array(maxLength - text.length).fill(' ').join('') : text.substr(text.length - maxLength));

const fillDash = (length) => new Array(length).fill('-').join('');

const getLines = (columns) => fillDash(columns.reduce((sum, col) => (col.width ?? 10) + sum, 0));

const getCol = ({ align = 'left', width = 10, dataIndex, prefix = '', suffix = '' }, row = {}) => {
	const pad = align === 'right' ? padLeft : padRight;
	return pad(prefix + row[dataIndex] + suffix, width);
};

const getRow = (columns, row) => {
	if (row === '-') return getLines(columns);
	return columns.map((column) => getCol(column, row)).join('');
};

const getHeaderCol = ({ align = 'left', width = 10, title }) => {
	const pad = align === 'right' ? padLeft : padRight;
	return pad(title, width);
};

const getHeaderRow = (columns) => {
	return columns.map((column) => getHeaderCol(column)).join('');
};

const slackTable = ({ title = '', columns = [], dataSource = [] }) => {
	return `*${title}*\n` + '```' + [getHeaderRow(columns), ...dataSource.map((row) => getRow(columns, row))].join('\n') + '```';
};

export default slackTable;
