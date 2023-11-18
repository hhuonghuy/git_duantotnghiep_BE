export const getOffset = (currentPage = 1, listPerPage) => {
	return (currentPage - 1) * [listPerPage];
};

export const emptyOrRows = (rows) => {
	if (!rows) {
		return [];
	}
	return rows;
};
