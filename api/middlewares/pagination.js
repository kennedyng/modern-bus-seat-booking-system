const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();

const paginateData = ( {totalQuery, dataQuery,  intialDataSize, model}) => {
    
    return async ( req, res, next ) => {
        let page = parseInt(req.query.page) || 1;
        let size = parseInt(req.query.size) || intialDataSize;
        const skip = (page - 1) * size;
        if( skip < 0){
            skip = 0;
        }
       await prisma[model].findMany(totalQuery(req))
       .then( 
           async totalItems =>  await prisma[model].findMany({
               ...dataQuery(req),
               skip: skip,
               take: size
           })
           .then( data => {
                const totalPages = Math.ceil(totalItems.length / size);
                res.status(200).json({totalPages, data})
                next();
           })
           .catch( error =>  {
               console.log(error)
               res.status(500).json(error)
            })
       )
       .catch( error =>  {
        console.log(error)
        res.status(500).json(error)
     })
    }

}

const paginatedData  = (config ) => {
    return async (req, res, next ) => {
        let page = parseInt(req.query.page) || 1;
        let size = parseInt(req.query.size) || parseInt(config.intialSize);
        const skip = (page - 1) * size;
        if( skip < 0){
            skip = 0;
        }
        await prisma[config.model].findMany(config.totalCondition())
        .then(
           async totalItems => {
                await prisma[config.model].findMany({
                    ...config.dataCondition(),
                    skip: skip,
                    take: size
                })
                .then( data => {
                    const totalPages = Math.ceil(totalItems.length / size);
                    req.pagination = {data, totalPages};
                    
                    next()
                })
                .catch( error => res.status(500).json(error))
            }
        )
        .catch(
            error => res.status(500).json(error)
        )
    }
   
}



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
        
    },
    paginatedData,
    paginateData
    
    
}