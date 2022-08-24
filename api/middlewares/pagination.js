module.exports = {
    
    getPaginationVar: ({page = 1, size = 5, totalCount}) => {
        page = parseInt(page);
        size = parseInt(size);
        const totalPages = Math.ceil(totalCount / size);
        if(page < 1){
            page = 1;
        }
        if(page > totalPages){
            page = totalPages
        }
        const skip = (page - 1) * size;
        if( skip < 0){
            skip = 0;
        }
        return {
            skip,
            limit: size,
            totalPages
        }
        
    }
}